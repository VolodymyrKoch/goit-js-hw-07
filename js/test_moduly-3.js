// -------до кожного елементу масиву додати +"is a pet"-------

// const logItems = function (parametr = []) {
//   for (let i = 0; i < parametr.length; i += 1) {
//     parametr[i] += "is a pet";
//   }
//   return parametr;
// };

// const get = logItems(["Mango", "Poly", "Ajax"]);

// console.log(get);
// ----------------------------------------------------------
// --------------Инструкции break и continue----------------

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // Клиент с таким именем есть в базе данных!
// --------------------------------------------------------------------------------
// --------------task2-m2----------------------------
// const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
//   return message.split(" ").length * pricePerWord;
// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// ---------------------------------------------
// -----------------------task3-m2-----------------
// function findLongestWord(string = "") {
//   let word = string.split(" ");
//   let maxSize = word[0];
//   for (let i = 0; i < word.length; i += 1) {
//     if (maxSize.length < word[i].length) {
//       maxSize = word[i];
//       console.log(word[4].length);
//     }
//   }
//   return maxSize;

//   // if (string.length)
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// -------------------------task4-m2-----------------
// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let transformString = "";
//   if (string.length > maxLength) {
//   }
//   return (transformString = string.slice(0, maxLength) + "...");
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// -------------------------------------------------------------

// -------обєкти--------------------------
// const stuf = {
//   doiche: mersedes,
//   usa: ford,
//   frans: renault,
//   corea: kia,
// };
// console.log(stuf);
// const keys = [usa, frans];
// -------------------------------------------

//! FizzBuzz
// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// const FizzBuzz = function (n) {
//   for (let i = 1; i <= n; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (!(i % 5)) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// const robot = FizzBuzz(30);
// ---------------------------------------------------------
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let total = 0;
// for (const key in salaries) {
//   let salari = salaries[key];

//   total += salari;
// }
// console.log(total);

// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// // Если объект salaries пуст, то результат должен быть 0.
// -------------------------------------------------
//

// ----------------------------------------

// // Если объект salaries пуст, то результат должен быть 0.
// -------------------------------------------------------------------
// #4
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
//   a: 1,
// };
// ------------------------------------------------------------
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
//  следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.
// --------------------------------
// Задача. Дан многомерный массив arr:

// var arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };
// Выведите с его помощью слово 'голубой'.
// -----------------------------------------------

// let car = {
//   speed: 0,
//   color: "read",
//   isEngineOn: false,
//   isLightsOn: false,

//   engineToggle() {
//     car.isEngineOn = !car.isEngineOn;
//     console.log(car.isEngineOn);
//   },

//   speedOn(n) {
//     if (car.isEngineOn) {
//       car.speed = car.speed + n;
//       console.log(
//         `ваша швидкість збільшена на ${n}. Ваша швидкість = ${car.speed}`
//       );
//     } else {
//       console.log(`заведіть двигун`);
//     }
//   },

//   speedOff(n) {
//     if (car.isEngineOn) {
//       car.speed = car.speed - n;
//       console.log(
//         `ваша швидкість зменшена на ${n}. Ваша швидкість = ${car.speed}`
//       );
//     }
//   },

//   lightsToggle() {
//     if (car.isEngineOn) {
//       car.isLightsOn = !car.isLightsOn;

//       console.log(car.isLightsOn);
//       console.log("світло ввімкнено");
//     } else {
//       console.log(" вимкнено двигун");
//     }
//   },
// };

// car.engineToggle();
// car.lightsToggle();
// car.speedOn(100);
// car.speedOff(15);

// -------------------------------------------------------------------------
// const max = 10;

// let total = 0;
// for (let i = 0; i < max; i += 1) {
//   total += i;
//   console.log(i);
//   console.log(total);
// }
// -----------------------
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// --------------
// -----------task-3_m1---------------
//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

// const userPassword = "jqueryismyjam";

// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;

// // Write code under this line
// if (userPassword !== null) {
//   if (ADMIN_PASSWORD === userPassword) {
//     message = ACCESS_IS_ALLOWED;
//   } else {
//     message = ACCESS_DENIED;
//   }
// } else {
//   message = CANCELED_BY_USER;
// }

// console.log(message);
// ---------------------------------------------

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_DENIED = "Недостаточно средств на счету!";

// let totalPrice = pricePerDroid * orderPieces; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// // Write code under this line
// if (orderPieces !== null) {
//   if (balanceCredit >= 0) {
//     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
//   } else {
//     message = "Недостаточно средств на счету!";
//   }
// } else {
//   message = "Отменено пользователем!";
// }
// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
// --------------------------------------------------

// const clients = ["Mango", "Ajax", "Poly"];
// let LoggingClients = [];

// let total = "";
// for (let i = 0; i < clients.length; i += 1) {
//   LoggingClients.push(`pasword  -  ${clients[i]}`);
//   console.log("Logging clients: ", clients[i]);

//   total += clients[i];
//   console.log(total);
// }
// console.log(LoggingClients);
// ---------------------------------
// variable(змінна) — для кожної ітерації значення властивості присвоюється змінній.

// iterable(ітерабельний) — колекція, яка має перераховувані властивості.

// for (const variable of iterable) {
//   // statement
// }
// console.log(object);
// -------------------------------------------
// Итерация по массиву
// const clients = ["Mango", "Ajax", "Poly"];

// let total = "";
// for (const client of clients) {
//   // console.log(client);
//   total = total + client;
//   console.log(total);
//   console.log(client);
// }

// // Итерация по строке
// const string = "javascript"; //Mango Ajax Poly

// for (const character of string) {
//   // console.log(character); //j a v a s c r i p t
// }
// --------------------------------------------------------------
// * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
//  * и управление передаётся на следующую итерацию.

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 14;
// // ---1-
// // for (let i = 0; i < numbers.length; i += 1) {
// //   if (numbers[i] < threshold) {
// //     continue;
// //   }
// //   console.log(numbers[i]);
// // console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// // }
// // -----
// // --2-
// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }
//   // console.log(number);
//   if (number === threshold) {
//     console.log(number);
//   }
// }
// -----------------------------------------
// Многомерные массивы
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][2]); // 9
// // -------------------------------

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   // console.log("Подмассив матрицы matrix[i]: ", matrix[i]);
//   // console.log(matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log("Элемент подмассива матрицы matrix[i][j]: ", matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45
// ----------------------------------

// -------- Присвоение по ссылке----------------
// const a = ["Mango"];
// // Присвоение по ссылке.
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ['Mango']
// console.log(b); // ['Mango']

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ['Mango', 'Poly']

// // b изменилось тоже, потому что b, как и a,
// // просто содержат ссылку на одино и то же место в памяти
// console.log(b); // ['Mango', 'Poly']

// // Результат повторяется
// b.push("Ajax");
// console.log(a); // ['Mango', 'Poly', 'Ajax']
// console.log(b); // ['Mango', 'Poly', 'Ajax']
// console.log(a === b); // true - бо це два посилання на 1 і той самий обєкт;
// let c = ["Mango", "Poly", "Ajax"];
// let d = ["Mango", "Poly", "Ajax"];
// console.log(c === d); //// // true - бо це два різні обєкти хоч і значення в них однакові;
// --------------------------------------------
// const getItemsString = function (array) {
//   "use strict";
//   // Write code under this line
//   let result = "";
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//     // console.log(`${i + 1}`);
//     // console.log(`${i + 1} - ${array[i]}`);
//     // console.log(result);
//     // return result;
//   }
//   // console.log(result);
//   return result;
// };
// // console.log(result);

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// console.log(getItemsString([5, 10, 15]));
// // console.log(getItemsString());
// ------------------------------------------------
// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//   message.split(" ").length * pricePerWord; // Write code in this line
// // message.length * pricePerWord;
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80
// ---------------------------------
// function findLongestWord(string = "") {
//   // Write code under this line
//   let longWord;
//   const array = string.split(" ");
//   longWord = array[0];
//   for (const str of array) {
//     if (str.length > longWord.length) {
//       longWord = str;
//       // console.log(longWord);
//     }
//     // return longWord;
//   }
//   // console.log(array);
//   return longWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }
//   // console.log(number);
// -------------------------------------------------
// --------деструктиризація масивів ----доробити !!!! з скріна------
// let arr = [1, 2, 3, 4, 5, 6];
// const [a, b, c, ...e] = arr;
// console.log(e); // [4,5,6] - масив - працювати(копіювати) по посиланню буду
// console.log(a); // 1 - примітиви
// console.log(b, c); //2 3 - примітиви
// // ------------деструктиризація обєктів ------

// let array = {1, 2, 3, 4, 5, 6};
// const { a, b, c, ...e } = array;
// -----------------------------------------
// -------------функція колбек------
// const askName = function (msg) {
//   let name = prompt("whats your name?");
//   console.log(msg + name);
// };
// const greeting = function (callback) {
//   let msg = "hello, my name is:";
//   callback(msg);
// };
// greeting(askName);
// __________
// --------калькулятор--------;

// const calculatotr = function (num, callback) {
//   callback(num);
// };
// const plus = function (num) {
//   console.log(num + 1);
// };
// const minus = function (num) {
//   console.log(num - 1);
// };
// calculatotr(10, plus);
// calculatotr(10, minus);
// --------------------------------
// --------practick---------
// Напишите функцию которая принимает 3 параметра: название, цена, колбек
// Колбек создаёт объект с товаром и выводит его в консоль

// const orderFormation = function (name, price, callback) {
//   callback(name, price);
// };
// let arraygoods = [];
// const callback = function (name, price) {
//   let goods = { name, price };
//   arraygoods.push(goods);
// };
// orderFormation("pen", 5, callback);
// orderFormation("pensil", 2, callback);
// orderFormation("ruler", 2, callback);
// console.log(arraygoods);

// goods {name : pen,
//        price:5 }
// -----------------------------------------------------

// ---------задача з промтом --------
// const Hello = function (x) {
//   const a = "Привіт мене звуть:";
//   x(a);
// };

// const Answer = function (m) {
//   const nam = prompt("Яке ваше імя?");
//   console.log(m + nam);
// };
// Hello(Answer);
// викликаю ф-цію Hello яке приймає в свої параметри аргумент Answer.
// Answer зі своїм prompt і (m + nam) іде в тіло ф-ції Hello, де бере дані (а)
// і вставляє їх замість свого 'm' і задача вирішується
// -----------------------------------------

// -------------------------------задача з автомобілями----------------
// ------варіант без callback----------
// let money = 85;
// // Если стоимость машины меньше money вывести массив машин которые вы можете приобрести
// let cars = [
//   { name: "ferrari", cost: 100 },
//   { name: "lambo", cost: 90 },
//   { name: "bmw", cost: 80 },
//   { name: "subaru", cost: 60 },
// ];
// const availableCars = [];
// const carSelection = function (array, costValue) {
//   for (const obj of array) {
//     console.log(obj.cost);
//     if (obj.cost < money) {
//       availableCars.push(obj.name);
//     }
//   }
// };
// console.log(availableCars);

// // console.log(cars[1].cost);
// carSelection(cars);
// -----------------
// -------------------------------задача з автомобілями----------------
// ------варіант з callback----------
// let money = 85;
// // Если стоимость машины меньше money вывести массив машин которые вы можете приобрести
// let cars = [
//   { name: "ferrari", cost: 100 },
//   { name: "lambo", cost: 90 },
//   { name: "bmw", cost: 80 },
//   { name: "subaru", cost: 60 },
// ];
// const availableCars = [];
// const carSelection = function (cars, test) {
//   for (const car of cars) {
//     const passed = test(car);
//     if (passed) {
//       availableCars.push(car);
//     }
//   }
//   return availableCars;
// };
// console.log(availableCars);

// const carCost = carSelection(cars, (car) => car.cost <= money);

// console.log(carCost);
// --------------------------------------------------------------
// ------------------------------------------------
// ----------------- 6.10.20---prackt-----
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4

// const sum = function (n) {
//   return function m(d) {
//     console.log(n + d);
//   };
// };
// sum(1)(2);

// ------------------------------------------------------------------------------
// 1)Напишите ф-цию которая будет создавать массив машин(обектов).
// 2)Как только длина массива достигает 5 - масив очищается а обьекты
// передаються в глобальный массив всех машин.
// 3)Добавте несколько методов: скидка на машину, добавление года к названию.
// let globalState = [];
// const shopCar = function () {
//   let state = [];

//   const addIten = function (brend, price, typeCar, powerSupply, color) {
//     state.push({ brend, price, typeCar, powerSupply, color });
//     if (state.length === 5) {
//       globalState = [...globalState, ...state.splice(0)];
//     }
//   };

//   // console.log(state.length);

//   const discount = function () {
//     for (let el of state) {
//       if (el.price > 15000) {
//         el.sail = el.price * 0.05;
//       }
//       if (el.price > 35000) {
//         el.sail = el.price * 0.1;
//       }
//       if (el.brend === "Mersedes") {
//         el.bonusOil = 100;
//       }
//     }
//   };

//   const showCart = function () {
//     console.table("state:", state);
//     console.table("globalState:", globalState);
//   };
//   const clearCart = function () {
//     state = [];
//   };

//   //

//   return { addIten, discount, showCart, clearCart };
// };

// let customer = shopCar();

// customer.addIten("Opel", 10000, "hatchback", "petrolEngine", "tomato");
// customer.addIten("BMW", 20000, "sedan", "disel", "gray");
// customer.addIten("Mersedes", 30000, "sedan", "disel", "gray");
// customer.addIten("Tesla", 40000, "sedan", "elecktro", "white");

// customer.addIten("renault", 20000, "sedan", "disel", "gray");
// customer.addIten("ford", 30000, "sedan", "disel", "gray");
// customer.addIten("subaru", 40000, "sedan", "elecktro", "white");

// customer.discount();
// customer.showCart();

// // customer.clearCart();
// ======================================================
// ----------- 3 MODULY---------
// let nam = "Resort Hotel";
// let stars = 5;

// const Hotel = {
//   nam,
//   stars,
//   capacity: 100,
// };

// Hotel.addition = "add";
// Hotel["addition"] = "restart";

// delete Hotel.addition;
// delete Hotel["stars"];

// console.log(Hotel.stars);
// console.log(Hotel["nam"]);
// console.log(object);
// console.log(Hotel);
// -------------------------------------------

// const object = {};
// const key = "person";
// object[key] = "Mango";
// console.log(object);
// ---------------------------------------
// const key = "person";
// const getKey = function () {
//   return "age";
// };

// const obj = {
//   key: "mango",
//   [getKey()]: 2,
// };
// console.log(obj);
// --------------------------------------

// const hotel = {
//   name: "Resort Hotel",
//   starts: 5,
//   capacity: 100,
//   greetInES5: function () {
//     console.log("Welcome ES5");
//   },
//   greetInES6() {
//     console.log("Welcome ES6");
//   },
// };

// hotel.greetIn777 = function () {
//   console.log("welcome 777");
// };

// hotel.greetInES5();
// hotel.greetInES6();
// hotel.greetIn777();

// console.log(hotel);
// ----------------------------------------
// const hotel = {
//   name: "Resort Hotel",
//   starts: 5,
//   capacity: 100,
//   greetInES5: function () {
//     console.log("Welcome ES5");
//   },
//   greetInES6() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };
// hotel.greetInES6();
// hotel.changeCapacity(2000);
// console.log(hotel);
// ---------------------------------
// const hotel = {
//   name: "Resort Hotel",
//   starts: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log("key:", key);
//   console.log("Value:", hotel[key]);
// }
// -------Object.keys(hotel);-----------Object.values(hotel);-------------
// -------------------Object.entries(hotel);-------------------
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// // const keys = Object.keys(hotel);
// // const values = Object.values(hotel);
// const entries = Object.entries(hotel);
// // console.log(keys);
// // console.log(values);
// console.log(entries);

// // for (const key of keys) {
// //   console.log("Value: ", hotel[key]);
// // }

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }
// -----------------Object.values---------------------------

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };
// const values = Object.values(goods);
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total);
// ----------------------------------------/
// +++++++++++++++++++++++++++++++++++++
// ---------------------...-rest-------------------;
// const add = function (...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);
// ----------------------------------
// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);
// -------------------

// const temperatures = [18, 14, 12, 21, 17, 29];
// const min = [18, 14, 12, 21, 17, 29]; // 12
// console.log(min);
// ---------------------------
// +++++++++++++++++++++++++практика 5 модуль===================++++++++
// -=<<".">>=-
// Cоздайте ф-ю конструктор, ItemToSale принимающую параметрами (size, type, color)
//  и содержащую метод для ведения статистики продаж saveToSatatistics.
// let statstics = {
//     soldGenaral: 0,
//     soldTshirts: 0,
//     soldJackets: 0
// }

// let statstics = {
//   soldTotal: 0,
//   soldTshirts: 0,
//   soldJackets: 0,
// };

// function ItemToSale(size, type, color) {
//   //ф-я конструктор принимающуя параметрами (size, type, color)
//   this.size = size;
//   this.type = type;
//   this.color = color;

//   this.saveToSatatistics = function () {
//     //содержащуя метод saveToSatatistics.
//     if (this.type === "Jackets") {
//       statstics.soldJackets += 1;
//       statstics.soldTotal += 1;
//     }
//     if (this.type === "Tshirts") {
//       statstics.soldTshirts += 1;
//       statstics.soldTotal += 1;
//     }
//   };
// }
// let Jackets = new ItemToSale("L", "Jackets", "tomato"); // ф-ція конструкто (обєкт  екземпляр від конструктора)
// let Tshirts = new ItemToSale("L", "Tshirts", "read");
// // console.log(Jackets);

// Jackets.saveToSatatistics(); // виклик ф-ції конструктора
// Tshirts.saveToSatatistics();
// Jackets.saveToSatatistics();
// Tshirts.saveToSatatistics();
// console.log(statstics);
// -------------------------------------------------
// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
// статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

// let statstics = {
//   // глобальний обєкт статистики
//   Vasil_student: name_president,
//   Olha_neighbor: name_president,
//   soldJackets: 0,
// };

// function name(a, b, c) {
//   //ф-я конструктор
//   // this.size = size;
//   this.vote = function () {
//     // метод vote(presidentName) который будет менят глобальный объект
//     // ...654fdsf4646sdasd.
//   };
//   this.saveToSatatistics = function () {
//     //метод
//   };
// }

// let Jackets = new ItemToSale("L", "Jackets", "tomato"); // ф-ція конструкто (обєкт  екземпляр від конструктора)
// Jackets.saveToSatatistics();
// ---------------------------------------------------------------------------
//   Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:
// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
// function Calculator(a, b, c) {
//   (this.read = function (a, b) {
//     // 2 prompt;
//     // якщо це є числом то записати його в обєкт(this.) в обєкт read
//   }),
//     (this.sum = function () {}), // виводим суму чисел обєкту
//     (this.mul = function () {}); // виводим добуток чисел обєкту x=d*y
// }
// -------------------------------------------
// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом
//начального значения startingValue. Ниже вы можете посмотреть работу кода:
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений
// function Accumulator(size, type, color) {
//   this.value = x;
//   this.read = x;
// }
// let accumulator = new Accumulator(1, "Jackets", "tomato"); // ф-ція конструкто (обєкт  екземпляр від конструктора)
// -----------------------------------
// ---------------ланцюжок викликів------------
/*
 * Фильтруем четные числа. Далее, на результате метода filter,
 * вызываем map и множим на 2. После чего на результате
 * метода map вызываем reverse.
 */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers
//   .filter(x => x % 2 === 0)
//   .map(y => y * 2)
//   .reverse();
// console.log(result);
// --------------------------