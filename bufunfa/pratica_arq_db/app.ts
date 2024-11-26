import type { CalculoSaldo } from "./core.ts";
import type { ContaRepository } from "./data.ts"

export type App = ReturnType<typeof App>

export const App = (deps: { contaRepository: ContaRepository, calculoSaldo: CalculoSaldo }) => {
    const { contaRepository, calculoSaldo } = deps

    return {
        "contas.list": (query: Parameters<ContaRepository['list']>[0] & { fromView?: boolean }) => {
            const { fromView = true, dono_cliente_codigo } = query

            
            if (fromView) {
                return contaRepository.listWithSaldo({ dono_cliente_codigo })
            }

            const contas = contaRepository.list({ dono_cliente_codigo })

            const contasWithSaldo = contas.map(conta => ({ ...conta, saldo: calculoSaldo({ codigo: conta.codigo }) }))

            return contasWithSaldo
        },

        "clientes.get": (query: Parameters<ContaRepository['getCliente']>[0]) => contaRepository.getCliente(query),

        "transacoes.create": (data: Parameters<ContaRepository['createTransacao']>[0]) => contaRepository.createTransacao(data),

        "transacoes.login": (data: Parameters<ContaRepository['createTransacao']>[0]) => contaRepository.createTransacao(data)
    }
}