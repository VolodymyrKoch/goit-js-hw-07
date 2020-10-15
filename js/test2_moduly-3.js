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
// --------------------------------------------
// ---------------практика модуль 5-------------
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), 
// surname(фамилия), rate(ставка за день работы), days(количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//   Зарплата - это произведение(умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
//  = function (name,surname,rate,days)

// class Worker{ 
//   constructor(name,surname,rate,days){
//   this.name = name;
//   this.surname = surname;
// this.rate = rate;
// this.days = days;
// }

// getSalary() { return (this.rate * this.days); }
// }

// let total = new Worker( "Ivan", "Petrov", 10, 31)
// console.log(total.getSalary()); 
//   console.log(Worker.name)
// console.log(total.name)
// console.log(Worker);
// ----------------------------------------------------------

// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// сделайте все его свойства приватными, а для их чтения сделайте методы - геттеры.
// Наш класс теперь будет работать так:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getRate); //выведет 10
// console.log(worker.getDays); //выведет 31
// console.log(worker.getSalary); //выведет 310 - то есть 10*31

// class Worker{ 
//   constructor(name,surname,rate,days){
//   this.name = name;
//   this.surname = surname;
// this.rate = rate;
// this.days = days;
//   }
//   getSalary() { return (this.rate * this.days); }
//   get getName() { return this._name; }
//   get getSurname() { return this._surname; }
//   get getRate() { return this._rate; }
  
  
// }

// let total = new Worker( "Ivan", "Petrov", 10, 31)
// console.log(total.getSalary()); 
//   // console.log(worker.name)
// console.log(Worker);
// console.log(total.getName());
// console.log(total.getSurname); //выведет 'Иванов'
// // console.log(worker.getRate); //выведет 10
// // console.log(worker.getDays); //выведет 31
// // console.log(worker.getSalary); //выведет 310 - то есть 10*31
// =============================================================
// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
  
//   constructor(name) {
//     super(name);    // добавив цей рядок
//     this.name = name;
//     this.created = Date.now();
//   }
// }
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);
// ============================================================

// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function(guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function(amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function(amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// hotel.removeGuests(50);
// --------------------------------------prototyp------
// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true
// console.log(dog)
// -----------------------
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// // const dog = { barks: true };

// console.log(dog.barks); // true
// console.log(dog.eats); // true
// ----------------------------
// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// const mango = new Guest('Mango', 28);

// console.log(mango);

// ------------------масиви---------------------------
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character); //перебирає кожну букву слова javascript . 
// }
// -------------------------------------------
// ---------------ooп------------
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// // getWage(baseSalary, overtime, rate);
// console.log(getWage(baseSalary, overtime, rate));
// -----------------------------
// 
// Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });

// console.log(filteredNumbers); // [4, 5]
// ----------------------------
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(function (value) {
//   return value > 3;
//   // console.log(value > 3);
// });
// console.log(filteredNumbers); // [4, 5]
// ++++++++++++++++++++++++++++++
// const pureMultiply = (array, value) => {
//   // const result;

//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//     // console.log(result);
//   }
//   };
// const numbers = [1, 2, 3, 4, 5];
// pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]

// // Функция вернула новый массив с измененными данными
// // console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// ------------------------------------------
// ---------------модуль 6 ------------------------

// TASKS
// I)
// 1) Написати ф-ю яка приймає рік
// 2) Повертає століття.

// const convertYears = function (year) { 
//   let century = (Math.floor(year / 100 + 1));
// console.log(century);
//   // return century
// }
// years(99)
// years(prompt("введіть рік"))
// --------------------2частина---------------
// let colectionYears = [];
// const years = function (year) { 
  
//   let century = (Math.floor(year / 100 + 1));
//   if (year) colectionYears.push(year) && years(prompt("введіть рік"));

//   colectionYears.forEach(function (element)
//   { console.log(`${element}рік - ${century} століття`); }
//   );
  
//   return century
 
// }
// console.log(years(prompt("введіть рік"))); 

// console.log(colectionYears);
   
// II)
// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття

// const convertYears = function (year) { 
//   let century = (Math.floor(year / 100 + 1));
// console.log(century);
//    return century
// }
// let colectionYears = [];
// const years = function () {
//   let ask;
//   do {
//     ask = (prompt("введіть рік"));
//     ask === null ? "" : colectionYears.push(ask);
//     console.log(colectionYears);
//   }
//   while (ask !== null);
//   colectionYears.forEach(function (element,i)
//   { console.log(`${element}рік - ${convertYears(element)} століття, індекс-${i}`); });
   
// }
// years(); 

// console.log(colectionYears);
// III)
// 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// 2) Функція повертає true якщо рік високосний і false якщо ні
// -----
//  const showYear = function (year) { 
//   return year % 4 === 0;
//     // console.log(year % 4 === 0);
// } 
// console.log(showYear(2021));
  // -------------------------------------------------------------------
  // -----------задача практика-модуль-6----

// const inventors = [
//   {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
//   {first: 'Isaac',last: 'Newton',year: 1643,passed: 1727},
//   {first: 'Galileo',last: 'Galilei',year: 1564,passed: 1642},
//   {first: 'Marie',last: 'Curie',year: 1867,passed: 1934},
//   {first: 'Johannes',last: 'Kepler',year: 1571,passed: 1630},
//   {first: 'Nicolaus',last: 'Copernicus',year: 1473,passed: 1543},
//   {first: 'Max',last: 'Planck',year: 1858,passed: 1947},
//   {first: 'Katherine',last: 'Blodgett',year: 1898,passed: 1979},
//   {first: 'Ada',last: 'Lovelace',year: 1815,passed: 1852},
//   {first: 'Sarah E.',last: 'Goode',year: 1855,passed: 1905},
//   {first: 'Lise',last: 'Meitner',year: 1878,passed: 1968},
//   {first: 'Hanna',last: 'Hammarström',year: 1829,passed: 1909}
// ];
// -1 Вывести массив имён учёных/изобретателей
// -2 Вывести массив тех кто родился в 19-ом веке
// -3 Вывести массив тех, кто прожил больше 50-ти лет
// -4 Найти того, кто работал с радиацией и добавить ей свойство "замужем", в значение запистаь имя мужа
// -5 Вывести фамилии тех, в чьём имени есть буква "е"
// -6 Получить массив объектов отсортированный по имени (по алфавиту).
// -7 Найти сумму лет жизни всех учёных
// -------------------------------------
// 1
// const listNames = inventors.map(function (inventor) {
//   return inventor.first;
// });
// console.log(listNames);

// const arrowlistNames = inventors.map((inventor) => { return inventor.first; });
// console.log(arrowlistNames);
// -------------------
// 2
// const listBirth = inventors.filter(function (inventor) { 
//   return inventor.year > 1800 && inventor.year < 1899;
// });
// console.log(listBirth);
// -------------------------
// 3
// const lived = inventors.filter(function (inventor) {
//   return ((inventor.passed - inventor.year) > 50 ? inventor : "");
// });
// console.log(lived);
  // --------------------------------
  // 4
// const workedRadiation = inventors.map(inventor => {
//   if (inventor.first === "Marie") {
//     return inventor = {...inventor, married: "Pierre Curie"
//     }
//   }
//   return inventor;
// });
// console.log(workedRadiation);
// ------
// console.log(inventors.filter(el => el.last === 'Curie').map(el => el =
//   { ...el, married: 'Pierre Curie' }))
// ------------------------------------------
// 5
// const lastE = inventors.filter(function (inventor) {
//   return inventor.first.includes("e") || inventor.first.includes("E")
// }).forEach(function (el) { 
//   console.log(el.last);
// });
// console.log(lastE);
// ----------------------------
// 6
// const sortingNames = inventors.sort(function (prevInventor, nextInventor) { 
//     return prevInventor.first > nextInventor.first ? 1 : -1 ; 
// });
// console.log(sortingNames);
// --------------------------------------------
// 7
// const totalYear = inventors.reduce(function (total, inventor) { 
//   return total + (inventor.passed - inventor.year);
// }, 0);
// console.log(totalYear);
// ------------------------------------------
// +++++++++++++++++++++++++++++new task++++++++++++++
// let worker = {
//     workSchedule: [
//         {day: 'M', hours: 9},
//         {day: 'T', hours: 10},
//         {day: 'W', hours: 11},
//         {day: 'T', hours: 5},
//         {day: 'F', hours: 12},
//         ],
//         penalty: [
//         {day: 'M', value: 0},
//         {day: 'T', value: 120},
//         {day: 'W', value: 50},
//         {day: 'T', value: 0},
//         {day: 'F', value: 35},
//         ],
//         premium: 500,
// }
// написати ф-ю getSalary(worker, rate) яка приймає аргументами обєкт робітника 
// і погодинну ставку.
// Ф-я вертає зарплату робітника за тиждень з урахуванням штрафів і премій
// hours - години роботи
// value - сума штрафу
// premium - премія

// const getSalary = function (worker, rate) { 
//   const { workSchedule, penalty, premium } = worker;
//   //  console.log(workSchedule);
//   const total = workSchedule.reduce(function (add, el) {
//     return add += el.hours * rate;
//   }, 0)
//   const totalValue = penalty.reduce(function (acc, element) { 
//     return acc += element.value;
//   }, 0)
//   const salary = total - totalValue+premium;
//   return salary;
// }
// ------------стрілочною функцією----------
// const getSalary = (worker, rate) => {
//   const { workSchedule, penalty, premium } = worker;
//   const total = workSchedule.reduce((add, el) => {
//     return add += el.hours * rate}, 0)
//   const totalValue = penalty.reduce((acc, element) => {
//     return acc += element.value}, 0)
//   const salary = total - totalValue+premium;
//   return salary;
// }

// console.log(getSalary(worker, 20)); // 1235
// console.log(getSalary(worker, 8)); // 671
// ---------------------------------------------------------
//  Напишите ф-ю которая принимает строку и возвращает объект с  
// количеством  букв в строке
// console.log(countLetter('w3school.com'))
// ----------------------------------------------------