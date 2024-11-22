import { type Context, Hono } from 'hono'
import type { FC } from 'hono/jsx'
import type { App } from "./app.ts";
import type { Cliente, Conta } from "./core.ts";
import {
    getSignedCookie,
    setSignedCookie,
    deleteCookie,
} from 'hono/cookie'

const BaseLayout: FC = (props) => {
    return (<html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Bufunfa</title>
        </head>
        <body>
            {props.children}
        </body>
    </html>)
}

const LoginView: FC = () => {
    return (
        <form method="post">
            <input type="text" name="usuario" placeholder="Usuário" />
            <input type="password" name="senha" placeholder="Senha" />
            <button type="submit">Entrar</button>
        </form>)
}

const ErrorView: FC<{ error: ReadableError | Error }> = (props) => {
    const { error } = props

    const name = error instanceof ReadableError ? error.readableName : error.name

    return (<article>
        <h3>{name}</h3>
        <p>{error.message}</p>
    </article>)
}


const ContasView: FC<{ cliente: Cliente, contas: Array<Conta & { saldo: number }> }> = (props) => {
    return (
        <main>
            <header>Olá, {props.cliente.nome}. <a href="/v2/auth/logout">Fazer logout</a></header>

            <section>
                <header>
                    <h3>Contas</h3>
                </header>

                {props.contas.map(conta => <article key={conta.codigo}>
                    <header>Conta #{conta.codigo}</header>
                    <ul>
                        <li>Tipo: {conta.tipo}</li>
                        <li>Saldo: {Intl.NumberFormat("pt-BR", { currency: "BRL", style: "currency" }).format(conta.saldo)}</li>
                    </ul>
                </article>)}
            </section>

            <section>
                <header>
                    <h3>Nova transação</h3>
                </header>
                <form method="post" action="/v2/transacoes">
                    <select name="origem_conta_codigo">
                        {props.contas.map(conta => <option key={conta.codigo} value={conta.codigo}>{conta.codigo}</option>)}
                    </select>
                    <input name="destino_conta_codigo" type="text" placeholder="Conta destino" />
                    <input name="quantia" type="number" placeholder="Quantia" />

                    <button type="submit">Enviar</button>
                </form>
            </section>
        </main>)
}


abstract class ReadableError extends Error {
    abstract readableName: string
}

class CredenciaisInvalidasError extends ReadableError {
    override name = "credenciais_invalidas"
    override readableName = "Credenciais inválidas"

    constructor() {
        super("Usuário e/ou senha inválidos")
    }
}

class DadosInvalidosError extends ReadableError {
    override name = "dados_invalidos"
    override readableName = "Dados inválidos"

    constructor() {
        super("Os dados fornecidos para a requisição não são válidos")
    }
}

export const HttpApp = (deps: { app: App }) => {
    const getCliente = async (c: Context): Promise<Cliente | Response> => {
        const usuarioCookie = await getSignedCookie(c, "secret", "usuario")

        if (!usuarioCookie) {
            return c.redirect("/v2/auth/login")
        }

        const cliente = deps.app['clientes.get']({ usuario: usuarioCookie })

        if (!cliente) {
            return c.redirect("/v2/auth/logout")
        }


        return cliente
    }

    const v1App = new Hono()
        .get("/contas", async c => {
            const clienteResult = await getCliente(c)

            if (clienteResult instanceof Response) {
                return clienteResult
            }

            const contas = deps.app["contas.list"]({ dono_cliente_codigo: clienteResult.codigo, fromView: false })

            return c.html(<BaseLayout><ContasView cliente={clienteResult} contas={contas} /></BaseLayout>)
        })

    const v2App = new Hono()
        .get("/contas", async c => {
            const clienteResult = await getCliente(c)

            if (clienteResult instanceof Response) {
                return clienteResult
            }

            const contas = deps.app["contas.list"]({ dono_cliente_codigo: clienteResult.codigo })

            return c.html(<BaseLayout><ContasView cliente={clienteResult} contas={contas} /></BaseLayout>)
        })
        .post("/transacoes", async c => {
            const clienteResult = await getCliente(c)

            if (clienteResult instanceof Response) {
                return clienteResult
            }

            const body = await c.req.formData()

            const data = {
                descricao: body.get("descricao")?.toString() ?? null,
                origem_conta_codigo: Number(body.get("origem_conta_codigo")),
                destino_conta_codigo: Number(body.get("destino_conta_codigo")),
                quantia: Number(body.get("quantia")),
            }


            if (Number.isNaN(data.origem_conta_codigo) || Number.isNaN(data.destino_conta_codigo) || Number.isNaN(data.quantia)) {
                throw new DadosInvalidosError()
            }

            deps.app['transacoes.create'](data)

            return c.redirect("/v2/contas")

        })
        .get("/auth/login", c => c.html(<BaseLayout><LoginView /></BaseLayout>))
        .post("/auth/login", async c => {
            const body = await c.req.formData()

            const query = {
                usuario: body.get("usuario"),
                senha: body.get("senha")
            }

            if (typeof query.usuario !== "string" || typeof query.senha !== "string") {
                throw new CredenciaisInvalidasError()
            }

            const cliente = deps.app["clientes.get"]({ usuario: query.usuario })

            if (!cliente) {
                throw new CredenciaisInvalidasError()
            }

            if (cliente.senha !== query.senha) {
                throw new CredenciaisInvalidasError()
            }

            await setSignedCookie(c, "usuario", cliente.usuario, "secret")

            return c.redirect("/v2/contas")
        })
        .get("/auth/logout", async c => {
            await deleteCookie(c, "usuario")

            return c.redirect("/v2/auth/login")
        })

    const app = new Hono().route("/v1", v1App).route("/v2", v2App).onError((err, c) => {
        return c.html(<BaseLayout><ErrorView error={err} /></BaseLayout>)
    })

    return { fetch: app.fetch }
}

