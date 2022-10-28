// let user_1 = {
//     name: 'vasya',
//     greeting: function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     },
//     foobar: function (a, b, c) {
//         console.log(this, a, b, c);
//     }
// };
//
// let user_2 = {name: 'kokos'};
// user_1.greeting.call(user_2, 'hi');
//
// let args = ['asd', 'zxc'];
// user_1.foobar.apply(user_2, args);
//
// let greeting = user_1.greeting.bind(user_2); //клонування ф-ції
//
// greeting('hello');
//
// //23:18
// function User (name, surname) {
//     this.name = name;
//     this.surname = surname
// }
//
// function Customer (name, surname, password) {
//     User.apply(this, arguments);
//     this.password = password;
// }
//
// let customer = new Customer ('asd', 'qwe', 'zxc');
// console.log(customer);
//
// // lesson 13 part 2
// // 07:02
// let nums = [1, 2, 3];
//
// Array.prototype.print = function () {
//     for (const element of this) {
//         console.log(element);
//     }
// };
//
// nums.print();

// 26:13
// new Promise((resolve, reject) => {
//     let counter = 0;                                       // counter = 0
//     setTimeout(() => {
//         console.log('do', counter);                        // log 'do 0'
//         counter++;                                         // counter = 1
//         resolve(counter);
//     }, 1000);
// })
//
// .then((counter) => {
//     console.log(counter);                                    // log '1'
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('do', counter);                      // log 'do 1'
//             counter++;                                       // counter = 2
//             resolve(counter);
//         }, 2000);
//     })
// })
// .then (counter => {
//     //console.log(counter);                                  // log '2'
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log('do', counter);                       // log 'do 2'
//            counter++;                                        // counter = 3
//            resolve(counter);
//        }, 3000);
//    })
// })
// .then (counter => {
//         //console.log(counter);                                  // log '3'
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('do', counter);                       // log 'do 3'
//                 counter++;                                        // counter = 4
//                 resolve(counter);
//             }, 3000);
//         })
//     });

// 35:37
// function timeoutFn(counter, milis) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('async operation', counter);
//             counter++;
//             resolve(counter);
//         }, milis);
//     });
// }
//
// timeoutFn(0, 2000).then(counter => {
//     return timeoutFn(counter, 2000)
// })
// .then(counter => timeoutFn(counter, 4000));

// 42 : 15
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json();
})
.then(value => console.log(value));