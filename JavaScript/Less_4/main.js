// - створити функцію яка обчислює та повертає площу прямокутника
// function calculateRectangleArea(a, b) {
//     return a * b;
// }
//
// const rectangleArea = calculateRectangleArea(10, 10);
// console.log(rectangleArea);
// document.write(`Площа прямокутника: ${rectangleArea}`);

// 2 варіант - порахувати і вивести через ф-цію
// function calculateRectangleArea(a, b) {
//     const sum = a * b;
//     document.write(`Площа прямокутника: ${sum}`);
// }
//
// calculateRectangleArea(10, 10);

// - створити функцію яка обчислює та повертає площу круга
// function calculateAreaCircle(r) {
//     return 3.14 * (r ** 2);
// }
//
// const sCircle = calculateAreaCircle(10);
// console.log(sCircle);
// document.write(`площа круга: ${sCircle}`);

// 2 варіант
// function calculateAreaCircle(r) {
//     const sum = 3.14 * (r ** 2);    // ** - приводимо до квадрату
//     document.write(`Площа круга: ${sum}`);
// }
//
// calculateAreaCircle(10);

//- створити функцію яка обчислює та повертає площу циліндру S= 2πRH
/*function calculateAreaСilynder(r, h) {
    return 2 * 3.14 * r * h;
}

const sCylindre = calculateAreaСylinder(4, 4);
console.log(sCylindre);
document.write(`площа циліндра: ${sCylindre}`);*/

// 2 варіант
// function calculateAreaСilynder(r, h) {
//     const sum = 2 * 3.14 * r * h;
//     document.write(`Площа циліндру: ${sum}`);
// }
//
// calculateAreaСilynder(10, 10);

//- створити функцію яка приймає масив та виводить кожен його елемент
// let array = [55, 2, 3, 4, 5, 'hello world', 'okten'];
//
// function dataArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`${i} - ${array[i]}<br>`);  //     <br> - з нової строки;  //${i+1} - виводимо індекс в DосWrite починаючи з 1 (елемент нульовий з масиву але під час виводу він +1)
//     }
// }
//
// dataArray(array);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createParagraph(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// createParagraph('hello world');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент
// всім однаковий
// function createUl(text) {
//     document.write('<ul>');
//     document.write(`<li>${text}`);
//     document.write(`<li>${text}`);
//     document.write(`<li>${text}`);
//     document.write('</ul>')
// }
//
// createUl('hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createUl2(text, numberLi) {
//     document.write('<ul>');
//     for (let i = 0; i < numberLi; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }

// createUl2('hello world', 5);

//варіант 2
// function createUl2(txt_1, txt_2, txt_3) {
//     document.write('<ul>');
//     if (txt_1 !== undefined) {
//         document.write(`<li>${txt_1}</li>`);
//     }
//     if (txt_2 !== undefined) {
//         document.write(`<li>${txt_2}</li>`);
//     }
//     if (txt_3 !== undefined) {
//         document.write(`<li>${txt_3}</li>`);
//     }
//     document.write('</ul>');
// }
//
// createUl2('hello world', undefined, 'hello world 3');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує
// для них список
// const anyArray = [true,'Stepan Giga', 2021, 'Ivo Bobul'];
//
// function createList(array) {
//     document.write('<ol>');
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write('</ol>');
// }
//
// createList(anyArray);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить
// їх в документ. Для кожного об'єкту окремий блок.

// let list = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50},
//     {id: 3, name: 'Ivo', age: 65}];
//
// function createDivArray(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}, ${arrayElement.name}, ${arrayElement.age}</div>`)
//     }
// }
//
// createDivArray(list);

//створити функцію яка повертає найменше число з масиву
// function minNumberReturn(a, b, c) {
//
//     let min
//
//     if (a < b && a < c) {
//         min = a
//     } else if (b < a && b < c) {
//         min = b
//     } else if (c < a && c < b) {
//         min = c
//     }
//
//     return min;
// }
//
// console.log(minNumberReturn(3, 2, 1));

//створити функцію яка повертає найбільше число з масиву
// function maxNumberReturn(a, b, c) {
//
//     let max
//
//     if (a > b && a > c ) {
//         max = a
//     } else if (b > a && b > c) {
//         max = b
//     } else if (c > a && c > b) {
//         max = c
//     }
//      return max;
// }
//
// console.log(maxNumberReturn(1, 2, 3));

//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let numbersArray = [1, 2, 10, 10];
//
// function sumArrayNumbers(array) {
//     let sum = 0
//
//     for (let i = 0; i < array.length; i++) {
//         // console.log('sum = ',sum)
//         // console.log('i = ',i)
//         // console.log('array i = ', array[i])
//         // console.log('*****')
//         sum = sum + array[i];
//     }
//
//     // document.write(`${sum}`);
//
//     return sum;
// }
//
// console.log(sumArrayNumbers(numbersArray));


//23:21 - 25:48
// function msg(txt) {
//     document.write(`<h1> ${txt} </h1>`);
// }
//
// msg('hello world');
// msg('hi Elizabeth!');

//28:36
// function listCreator(a, b, c) {
//     document.write('<ul>');
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${b}</li>`);
//     if (c !== undefined) {
//         document.write(`<li>${c}</li>`);
//     }
//     document.write('</ul>');
// }
//
// listCreator('hello', 'bye'); //c = undefined

//40:40
// let numbers = [111, 222, 333];
//
// let users = [
//     {name: 'sergii', age: 28, country: 'ukraine'},
//     {name: 'oliya', age: 28, country: 'ukraine'},
//     {name: 'stepan', age: 28, country: 'ukraine'},
//     {name: 'evgen', age: 28, country: 'ukraine'},
//     {name: 'alex', age: 28, country: 'ukraine'},
// ];
//
// let products = [
//     {tittle: 'product_1', price: 10, code: 5348},
//     {tittle: 'product_1', price: 10, code: 5348},
//     {tittle: 'product_1', price: 10, code: 5348},
//     {tittle: 'product_1', price: 10, code: 5348},
//     {tittle: 'product_1', price: 10, code: 5348}
// ];
//
// function iteratorOfArray(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement); //) (arrElement.name) ...
//     }
// }
//
// iteratorOfArray(numbers);
//
// iteratorOfArray(users);
//
// iteratorOfArray(products);

//48:35
// function arrayCreator(a, b, c) {  //(a, b, c, 200, 300) - деякі аргументи задано спочатку в самій ф-ції
//     let arr = [a, b, c];
//     return arr;
// }
//
// let array1 = arrayCreator(111, 222, 333);
// console.log(array1);
//
// let array2 = arrayCreator('sergii', 'petro', 'vasia');
// console.log(array2);

//53:50
// function checkCreator(arrayOfOrderedFood) {
//     arrayOfOrderedFood.push('I did not order it');
//     return arrayOfOrderedFood;
// }
//
// let check = checkCreator(['meet', 'salat', 'beer']);
// console.log(check);

//55:43 function divCreator
// function divCreator(counter) {
//     for (let i = 1; i <= counter; i++) {
//         document.write(`<div> ${i} - test divCreator function </div>`);
//     }
// }
//
// divCreator(10);

//1:09
// function summary(arrayChecks) {
//     let result = 0;
//     for (const check of arrayChecks) {
//         result = result + check;
//     }
//     return result;
// }
//
// const summary_1 = summary([100, 200, 300, 1000]);
// console.log(summary_1);
//
// console.log(summary([100, 200, 300, 1000]));
// console.log(summary([10, 30, 40, 50]));

//1:13:17 *rest-argument*
// function calculator(...xxx) {
//     console.log(xxx);
// }
//
// calculator(1, 4, 10, 'hello world');