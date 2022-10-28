// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [1, 2, 3, 4, 5];
// let word  = [`one`, `two`, `three`, `four`, `five`];
// let strNumBool = [`dog`, `fox`, 10, 11, true, false]; {
//     console.log(numbers);
//     console.log(word);
//     console.log(strNumBool);
// }

/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
    Вивести в консоль*/

// let array = [];
// array[0] = 'html';
// array[1] = 'css';
// array[2] = 'js';
// array[3] = 'jsNode';
// array[4] = 'java';
// console.log(array[1]);
// document.write(array[1]);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// document.write(`<ol>`);
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<li>text</li>`);
// };
//
//     document.write(`<ol>`)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом
// всередині
// document.write('<ol>');
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<li>${i} txt</li>`)
//
// }
//
// document.write('<ol>');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let j = 0;
// while (j < 20) {
//     document.write(`<h1> empty text while </h1>`);
//     j++
// }
//
// console.log(j)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let q = 0;
// while (q < 20) {
//     document.write(`<h1> text ${q} </h1>`);
//     q++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*let numArray = [1,2,3,4,5,6,7,8,9,10];
for (i = 0; i<numArray.length; i++) {
    console.log(numArray[i])
}*/

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let allArrey = [false, 'two', 111, true, 'okten', 23, 45,'vasia', {}, [], 'hi'];
// for (let i = 0; i < allArray.length; i++) {
//     console.log(allArray[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки булеві елементи
// let arreyBoolean = [false, 'one', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
// for (let i = 0; i < arreyBoolean.length; i++) {
//     if (typeof arreyBoolean[i] === 'boolean') {
//         console.log(arreyBoolean[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки числові елементи
// let arrayNumber = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
// for (let i = 0; i < arrayNumber.length; i++) {
//     if (typeof arrayNumber[i] === 'number') {
//         console.log(arrayNumber[i]);
//     };
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
//     вивести тільки рядкові елементи
// let arreyString = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
// for (let i = 0; i < arreyString.length; i++) {
//     if (typeof arreyString[i] === 'string') {
//         console.log(arreyString[i]);
//     };
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до
// конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let newEmptyArray = [];
// newEmptyArray[0] = 'Happy';
// newEmptyArray[1] = 'New';
// newEmptyArray[2] = 2022;
// newEmptyArray[3] = 'Chto';
// newEmptyArray[4] = 'Gde';
// newEmptyArray[5] = 'Kuda';
// newEmptyArray[6] = 'Sinho Faza Tron';
// newEmptyArray[7] = true;
// newEmptyArray[8] = 2019;
// newEmptyArray[9] = false;
// for (let i = 0; i < newEmptyArray.length; i++) {
//     console.log(newEmptyArray);
// }

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через
// console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log('поточний крок циклу: ' + i + ' ');
//     document.write(`поточний крок циклу: ${i} <br>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write
// for (let i = 0; i < 100; i++) {
//    console.log(`поточний крок циклу: ${i}`);
//    document.write(`поточний крок циклу: ${i}\n`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log
// та document.write
// for (let i = 0; i <= 100; i += 2) {
//     console.log(`поточний крок циклу: ${i}`);
//     document.write(`поточний крок циклу: ${i} <br>`)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`поточний номер циклу: ${i}`);
//         document.write(`поточний номер циклу: ${i} <br>`)
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(`поточний номер циклу: ${i}`);
//         document.write(`поточний номер циклу: ${i}<br>`)
//     }
// }

// 11:50
// let menuItems = [
//     'About',
//     'Courses',
//     'Blog',
//     'Contacts'
// ];
//
// document.write('<ul>');
//
// for (const menuItem of menuItems) {
//     document.write(`<li>${menuItem}</li>`)
// }
//
// document.write('</ul>')

// 18:38
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// document.write(`<ol class="users-box">`)
// for (const user of users) {
//     if (!user.status) {
//         document.write(`<li>${user.name} ${user.status}</li>`);
//     }
// }
// document.write(`</ol>`)