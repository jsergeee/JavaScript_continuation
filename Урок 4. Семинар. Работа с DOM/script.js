// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)
//==========================================

// const divEl = document.querySelector(".item");
// const newItem = document.createElement('h1');
// newItem.textContent = 'New Element';

// newItem.setAttribute('class', 'item1');

// divEl.innerHTML = ''; // Очищаем текущее содержимое
// divEl.appendChild(newItem);

// divEl.replaceChild(newItem, divEl.firstChild); //или полная замена

//=================================================
// Необходимо с помощью querySelector найти параграф с классом text

// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem
//====================================================

// const text = document.querySelector('.text');
// const content = document.querySelector('.content');

// console.log(text.parentElement.firstElementChild);

//=============================================

// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

// const headerEl = document.querySelector('h2');

// console.log(headerEl.parentElement);
// console.log(headerEl.parentElement.parentElement);
// console.log(headerEl.parentElement.parentElement.parentElement);

//======== подсказка от GPT ========

// ### Способ 1: Использование переменной

// const headerEl = document.querySelector('h2');
// let parentEl = headerEl.parentElement;

// console.log(parentEl); // Первый родитель
// console.log(parentEl.parentElement); // Второй родитель
// console.log(parentEl.parentElement.parentElement); // Третий родитель

//=====================================================
// ### Способ 2: Использование цикла

// Если вы хотите вывести несколько уровней родительских элементов, можно использовать цикл:

// const headerEl = document.querySelector('h2');
// let currentEl = headerEl;

// for (let i = 0; i < 3; i++) {
//     currentEl = currentEl.parentElement;
//     console.log(currentEl); // Выводим каждый родительский элемент
// }

//============================================================
// ### Способ 3: Использование массива

// Если вы хотите сохранить все родительские элементы в массиве:

// const headerEl = document.querySelector('h2');
// const parents = [];

// let currentEl = headerEl;

// while (currentEl) {
//     parents.push(currentEl);
//     currentEl = currentEl.parentElement;

// }

// // // Теперь можно вывести первых трех родительских элементов
// console.log(parents[1]); // Первый родитель
// console.log(parents[2]); // Второй родитель
// console.log(parents[3]); // Третий родитель
// console.log(parents[4]);
// console.log(parents[5]);
// console.log(parents[6]);

//====================================================
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

// const form = document.querySelector("form"); // Находим форму
// const input = form.querySelector('input[type="text"]'); // Находим поле ввода в форме
// const errorContainer = document.querySelector(".errorContainer"); // Находим контейнер для ошибок

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Отменяем стандартное поведение формы

//   const inputValue = input.value.trim(); // Получаем значение из поля ввода

//   // Очищаем предыдущие ошибки
//   errorContainer.innerHTML = "";
//   input.classList.remove("input-error"); // Убираем класс ошибки

//   if (inputValue === "") {
//     // Если поле ввода пустое, выводим сообщение об ошибке
//     const errorMessage = document.createElement("h2");
//     errorMessage.textContent = "Вы не заполнили поле ввода";
//     errorMessage.classList.add("error"); // Добавляем класс для стилизации

//     errorContainer.appendChild(errorMessage); // Добавляем сообщение в контейнер
//     input.classList.add("input-error"); // Добавляем класс для красной рамки
//   } else {
//     // Здесь можно добавить код для обработки введенного текста
//     console.log(inputValue); // Просто выводим значение в консоль
//   }
// });

//====================================

// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const content = document.querySelector('.content');
const newElButton = document.createElement('button');
newElButton.textContent = 'Push me';
content.append(newElButton);


newElButton.onclick = function() {
    newElButton.textContent = "Text sent";
}


//===============Посдтказка от GPT==============================

// Метод `document.createElement` используется для создания отдельных HTML-элементов, а не для создания целых фрагментов HTML-кода, как в вашем примере. Чтобы создать форму с помощью `createElement`, вам нужно будет создать каждый элемент отдельно и затем добавить их в форму. Вот как это можно сделать:

//=========================
// Создаем форму
// const newForm = document.createElement('form');
// newForm.setAttribute('action', '#'); // Устанавливаем атрибут action

// // Создаем поле ввода
// const input = document.createElement('input');
// input.setAttribute('type', 'text'); // Устанавливаем тип поля ввода

// // Создаем кнопку
// const button = document.createElement('button');
// button.classList.add('btn'); // Добавляем класс к кнопке
// button.textContent = 'Отправить'; // Устанавливаем текст кнопки

// // Добавляем элементы в форму
// newForm.appendChild(input);
// newForm.appendChild(document.createElement('br')); // Добавляем перенос строки
// newForm.appendChild(button);

// // Теперь newForm содержит всю структуру формы
// document.body.appendChild(newForm); // Добавляем форму в тело документа

//===============================================
// ### Объяснение кода:

// 1. **Создание формы**: Используем `document.createElement('form')` для создания нового элемента формы и устанавливаем атрибут `action`.

// 2. **Создание поля ввода**: Создаем элемент `<input>`, устанавливаем его тип на `text`.

// 3. **Создание кнопки**: Создаем элемент `<button>`, добавляем ему класс и текст.

// 4. **Добавление элементов**: Используем `appendChild` для добавления поля ввода, переноса строки и кнопки в форму.

// 5. **Добавление формы в документ**: В конце добавляем созданную форму в тело документа (или в другой контейнер, если это необходимо).

// Теперь у вас есть форма, созданная с помощью JavaScript! Если у вас есть дополнительные вопросы или требуется помощь, дайте знать! 😊