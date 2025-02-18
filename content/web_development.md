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

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff5733&height=120&section=header"/>

# Desenvolvimento para Web

# Sistemas de Autenticação
Autorização, às vezes identificada como `authz`, tem alta relação com a [Autorização](#sistemas-de-autorização), podendo ser confundida com ela. Entretanto, elas têm conceitos diferentes. Sumariamente, authz é responsável por _permissões_, enquanto que authn é responsável por _identidades_.

Autenticação, também chamada de `authn`, significa confirmar a identidade do cliente (pessoa ou do sistema externo) que está fazendo a requisição, com o intuito de não expor dados a alguém não autorizado. Tal confirmação pode ser feita com um ou mais parâmetros dentro de três opções diferentes: 
- algo que o cliente é, p. ex., a íris, a biometria, a voz;
- algo que o cliente possui, p. ex., um dispositivo que recebe um token; ou
- algo que o cliente sabe, p. ex., username e senha.

O Oauth 2.0 é um protocolo de autenticação amplamente utilizado. Basicamente, o usuário é direcionado para um serviço terceirizado para ser autenticado, e depois ele é redirecionado novamente para a aplicação. Então é disponibilizado um token para o usuário, o que permite a requisição de recursos em nome do usuário.

# Sistemas de Autorização

A Autorização determina o que um cliente autenticado pode acessar e executar. Um usuário de um banco online, por exemplo, após confirmar sua identidade, pode visualizar seu extrato, seu saldo entre outros dados, porém ele não tem permissão para visualizar os dados de outros usuários.

Os padrões de autorização mais conhecidos são RBAC, ReBAC e ABAC, a seguir, uma breve explicação de cada:
- RBAC (Role Based Access Control): a permissão está atrelada à função do cliente. A cada usuário é atribuída uma função que possui um conjunto de permissões. Desvantagens: pouco flexível, não comporta um número de funções muito grande. É muito utulizado por ser simples de entender e implementar.
- ReBAC (Relationship Based Access Control): é uma solução um pouco mais complexa. As permissões são atribuídas de acordo com as relações entre o usuário e `objeto`, ou entre `objeto` e `objeto`; desse modo, é melhor para lidar com estruturas hierárquicas. Para implementar, é preciso criar papéis para recursos específicos, dessa forma, o papel e sua função são relevantes apenas no contexto daquele recurso específico.

<div align="center"><img alt="Imagem de vasos de planta organizados" src="https://media.graphassets.com/2Rg1tPAQQMucRgp17e9W"></div>

- ABAC (Attribute Based Access Control): distribui permissões de acordo com avaliação de _atributos_ dos usuários, do ambiente e dos recursos. Isso possibilita maior dinâmica e flexibilidade. Desvantagens: difícil de implementar e manter, impacto no desempenho do sistema por conta da avaliação de políticas de atributos.



# Desenvolvimento Web Enxuto 🌐🧽

O Desenvolvimento Web Enxuto é um movimento que preza pelo domínio de conhecimentos básicos para desenvolver interfaces de usuário de modo simples, porém robusto para a web. Em outras palavras, esse movimento busca priorizar HTML e CSS, em detrimento de bibliotecas e frameworks JavaScript, reduzindo a quantidade de dependências nos projetos.

## O Poder do HTML 👊🦸

O HTML5 (HyperText Markup Language 5) é uma linguagem de marcação que permite a interação [_hipermídia_](https://htmx.org/essays/when-to-use-hypermedia/), isto é, a construção de páginas com hipertexto e multimídia. 

Para esclarecer, hipertexto é a leitura não linear de arquivos de texto. Já multimídia é o conjunto de diferentes tipos de mídia disponíveis na web, como arquivos de áudio e de vídeo. Nesse sentido, a hipermídia obtém êxito no atendimento da maioria das necessidades dos sistemas para web, pois é descomplicada, otimizável e dá mais liberdade à escolha de tecnologias para o server-side.

Apesar disso, existe uma discussão sobre a escolha entre a hipermídia e um [SPA](#single-page-applicationtions---spas) (Single-page Applicationtion). Tal decisão depende das singularidades de cada projeto, todavia o movimento em questão defende que a hipermídia é suficiente para grande parte dos problemas solucionados com sistemas web.

Dentre as principais motivações para optar pela hipermídia, estão: 
- A interface de usuário é composta por texto e imagens predominantemente;
- A interface consiste em formulários que devem ser preenchidos e ter seus dados armazenados em bancos de dados.
- A UI (interface de usuário) tem atualizações aninhadas, ocorrendo em blocos definidos. 
- A página precisa de deep-links – links que direcionam para um conteúdo específico dentro de uma página.

No entanto, utilizar somente a hipermídia pode não ser uma boa ideia nos seguintes casos: 
- A UI tem muitas dependências dinâmicas, isto é, dependência de informações que não podem ser determinadas na renderização, no server-side;
- O sistema precisa ser totalmente funcional quando offline. 
- A UI é atualizada com extrema frequência.
- É necessária a integração com componentes _copy & paste_, que, aliás, são projetados para frameworks frontend específicos.

Nessa perspectiva, surge então o [HATEOAS](https://htmx.org/essays/hateoas/) (Hypermedia as the Engine of Application State), que é um tipo de arquitetura de API REST. Nela, clintes da API podem fazer seu consumo por meio de links (hipermídia), sem ter conhecimento prévio sobre ela, ou seja, sem saber qual é a URL. Além disso, ele dispensa a prática de implementar regras de negócio no client-side, todavia é melhor aplicável em operações de CRUD somente.

### Single-page Applications - SPAs

![Esquema de funcionamento de um SPA](image.png)

Um SPA é um modelo de implementação que carrega apenas um documento web e que, quando precisa mostrar um conteúdo diferente, atualiza o body desse único documento via APIs JavaScript, como o [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). A vantagem disso é que usuários podem usar sites sem precisar carregar páginas vindas do servidor, o que gera performance e uma experiência mais dinâmica.

Contudo, o SPA também apresenta alguns pontos negativos que devem ser levados em consideração, por exemplo:
- Demanda frameworks JavaScript muito carregados;
- Nem sempre a performance é beneficiada;
- Pode haver muitos bugs; e
- Apresenta problemas de acessibilidade, dentre outros entraves.

Vale citar aqui os principais frameworks que permitem a implementação de SPAs:
- [React](https://react.dev/): biblioteca JavaScript para criação de componentes de UI, tanto para apps nativos (designados para um tipo específico de sistema operacional), quanto web. Ele faz CSR (Client-Side Rendering).
- [Angular](https://angular.dev/guide/routing/router-tutorial): é uma plataforma, desenvolvida em typeScript, mantida pela Google. Oferece base de componentes para aplicações web escaláveis, várias bibliotecas e ferramentas que auxiliam a codificação.
- [Vue](https://vuejs.org/guide/extras/ways-of-using-vue#single-page-application-spa): é um framework JavaScript para UIs. Suas principais features são: renderização declarativa (cliente-site rendering) e reatividade (sobre alterações de estado JS). 
- [Vite](https://vite.dev/guide/why.html): é uma ferramenta de build que busca agilizar a inicialização do servidor de desenvolvimento. Permite a separação de programas JS em módulos reutilizáveis, faz transpilação de TS para JS, é mais simples e rápido do que o [Webpack](https://webpack.js.org/), é independente de outros frameworks.

### Multi-page Applications - MPAs

![Esquema de funcionamento do MPA](image-2.png)

MPA é um modelo de implementação de sistemas web que faz um carregamento completo da página a cada requisição.

Diferenciais de um MPA:
- Melhor implementação de técnicas de SEO;
- Carregamento ágil na inicialização;
- Oferece maior facilidade para manutenção e escalabilidade. 

Convém listar ainda algumas desvantagens dos MPAs:
- Não é possível rodar vídeos de forma ininterrupta.
- Botão de voltar e scroll infinito não são viáveis.
- As bibliotecas JavaScript são recarregadas a cada requisição.
- Geralmente, apresentam problemas de latência.

Nesse sentido, [SSR](https://www.patterns.dev/react/server-side-rendering/) (Server-Side Rendering) é uma alternativa para renderização de conteúdo web. Ele gera todo o HTML para que a página seja renderizada em resposta a uma requisição (do usuário). A maior parte das coisas como conexões e fetchs são resolvidas no server-side, inclusive o HTML para formatar o conteúdo a ser exibido, para que posteriormente possa ser enviado ao client-side. Nele, cada requisição é tratada de modo independente, sendo processada e gerada pelo servidor do zero, o que pode deixar a aplicação mais lenta se for utilizada por muitos usuários com muita interatividade.

Alguns frameworks que utilizam SSR para construção de MPAs são: 
- [Next.js](https://nextjs.org/): este é um framework React para implementação de aplicações fullstack. Com ele, pode-se implementar tanto o SSR, quanto o CSR. Além isso, o framework oferece suporte para TypeScript, layouts, roteamento aninhado, estados de carregamento, e entre outros.
- [Astro](https://astro.build/): trata-se de uma plataforma que permite a geração de sites estáticos. Ele renderiza o site para HTML e CSS, reduzindo a quantidade de javascript enviada para o client-side (SSR). Além disso, tem a arquitetura de ilhas (island architecture), o que também é chamado de hidratação parcial. Isso consiste em tratar componentes de uma página como ilhas de interatividade, que podem ser hidratadas de maneira independente.

### Hypermedia-Drive Application - HDA ♻️

A arquitetura HDA é uma combinação entre MPA e SPA. Isso é possível graças a uma extenção da infraestrutura HTML da web. Ademais, implementa o HATEOAS. Tem duas características principais:
- Utilização de HTML declarativo na interatividade humano-computador, ao invés de código imperativo.
- Interage com o servidor, em termos de hipermídia, ao invés de utilizar um formato não hipermídia como o JSON.

[Neste link](https://hypermedia.systems/extending-html-as-hypermedia/) pode-se compreender como é a extensão da infraestrutura HTML na prática.

### Desenvolvimento Enxuto na Prática 📝

> "Choose the least powerful language suitable for a given purpose". 

Essa frase resume o princípio de que, ao longo da construção de sites, se uma linguagem ou tecnologia mais simples – como HTML ou CSS – resolve o problema, não devemos tentar resolvê-lo com algo mais complexo e pesado – como JavaScript.
- [Neste vídeo](https://www.youtube.com/watch?v=IP_rtWEMR0o), kilian Valkhof mostra várias exemplos práticos de problemas que geralmente são resolvidos com JavaScript, mas que podem ser resolvidos eficazmente com HTML e um pouco de CSS. 

Sugere-se a seguinte linha de raciocínio ao longo da solução:
   1. É possível resolver com HTML?
   2. Se não, isso pode ser solucionado com CSS?
   3. É possível melhorar a estilização para que fique mais fácil de implementar?
   4. Se não for, nessa situação pode-se utilizar um pouco de JavaScript.
   5. Em último caso, será necessário adicionar uma dependência.

Nesse âmbito, é importante iniciar tratando o HTML com seriedade. Isso porque usualmente tal linguagem é pouco apreciada, talvez por ser _onipresente_ ou simples, o que não suprime o seu poder. No princípio, enquanto a maioria das pessoas estavam ocupadas aprendendo e aplicando o React em seus sistemas, instituições com W3C, WHATWG, IETF e TC39 continuaram aprimorando as linguagens nativas dos navegadores, que inclusive atendiam boa parte dos motivos para se usar o React. 


### Bibliotecas 🔍🪜

Para começar a praticar o desenvolvimento web enxuto, sugere-se o conhecimento das bibliotecas listadas a seguir:
  - [HTMX](https://htmx.org/): dá acesso a vários atributos, que são incluídos no HTML, permitindo a construção de interfaces poderosas e simples com hipertexto. [_AQUI_](https://htmx.org/examples/) há links para demonstrações de coom aplicar o htmx em vários problemas muito comuns.
  - [Alpine.js](https://alpinejs.dev/): refere-se a um framework JavaScript mais leve, para criação de componentes interativos, que também pode ser utilizado diretamente dos arquivos de marcação. Ele busca oferecer flexibilidade, simplicidade e componentes dinâmicos.
  - [Stencil](https://stenciljs.com/): biblioteca para desenvolvimento de componentes reutilizáveis e escaláveis. Suas de maior destaque são: componentes compatíveis com qualquer browser; bom desempenho; compatibilidade com vários frameworks; geração automática de documentação; suporte a TypeScript.
  - [Lit](https://lit.dev/): oferece web components – assim como o Stencil, porém mais minimalista –, atualização automática dos componentes quando os atributos mudam; templates declarativos; interoperabilidade; estilos separados em escopos; entre outros.


# Protocolo HTTP 📄🛜

**API**: Application Programming Interface. Têm fácil integração com os sistemas; seguem padrões de desenvolvimento; elas se comunicam com xml, ou json, ou html, devido à simplicidade desses tipos de dados; requests e responses são feitas em HTTP 📄 tipos de requisições HTTP: get, post, delete, put, patch; uma API RESTful é algo ideal;

**ENDPOINT**:  é uma URL da API, que acessamos para obter uma resposta; ponto final, é o que fica na ponta da rede (roteadores, switch, celulares, tablets etc); Endpoint é um termo que se refere a cada rota de uma API. Através dele é possível solicitar criação, exclusão, atualização e recuperação de qualquer dado.

**BODY**: é o corpo da requisição que é enviado para o endpoint. Ele armazena os dados compilados  para criação ou atualização de algum serviço, usualmente no formato JSON ou XML.

**PARAMS**: são utilizados nas consultas ou atualizações de serviços. Eles podem ser parâmetros enviados na própria URL, após o sinal `?` (query params), posicionados na rota como em `/projects/:project_id` (route params), ou enviados no body da requisição. Existe uma tecnologia experimental com desejo de padronizar os parâmetros, veja [ URL Pattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API).

**REST**: é um conceito de arquitetura ligado à API e ao protocolo HTTP. Esse padrão tem 6 partes que precisam ser implementadas para tornar a API em RESTful uniformidade, desacoplação, stateless, cache, arquitetura de camadas, code on demand.

O Postman, o Bruno e o [Ensomnia](https://insomnia.rest/) são programas que utilizamos para testar APIs suas ou de terceiros. Você insere um endpoint, para testar o backend e depois integra com o frontend. Ele serve para você não precisar do frontend para testar o backend.

**LOCALHOST**: é um nome que identifica um dispositivo numa rede (hostname), e refere-se ao endereço IP padrão da rede do computador local (`127.0.0.1`), isto é, o próprio computador em que um programa é executado. Dessa maneira, o computador funciona como um servidor virtual. Cada endereço de IP está conectado a uma placa de rede, mas o localhost é como se fosse uma placa de rede virtual. O `0.0.0.0` significa `qualquer placa de rede`.

**PROMISE**: trata-se de um proxy para um valor não necessariamente conhecido quando uma promise é criada. Permite que métodos assíncronos retornem

### fetch API
- Oferece uma interface para busca de recursos em qualquer URL de API.
- Usa os objetos `request` e `response`.
- Recebe como argumento o caminho para o recurso que se deseja buscar (`resource`) e um argumento opcional com configurações da solicitação.
- É uma função assíncrona, ou seja, retorna uma `resolve` quando a `response` está pronta.
- Serve como alternativa ao `XMLHttpRequest`.

### Proxy

![O que é um proxy](https://testrigor.com/wp-content/uploads/2023/11/How-to-Find-Proxy-Settings.jpeg)

### Como funciona:

- **Sockets**: soquetes são como tomadas. Diferentes portas são diferentes padrões de tomadas. Soquetes é uma forma de comunicação entre processos.
- **Bind**: é uma ligação -- a ligação de um endereço IP com outro número de 16 bits, que é a porta.
- **Porta**: é um número que identifica um processo que identifica um processo que o sistema operacional mantém na tabela dele. É um identificador do programa rodando ligado ao endereço IP do computador. É só um número
- **Listen**: é um estado em que o programa fica bloqueado esperando o sistema enviar algo.
 
O browser é um exemplo de programa que pede uma conexão. Ele não precisa fazer bind porque ele não precisa que ninguém se conecte nele.
Um servidor faz bind e listen numa porta e fica esperando (escutando). Um cliente (navegador) enviar pacotes para o IP do servidor e pede para se conectar com um programa que está escutando.

Para programas web, geralmente utilizamos porta que vão de 1024 até 49152. As portas de número até 1023 são reservadas e precisam de permissão de administrador `sudo` para serem utilizadas.



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


<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff5733&height=120&section=footer"/>





