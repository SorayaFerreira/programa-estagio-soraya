// Introdução a TypeScript
//APARENTEMENTE, é necessário ter extensão .ts para funcionar o typescript.

/*
> boolean !== Boolean

//Hello World mais básico em typescript

function helloWorld(person: string): string {
    return "Olá, " + person;
}

let user = "Mundo!";

console.log(helloWorld(user));
*/

interface Person {
    firstName: string;
    lastName: string;
}

function helloWorld(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user = { 
    firstName: "Soraya",
    lastName: "Ferreira"
}

console.log(helloWorld(user));