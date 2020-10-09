// использование методов класса

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в
// свойство items.

// Добавь методы класса:

//     getItems() - возвращает массив текущих товаров
//     addItem(item) - получает новый товар и добавляет его к текущим
//     removeItem(item) - получает товар и, если он есть, удаляет его из текущих

class Storage {
  constructor(name, room) {
    // this.name = name;   ??????
    // this.room = room;    ?????
  }
  getItems() {
    return;
  }
  addItem(item) {
    // this.sales += 1; ???
  }
  removeItem(item) {
    let b = 2 + 2;
  }
}

console.log(typeof Storage);
// 'function'

const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem("Дроид");
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
  */
