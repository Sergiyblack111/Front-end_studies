// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let block = document.createElement('div');
//
// block.classList.add('wrap');
// block.classList.add('collapse');
// block.classList.add('alpha');
// block.classList.add('beta');
//
// block.style.width = '400px';
// block.style.height = '400px';
// block.style.background = 'green';
//
// let p = document.createElement('p');
//
// p.style.fontSize = '50px';
// p.innerText = 'hello world';
//
// let h1 = document.createElement('h1');
// h1.innerText = '!!!!!';
//
// block.append(p, h1);
// document.body.appendChild(block);
//
// document.body.appendChild(block.cloneNode(true));

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// for (const course of coursesAndDurationArray) {
//     let h1 = document.createElement('h1');
//     h1.innerText = `Назва курсу-${course.title}, термін навчання-${course.monthDuration} місяців`;
//     document.body.appendChild(h1);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration
// елементу.
// Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     divElement.style.width = '400px';
//     divElement.style.height = '110px';
//     divElement.style.border = 'solid';
//     divElement.style.borderColor = 'black';
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading')
//     h1.innerText = course.title;
//     h1.style.background = 'blue';
//     h1.style.color = 'white';
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = course.monthDuration;
//     p.style.background = 'yellow';
//     p.style.color = 'black';
//     p.style.width = '100px';
//     p.style.height = '30px';
//
//     divElement.append(h1, p);
//     document.body.appendChild(divElement);
// }

// 21:16
// let wrap = document.createElement('div');
// wrap.classList.add('wrap');
//
// let outer = document.createElement('div');
// outer.classList.add('outer');
//
// let box1 = document.createElement('div');
// box1.classList.add('inner');
// box1.classList.add('box-1');

// let box2 = document.createElement('div');
// box2.classList.add('inner');
// box2.classList.add('box-2');
//
// wrap.appendChild(outer);
// outer.append(box1, box2);
// document.body.appendChild(wrap);

// 36:14
// let products = [
//     {
//         title: 'milk',
//         price: 20,
//         image: 'https://image.shutterstock.com/image-vector/cartoon-milk-carton-600w-649502941.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 25,
//         image: 'http://saverafresh.com/wp-content/uploads/2021/08/istockphoto-466175630-612x612-1.jpg'
//     },
//     {
//         title: 'juice',
//         price: 30,
//         image: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20180426060615/ri/673/picture/2018/4/shutterstock_1By_stockcreations.jpg'
//     },
//     {
//         title: 'tea',
//         price: 35,
//         image: 'https://img3.goodfon.ru/original/1920x1080/1/e2/tea-chay-chashka-blyudce-listiki.jpg'
//     }
// ];

// for (const product of products) {
//     let productDiv = document.createElement('div');
//     productDiv.classList.add('box'); // задали стилі
//
//     let h2 = document.createElement('h2');
//     h2.innerText = `${product.title} ${product.price}`;
//     productDiv.appendChild(h2);
//
//     let imageElement = document.createElement('img');
//     imageElement.src = product.image;
//     imageElement.alt = `${product.title}`;
//     productDiv.appendChild(imageElement);
//
//     let productsDiv = document.getElementsByClassName('products')[0];
//     productsDiv.appendChild(productDiv);
//} // надалі для повторного використання - пакуємо цикл у ф-цію але замінюємо "products" на новий масив з даними

// 53:27 деструктуризація
// let {id, name, sge, wife, wife: {name: wifeName}} = {name: 'vasya', age: 31, status: true, id:1, wife: {name: 'Olya'}};
//використовуємо wifeName -> еліас, псевдонім   або замість  name: 'olya' використовуємо ->             imya: 'olya'
// і тоді псевдоніми не потрібні
// console.log(id);
// console.log(name); //vasya
// console.log(wife);
// console.log(wifeName); //olya
// console.log(imya);

// let u = {name: 'vasya', age: 31, status: true, id:1, wife: {name: 'Olya'}};
//
// function asdqwe({name, age}) {
//     console.log(name, age);
// }

// asdqwe(u); // vasya 31

// 1:01   ще приклад деструктуризації масиву
// let numbers = [11, 22, 33];
// num1 = numbers[0];
// num2 = numbers[1];
// num3 = numbers[2];
// деструктуризуємо
// let [num1, num2, num3] = [11, 22, 33];
// console.log(num1, num2, num3);
//01:02 ще приклад
// let [num1,   , num3] = [11, 22, 33];// пусте місце щоб присвоїти по потрібному порядку і не присвоювати 22 для num3
// console.log(num1, num3);

// 01:04 копіюємо об'єкт (спред   ...)  а не ссилаємось.     Також можемо юзати це в ф-ціях - далі по відео
// let products = [
//     {
//         title: 'milk',
//         price: 20,
//         image: 'https://image.shutterstock.com/image-vector/cartoon-milk-carton-600w-649502941.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 25,
//         image: 'http://saverafresh.com/wp-content/uploads/2021/08/istockphoto-466175630-612x612-1.jpg'
//     },
//     {
//         title: 'juice',
//         price: 30,
//         image: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20180426060615/ri/673/picture/2018/4/shutterstock_1By_stockcreations.jpg'
//     },
//     {
//         title: 'tea',
//         price: 35,
//         image: 'https://img3.goodfon.ru/original/1920x1080/1/e2/tea-chay-chashka-blyudce-listiki.jpg'
//     }
// ];
//
// let products_2 = [...products];

// 01:07   об'єднати об'єкти  (КОПІЮЄ і додає)
// let products = [
//     {
//         title: 'milk',
//         price: 20,
//         image: 'https://image.shutterstock.com/image-vector/cartoon-milk-carton-600w-649502941.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 25,
//         image: 'http://saverafresh.com/wp-content/uploads/2021/08/istockphoto-466175630-612x612-1.jpg'
//     },
//     {
//         title: 'juice',
//         price: 30,
//         image: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20180426060615/ri/673/picture/2018/4/shutterstock_1By_stockcreations.jpg'
//     },
//     {
//         title: 'tea',
//         price: 35,
//         image: 'https://img3.goodfon.ru/original/1920x1080/1/e2/tea-chay-chashka-blyudce-listiki.jpg'
//     }
// ];
//
// let numbers = [11, 22, 33,...products];
// console.log(numbers);

