PRAGMA foreign_keys = ON;

CREATE TABLE cliente (
    codigo INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    usuario TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE conta (
    codigo INTEGER PRIMARY KEY,
    dono_cliente_codigo INTEGER NOT NULL,
    tipo TEXT NOT NULL DEFAULT 'debito' CHECK (tipo in ('debito', 'credito')),

    FOREIGN KEY (dono_cliente_codigo) REFERENCES cliente (codigo)
);

CREATE TABLE transacao (
    codigo INTEGER PRIMARY KEY,
    descricao TEXT,
    origem_conta_codigo INTEGER NOT NULL, 
    destino_conta_codigo INTEGER NOT NULL,
    quantia REAL NOT NULL,
    criada_em DATETIME DEFAULT(STRFTIME('%Y-%m-%d %H:%M:%f', 'NOW')),
    
    FOREIGN KEY (origem_conta_codigo) REFERENCES conta (codigo),
    FOREIGN KEY (destino_conta_codigo) REFERENCES conta (codigo)
);

CREATE VIEW conta_view AS 
    WITH conta_entradas_saidas AS (
        SELECT 
            conta.codigo,
            conta.dono_cliente_codigo,
            conta.tipo,
            COALESCE(SUM(CASE WHEN transacao.destino_conta_codigo = conta.codigo THEN transacao.quantia ELSE 0 END), 0) AS entradas,
            COALESCE(SUM(CASE WHEN transacao.origem_conta_codigo = conta.codigo THEN transacao.quantia ELSE 0 END), 0) AS saidas
        FROM 
            conta
        LEFT JOIN 
            transacao ON (conta.codigo = transacao.destino_conta_codigo OR conta.codigo = transacao.origem_conta_codigo)
        GROUP BY 
            conta.codigo, conta.dono_cliente_codigo
    ) SELECT 
        conta_entradas_saidas.*,
        entradas - saidas AS saldo
    FROM 
        conta_entradas_saidas;


CREATE TRIGGER transacao_insert
BEFORE INSERT ON transacao
BEGIN 
    SELECT 
        CASE 
            WHEN (SELECT tipo = 'debito' AND saldo - NEW.quantia <= 0 FROM conta_view WHERE conta_view.codigo = NEW.origem_conta_codigo)
            THEN RAISE (ABORT, 'Saldo insuficiente')
    END;
END;

-------------- Seed -------------------

INSERT INTO cliente (codigo, nome, usuario, senha) VALUES (1, 'João', 'joao', '123456'), (2, 'Maria', 'maria', '123456');
INSERT INTO conta (codigo, dono_cliente_codigo, tipo) VALUES (1, 1, 'debito'), (2, 1, 'credito'), (3, 2, 'debito');
