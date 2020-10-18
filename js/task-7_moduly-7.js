// Напиши скрипт, який реагує на зміну значення input#font - size - control
//   (подія input) і змінює інлайн - стиль span#text оновлюючи
// властивість font - size.В результаті при перетягуванні повзунка
// змінюватиметься розмір тексту.
const sizeControleRef = document.querySelector('#font-size-control');
const spanSizeRef = document.querySelector('#text');

sizeControleRef.addEventListener('input', (e) => { 
  spanSizeRef ? spanSizeRef.style.fontSize = `${sizeControleRef.value}px` : "";
});