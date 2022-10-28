
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике
// на кнопку исчезал элемент с id="text".

// 1 варінт ===========================================================
// let txt = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     txt.style.display = 'none';
// };

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('button').onclick = function () {
//     document.getElementById('button').hidden = true;
// }

// 2 варіант ===========================================================
// document.getElementById('button').onclick = function () {
//     document.getElementById('text').hidden = true;
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// document.getElementById('button1').onclick = function () {
//     let age = document.getElementById('age').value;
//     if (!age) {
//         alert('Ви не ввели свого віку');
//     } else if (age < 18) {
//         alert('Вам менше 18');
//     } else {
//         alert('Вам більше 18');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// let titleElement = document.querySelector('.title');
// let ulList = document.querySelector('.ulList');
//
// titleElement.onclick = function () {
//     ulList.classList.toggle('ul_display_none');
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {name: 'Максим', commentary: 'Вчи English'},
//     {name: 'Іван', commentary: 'Досить сидіти, вже пізно'},
//     {name: 'Льоня', commentary: 'Cуп, стине, ходи додому'},
//     {name: 'Іра', commentary: 'Воно, тобі треба?'},
// ];
//
// let divFather = document.createElement('div');
//
// for (const element of comments) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     let hr = document.createElement('hr');
//
//     h3.innerText = element.name;
//     p.innerText = element.commentary;
//     btn.innerText = 'згорни/розгорни';
//
//     div.append(h3, p, btn);
//     divFather.append(div, hr);
//
//     btn.onclick = function () {
//         p.classList.toggle('pHidden');
//         // //btn.previousElementSibling.classList.add('pHidden'); - 2 варіант
//     }
// }
//
// document.body.appendChild(divFather);

// прев'ю   10:05
// let block = document.createElement('div');
//
// block.classList.add('block');
// block.style.width = ('100px');
// block.style.height = ('100px');
// block.style.background = ('black');
//
// document.body.appendChild(block);
//
// block.onmousemove = function (ev) {
//     let x = ev.x;
//     let y = ev.y;
//     console.log(x, y);
//     this.style.background = `rgb(${x}, ${y}, ${x - y})`;
// }

// прев'ю   14:20         при натисканні на button - сторінка НЕ перезавантажується
// document.forms.form1.onsubmit = function (e) {
//     e.preventDefault();
// }

// 9:09     привязуємо декілька подій на одну дію
// let btn = document.createElement('button');
// btn.innerText = 'click me';
// document.body.appendChild(btn);

// btn.addEventListener('click', function () {
//     console.log('clikc1');
// });
// btn.addEventListener('click', function () {
//     console.log('clikc2');
// });

// 25:23
// const btn1 = document.createElement('button');
// btn1.innerText = 'button';
// document.body.appendChild(btn1);
//
// let points = [];
//
// document.onclick = function (ev) {
//     points.push({x: ev.clientX, y: ev.clientY});
// };
//
// btn1.addEventListener('click', () => {
//     console.log(points);
// });

// 33:47
// let users = [];
//
// let form = document.forms[0];
// form.onsubmit = function (e) {
//     e.preventDefault();         // заборонили перезавантаження сторінки після натискання на баттон
//     users.push({login: e.target.login.value, password: e.target.password.value});
//
//     console.log(users);
// };

// 41:37
// let inputLogin = form.login;
// inputLogin.addEventListener('input', (e) => {
//     if (e.target.value.toLowerCase().includes('duck')) { // toLowerCase - + діє навіть коли ми введемо у верхньому регістрі
//         alert('krya-krya');
//     }
// });

//50:03
// let users = [
//     {name: 'sergii', age: 28, country: 'ukraine', status: true},
//     {name: 'oliya', age: 28, country: 'ukraine', status: false},
//     {name: 'stepan', age: 28, country: 'ukraine', status: true},
//     {name: 'evgen', age: 28, country: 'ukraine', status: false},
//     {name: 'alex', age: 28, country: 'ukraine', status: true},
// ];
//
// let form = document.forms[0];
//
// let userNameInput = form.username;
//
// let results = document.getElementById('results');
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     results.innerText = '';
//     let userNameValue = userNameInput.value;
//     let filter = users.filter(value => value.name === userNameValue);
//     for (const filterElement of filter) {
//         let li = document.createElement('li');
//         li.innerText = `${filterElement.name} ${filterElement.age} ${filterElement.status}`;
//         results.append(li);
//     }
// };

// 57:07
// let users = [
//     {name: 'sergii', age: 28, country: 'ukraine', status: true},
//     {name: 'oliya', age: 28, country: 'ukraine', status: false},
//     {name: 'stepan', age: 28, country: 'ukraine', status: true},
//     {name: 'evgen', age: 28, country: 'ukraine', status: false},
//     {name: 'alex', age: 28, country: 'ukraine', status: true},
// ];
//
// let titleForCheckbox = document.createElement('span');
// titleForCheckbox.innerText = 'status';
//
// document.body.appendChild(titleForCheckbox);
//
// let checkbox = document.createElement('input');
// checkbox.setAttribute('type', 'checkbox');
//
// document.body.appendChild(checkbox);
//
// checkbox.onclick = function () {
//
//     let resultsArray = [];
//
//     if (checkbox.checked) {
//         resultsArray = users.filter(value => value.status);
//     } else {
//         resultsArray = users.filter(value => !value.status);
//     }
//
//     for (const item of resultsArray) {   // вивели кожен елемент масиву окремо
//         console.log(item);
//     }
//
//     //console.log(resultsArray);          // вивели кожен наповнений масив загалом
// };

// 59:00 всілякі штуки для інпутів - шаблони для заповнювання, обмеження, методи, регулярні вирази ... та інше
// https://regexr.com/




