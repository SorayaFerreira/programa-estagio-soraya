//Learn Introductory JavaScript by Building a Pyramid Generator

//Declarando com LET posso reatribuir o valor na variável posteriormente.
// let character = "Hello";
// console.log(character);
// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("freeCodeCamp"); // adiciona um valor ao final.
// let pushed = rows.push("freeCodeCamp"); //push() retorna o novo tamanho do array.
// console.log(pushed);
// console.log(rows);

// let popped = rows.pop(); //pop() remove o último valor e retorna o valor removido
// console.log(popped); 

//----------------------------
//const são constantes, igual no C99
const character = "#";
const count = 8;
const rows = [];
let inverted = false;

// O FOR e o IF são iguaisinhos do C99 e Java

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
  


  
  /*while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
  }*/
    //.repeat(num) repete a string.

//coisas falsas: false, 0, "", null, undefined e NaN;
// === is used to check if two values are equal and share the same type

//The strict inequality operator !== allows you to check if two values are not equal, or do not have the same type

// .unshift() adiciona um valor ao início do array, retornando o novo tamanho do array.

for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);