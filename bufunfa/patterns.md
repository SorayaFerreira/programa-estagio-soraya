## Exercício Prático com o Bufunfa


### Padrão Arquitetural
Para estruturação desse sistema, foi escolhido o padrão Clean Archtecture, uma vez que, embora a aplicação seja simples, o foco didático dela está no server. Visto isso, é interessante compreender como tal arquitetura pode ser aplicada no contexto presente.


### Pontos de Destaque do Schema de BD

A seguir, pode-se visualizar o script em SQL que cria a view `conta_view`. Ela utiliza uma Common Table Expression, que gera uma tabela temporária para realizar um `select` grande do cálculo de valores creditados e debitados da conta. Após essa consulta, ocorre a subtração entre os totais e gera uma tabela com o saldo.

```sql
CREATE VIEW conta_view AS 
    WITH conta_entradas_saidas AS (
        SELECT 
            conta.codigo,
            conta.dono_cliente_codigo,
            conta.tipo,
            COALESCE(SUM(
                CASE 
                    WHEN transacao.destino_conta_codigo = conta.codigo THEN transacao.quantia 
                    ELSE 0 
                END), 0) AS entradas,
            COALESCE(SUM(
                CASE 
                    WHEN transacao.origem_conta_codigo = conta.codigo THEN transacao.quantia 
                    ELSE 0 
                END), 0) AS saidas
        FROM conta
        LEFT JOIN 
            transacao ON (conta.codigo = transacao.destino_conta_codigo OR conta.codigo = transacao.origem_conta_codigo)
        GROUP BY conta.codigo, conta.dono_cliente_codigo)
        SELECT 
        conta_entradas_saidas.*,
        entradas - saidas AS saldo
    FROM conta_entradas_saidas;
```

Abaixo sucede a criação do trigger, que gera uma exceção se houver a tentiva de se realizar uma transação quando o saldo é menor que o valor de débito. Ele garante a regra de negócio de que o saldo não pode ser negativo.

```sql
CREATE TRIGGER transacao_insert
BEFORE INSERT ON transacao
BEGIN 
    SELECT 
        CASE 
            WHEN (SELECT tipo = 'debito' AND saldo - NEW.quantia <= 0 FROM conta_view WHERE conta_view.codigo = NEW.origem_conta_codigo)
            THEN RAISE (ABORT, 'Saldo insuficiente')
    END;
END;
```