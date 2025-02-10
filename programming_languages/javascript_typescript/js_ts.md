# TypeScript e JavaScript 📘📕

- DARPA: agencia de pesquisa tecnológica dos EUA criada durante a guerra fria.
- ARPANET: rede que permitia comunicação entre os computadores. Cresceu muito e mudou de nome
várias vezes. O último nome foi INTERNET.
- Em 1993 surgiu o WWW no CERN.
- O JavaScript foi criado pela empresa Netscape.
- JS não tem nada a ver com JAVA. O nome ficou assim porque na época em que surgiu estava
na moda falar de "java". Foi uma tática de marketing.
- ECMA SCRIPT é a versão padronizada do javascript, que surgiu porque a Microsoft queria "plagiar" e 
criar outra linguagem parecida.
- \' para colocar aspas simples dentro da string.
- Variáveis podem começar com "letras, $ ou _". Podem apresentar números, letras e acentos, exceto espaços."typeof var" para ver o tipo da variável. "null" é objeto para js.
- Inicialmente, a linguagem JavaScript foi criada para atender um demanda "pequena", isto é, para escrever poucas linhas de código no client-side, por isso ela é muito simples. No entanto, com o decorrer do tempo, sua popularidade e sua abrangência cresceram, e a linguagem passou a ser utilizada também no server-side, por exemplo. Com isso, houve a necessidade de aprimorar certos aspectos do JavaScript que poderiam causar bugs complexos, então surgiu o _TypeScript_.

## JS: Pontos Importantes
JavaScript também tem suporta a passagem de parâmetro padrão para a assinatura de uma função, a sintaxe é igual a do Python. 

Funções e métodos:
- .encode(): método; recebe uma string; retorna um objeto `Uint8Array` com a string codificada.
- .decode(): método; recebe um buffer (p. ex. Uint8Array); retorna uma string decodificada; tem um parâmetro opcional, [leia mais sobre aqui](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode#parameters).
- atob(): método da interface [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) que recebe uma string codificada com [Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64); 
- [btoa()](https://developer.mozilla.org/en-US/docs/Web/API/Window/btoa): método, da interface Window também, que recebe uma string ASCII (sequência binária) e a codifica em Base64.
- .stringify(): método estático que converte uma valor JavaScript para uma string JSON. [Veja mais aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

## Introdução a TS

![Logo TypeScript](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrOXd86iDXx-hL8ZoHFwV7SR5ihBzQcvOgg&s)

[Documentação do TypeScript](https://www.typescriptlang.org/docs): as informações presentes neste documento são majoritariamente retiradas da documentação oficial, que, felizmente, é muito bem arranjada e acessível tanto para desenvolvedores mais experientes, quanto para desenvolvedores iniciantes. Ela será utilizada como referência principal ao longo da pesquisa sobre TypeScript, uma vez que é a fonte mais confiável e completa.

Tipos determinam tanto o comportamente da leitura quanto da escrita. Nesse sentido, JS é uma linguagem fracamente tipada, por isso surgiu o TS, para permitir que os devs adicionem tipos aos dados em JavaScript.

Há duas formas de atribuir tipos em TS:
- Explicit: escrevendo (demarcando) o nome do tipo. EX: `let firstName: string = "Soraya";`. É mais intuitivo e fácil de ler.
- Implicit: o TS precisa adivinhar que tipo é. EX: `let firstName = "Soraya";`. O tipo do valor é chamado INFER, porque ele faz uma inferência.
- Entretanto, nem sempre o TS faz inferência do tipo, atribuindo `any`, o que pode ser alterado no arquivo de configuração do TS (tsconfig.json).

Para definir os tipos dos atributos de um objeto, é necessário criar uma `interface` antes, como demonstrado a seguir. As interfaces podem ser extendidades com a palavra-chave `extends` e são utilizadas para objetos e assinaturas de funções.

```typescript

    interface Sorvete {
        sabor: string;
        preço: number;
        id: number;
    };

    const sorvete: Sorvete = {
        sabor: "Açaí",
        preco: 30.0,
        id: 0,
    };
```
Para o caso de declarar classes, é muito parecido.

```typescript
    class Sorvete {
        sabor: string;
        preco: number;
        id: number;

        constructor(sabor: string, preco: number, id: number) {
            this.sabor = sabor;
            this.preco = preco;
            this.id = id;
        }
    }
    
    const sorvete: Sorvete = new Sorvete("Açaí", 30.0, 0);
```

Declarando funções:
```typescript

    function comerSorvete(sorvete: Sorvete): void {
        //
    }
```

Os tipos primitivos em TypeScript são: boolean, bigint, null, number, string, symbol, undefined, any, unknown, never, void, object.
Outros tipos:

|Tipo|Explicação|
|----------|----------|
|unknown|tipo superior|
|never|tipo inferior|
|object literal|ex. { property: Type }|
|void|para funções sem retorno documentado|
|T[]|vetor mutável, também escrito como <T>|
|[T, T]|tuplas, que têm tamanho fixo, mas mutável|
|(t: T) => U|funções. Ex.: `let fst: (a: any, b: any) => any = (a, b) => a;`|

- É possível criar novos tipos combinando os primitivos. Há duas formas, com `unions` e `generics`.
- Há como escrever uma função que retorna determinados resultados de acordo com o tipo do parâmetro que foi passado.
- Um tipo, em TS, é um conjunto de valores que compartilham algo em comum. 
- Há a possibilidade de declarar um tipo vazio. O atributo `{k: 10}` tem todas as propriedades de Empty { } por que Empty não tem propriedades!

- `&` é um operador de interseção no TS que combina dois tipos,  com todas suas propriedades, em um só. 

#### Compilação e Transpilação:
>>>>>>> 19a36730bab044aa050c5fe0678ef23c283d7b70:programming_languages/javascript_typescript/ts_handbook.md

- Transpilação é realizar a conversão do código de uma linguagem para outra linguagem.
- O processo de compilação realiza uma transpilação do código TypeScript para JavaScript.

------------
## TypeScript Handbook 🖐️📙

Geralmente, erros que surgem na programação em JavaScript puro estão relacionados a erros de tipo, quando um certo tipo de valor foi usado em um local que recebe outro tipo de valor. Nesse sentido, o intuito do TypeScript é fazer uma verificação estáticas dos tipos em programas JavaScript.

O [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) pretende ser uma documentação de fácil compreensão para o dia a dia dos devs. Alguém que completa sua leitura deve ser capaz de ler e assimilar padrões e sintaxe do TypeScript, explicar os efeitos de diferentes opções de compiladores e prever o comportamento dos tipos.

#### The Basics
<<<<<<< HEAD:programming_languages/javascript_typescript/js_ts.md

- Event Listener: trata-se de uma função que aguarda a ocorrência de um evento para executar uma determinada função, por exemplo: 
```javascript
// seleciona um botão
const button = document.querySelector('button');

// Função a ser executada após um evento
function handleClick() {
  alert('Button was clicked!');
}

// Executa a função após "ouvir" que o botão foi clicado.
button.addEventListener('click', handleClick);
```
- Para criar uma url: `new URL()` e passa a url como parâmetro.
- `searchParams` é uma propriedade somente leitura da URL que retorna um objeto URLSearchParams, permitindo acesso aos argumentos GET contidos na URL. 
- `request.url` contém parâmetros de pesquisa para páginas renderizadas.


----


Objetos em JS são uma forma de agrupar e passar dados. Seu tipo pode ser definido com `interface` ou `type` alias:


---
#### Everyday Types
- *Unit types* são subtipos dos tipos primitivos que contêm estritamente um valor primitivo. É como dizer que a string "foo" tem o tipo "foo". 


[**Literal Types**](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types), em tradução livre, são tipos literais. É quando o tipo do elemento é seu próprio valor; pode-se dizer que é uma constante mais que constante. Há o tipo `boolean` que possui dois literal types: `true` ou `false`.

Por exemplo: `let x: "hello" = "hello";`. Isso não é muito útil por si só, todavia ao combinar vários tipos em uma onion, o leque de possibilidades se abre. Tal como, é possível criar uma função que aceita apenas valores específicos como parâmetro.

```typescript
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

- Objetos em JS são uma forma de agrupar e passar dados. Seu tipo pode ser definido com `interface` ou `type` alias:
```typescript
// Agora é possível testar o código separadamente no Jupyter, de forma prática.
// Utilize o arquivo jupyter.ipynb

type Person = {
    name: string;
    age: number;
};

function greet(person: Person) {
    //return "Hello " + person.name;
    return `Hello ${person.name}`;
}

const soraya: Person = {
    name: "Soraya",
    age: 19
}
console.log(greet(soraya));
```
- Para indicar um atributo opcional, basta colocar um `?` na frente do nome da variável.
```typescript
type Person = {
    name: string;
    age: number;
    address?: string | undefined;
};
```

- JavaScript também suporta a passagem de parâmetro padrão para a assinatura de uma função. A sintaxe é igual a do Python. 
- Há a possibilidade de declarar um tipo vazio. O atributo `{k: 10}` tem todas as propriedades de Empty { } por que Empty não tem propriedades!

```typescript
class Empty {}

function fn(arg: Empty) {
  // do something?
}
 
// No error, but this isn't an 'Empty' ?
fn({ k: 10 });
```


#### Creating Types from Types

- **Tipos Utilitários**:
   - **Omit**: `export type SqliteSession = Omit<Session, 'expires_at'> & { expires_at: string };` este é um tipo utilitário que cria um tipo baseado em `Session`, excluindo a propriedade (ou key) `expires_at`. Logo, se inicialmente o `Session` era assim: 
    ```typescript
    type Session = {
        id: number;
        user: string;
        expires_at: Date;
    };
    ``` 
    Então ele passará a ser assim:
   
    ```typescript
    id: number;
    user: string;
    ```
-----

- Generics: 
[Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) compõem uma estrutura que facilita a reusabilidade de código, por meio da abstração de tipos.

Podem ser utilizados em interfaces, classes e funções. Sendo assim, uma função que aceita um argumento genérico aceita qualquer tipo de dado naquele argumento; uma classe com atributo genérico aceita qualquer tipo de dado no atributo genérico; e uma interface genérica aceita qualquer tipo. Ao contrário do tipo `any`, o Generics permite o conhecimento do tipo inserido em cada caso.

```typescript

export interface Generic<T>  {
    (arg1: T, arg2: T): T;
}

const sum: Generic<number> = (arg1, arg2) => {
    return arg1+arg2;
};
sum(1, 2);

export interface setStorage<T> {
    set(key: string, value: T): void;
}

const array = [1, 2, 2, 3, 3, 4, 4];
removeDuplicates(array);

export function removeDuplicates<T>(array: T[]): T[] {
    const uniqueSet = new Set<T>(array);
    return Array.from(uniqueSet);
}

```

