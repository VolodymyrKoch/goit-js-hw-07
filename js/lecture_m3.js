console.log("Module 3 lesson 1");

// 1. Объекты

//! --- Создание объекта ---

// const arr = ["vfsddsf", {key: "gsdhjfds"}];
// console.log(arr[0])
// // console.dir(arr);

// //

// console.log("---------------------")

// const item = {
//     name: "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// console.log(item.name)
// console.log(item["name"])
// console.dir(item)

// example ---------------------

// task ------------------------
// Создайте объект cart. Добавьте в объект поля со следующими данными:
//     продукты - массив;
//     общее количество - число;
//     общая цена - число;

//! --- Доступ к свойствам ---
// example ---------------------
// const item = {
//     name: "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// console.log(item["characteristics"]["color"]);
// console.log(item["characteristics"].color);

// task ------------------------
// const user = {
//   id: "132ghghj4234ghg34",
//   name: "Alex",
//   age: 25,
//   status: "student",
//   isOnline: true,
// };
// Выведите в консоль элементы с ключами 'name', 'age', 'status' двумя способами:
//     через квадратные скобки;
//     как свойство объекта.
//  Если пользователь активный (isOnline) выведите в консоль
// "Пользователь находится в сети" иначе "Пользователь не в сети"

// let ternarn = user.isOnline
//   ? "Пользователь находится в сети"
//   : "Пользователь не в сети";
// console.log(ternarn);

//! --- Удаление свойств ---
// example ---------------------

// const item = {
//   name: "iphone",
//   characteristics: {
//     color: "gray",
//     width: 120,
//     height: 60,
//   },
// };
// item["new"] = "values";
// // item.new = "values";
// delete item.new;

// item["name"] = "gjchdgc";

// item.characteristics.isColored = true;
// item.characteristics = ["fhggf"];
// item.characteristics.new = "fhggf";
// // hotel.address = '1, Beach ave.';
// // hotel['manager'] = 'Chuck Norris';
// console.log(item.characteristics);
// // console.log(item);

// console.log(item.name.toUpperCase());
// item.name = "iphone X".toUpperCase();

// // item.characteristics =

// // delete item.name;
// item.characteristics.weight = 320;

// console.log(item);

// task ------------------------
// const user = {
//   id: "132ghghj4234ghg34",
//   name: "Alex",
//   age: 25,
//   status: "student",
//   isOnline: true,
// };
// delete user.status;
// delete user.isOnline;
// console.log(user);
// Удалите єлементы "status" и "isOnline"

//! --- Отсутствующие свойства ---
// example ---------------------
// const item = {
//   name: "iphone",
//   characteristics: {
//     color: "gray",
//     width: 120,
//     height: 60,
//   },
// };

// console.log(item.dev);

// --- Короткие свойства ---

// const name = "Iphone";
// const price = 320;
// const color = "gray";
// const width = 120;

// // const item = { name, price }
// const item = { name, price }

// console.log(item)

// example ---------------------

// task ------------------------
// const name = "Alex";
// const age = 25;
// const newObject = { name, age };
// const secondaryObject = { name: name, age: age };
// console.log(newObject);
// console.log(secondaryObject);
// Используя короткие свойства объектов создайте объект с полями "name", "age";

//! --- Вычисляемые свойства ---
// example ---------------------

// const item = {
//     name: "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// console.log(item["name"])

// console.log(item["name"])
// const key1 = "name";
// const key2 = "characteristics";

// // console.log(item[key1])
// // console.log(item["name"])
// console.log(item[key2])
// console.log(item["characteristics"])

// console.log(item.key)

// console.log("name" === "name")

// const item = {
//     "name": "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
//     fsdsfd: "daffdsf",
//     gdhhdfsjksfd: "sfdsdfsdsdf",
//     sfds: "fsddf",
// };

// console.log(item)

// const key = "name1";
// // const key2 = "characteristics"
// console.log(item["name"]);

// const keys = ["name", "characteristics"];

// for (const key of keys) {
//     console.log('item[key]', item[key])
// }
// -------------------------- example ---------------------

// const stuff = {
//     germany: "Mercedes",
//     usa: "Ford",
//     france: "Renault",
//     koreya: "Kia",
// }

// const products = {
//     germany: "1",
//     usa: "2",
//     france: "3",
//     koreya: "4",
// }

// stuff.ukraine = "Tavria";

// const list = [
//     "usa",
//     "france",
//     "ukraine"
// ];

// for (const element of list) {
//     console.log("Stuff:", stuff[element]);
//     console.log("Products:", products[element]);
//     console.log("=========================")
// }

// task ------------------------
// const keys = ["name", "age", "status"];
// const user = {
//   id: "132ghghj4234ghg34",
//   name: "Alex",
//   age: 25,
//   status: "student",
//   isOnline: true,
// };
// for (const element of keys) {
//   console.log(user[element]);
// }
// Выведите в консоль значения свойств объекта по ключам, которые находятся в массиве:
// const keys = ["name", "age", "status"];

//! --- Методы объекта ---
// example ---------------------

// const nail = "гвоздь";

// const hummer = {
//   weight: 300,
//   length: 320,
//   height: 100,
//   // bit: function (){
//   //     console.log(`Я забиваю ${nail}`);
//   // },
//   bit() {
//     console.log(`Я забиваю ${nail}`);
//   },
// };

// hummer.bit();

// -----------------------------

// const person = {
//   name: "Alex",
//   age: 25,
//   getInfo() {
//     console.log("Name: Alex");
//     console.log("Age: 25");
//   },
// };
// person.getInfo();
// --------------------------
// const getInfo = function () {
//   console.log("name: Alex");
//   console.log("Age: 25");
// };
// getInfo();
// ----------------------------------------
// const getInfo = function () {
//   console.log("name: Alex");
//   console.log("Age: 25");
// };
// getInfo();
// const person = {
//   name: "Alex",
//   age: 25,
//   position: "status",
//   getInfo: getInfo,
// };

// console.log(person);

// person.getInfo();
// -------------------------------------------

// const getInfo = function () {
//   console.log("name: Mykola");
//   console.log("Age: 30");
// };
// // getInfo();

// const status = "student";

// const person = {
//   name: "Alex",
//   age: 25,
//   status,
//   getInfo,
// };
// // person.getInfo("Alex", 25);

// console.log(person);

// person.getInfo();

// ----------------------------------------------------
// const getInfo222 = function (name, age) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
// };
// // getInfo222("Alex", 25);
// const person = {
//   name: "Alex",
//   age: 25,
//   position: "status",
//   getInfo: getInfo222,
// };
// person.getInfo("alexis", 35);

// console.log(person);

// person.getInfo222();

// task ------------------------
// const title = function () {
//   console.log("Hello");
// };
// const user = {
//   id: "132ghghj4234ghg34",
//   name: "Alex",
//   age: 25,
//   status: "student",
//   isOnline: true,
//   title,
// };
// user.title();
// Добавьте в объект user метод sayHello, который выводит в консоль приветствие: "Hello"
// Выведите в консоль результат

//! --- Доступ к объекту через this ---
// example ---------------------
// const fsfdsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfdsfdsfsd = function (name, age) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
// };

// -------------------------------------
// const person = {
//   name: "Alex",
//   age: 25,
//   position: "status",
//   getInfo: function () {
//     console.log(`Name: ${person.name}`); // при копіюванні обєкту в новому обєкті буде нова назва і буде
//     console.log(`Age: ${person.age}`); // помилка в адресі  {person.name} тому замість назви обєкту person ====> this
//   },
// };
// person.getInfo();

// ---------------------------
// const person = {
//   name: "Alex",
//   age: 25,
//   position: "status",
//   getInfo: function () {
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//   },
// };
// person.getInfo();
// -------------------------------

// const getInfo = function () {
//   console.group(`${this.name}'s info`);
//   console.log(`Name: ${this.name}`);
//   console.log(`Age: ${this.age}`);
//   console.groupEnd();
// };

// const user1 = {
//   name: "Alex",
//   age: 25,
//   position: "status",
//   getInfo,
// };

// const user2 = {
//   name: "Nikita",
//   age: 35,
//   position: "teacher",
//   getInfo,
// };

// user1.getInfo();
// user2.getInfo();

// task ------------------------
// const sayHello = function () {
//   console.group(`${name}'s info`);
//   console.log(
//     `${this.id} -- ${this.name}--${this.age}--${this.status}--${this.isOnline}`
//   );
//   console.log(user);
// };
// const user = {
//   id: "132ghghj4234ghg34",
//   name: "Alex",
//   age: 25,
//   status: "student",
//   isOnline: true,
//   sayHello,
// };
// user.sayHello();
// Добавьте в объект user метод sayHello,
// который выводит всю информацию о пользователе.
// Используйте console.group()

// ---------------------
// const products = {
//   items: [],
// };

// products.items.push({ name: "Milk", price: 30 });
// products.items.push(["ssd", "hdd"]);
// products.items.push("Bread");
// products.items.push("Meat");

// console.log(products);
// -----------------

// const saray = {
//   toolBox: [
//     {
//       name: "hummer",
//       weight: 300,
//       bit() {
//         console.log("bit");
//       },
//     },

//     {
//       name: "screwDriver",
//       weight: 100,
//       screw() {
//         console.log("screw");
//       },
//     },
//   ],
// };
// saray.toolBox[0].bit();
// saray.toolBox[1].screw();

// task ------------------------
const cart = {
  products: [],
  total: 12,
  totalPrice: 150,
};
cart.products.push("milk", "cofi", "blubery");
console.log(cart);
// Создайте объект cart. Добавьте в объект поля со следующими данными:
//     продукты - массив;
//     общее количество - число;
//     общая цена - число;
// добавьте в корзину ( в поле products) несколько товаров(объектов);
// Создайте метод, который подсчитывает количество товаров в корзине и общую сумму.
// создайте метод, который логирует все продукты корзины

// --------------------------------------------------------------------
//! 2. Перебор объекта

//! --- Цикл for...in ---

// const arr = [1, 2, 3, 4, 5];

// for(const number of arr) {
//     console.log(number)
// }

// ---------------------
// const user = {
//   name: "Alex",
//   age: 35,
// };

// const keys = [];

// for (const item in user) {
//   keys.push(item); //["name", "age"]
//   keys.push(user[item]); //["Alex", 35]
// }

// console.log(keys);
// // console.log(keys[item]);  // помилка

// for (const key of keys) {
//   console.log(user[key]);
//   // console.log(key);
// }
// -------------------------------------------

// --- Object.keys(), Object.values(), Object.entries() ---
// const user = {
//     name: "Alex",
//     age: 35,
//     getInfo(){
//         console.log("Hello")
//     }
// }

// const userKeys = Object.keys(user);
// // const userKeys = ["name, "age"];

// const userValues = Object.values(user);

// const userEntries = Object.entries(user);

// console.log(userKeys);
// console.log(userValues);
// console.log(userEntries);
// -----------------------------------------------
// const calculator = {
//     state: 0,
//     plus(n) {
//     calculator.state+=n;
//     return calculator
//     },
//     minus(n) {
//     calculator.state-=n;
//     return calculator
//     },
//     mul(n) {
//         calculator.state*=n;
//         return calculator
//     },
//     div(n) {
//         calculator.state/=n;
//         return calculator
//     },
//     showResult() {
//         console.log(calculator.state);
//         return calculator
//     },
//     clear(){
//         calculator.state = 0;
//     }
// }
