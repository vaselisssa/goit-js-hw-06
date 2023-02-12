const ingredients = [
   "Potatoes",
   "Mushrooms",
   "Garlic",
   "Tomatos",
   "Herbs",
   "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsListItems = [];

ingredients.forEach((ingredient) => {
   const listItem = document.createElement("li");
   listItem.textContent = ingredient;
   listItem.classList.add("item");
   ingredientsListItems.push(listItem);
});

ingredientsList.append(...ingredientsListItems);
