//ініціалізація лічильника
let counterValue = 0;

//знаходимо елементи
let counter = document.querySelector("#value");
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

//додаємо слухачів подій
btnDec.addEventListener("click", () => {
   counterValue -= 1;
   counter.textContent = counterValue;
});

btnInc.addEventListener("click", () => {
   counterValue += 1;
   counter.textContent = counterValue;
});
