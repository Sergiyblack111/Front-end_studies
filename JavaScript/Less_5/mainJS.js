// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника
// const calculateAreaRectangle = (a, b) => {
//     return a * b;
// }
//
// document.write(`площа прямокутника: ${calculateAreaRectangle(10, 10)}`);

// - створити функцію яка обчислює та повертає площу круга
// const calculateAreaCircle = (r) => {
//     return 3.14 * (r ** 2);
// }
//
// document.write(`площа круга: ${calculateAreaCircle(10)}`);

//- створити функцію яка обчислює та повертає площу циліндру S= 2πRH
// const calculateAreaCylinder = (r, h) => {
//     return 2 * 3.14 * r * h;
// }
//
// document.write(`площа циліндра: ${calculateAreaCylinder(10, 10)}`);

//- створити функцію яка приймає масив та виводить кожен його елемент
// let array = [1,2,3,4,5, 'hello world', 'okten'];
//
// const dataArray = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`${arr[i]} <br>`);
//     }
// }
//
// dataArray(array);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const dataP = (text) => {
//     for (let i = 0; i < 10; i++) {
//         document.write(`${[i]} - ${text} <hr>`);
//     }
// }
//
// dataP('hello world');

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// const fnCreatUl = (liText) => {
//     document.write('<ul>');
//     document.write(`<li>${liText}</li>`);
//     document.write(`<li>${liText}</li>`);
//     document.write(`<li>${liText}</li>`);
//     document.write('</ul>');
// }

// const fnCreatUl = (liText) => {
//     for (let i = 0; i < 2; i++) {
//         document.write('<ul>');
//         document.write(`<li>${liText}</li>`);
//         document.write(`<li>${liText}</li>`);
//         document.write(`<li>${liText}</li>`);
//         document.write('</ul>');
//     }
// }

// fnCreatUl('hello world');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const createUlDinamic = (number, text) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
//
// createUlDinamic(10, 'hello world');

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для
// них список
// let anyArray = [true, 'Stepan Giga', 2021, 'Ivo Bobul'];
//
// const createListOfArray = (array) => {
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>індекс елемента №: ${i}, елемент масиву по списку: ${i+1} - ${array[i]}</li>`);
//     }
//     document.write(`</ol>`);
// }
//
// createListOfArray(anyArray);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в
// документ. Для кожного об'єкту окремий блок.
// let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name:
//         'Ivo', age: 65}];
//
// const createDivForObjOfArr = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`)
//     }
// }
//
// createDivForObjOfArr(newArray);



