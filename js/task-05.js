//знаходимо елементи
const inputName = document.getElementById("name-input");
const greeting = document.getElementById("name-output");

//додаємо слухача подій на інпут, і в залежності від умови, передаємо значення на аутпут
inputName.addEventListener(
   "input",
   (event) =>
      (greeting.textContent =
         event.target.value === "" ? "Anonymous" : event.target.value)
);
