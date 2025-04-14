---
title: bufunfa
description: Conteúdo e Prática de Aprendizado com o sistema Bufunfa
pubDate: Mar 17 2025
tags:
  - Pitch
  - Shape-up
---

## Problema

- O conceito mais básico de um banco é de uma conta. Ela é a base para todos as demais: transações, empréstimos, crédito, etc.
- **No Bufunfa, tomamos inspirações de conceitos de bancos reais e implementamos estes conceitos de maneira simplificada e lúdica.**  

Logo:

- Precisamos definir juntos o que é uma conta, quais os seus atributos, como ela é armazenada, como seu saldo é definido, e como ela poderá ser utilizada para transferir quantias de/para outras contas. 
- 🆕 O registro das transações é essencial. O saldo deve ser resultado da soma/subtração das transações realizadas pela conta
- 🆕 A solução deve incluir algum direcionamento de como o problema será solucionado utilizando [banco de dados estruturado](https://github.com/cento-software/programa-estagio-soraya/issues/11)

## Solução

A solução para tanto é definir objetivamente cada termo relacionado à Conta.


<div align=center><img src="https://github.com/user-attachments/assets/bbe6077f-e536-4368-bf96-65c2e652bdfd"></div><br>


- **Conta**: a conta bancária é um cadastro único do usuário (pessoa física, jurídica, ou outro sistema) que utiliza os serviços de determinado banco criado no Bufunfa. A conta é o que permite operações financeiras ao usuário.
- **Saldo**: o saldo é o valor atual disponível na conta, resultado das transações efetuadas, que pode ser tanto negativo, indicando dívida, quanto positivo.
- **Proprietário**: identificação do usuário, como nome, telefone, entre outros dados.
-  **Armazenamento**: o armazenamento é o banco de dados do Bufunfa, que pode ser um servidor próprio ou em nuvem. Ele precisa ser apoiado por um SGBD robusto, como o PostgreSQL, por exemplo, assegurando as propriedades ACID. A princípio, o banco estruturado atende as necessidades do Bufunfa, sendo manipulado e definido pela linguagem SQL.
 - **Transferir**: é uma funcionalidade que a conta permite. Quando uma conta transfere capital para outra conta, ocorre um débito, isto é, uma operação de subtração do valor atual absoluto na conta origem. Já na conta destino ocorre uma operação de soma do mesmo valor absoluto ao atual.
- **Visualizar histórico**: é um relatório que exibe todas as transações efetuadas pela conta, seja recebimento ou débito, e os saldos decorrentes delas, muito semelhante ao extrato de uma conta bancária real.

### Escopo

É importante que a definição de tais conceitos seja clara, para que os desenvolvedores compreendam o que devem implementar, e o sistema esteja de acordo com o desejo do cliente (o requisitante do produto).

### Riscos

- Este é um conceito básico do Bufunfa. Por isso, precisa ser bem modelado para garantir que os próximos conceitos que serão introduzidos tenham uma fundação sólida.