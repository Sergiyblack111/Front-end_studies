/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
    до якої четверті години попадає число (в першу, другу, третю або четверту частину години).*/
// let time = prompt('введіть хвилину від 0 до 59');
// if (time >= 0 && time <= 14) {
//     console.log('1 part');
// } else if (time >= 15 && time <= 29 ) {
//     console.log('2 part');
// } else if (time >= 30 && time <= 44) {
//     console.log('3 part');
// } else if (time >= 45 && time <= 59) {
//     console.log('4 part');
// } else {
//     console.log('data entered incorrectly');
// }

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).*/
// let days = +prompt('введіть день від 1 до 31');
// if (days >= 1 && days <= 10) {
//     console.log('перша декада');
// } else if (days >= 11 && days<=20) {
//     console.log('друга декада');
// } else if (days >= 21 && days <= 30) {
//     console.log('третя декада');
// } else {
//     console.log('некоректно введені дані');
// }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти
// скрипта - з коротким записом(тернаркою)
/*let test1
if (confirm('?')) {
    test1 = 'вірно'
}
else {
    test1 = 'невірно'
}
console.log(test1)*/

/*let test2 = confirm('?') ? 'вірно' : 'невірно'
console.log(test2)*/

/*let test3 = prompt('введіть текст')
console.log(test3)*/


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

/*let a = +prompt('введіть число 1, 0, -3')
if (a !== 0) {
    console.log('вірно')
}
else {
    console.log('невірно')
}*/


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
//     дня тижня і на екрані відображається інфа що заплановано на цей день.

/*let dayOfWeeks = +prompt('введіть день тижня від 1 до 7')
switch (dayOfWeeks) {
    case 1:
        console.log('понеділок - спорт')
        break
    case 2:
        console.log('вівторок - відпочинок')
        break
    case 3:
        console.log('середа - читання')
        break
    case 4:
        console.log('четвер - поїхати до батьків')
        break
    case 5:
        console.log('пятниця - помити авто')
        break
    case 6:
        console.log('субота - вихідний')
    case 7:
        console.log('неділя - вихідний')
        break
}*/


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

/*let year = +prompt('введіть кількість днів в цьому році')
if (year % 4 === 0) {
    console.log('рік високосний')
} else  {
    console.log('ура! наш рік нормальний')
}*/

/*(+prompt('введіть кількість днів в цьому році') % 4 === 0) ? console.log('рік високосний') :
    console.log('ура! наш рік нормальний')*/


/*- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна»
    назва JavaScript?“. Якщо користувач вводить «ECMAScript», то показати: «Правильно!»,
    інакше – відобразити: «Не знаєте? ECMAScript!*/

// let oficialName = prompt('яка офіційна назва JavaScript?')
// if (oficialName === 'ECMAScript') {
//     alert('правильно, гарна робота')
// } else {
//     alert('неправильно, офіційна назва ECMAScript!')
// }


//Code from 2 lesson video
// let color = prompt('enter color');
// let roadIsClear = color === 'green'? prompt('road is clear?'):null;
//debugger
// if (color === 'green' && roadIsClear === 'yes') {
//     console.log('you can go');
// } else if (roadIsClear === 'no') {
//     console.log('STOP');
// } else if (color === 'orange') {
//     console.log('please wait');
// } else if (color === 'red') {
//     console.log('STOP');
// }

//confirm
// let b = confirm('???');
// console.log(b)
//
// let true_False
// if (confirm('ok_true_log-10 or cansel_false_log-20')) {
//     true_False = 10; //ok(true) = 10
// } else {
//     true_False = 20; //cansel(false) = 20
// }
// console.log(true_False);
//
// 50:18 ternar operator
// let foobar = confirm('ok_true_log-10 or cansel_false_log-20') ? 10 : 20;
// console.log(foobar);

//swithc 40:05
// let key = prompt('enter key'); //hello
// switch (key) {
//     case 'hello':
//         console.log('yes, hello');
//         break;
//     case 'foo':
//         console.log('yes, foo');
//         break;
//     default:
//         console.log('no!')
// }

//56:34
// let yourName = prompt('enter you name');
// if (!!!yourName) { // !!! = для того щоб false перетворити в true і отримати хоч якесь
//                    // значення в разі якщо клієнт не ввів жодних даних
//     yourName = 'the client did not enter data';
// }
// console.log(yourName)
// 1:00
// let yourName = prompt('enter you name') || 'the client did not enter data';
// console.log(yourName);
