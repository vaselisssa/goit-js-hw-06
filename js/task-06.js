//знаходимо елемент
const inputVal = document.getElementById("validation-input");

//додаємо слухача події
inputVal.addEventListener("blur", handleVal);

//функція, що перевіряє валідність вводу за умовами та через додавання/видалення класу встановлює відповідні стилі

function handleVal(event) {
   if (
      event.currentTarget.value.length == inputVal.getAttribute("data-length")
   ) {
      inputVal.classList.add("valid");

      if (inputVal.classList.contains("invalid")) {
         inputVal.classList.remove("invalid");
      }
   } else {
      if (inputVal.classList.contains("valid")) {
         inputVal.classList.remove("valid");
      }
      inputVal.classList.add("invalid");
   }
}
