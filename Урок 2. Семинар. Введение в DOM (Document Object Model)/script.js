
//Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль

// const divBlock = document.getElementById('block');
// console.log(divBlock);

// const divBlock = document.querySelector("#block p:first-child");
// console.log(divBlock);

//=================================
//Получите ссылку на первый абзац с классом www. и вывести его в консоль
// const elWWW = document.querySelector('.www');
// const elWWW = document.querySelector(".www:first-of-type");
// console.log(elWWW);


//==================================
// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const linkContent = document.querySelector('.link')
const imgElem = document.querySelector(".photo");
const textContent = document.querySelector('.content');


linkContent.onclick = function () {
  linkContent.textContent = "link text js";
  imgElem.src="https://i.pinimg.com/originals/5d/e2/42/5de24294bad21ec99931f4c362354f22.jpg";
  textContent.textContent = "Новый текстовый элемент";
  
};

// textContent.onclick = function () {
//   textContent.remove();
// };


const buttonClick = document.querySelector(".button");
const clickCountDisplay = document.querySelector(".click-count");
let clickCount = 0;

buttonClick.onclick = function () {
  clickCount++; // Увеличиваем счетчик нажатий
  clickCountDisplay.textContent = clickCount; // Обновляем текст в элементе
  console.log("Количество нажатий: " + clickCount); // Выводим в консоль
};

//===========================================

 function updateTime() {
   // Получаем текущее время
   let now = new Date();

   // Форматируем время
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();

   // Добавляем нули перед числами, если они меньше 10
   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;

   // Создаем строку времени
   let timeString = hours + ":" + minutes + ":" + seconds;

   // Обновляем содержимое элемента на странице
   const realTime = document.querySelector(".time");
   realTime.textContent = timeString;
 }

 // Обновляем время каждую секунду
 setInterval(updateTime, 1000);

 // Вызываем функцию сразу, чтобы не ждать первую секунду
 updateTime();

