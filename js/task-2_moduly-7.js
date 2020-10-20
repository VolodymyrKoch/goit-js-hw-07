// В JS є масив рядків.
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
//   після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement()
// ------------------------
const listIngredients = document.querySelector("#ingredients");
console.log(listIngredients);
const cyclicList = ingredients.forEach((el) => {
  const creationItem = document.createElement("li");
  creationItem.textContent = el;
  listIngredients.appendChild(creationItem)
  });

