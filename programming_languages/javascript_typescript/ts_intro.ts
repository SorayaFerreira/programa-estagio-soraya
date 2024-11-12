// Introdução a TypeScript

//APARENTEMENTE, é necessário ter extensão .ts para funcionar o typescript.

/*
JS é uma linguagem fracamente tipada. Então, o TS surgiu para permitir que os devs adicionem tipos aos dados em javascript.

Tipos primitivos de TS e JS:
> boolean;
> number;
> string;
> bigint;
> symbol;

Há duas formas de atribuir tipos em TS:
> Explicit: escrevendo (demarcando) o nome do tipo. EX: `let firstName: string = "Soraya";`. É mais intuitivo e fácil de ler.

> Implicit: o TS precisa adivinhar que tipo é. EX: `let firstName = "Soraya";`. O tipo do valor é chamado INFER, porque ele faz uma inferência.

> Entretanto, nem sempre o TS faz inferência do tipo, atribuindo `any`, o que pode ser alterado no arquivo de configuração do TS (tsconfig.json).

> boolean !== Boolean

*/

let firstName: string = "Soraya";
//let firstName = "Soraya";

console.log(typeof firstName);

const json = JSON.parse("55");
console.log(typeof json);