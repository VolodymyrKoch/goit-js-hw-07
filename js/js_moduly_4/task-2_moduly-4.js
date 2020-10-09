// Callback функция и метод push

// Функция isUniq принимает три параметра - element, index и arr.Функция возвращает true или false в зависимости от того
// встречается ли элемент первый раз в массиве(true) или этот элемент в массиве уже встречался(false).

// Функция isEven принимает один параметр - element.Функция возвращает true или false в зависимости от того
// является ли элемент четным числом или нет.

// Функция filterArray(array, cb), принимает 1 - м параметром array - массив чисел, а вторым параметром cb -
//   функцию обратного вызова(callback).Дополни тело функции так, чтобы функция filterArray заполняла
// новый пустой массив numbers только теми элементами из массива array, для которых вызов функции cb вернет true.
// ----------------------------------task-2-------------------------------
// Для аргументов - массива arr и isEven результатом будет массив [2, 4, 2]
const isUniq = (element, index, arr) => arr.indexOf(element) === index; // індекс елемента "element" в масиві arr
const isEven = (element) => element % 2 === 0; // парний елемент

function filterArray(array, cb) {
  "use strict";
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    // console.log(element);
    // console.log(array.indexOf(5));
    const index = i;
    // console.log(index);
    // Write code under this line
    const arr = array;
    if (cb(element, index, arr)) {
      numbers.push(element);
    }
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]
