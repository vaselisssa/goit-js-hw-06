const images = [
   {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
   },
   {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
   },
   {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
   },
];

//знаходимо елементи
const galleryList = document.querySelector(".gallery");

//функція, що створює елемент розмітки з кожного об'єкта у вигляді шаблонного рядка
const makeGalleryItem = ({ url, alt }) => {
   return `<li><img width="300" src="${url}" alt="${alt}"></li>`;
};

//перебираємо масив об'єктів, на кожній ітерації створюємо шаблонний рядок
//та перетворюємо масив шаблонних рядків в один рядок
const galleryItems = images.map(makeGalleryItem).join("");

//додаємо створені елементи до розмітки
galleryList.insertAdjacentHTML("beforeend", galleryItems);

//додаємо стилі
galleryList.style.listStyleType = "none";
galleryList.style.display = "flex";
galleryList.style.gap = "20px";
galleryList.style.justifyContent = "center";
galleryList.style.alignItems = "center";
