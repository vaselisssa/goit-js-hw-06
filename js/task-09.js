function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//знаходимо елементи
const bodyRef = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

//Додаємо слухача подій на кнопку

changeColorBtn.addEventListener("click", onClick);

//функція, яка бере випадковий колір
//і додає його значення на body
//та виводить назву кольору у span
function onClick(event) {
   let color = getRandomHexColor();

   bodyRef.style.backgroundColor = color;
   colorName.textContent = color;
}
