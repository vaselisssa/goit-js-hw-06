function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

//знаходимо елементи: поле вводу, кнопки і контейнер для блоків
const inputAmount = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

//функція, що створює в пам'яті введену кількість div та стилізує їх
function createBoxes(amount) {
   const arrBoxes = [];

   for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");

      box.style.width = `${30 + 10 * i}px`;
      box.style.height = `${30 + 10 * i}px`;
      box.style.backgroundColor = getRandomHexColor();

      arrBoxes.push(box);
   }
   return arrBoxes;
}

//функція, що очищає вміст контейнеру
function destroyBoxes() {
   boxes.innerHTML = "";
}

//додаємо слухачів подій на кнопки, що запустить функцію створення блоків і додасть їх у контейнер
createBtn.addEventListener("click", () => {
   let boxesToAdd = createBoxes(inputAmount.value);
   boxes.append(...boxesToAdd);
});

destroyBtn.addEventListener("click", () => {
   destroyBoxes();
});
