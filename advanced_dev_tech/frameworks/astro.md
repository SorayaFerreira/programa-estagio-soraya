# Astro 💜🏝️

O Astro é um gerador de site estático. 

Ele renderiza o site para HTML e CSS, reduzindo a quantidade de javascript enviada para o client-side. Dá suporte para vários frameworks.

O Astro utiliza a arquitetura de ilhas island architecture, o que também é chamado de hidratação parcial. Isso consiste em tratar componentes de uma página como ilhas de interatividade, que podem ser hidratadas de maneira independente.

- Em `public` ficam os assets que serão utilizados no projeto.
- Existe um objeto global, que a plataforma oferece, chamado `Astro`, que dá acesso a atributos e métodos interessantes para a interação com requisições e a aplicação em si.
- É possível misturar componentes de diferentes frameworks de UI, como React, Vue e [Svelte](https://svelte.dev/docs/svelte/overview), por exemplo.
- Um arquivo `.astro` tem duas partes: component script e component template. A parte de template é a parte visual, que permite HTML, por exemplo.
- Page é um tipo especial de componente.
- `Astro.url` é equivalente a fazer `new URL(Astro.request.url)`.
- Para criar uma url: `new URL()` e passa a url como parâmetro.
- `request`  é um objeto Request padrão. Ele pode ser usado para obter a `url`, os `headers`, o `method` e o corpo da requisição (body). Para tanto, utilize `Astro.request.method`, `Astro.request.url`, `Astro.request.headers`.
- `request.url` contém parâmetros de pesquisa para páginas renderizadas.
- `response` é um objeto padrão de `ResponseInit`.  Sua estrutura é composta por `status` (status numérico da resposta, p. ex. 200), `statusText` (mensagem de status associada ao código de status), `headers` (instância de `Headers` utilizada para definir os cabeçalhos HTTP da resposta). Sendo assim, `Astro.response` define esses três atributos para a resposta de uma página (com `.set('')`).
- `Astro.redirect()` retorna um objeto Response que permite redirecionar para outra página e, opcionalmente, fornecer um código de status de resposta HTTP como um segundo parâmetro. O `return` deve, obrigatóriamente, ser uma página. 
- `searchParams` é uma propriedade somente leitura da URL que retorna um objeto URLSearchParams, permitindo acesso aos argumentos GET contidos na URL. 
```typescript
const params = new URL("https://example.com/?name=Jonathan%20Smith&age=18")
  .searchParams;
const name = params.get("name");
const age = parseInt(params.get("age"));

console.log(`name: ${name}`); // name: Jonathan Smith
console.log(`age: ${age}`); // age: 18

```

- O método `.entries()`, presente estruturas de dados mais complexas que um array, retorna um iterador permitindo iteração através de todos os pares chave/valor contidos nesse objeto. Os pares chave/valor aparecem na mesma ordem que na string query. Tanto a key quanto o value são strings. Não há parâmetros.  
```typescript
// Create a test URLSearchParams object
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the key/value pairs
for (const [key, value] of searchParams.entries()) {
  console.log(`${key}, ${value}`);
}
```
-  O método estático `Object.fromEntries()` transforma uma lista de pares key-value num objeto.