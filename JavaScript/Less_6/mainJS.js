// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let lengthOne = 'hello world';
// console.log(lengthOne.length);
//
// let lengthTwo = 'lorem ipsum';
// console.log(lengthTwo.length);
//
// let lengthEmpty = 'javascript is cool';
// console.log(lengthEmpty.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let lengthOne = 'hello world';
// let upOne = lengthOne.toLocaleUpperCase();
// console.log(upOne);
//
// let lengthTwo = 'lorem ipsum';
// let upTwo = lengthTwo.toLocaleUpperCase();
// console.log(upTwo);
//
// let lengthEmpty = 'javascript is cool';
// let upEmpty = lengthEmpty.toUpperCase();
// console.log(upEmpty);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let lengthOne = 'HELLO WORLD';
// let lowerOne = lengthOne.toLowerCase();
// console.log(lowerOne);
// console.log(lengthOne);
//
// let lengthTwo = 'LOREM IPSUM';
// let lowerTwo = lengthTwo.toLowerCase();
// console.log(lowerTwo);
//
// let lengthEmpty = 'JAVASCRIPT IS COOL';
// let lowerEmpty = lengthEmpty.toLowerCase();
// console.log(lowerEmpty);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let dirtyString = '   dirty string    ';
// let trim = dirtyString.trim();
// console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'каждый охотник желает знать';
//
// let stringToarray = (str) => {
//     return str.split(' ');
// }
//
// console.log(stringToarray(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається
// із зазначеної кількості символів.

// let deleteCharacters = (str, length) => {
//     return str.substring(0, length);
// }
//
// let str = 'охотник';
//
// console.log(deleteCharacters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і
// вставляє тире (-) між словами.\
// При цьому всі символи рядка необхідно перевести у верхній регістр.

/*let str = 'hello world, lorem ipsum, javascript is cool'

let insertDash = (str) => {
    str.replaceAll(' ', '-').toLocaleUpperCase();
    return str.replaceAll(' ', '-').toLocaleUpperCase();
}

console.log(insertDash(str));*/

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу
// рядка з нижнього регістру у верхній.

/*let str = 'hello';

let firstUp = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(firstUp(str));*/

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з
// великої літери.

/*let str = 'okten hi you are welcome';

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
document.write(capitalize(str));*/

//23 : 00
//let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

// let filterArray = numbers.filter((item, index) => {
//     return item % 2 === 0 && index % 2 !== 0;
// });
// console.log(filterArray);

//24 : 27
// let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
//
// let map = numbers.map(value => {
//     return value + '';
//
// });
//
// console.log(map);
// console.log(numbers);

// пояснення для reduce - https://learn.javascript.ru/array-methods

//1:30
// let users = [
//     {name: 'sergii', age: 28, country: 'ukraine', status: true},
//     {name: 'oliya', age: 28, country: 'ukraine', status: false},
//     {name: 'stepan', age: 28, country: 'ukraine', status: true},
//     {name: 'evgen', age: 28, country: 'ukraine', status: false},
//     {name: 'alex', age: 28, country: 'ukraine', status: true},
// ];
//
// console.log(users.reduce((basket, user) => {
//     if (user.status) {
//         basket.statusTrue.push(user);
//     } else {
//         basket.statusFalse.push(user);
//     }
//
//     return basket;
//
// }, {statusTrue: [], statusFalse: []}));