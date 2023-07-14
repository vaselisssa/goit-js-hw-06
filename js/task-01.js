//1. пошук всих елементів за селектором класу .item
// і виводимо в консоль кількість знайдених категорій

const categoriesEl = document.querySelectorAll(".item");
console.dir(categoriesEl);
console.log(`Number of categories: ${categoriesEl.length}`);

//2. перебираємо кожний елемент з .item і для кожного
// виводимо текст з заголовку
// та кількість "дітей"

categoriesEl.forEach((category) => {
   console.log(`Category: ${category.firstElementChild.textContent}`);
   console.log(`Elements: ${category.lastElementChild.children.length}`);
});
