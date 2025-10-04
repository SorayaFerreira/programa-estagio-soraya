import type { Cliente, Conta, Transacao } from "./core.ts"
import type { Database } from "@db/sqlite";

export interface ContaRepository {
    list(query: Pick<Conta, 'dono_cliente_codigo'>): Conta[]
    listWithSaldo(query: Pick<Conta, 'dono_cliente_codigo'>): Array<Conta & { saldo: number }>

    getCliente(query: Pick<Cliente, 'usuario'> | Pick<Cliente, 'codigo'>): Cliente | undefined

    listTransacoes(query: Partial<Pick<Transacao, 'destino_conta_codigo' | 'origem_conta_codigo'>>): Transacao[],
    createTransacao(data: Pick<Transacao, 'descricao' | 'destino_conta_codigo' | 'origem_conta_codigo' | 'quantia'>): Transacao
}

export const SqliteContaRepository = (deps: { db: Database }): ContaRepository => {
    const { db } = deps

    const listContaStmt = db.prepare('SELECT codigo, dono_cliente_codigo, tipo FROM conta WHERE dono_cliente_codigo = :dono_cliente_codigo')
    const listWithSaldoFromViewStmt = db.prepare('SELECT codigo, dono_cliente_codigo, tipo, saldo FROM conta_view WHERE dono_cliente_codigo = :dono_cliente_codigo')

    const getClienteStmt = db.prepare('SELECT codigo, nome, usuario, senha FROM cliente WHERE (:codigo IS NOT NULL AND codigo = :codigo) OR (:usuario IS NOT NULL AND usuario = :usuario)')

    const listTransacoesStmt = db.prepare('SELECT codigo, descricao, origem_conta_codigo, destino_conta_codigo, quantia, criada_em FROM transacao WHERE (:destino_conta_codigo IS NULL OR destino_conta_codigo = :destino_conta_codigo) AND (:origem_conta_codigo IS NULL OR origem_conta_codigo = :origem_conta_codigo)')
    const createTransacaoStmt = db.prepare('INSERT INTO transacao (descricao, origem_conta_codigo, destino_conta_codigo, quantia) VALUES (:descricao, :origem_conta_codigo, :destino_conta_codigo, :quantia) RETURNING *')

    const listTransacoes: ContaRepository['listTransacoes'] = (query) => listTransacoesStmt.all<Transacao>(query)

    const list: ContaRepository['list'] = (query) => listContaStmt.all<Conta>(query)

    return {
        list,
        listTransacoes,

        getCliente: (query) => getClienteStmt.get<Cliente>(query),
        createTransacao: (data) => createTransacaoStmt.get<Transacao>(data)!,
        listWithSaldo: (query) => listWithSaldoFromViewStmt.all<Conta & { saldo: number }>(query),
    }
}
