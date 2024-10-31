# Introdução a Bancos de Dados 🪑🎲

Bancos de dados compõem um conjunto de dados relacionados organizados em um sistema computacional e administrados por um Sistema de Gerenciamento de Banco de Dados (SGBD). Eles são utilizados para armazenar dados ou informações para serem consultados ou alterados posteriormente.

Bancos de dados podem ser:
- **Relacionais**: quando o conjunto de dados pode ser totalmente encaixados em uma tabela com linhas e colunas. 
- ou **Não relacionais**: quando os dados são flexíveis e não seguem um padrão, ou são muito grandes, de modo que organizá-los em linhas e colunas é ineficiente.

---
### Propriedades ACID 🧪

Uma `transação` é um conceito fundamental, definido como uma unidade de execução de programa que tem o propósito de buscar e atualizar diversos itens de dados. Para que uma transação seja efetuada, é necessário seguir todas as propriedades ACID, esclarecidas abaixo:
- **Atomicidade**: geralmente uma transação é composta de multiplas ações. Nessa perspectiva, a atomicidade garante que a transação será tratada como algo unitário, de modo que ou ela é completada, ou falha por completo. Em outras palavras, se qualquer detalhe da transação falhar – como falta de energia, por exemplo –, a transação é totalmente abortada e o estado do banco de dados permanece o mesmo.
- **Consistência**: garante que, após a transação, o banco de dados mudará de um estado válido para outro estado também válido, consistente. Isso ocorre a partir da definição de restrições, cascades, triggers, dentre outras regras.
- **Isolamento**: certifica que múltiplas transações poderão ocorrer simultaneamente, seguindo os outros três princípios ACID, sem que uma transação interfira na execução de outra.
- **Durabilidade**: é confirmar que, uma vez que a transação foi solicitada, mas não pode ser completada, todas as atualizações de outras transações não são perdidas.



---
### Exemplos de SGBDs

A seguir, são explorados alguns SGBDs selecionados, porém no site [dbdb.io](https://dbdb.io/) é possível obter maiores detalhes acerca de inúmeros SGBDs.
Para escolher um deles, é preciso levar em consideração aspectos como os tipos de dados que serão armazenados, a quantidade de recursos financeiros disponíveis para tanto, os objetivos com o banco de dados e a capacidade do SGBD.

#### PostgreSQL 🐘

É um banco de dados Objeto-Relacional open-source, desenvolvido pela University of California de Berkeley, na linguagem C de programação. 
Suporta *Materialized view*, *virtual view*, funções armazenadas, *triggers*, e foreign keys. Cobre operações a nível de transação, linguagem de definição de dados e de manipulação de dados, criação de funções e procedimentos. Todavia não oferece suporte a compilação de consultas. O postgreSQL é recomendado para aplicações empresariais com cenários rigorosos, tais como finanças, telecominicações e ERP (Planejamento de Recursos Empresariais). Seus benefícios incluem permitir escalabilidade, ter uma comunidade ativa, ser fácil de operar e de manter.

#### SQLite 📜✒

Mecanismo de Banco de Dados autocontido, integrado, completo, de domínio público e alta confiabilidade. O SQLite foi lançado nos anos 2000 por D. Richard Hipp quando ele estava trabalhando para a marinha dos Estados Unidos em um software de mísseis explosivos. Como o nome já sugere, este é um banco de dados mais simples que os demais, não sendo direcionado para dados empresariais, com alto volume e concorrência. Na realidade, ele pretende prover dados armazenados localmente para aplicações e dispositivos individuais, enfatizando economia, eficiência, autonomia e simplicidade.

#### MongoDB 🍃

O Mongo é um SGBD de código aberto orientado a documentos, armazenando objetos altamente tipados. Foi inicialmente desenvolvido pela empresa `10gen` em 2007, mas somente a partir de 2009 focou em mantê-lo.


#### Firestone(Firebase) e Supabase 🗃🔥

O Firestone o sistema que funciona por trás do framework Firebase da Google. Trata-se de um banco de dados NoSQL em nuvem.

#### Redis 🔴

Redis é uma sigla para "REmote DIctionary Server". Suporta o armazenamento de inúmeros tipos de estruturas de dados. O engenheiro de software Salvatore Sanfilippo é o criador e principal contribuidor do Redis.

---
### Diagrama Entidade Relacionamento

Utilizar mermaid.js

---
### Structured Query Language (SQL)
Linguagem de Consulta Estruturada