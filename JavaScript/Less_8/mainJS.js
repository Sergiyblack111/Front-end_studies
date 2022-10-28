
//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
//document.getElementsByTagName :

//-- отримує текст з параграфа з id "content"
let contentById = document.getElementById('content');
console.log(contentById);

//-- отримує текст з блоку з id "rules"
let rulesById = document.getElementById('rules');
console.log(rulesById);

//-- замініть текст параграфа з id 'content' на будь-який інший
contentById.innerHTML = '<b>TEST TEST TEST Lorem ipson beauty today</b>'

//-- замініть текст параграфа з id 'rules' на будь-який інший
rulesById.innerHTML = '<h1>Декілька правил виконання ДЗ в OKTEN SCHOOL</h1>'

//-- змініть кожному елементу колір фону на червоний
// таким чином задаємо колір для всіх елементів (чілдренів які є в боді)
/*let childrenBackground = document.body.children;
for (const element of childrenBackground) {
  element.style.backgroundColor = 'red';
}*/

// або нижче- колір задаємо тільки для певних елементів - у цьому випадку nskmrb для - li
/*let childrenBackground = document.body.getElementsByTagName('li');
for (const element of childrenBackground) {
  element.style.backgroundColor = 'red';
}*/

//-- змініть кожному елементу колір тексту на синій
let childrenTextColor = document.body.children;
for (const txt of childrenTextColor) {
  txt.style.color = 'blue';
}

//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesId = document.getElementById('rules');
console.log(rulesId.classList);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний
let classRules = document.getElementsByClassName('fc_rules');
for (const el of classRules) {
   el.style.color = 'green'
}

//  1:08:00
// function scraper(startElement) {
//     console.log(startElement);
//     let children = startElement.children;
//     for (const child of children) {
//         scraper(child);
//     }
// }
//
// scraper(document.body);
