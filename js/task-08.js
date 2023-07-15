//знаходимо форму
const formEl = document.querySelector(".login-form");

//додаємо слухача події
formEl.addEventListener("submit", handleSubmit);

//функція, що
// -скасовує відправлення форми по замовчанню,
// -отримує доступ до всих полів форми
// -перевіряє чи вони заповнені,
// -виводить дані користувача із форми в консоль
// -та очищає значення полів форми
function handleSubmit(event) {
   event.preventDefault();

   const { email, password } = event.currentTarget.elements;

   if (email.value === "" || password.value === "") {
      return alert("Всі поля повинні бути заповнені!");
   }

   const userData = {
      email: email.value,
      password: password.value,
   };

   console.dir(userData);

   event.currentTarget.reset();
}
