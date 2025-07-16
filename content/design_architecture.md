---
title: design_architecture
description: Conteúdo sobre Design e Arquitetura de Software
pubDate: Mar 17 2025
tags:
  - HOWL
  - Lean Web
  - Padrões de Projeto
---
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ee82ee&height=120&section=header"/>

# Sumário
- [HOWL](#howl-)
- [Padrões de Projeto](#padrões-de-projeto)

# HOWL 🟣
### HOW - Hypermedia On Whatever you'd Like

- O HTMX é uma biblioteca, à parte da W3C, que tem buscado favorecer o uso de capacidades e linguagens nativas dos browsers e reduzir as camadas de abstração, melhorando as especificações do HTML, alinhando a WEB à hipermídia. A ideia é tornar o HTML uma forma mais poderosa de hipermídia. Além disso, o HTMX tenta combater o JS Pressure, isto é, uma pressão para usar JavaScript no backend, decorrente de seu uso pesado no frontend. Com isso, surge o desejo de permitir que todas as linguagens possam ser alternativas interessantes para o backend.
- HTML First(https://html-first.com/ )
-  Hypermedia-Driven Applications(https://htmx.org/essays/hypermedia-driven-applications/ ): 
-  A Response To "Have Single-Page Apps Ruined the Web?"(https://htmx.org/essays/a-response-to-rich-harris/ ):
- Pico CSS(https://picocss.com/): tem um objetivo parecido com o do HTMX, porém com relação ao CSS. 
- Hipermídia = hipertexto + multimídia.
- MPA - Multi-Page Application. Solicita um refresh completo da página inteira a cada requisição; sendo assim, no caso de um vídeo, ele seria pausado a cada requisição. No entando, o HTMX resolve isso com o atributo `hx-preserve`.
- SPA - Single-Page Application. Não é RESTful.
- HDA - Hypermedia-Driven Application. Esta é uma nova abordagem para construção de aplicações web. Seu objetivo é combinar simplicidade, flexibilidade e a melhor UX, advindos dos MPAs e SPAs. É como fazer uma extensão do HTML para permitir interações.
- HATEOAS - Hypermedia As The Engine of Application State.
- A interação com o servidor é feita via HTTP e HTML: uma requisição POST é enviada para o servidor, um HTML é retornado pelo servidor e HTML insere esse HTML no DOM. O frontend da feature é especificado totalmente em atributos declarativos HTMX, direto no HTML.
- Usar scripts Code-On-Demand diretamente no HTML melhora a visibilidade, satisfazendo a o princípio de design de Locality of Behavior.

- CSS Zen Garden(https://csszengarden.com/): É uma página que demonstra como, através de uma estrutura bem definida para o HTML do site, é possível dar **qualquer** estilo pra ele.

# Padrões de Projeto
> Anotações iniciais tiradas do livro Engenharia de Software Moderna

> "Cada padrão descreve um problema que sempre ocorre em nosso contexto e uma solução para ele, de forma que possamos usá-lo um milhão de vezes."

> "Padrões de projeto descrevem objetos e classes que se relacionam para resolver um problema de projeto genérico em um contexto particular."

- Um padrão de projeto tem 3 coisas: **um contexto, um problema e uma solução**.
- Ao usar um padrão de projeto, é interesse indicar ele no código, p. ex. em nomes de classes.
- Um padrão de projeto é uma solução já testada e já validada para um problema comum. 
- Visam a construção de softwares flexíveis e extensíveis.

## Padrão [[Factory]] 🏭️

```java
void f() {
  TCPChannel c = new TCPChannel();  
  ...
}

void g() {
  TCPChannel c = new TCPChannel();
  ...
}

void h() {
  TCPChannel c = new TCPChannel();
  ...
}

```

- No exemplo dado, alguns métodos precisavam instanciar um objeto de uma classe (`TCPChannel`), porém futuramente talvez mudassem e precisassem instanciar de outro tipo (`UDPChannel`). O ideal é que a classe entrasse como parâmetro, mas aí que tá o problema. Como que instância uma variável? Não dá. 
- Para esse problema é proposto o seguinte. Há algumas variações no padrão, mas podemos criar um método estático que cria e retorna os objetos de uma certa classe e oculta o tipo delas numa interface. 

```java
class ChannelFactory {
  public static Channel create() {// método fábrica estático
    return new TCPChannel();
  }
}

void f() {
  Channel c = ChannelFactory.create();
  ...
}

void g() {
  Channel c = ChannelFactory.create();
  ...
}
void h() {
  Channel c = ChannelFactory.create();
  ...
}
```

- Uma das variáções é a [[Fábria Abstrata]], que concentra vários métodos fábrica:
```java
abstract class ProtocolFactory { // Fábrica Abstrata
  abstract Channel createChannel();
  abstract Port createPort();  
  ...
}

void f(ProtocolFactory pf) {
  Channel c = pf.createChannel();
  Port p = pf.createPort();
  ...
}
```

## Singleton 


<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ee82ee&height=120&section=footer"/>