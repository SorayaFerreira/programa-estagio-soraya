import type { ContaRepository } from "./data.ts"

export interface Conta {
    codigo: number
    dono_cliente_codigo: Cliente['codigo']
    tipo: 'credito' | 'debito'
}

export interface Cliente {
    codigo: number
    nome: string
    usuario: string
    senha: string
}

export interface Transacao {
    codigo: number
    descricao: string | null
    origem_conta_codigo: Conta['codigo']
    destino_conta_codigo: Conta['codigo']
    quantia: number
    criada_em: Date
}

export type CalculoSaldo = ReturnType<typeof CalculoSaldo>

export const CalculoSaldo = (deps: { contaRepository: ContaRepository }) => (params: Pick<Conta, 'codigo'>) => {
    const transacoesOrigem = deps.contaRepository.listTransacoes({ origem_conta_codigo: params.codigo })
    const transacoesDestino = deps.contaRepository.listTransacoes({ destino_conta_codigo: params.codigo })

    const entrada = transacoesDestino.reduce((soma, transacao) => soma + transacao.quantia, 0)
    const saida = transacoesOrigem.reduce((soma, transacao) => soma + transacao.quantia, 0)

    const saldo = entrada - saida

    return saldo
}


