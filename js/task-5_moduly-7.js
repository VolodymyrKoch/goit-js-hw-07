// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input),
//   підставляє його поточне значення в span#name - output.якщо інпут порожній, в
// спані повинен відображатися рядок 'незнайомець'.

// const titleRef = document.querySelector('h1');
const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');
// console.log(spanNameRef);

inputNameRef.addEventListener("input", (event) => { 
  // console.dir(event);
  console.log(inputNameRef.value===event.target.value); 
  event.target.value !== "" ? (outputNameRef.textContent = event.target.value)
    : (outputNameRef.textContent = 'незнайомець' )
})

