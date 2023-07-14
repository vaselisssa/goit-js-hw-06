const ingredients = [
   "Potatoes",
   "Mushrooms",
   "Garlic",
   "Tomatos",
   "Herbs",
   "Condiments",
];

//створюємо посилання на порожній список, який будемо заповнювати
const ingredientsList = document.querySelector("#ingredients");

//пишемо функцію, яка для окремого інгредієнта створює елемент розмітки
const makeListItem = (ingredient) => {
   const listItem = document.createElement("li");
   listItem.textContent = ingredient;
   listItem.classList.add("item");

   return listItem;
};

//застосовуємо цю функцюю до кожного елементу масиву інгредієнтів
const ingredientsListItems = ingredients.map(makeListItem);

//додаємо всі елементи (розпилюємо з масиву) в середину списка
ingredientsList.append(...ingredientsListItems);
