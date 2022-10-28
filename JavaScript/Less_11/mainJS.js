
// -створити форму з інпутами для name та age.
//  При відправці форми записати об'єкт в localstorage
// let {name, age} = document.forms.userForm; //через деструктуризацію
// //let name = document.forms.userForm.name;
// //let age = document.forms.userForm.age;
// let btn = document.getElementById('btn');
// let key = 'key';
//
// let save = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     };
//     localStorage.setItem(key, JSON.stringify(user));
// };
//
// btn.onclick = (e) => {
//     e.preventDefault();
//     save(name.value, age.value);
// }

// 2 варіант
// let user = document.forms.userForm;
// user.onsubmit = function (e) {
//     e.preventDefault();
//     localStorage.setItem('userValue', JSON.stringify({
//         name: e.target.nameInput.value,
//         age: e.target.ageInput.value
//     }));
// }

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let {model, type, volume} = document.forms.carForm; // деструктуризація
// //let model = document.forms.carForm.model;
// //let type = document.forms.carForm.type;
// //let volume = document.forms.carForm.volume;
// let btnCar = document.getElementById('btnCar');
// let item = 'keyCar';
//
// let saveCar = (modelCarValue, typeCarValue, volumeCarValue) => {
//     let ollInformCar = {
//         modelValue: modelCarValue,
//         typeValue: typeCarValue,
//         volumeValue: volumeCarValue
//     }
//     localStorage.setItem(item, JSON.stringify(ollInformCar));
// };
//
// btnCar.onclick = (e) => {
//     e.preventDefault();
//     saveCar(model.value, type.value, volume.value);
// }

// прев'ю 17:15
// let users = [
//     {name: 'sergii', age: 23,},
//     {name: 'oliya', age: 24,},
//     {name: 'stepan', age: 25},
//     {name: 'evgen', age: 26},
//     {name: 'alex', age: 27}
// ];
//
// localStorage.setItem('users', JSON.stringify(users));
// let usersJSON = localStorage.getItem('users');
// console.log(usersJSON);
// let parse = JSON.parse(usersJSON);
// console.log(parse);
// parse.push({});
// console.log(parse);
// localStorage.setItem('users', JSON.stringify(parse));

// прев'ю 26:24
// document.cookie = 'name = kokos';
// document.cookie = 'surname = kokosov';
// document.cookie = 'token = qwe;max-age=2344;path=/';
//
// let cookies = document.cookie.split(/;/);
//
// console.log(cookies);
//
// let obj = {};
//
// for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].split(/=/);
//     obj[cookie[0]] = cookie[1];
// }
//
// console.log(obj);

// 45:57
// let users = [
//     {name: 'sergii', age: 28, country: 'ukraine', status: true},
//     {name: 'oliya', age: 28, country: 'ukraine', status: false},
//     {name: 'stepan', age: 28, country: 'ukraine', status: true},
//     {name: 'evgen', age: 28, country: 'ukraine', status: false},
//     {name: 'alex', age: 28, country: 'ukraine', status: true},
// ];
//
// for (const user of users) {
//     let divUser = document.createElement('div');
//     divUser.innerText = user.name;
//     let addToCartButton = document.createElement('button');
//     addToCartButton.innerText = 'add to cart';
//     divUser.appendChild(addToCartButton);
//     addToCartButton.onclick = function () {
//         let users = localStorage.getItem('users'); // json string
//         console.log(users);
//         if (!users) {
//             users = [];
//             users.push(user);
//             let usersArrJson = JSON.stringify(users);
//             localStorage.setItem('users', usersArrJson);
//         } else {
//             let realArrayOfUsersObject = JSON.parse(users);
//             realArrayOfUsersObject.push(user);
//             localStorage.setItem('users', JSON.stringify(realArrayOfUsersObject));
//         }
//     }
//     document.body.appendChild(divUser);
// }

// 58:40
// document.cookie = 'name = kokos';
// document.cookie = 'surname = abrikosov';
// document.cookie = 'age = 31';
// document.cookie = 'status = true';
// console.log(document.cookie);
//
// let cookies = document.cookie.split(';');
// console.log(cookies);

// //let firstCookie = cookies[0];
// //console.log(firstCookie);

// let obj = {};
// for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].split('='); //[name, kokos] [surname, abrikosov]
//     obj[cookie[0]] = cookie[i];
// }
//
// console.log(obj);