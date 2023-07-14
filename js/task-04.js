//ініціалізація лічильника
let counterValue = 0;

//створюємо посилання на елементи
let counterEl = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

//вішаємо слухачів події на кнопки та змінюємо відповідно значення лічильника

decrementBtn.addEventListener("click", () => {
   counterValue -= 1;
   counterEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
   counterValue += 1;
   counterEl.textContent = counterValue;
});
