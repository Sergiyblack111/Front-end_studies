// alt + insert -> задати поля конструктора
// ctrl + p -> підказка, привязка

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, email, phone) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone
// }
//
// const user = new User(1, 'Sergii', 'Oliinyk', 'sergii@icloud.com',
//     +380980023477);
//
// console.log(user);
// user.name = 'oleg';
// console.log(user);
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// const userArr = [];
//
// const user1 = new User(1, 'dwed', 'wedwe', 'wqdqw', 43355);
// const user2 = new User(2, 'dwed', 'wedwe', 'wqdqw', 43355);
//
// userArr.push(user1);
// userArr.push(user2);
//
// console.log(userArr);
//
// const userArr_1 = [
//     new User(14, 'Stepan', 'Giga', 'sg@gmail.com', 30680000001),
//     new User(2, 'Olko', 'Atb', 'av@gmail.com', 30680000002),
//     new User(36, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003),
//     new User(43, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004),
//     new User(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005),
//     new User(61, 'Stepan', 'Misko', 'ashh@gmail.com', 30680000006),
//     new User(78, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007)
// ];
//
// console.log(userArr_1[0]);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з
// // парними id (filter)
// const filterUser = userArr_1.filter(user => {
//     if (user.id % 2 === 0) {
//         return user
//     }
// });
//
// console.log(filterUser);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// userArr_1.sort((a, b) => a.id - b.id);
// console.log(userArr_1.sort());
//
// console.log(userArr_1.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле order є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id,
//             this.name = name,
//             this.surname = surname,
//             this.email = email,
//             this.phone = phone,
//             this.order = order
//     }
// }
//
// let client = new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//     8);
//
// console.log(client);


// створити пустий масив, наповнити його 10 об'єктами Client

// let emptyArray = [
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         8),
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         6),
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         3),
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         8),
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         1),
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         11),
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         13),
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         13),
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         14),
//     new Client(1, 'vasia', 'vasin', '@gmail', 3809800000,
//         3)
// ];
//
// console.log(emptyArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в
// полі order по зростанню. (sort)

// console.log(emptyArray.sort((a, b) => a.order - b.order));

// let sortCLients = emptyArray.sort((a, b) => a.order.length - b.order.length);
// console.log(sortCLients)

//8:41 об'єднуємо два масива в один об'єкт
// let obj = {};
//
// let fields = ['id', 'name', 'surname'];
//
// let values = ['1', 'kokos', 'abrikosov'];
//
// for (let i = 0; i < values.length; i++) {
//     obj[fields[i]] = values[i];
// }
//
// console.log(obj);

//17:50 привязка - this
// let obj = {
//     name: 'Vasya',
//     surname: 'Pupkin',
//     greeting: function () {
//         return `hello my name is ${this.name}, my surname is - ${this.surname}`;
//     },
//     wife: {
//         name: 'Olga',
//         vitannya: function () {
//             console.log(`hello this is ${this.name}`);
//         }
//     }
// }
//
// console.log(obj.greeting());
// obj.wife.vitannya();

// 34:04 замикання! запаковуємо name і age щоб вберегтии від змін
// function userCreator(name, age) {
//
//     let obj = {name: name, age: age}
//
//     return {
//         getName: () => { return obj.name },
//         getAge: () => { return obj.age },
//         setAge: function (age) {
//             obj.age = age;
//         }
//     }
// }
//
// let manipulator = userCreator('kokos', 20);
// manipulator.age = 10;
// console.log(manipulator);
// console.log(manipulator.getAge());

// console.log(manipulator);
// console.log(manipulator.getName());
// console.log(manipulator.getAge());
// manipulator.setAge(15);
// console.log(manipulator.getAge());

//52:06 constructors classes
// function User (id, name, skills) {
//     this.id = id,
//         this.name = name,
//         this.skills = skills,
//         this.greeteng = function () {
//             console.log(`hello my name is ${this.name}`);
//     };
// }
//
// let user1 = new User(1, 'kokos', ['java', 'js']);
// console.log(user1);
//
// let user2 = new User(2, 'vasya', ['html', 'mysql', 'mongo']);
// console.log(user2);
//
// let userArray = [user1, user2];
//
// user1.greeteng();
// user2.greeteng();

//53.38 constructor
// class User {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
//
//     greeting() {
//
//         return `hello my name is ${this.name}`
//     }
// }
//
// let user = new User(1, 'olga');
// console.log(user);
//
// console.log(user.greeting());

// 1:04:00 extends - розширення
// class Car {
//     constructor(model, power, name) {
//         this.model = model;
//         this.power = power;
//         this.name = name;
//     }
//
//     drive(name) {
//         console.log(`hi world! I am is ${name}`)
//     }
//
//     drive1() {
//         console.log(`hi world! I am is ${this.model}`)
//     }
// }
//
// class SuperCar extends Car {
//
//     constructor(model, power, name, type) {
//         super(model, power, name);
//         this.type = type;
//     }
// }
//
// let superCar = new SuperCar('offroad', 165, 'werewrwere');
// console.log(superCar);
//
// class MultiCar extends SuperCar {
//
//     constructor(model, power, name, type, boost) {
//         super(model, power, name, type);
//         this.boost = boost;
//     }
// }
//
// let multiCar = new MultiCar('wrx', 165, 'qwe', 123, 555);
// console.log(multiCar);
// multiCar.drive('Petro');
// multiCar.drive1();

