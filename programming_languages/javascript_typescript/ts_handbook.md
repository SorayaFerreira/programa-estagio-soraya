# TypeScript 📘🔵

Inicialmente, a linguagem JavaScript foi criada para atender um demanda "pequena", isto é, para escrever poucas linhas de código no client-side, por isso ela é muito simples. No entanto, com o decorrer do tempo, sua popularidade e sua abrangência cresceram, e a linguagem passou a ser utilizada também no server-side, por exemplo. Com isso, houve a necessidade de aprimorar certos aspectos do JavaScript que poderiam causar bugs complexos, então surgiu o TypeScript.

## Introdução

![Logo TypeScript](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrOXd86iDXx-hL8ZoHFwV7SR5ihBzQcvOgg&s)

[Documentação do TypeScript](https://www.typescriptlang.org/docs): as informações presentes neste documento são majoritariamente retiradas da documentação oficial, que, felizmente, é muito bem arranjada e acessível tanto para desenvolvedores mais experientes, quanto para desenvolvedores iniciantes. Ela será utilizada como referência principal ao longo da pesquisa sobre TypeScript, uma vez que é a fonte mais confiável e completa.

JS é uma linguagem fracamente tipada. Então, o TS surgiu para permitir que os devs adicionem tipos aos dados em JavaScript.

Há duas formas de atribuir tipos em TS:
- Explicit: escrevendo (demarcando) o nome do tipo. EX: `let firstName: string = "Soraya";`. É mais intuitivo e fácil de ler.

- Implicit: o TS precisa adivinhar que tipo é. EX: `let firstName = "Soraya";`. O tipo do valor é chamado INFER, porque ele faz uma inferência.

- Entretanto, nem sempre o TS faz inferência do tipo, atribuindo `any`, o que pode ser alterado no arquivo de configuração do TS (tsconfig.json).

Para definir os tipos dos atributos de um objeto, é necessário criar uma `interface` antes, como demonstrado a seguir.

```typescript

    interface Sorvete {
        sabor: string;
        preço: number;
        id: number;
    }

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

```typescript
class Empty {}
 
function fn(arg: Empty) {
  // do something?
}
 
// No error, but this isn't an 'Empty' ?
fn({ k: 10 });
```

- *Unit types* são subtipos dos tipos primitivos que contêm estritamente um valor primitivo. É como dizer que a string "foo" tem o tipo "foo". 


-------------------------
*Sobre Paradigmas de Programação*, [vídeo](https://youtu.be/sqKnYS-ZXsQ?si=Ep64J9IPRHdxeoTl):
- Imperativos: Programação Procedural, Programação Orientada a Objetos.
- Declarativos: Programação Funcional, Programação Lógica.

*Programação Funcional*: existem linguagens puramente funcionais, como Closure, OCamel Haskell e Lisp. 



## TypeScript Handbook

Geralmente, erros que surgem na programação em JavaScript puro estão relacionados a erros de tipo, quando um certo tipo de valor foi usado em um local que recebe outro tipo de valor. Nesse sentido, o intuito do TypeScript é fazer uma verificação estáticas dos tipos em programas JavaScript.

O TypeScript Handbook pretende ser uma documentação de fácil compreensão para o dia a dia dos devs. Alguém que completa sua leitura deve ser capaz de ler e assimilar padrões e sintaxe do TypeScript, explicar os efeitos de diferentes opções de compiladores e prever o comportamento dos tipos.

#### The Basics
#### Everyday Types
#### Narrowing
#### More on Functions

#### Object Types
Objetos em JS são uma forma de agrupar e passar dados. Seu tipo pode ser definido com `interface` ou `type` alias:

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

#### Type Manipulation
#### Creating Types from Types
#### Generics
#### Keyof Type Operator
#### Typeof Type Operator
#### Indexed Access Types
#### Conditional Types
#### Mapped Types
#### Template Literal Types
#### Classes Modules