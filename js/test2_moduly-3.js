// --------задача 5 - модуль 3--------
// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line
//   const result = [];

//   for (const obj of array) {
//     if (prop in obj) result.push(obj[prop]);
//     // console.log(obj[prop]);
//     // console.log(obj);
//   }
//   return result;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];
// // -------------------------------------------
// let key = "price";
// (products[4][key] === products[4]["price"]) === products[4].price;

// console.log(products[4][key]);
// console.log(products[5]["name"]);
// ---------------------------------------------
// console.log(getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
//  []
// ---------------------------------------------------------------
// -
// ------------------------задача-6 --------------------

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800
// ------------------------------------------------------

// function calculateTotalPrice(allProdcuts, productName) {
//   "use strict";
//   // Write code under this line
//   let total = 0;

//   for (const obj of allProdcuts) {
//     if (obj.name === productName) {
//       total = total + obj.price * obj.quantity;
//     }
//     console.log(obj.price);
//   }

//   return total;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// // -------------------------------------------
// let key = "price";
// (products[4][key] === products[4]["price"]) === products[4].price;

// console.log(products[4][key]);

// ---------------------------------------------

// console.log(calculateTotalPrice(products, "Радар"));
// // 9080

// console.log(calculateTotalPrice(products, "Сканер"));
// // 10200

// console.log(calculateTotalPrice(products, "Захват"));
// // 2400

// console.log(calculateTotalPrice(products, "Дроид"));
// 2800
// ==========================================================
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//   step: 0,
//   up(n) {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };
// ladder.up().up().up().showStep().up().up().showStep();

// ladder.up(1);
// ladder.up(1);
// ladder.up(1);
// ladder.showStep();
// ladder.down(1);

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().up().showStep().up().up().showStep();
// *****************************************************

// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "Вася",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // ТУТ добавив .bind(user)
// // let answer = askPassword.bind(user);
// ********************************************************************

// *************************************************
// Дан массив с числами(Написать самим).Ваша ф - я возвращает
// среднее арифметическое его элементов

// const array = [2, 5, 3, 8, 6, 7];

// const averageValue = function (arr) {
//   let total = 0;
//   let average;
//   for (let element of arr) {
//     // console.log(element);
//     total += element;
//     average = total / array.length;
//     // console.log(array.length);
//   }
//   // console.log(total);
//   console.log(average);
// };

// averageValue(array);

// ********************************************************************

// *************************************************
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами,
//   причем регистр букв не имеет значения.Учитываются лишь символы; пробелы или
// знаки препинания в расчет не берутся.

// Анаграмма - слово, которое содержит все буквы другого слова в том же количестве,
//   но ином порядке
// -
// -
// хід думок: 1)порівняй жи два масиви мають однакову довжину
// 2)придумай як перебрпти масив і порівняти чи співпадає ксть букв однакових з
// кількістю букв таких же в другому масиві
// -
// -
// -
// ===================================================================
// Напишите функцию f, которая будет обёрткой вокруг другой функции g.
// Функция f обрабатывает первый аргумент сама, а остальные аргументы передаёт
// в функцию g, сколько бы их ни было.
// Например: function f() {
//   /* ваш код */
// }
// function g(a, b, c) {
//   alert(a + b + (c || 0));
// }
// f("тест", 1, 2); // f выведет "тест", дальше g посчитает сумму "3"
// f("тест2", 1, 2, 3); // f выведет "тест2", дальше g посчитает сумму "6"
// // Код функции f не должен зависеть от количества аргументов.
// function f(x, ...args) {
//   console.log(x);
//   function g(args) {
//     let total = 0;
//     for (let el of args) {
//       total += +el;
//     }
//     console.log(total);
//     // console.log(args);
//   }
//   g(args);
// }
// f("тест", 1, 2, 3);

// const array = [8, 2, 4, 6, 1, 9];
// const _spread = [...array];
// console.log(_spread);
// // -------------
// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);
// ---------------варіант-2-----------------------
// const fn = (a, ...rest) => {

//     return (...rest) => {
//         const sum = rest.reduce((acc, cur) => {
//             acc += cur;
//             return acc
//         }, 0);
//         return ${a}${sum}
//     }
// }
// попробуй чи працює такий варіант
// только return ${a}${sum}
// блин чего то в дискорде кавычку ' убирает
// короче в таких кавычка надо ретурн
