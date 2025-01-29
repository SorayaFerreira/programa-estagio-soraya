<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff5733&height=120&section=header"/>

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

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ff5733&height=120&section=footer"/>