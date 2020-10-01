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

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
for (key in salaries) {
}

// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// // Если объект salaries пуст, то результат должен быть 0.
// -------------------------------------------------
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
//  следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

// ----------------------------------------
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// // Если объект salaries пуст, то результат должен быть 0.
// -------------------------------------------------------------------
// #4
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
//     a: 1,
//   };
// ------------------------------------------------------------
