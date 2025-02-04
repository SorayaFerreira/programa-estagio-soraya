---
title: backend_javascript
description: JavaScript no Backend
pubDate: Feb 02 2025
tags:
  - runtimes
  - Node.js
  - Bun
  - Deno
  - npm
  - pnpm
---
# Runtimes 🏃‍♀️🕐
Um *Runtime* pode ter conceitos diferentes, de acordo com o contexto, todavia aqui, *runtime* é um ambiente de desenvolvimento, uma infraestrutura, abrangendo software e hardware, capaz de executar um código fonte em tempo real. O runtime carrega aplicações requisitadas para a execução do programa em uma plataforma, que possibilita isso de maneira independente do sistema operacional.

Sua importância está na necessidade de providenciar uma estratégia para adaptar um mesmo código em vários sistemas operacionais apesar de suas diferenças. Além disso, runtimes podem facilitar a execução, fornecendo bibliotecas e funcionalidades adicionais.

Há alguns tipos de runtime, como o JRE (Java Runtime Environment), para aplicações Java, o CLR (Common Language Runtime), para aplicações .NET, e o Node.js, para aplicações JavaScript.

A maioria das linguagens de programação precisa de um ambiente runtime, entratanto existem runtimes de alto nível e de baixo nível. Linguagens com C e C++ não demandam um runtime de alto nível para serem executadas, pois o arquivo binário gerado pelo compilador pode ser executado diretamente pelo sistema operacional. 

## Comparação de Runtimes para JS

![Logos de Node.js, Deno e bun](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2a5e901c5d64b37819067def874747c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

Para códigos em JavaScript, podemos citar como exeplos três runtimes. Eles executam código JS fora do navegador, utilizado principalmente quando aplicado no server-side:
- 🟩 **Node.js**: foi lançado em 2009, é o mais utilizado e mais antigo runtime open-source para JavaScript. Dentre os três aqui citados, é o que tem menor performance, porém maior suporte, comunidade e opções de implantação. Ele é suportado por maior parte dos servidores em nuvem.  
- 🐱‍🐉 [**Deno**](https://deno.com/): surgiu com o fito de resolver algumas questões identificadas no Node.js. Oferece suporte para carregamento de dependências via URLs e TypeScript integrado. Entre os três, possui maior segurança e vquantidade de ferramentas. No entanto, não disponibiliza armazenamento integrado. Nessa linha, é importante mencionar que ele é ótimo para o contexto do estágio porque sua configuração para uso é rápida e fácil, o que é ideal para um desenvolvedor iniciante.
-  🧅 **Bun**: surgiu em 2021, sendo um runtime que foca na experiência do programador e na performance. O Bun se destaca por sua performance, armazenamento embutido com SQLite e interoperabilidade – permite comunicação entre diferentes sistemas. Sua aspecto negativo é que ainda não possuir opções de implantação.

-----------------
## Mais sobre o Deno ➕

- Para criar timers para funções serem executadas em outro momento, com javascript. Neste exemplo, o console mostra a mensagem após 1000 milisegundos. `setTimeout(() => console.log("Hello, World!"), 1000);`. Também é possível criar intervalos para um função ser repetida a cada período de tempo: `setInterval(() => console.log("Hey!"), 1000);`.

- Existe a possibilidade de mostrar cores! Neste exemplo, a mensagem aparece vermelha: `console.log("%cHello World", "color: red");`. Para mudar a cor do background no terminal: `console.log("%cHello World", "background-color: blue");`.

- É simples conectar o projeto à OpenAI e interagir com a inteligência artificial. [Veja aqui](https://docs.deno.com/examples/openai-chat-completion/).

- Para fazer um servidor HTTP que mostra `Hello world`. Rode o comando `deno run --allow-net https://docs.deno.com/examples/http-server.ts` no terminal ou:
 
 ```typescript
    function handler(_req: Request): Response {
        return new Response("Hello, World!");
    }

    Deno.serve(handler);
 ```

- Para fazer uma requisição para um servidor HTTP: teste no terminal `deno run --allow-net https://docs.deno.com/examples/http-requests.ts`. Ou leia mais [aqui](https://docs.deno.com/examples/http-requests).

# Gerenciadores de Pacotes
São ferramentas que automatizam a gerência, instalação e compartilhamento de pacotes, que são as dependências de um projeto. Usar um gerenciador de pacotes garante que não haja arquivos conflitantes e ausênica de dependências.

## NPM (Node Package Manager)

O NPM é o gerenciador de pacotes padrão da runtime [Node.js](#comparação-de-runtimes-para-js). Ele é simples de usar, tem uma comunidade grande e ativa, porém tem grandes problemáticas, algumas delas são:
- Instalação sequencial de pacotes, o que aumenta o tempo de instalação;
- `npm audit`. [Nesta página](https://overreacted.io/npm-audit-broken-by-design/) uma pessoa muito frustrada explica porque isso é um problema.
- Erros graves que assustam, e que seriam possíveis apenas se um invasor tivesse total acesso a sua máquina.

<div align="center"><img alt="Heaviest Objects in the Universe" src="https://cdn.prod.website-files.com/60c918a8dfeab0375d2ee879/65d5bbd63fda604a3973c982_ewSxB795GWGySjZL6CYznbCr8z3nhhlb_m-CjaTMqBTBSeTqTzj6LuJcoSMgMKhPwjRN2PWljZHZT8rY1XncuaawJASh24IVzokfEpEentRQFTMUCHXJCiMgUv0pKjF8KB6ZYc05GicLgv9JO6PH_Q.png" width="400px"></div>

## PNPM (Performant Node Package Manager)
Este é outro gerenciador de pacotes também do ambiente `Node.js`, todavia é uma alternativa mais eficiente. Seu diferencial é não baixar bibliotecas completas, mas somente as diferenças entre versões. No console, ele mostra quantos pacotes e quanto espaço de disco foram economizados. 

Uma desvantagem que ele apresenta é não suportar todos os pacotes possíveis.