// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв
// його вміст на правильну кількість символів.

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,
//   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

const inputScanRef = document.querySelector("#validation-input");
const inputAtrref = document.querySelector('[data-length="6"]');

inputScanRef.addEventListener("blur", () => { 
    if (inputScanRef.value.length === Number(inputAtrref.dataset.length)) {
    inputScanRef.classList.add('valid')
    inputScanRef.classList.remove('invalid')
  }
  else { inputScanRef.classList.add('invalid') 
  inputScanRef.classList.remove('valid')}
   })