// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input),
//   підставляє його поточне значення в span#name - output.якщо інпут порожній, в
// спані повинен відображатися рядок 'незнайомець'.


const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener("input", (event) => { 
  console.log(inputNameRef.value===event.target.value); 
  event.target.value !== "" ? (outputNameRef.textContent = event.target.value)
    : (outputNameRef.textContent = 'незнайомець' )
})

