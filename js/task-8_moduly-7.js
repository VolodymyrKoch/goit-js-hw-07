// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість
// елементів в input і натискає кнопку Створити, після чого рендериться колекція.При
// натисканні на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число.Функція
// створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
//     Має випадковий rgb колір фону
//     Розміри найпершого div - 30px на 30px
//     Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

// {/* <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>

// <div id="boxes"></div> */}

const controlsRef = document.querySelector('#controls');
console.log(controlsRef);
const numberRef = controlsRef.querySelector('input');
const buttonRenderRef = document.querySelector('[data-action="render"]');
const buttonDestroyRef = document.querySelector('[data-action="destroy"]');
console.log(numberRef);
const boxesRef = document.querySelector('#boxes');

let n = Number(numberRef);
let nom = 0;
let createDiv;
// const box = function (n) {
//   for (let i = 0; i < n; i += 1) { 
//     // nom = n[i]
//     // createDiv = controlsRef.innerHTML += `"<div>Box${nom}<div>"`;
//     createDiv = controlsRef.innerHTML += "<div>Box<div>";
//   }
// };

buttonDestroyRef.addEventListener("click", (e) => {
  numberRef.value = 0;
  const delDiv = controlsRef.removeChild(createDiv);
 });

buttonRenderRef.addEventListener("click", (e) => {
  // box()
  createDiv = controlsRef.innerHTML += "<div>Box<div>";
   });





// ------
// const listIngredients = document.querySelector("#ingredients");
// console.log(listIngredients);
// const cyclicList = ingredients.forEach((el, i, arr) => {
//   const creationItem = document.createElement("li");
//   creationItem.textContent = el;
//   listIngredients.appendChild(creationItem)
  
//   console.log(creationItem);
//   });