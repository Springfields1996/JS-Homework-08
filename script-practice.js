// const gallery = document.querySelector(".ul-practice");
// let photos = "";

// for (let i = 0; i < 4; i++) {
//   let number = Math.round(Math.random() * 100);
//   photos += `<li class="li-image"><img src = "https://picsum.photos/id/${number}/200/300" alt = ""></li>`;
// }

// gallery.insertAdjacentHTML("afterbegin", photos);

// gallery.addEventListener("click", (event) => {
//   if (event.target.nodeName === "IMG") {
//     console.log(event.target.src);
//   }
// });

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой.
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// const buttons = document.querySelector(".text-and-button");
// let number = Math.round(Math.random() * 100);
// let buttonsList = "";

// for (let i = 0; i < number; i++) {
//   buttonsList += `<li class="li"><button class="button" background-color= "rgb(${number}, ${number}, ${number}")>Кнопка</button>Подпись</li>`;
// }

// buttons.insertAdjacentHTML("afterbegin", buttonsList);

// buttons.addEventListener("click", (event) => {
//   if (event.target.nodeName === "BUTTON") {
//     event.target.parentNode.remove();
//   }
// });

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все
  инпуты проверяли свое содержимое на правильное количество символов.

  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
  - Если введено подходящее количество, то outline инпута становится зеленым,
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// const inputs = document.querySelector(".inputs");

// const checkText = function (event) {
//   console.log(event.target.value);
//   if (
//     event.target.value.length > 0 &&
//     event.target.value.length < event.target.getAttribute("data-length")
//   ) {
//     // console.log(event.target);
//     event.target.classList.add("invalid");
//     event.target.classList.remove("valid");
//   } else if (event.target.value.length >= event.target.getAttribute("data-length")) {
//     event.target.classList.add("valid");
//     event.target.classList.remove("invalid");
//   } else {
//     event.target.removeAttribute("class");
//   }
// };

// inputs.addEventListener("input", checkText);
