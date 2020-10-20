// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
//     Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
//     Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
//     Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

const counterRef = document.querySelector("#counter");
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector("#value");

let counterValue = 0;
 decrementRef.addEventListener("click", (e) => {
  counterValue -=1;
  spanRef.textContent = `${counterValue}`;
});
 incrementRef.addEventListener("click", (e) => {
  counterValue +=1;
  spanRef.textContent = `${ counterValue}`;
});

