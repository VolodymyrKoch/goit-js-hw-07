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
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: true,
// }
// Выведите в консоль элементы с ключами 'name', 'age', 'status' двумя способами:
//     через квадратные скобки;
//     как свойство объекта.
//  Если пользователь активный (isOnline) выведите в консоль
// "Пользователь находится в сети" иначе "Пользователь не в сети"

//! --- Удаление свойств ---
// example ---------------------

// const item = {
//     "name hjfjhfd": "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// item["name hjfjhfd"] = "gjchdgc";

// // item.characteristics.isColored = true;
// // item.characteristics = ["fhggf"]

// // item.name = item.name.toUpperCase()
// // item.characteristics =

// // delete item.name;
// // item.characteristics.weight = 320;

// console.log(item);

// task ------------------------
// const user = {
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: true,
// }
// Удалите єлементы "status" и "isOnline"

//! --- Отсутствующие свойства ---
// example ---------------------
// const item = {
//     name : "iphone",
//     characteristics: {
//         color: "gray",
//         width: 120,
//         height: 60,
//     },
// };

// console.log(item.dev)

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
// const user = {
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: true,
// }
// Выведите в консоль значения свойств объекта по ключам, которые находятся в массиве:
// const keys = ["name", "age", "status"];

//! --- Методы объекта ---
// example ---------------------

// const nail = "гвоздь"

// const hummer = {
//     weight: 300,
//     length: 320,
//     height: 100,
//     // bit: function (){
//     //     console.log(`Я забиваю ${nail}`);
//     // },
//     bit() {
//         console.log(`Я забиваю ${nail}`);
//     },
// }

// hummer.bit();

// -----------------------------

// const person = {
//     name: "Alex",
//     age: 25,
//     getInfo(){
//         console.log("Name: Alex")
//         console.log("Age: 25")
//     }
// }
// person.getInfo()
// --------------------------

// const fsfdsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfdsfdsfsd = function (name, age) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
// }

// const person = {
//     name: "Alex",
//     age: 25,
//     position: "status",
//     getInfo: fsfdsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfdsfdsfsd
// }
// person.getInfo("Alex", 25)

// console.log(person);

// person.getInfo();

// task ------------------------
// const user = {
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: true,
// }
// Добавьте в объект user метод sayHello, который выводит в консоль приветствие: "Hello"
// Выведите в консоль результат

//! --- Доступ к объекту через this ---
// example ---------------------
// const fsfdsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfdsfdsfsd = function (name, age) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
// }

// -------------------------------------

// const person = {
//     name: "Alex",
//     age: 25,
//     position: "status",
//     getInfo: function () {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//     }
// }

// -------------------------------

// const getInfo = function () {
//     console.group(`${this.name}'s info`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.groupEnd()
// }

// const user = {
//     name: "Alex",
//     age: 25,
//     position: "status",
//     getInfo
// };

// const user1 = {
//     name: "Nikita",
//     age: 35,
//     position: "teacher",
//     getInfo
// };

// user.getInfo();
// user1.getInfo();

// task ------------------------
// const user = {
//     id: "132ghghj4234ghg34",
//     name: "Alex",
//     age: 25,
//     status: "student",
//     isOnline: true,
// }
// Добавьте в объект user метод sayHello,
// который выводит всю информацию о пользователе.
// Используйте console.group()

// ---------------------
// const products = {
//     items: []
// };

// products.items.push({name: "Milk", price: 30});
// products.items.push(["ssdds", "sfsdfsd"]);
// products.items.push("Bread");
// products.items.push("Meat");

// console.log(products)

// const saray = {
//     toolBox: [
//         {name: "hummer",
//          weight: 300,
//          bit(){
//              console.log("bit")
//          }
//         },

//         {name: "screwDriver",
//          weight: 100,
//          screw(){
//              console.log("screw")
//          }
//         },
//     ]
// }
// saray.toolBox[0].bit();

// task ------------------------
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
//     name: "Alex",
//     age: 35,
// }

// const keys = [];

// for(const item in user){
//     keys.push(item); //["name", "age"]
//     keys.push(user[item])//["Alex", 35]
// }

// console.log(keys);

// // for (const key of keys) {
// //     console.log(user[key])
// // }
