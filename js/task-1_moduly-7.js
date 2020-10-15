// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка
// елемента(тега h2) і кількість елементів в категорії(всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
//     Категорія: Тварини
//     Кількість елементів: 4
// ------------------------------------
// 1
const quantityСategories = document.querySelectorAll("li.item")
// console.log(quantityСategories);
console.log(`У списку ${quantityСategories.length} категорії`);
// ----------------------------------------
//'У списку 3 категорії.'
// ----------------------------------------

const titleScan = quantityСategories.forEach(el => {
  const title = el.querySelector("h2").textContent;
  // console.log(title);
  const quantity = el.lastElementChild.children.length;
  // console.log(quantity);
  console.log(`Категорія: ${title}\n Кількість елементів: ${quantity}`);
});
// console.log(title);
// ----------------------------------------
// Категорія: Тварини
// Кількість елементів: 4
// ----------------------------------
