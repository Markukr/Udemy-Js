"use strict";

let number = 4.6;
console.log(-4 / 0);
console.log('string' * 9);

const persone = "5";
const bool = true;
/* console.log(something); */

let und;
console.log(und);

///
const obj = {
   name: 'John',
   age: 25,
   isMarried: false
};
//
//
console.log(obj.name);

const arr = [1, 2, 3];

console.log(arr[1]);

const obje = { a: 1, b: 2 };

//
const answers = [];

answers[0] = prompt('Яке у вас імя?', '');
answers[1] = prompt('Яке у вас прізвище?', '');
answers[2] = prompt('Скільки вам років?', '');

console.log(typeof (answers));

document.write(answers);

//
console.log(5 % 2);
console.log(2 * 4 === "8"); //===строге порівнняня по тиру і по значеню

const isChecked = true,
   isClose = false;

// && - operator i;
// || - operator else; 
// ! - operator not; змінює значення на протилежне


console.log(isChecked && isClose); // && то і то. обидва
console.log(isChecked || isClose); // || то або то. хочаби щось
///
let increment = 10,
   decrement = 10;

// ++increment; збільшує на 1
// --decrement; зменшує на 1 

console.log(increment++);
console.log(--decrement);

