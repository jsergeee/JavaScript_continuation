// const content = document.querySelector('.content'); //находим нужный нам элемент
// const h1El = document.createElement('h1'); //создаем новый элемент
// h1El.textContent = 'h1 element'; //изменяем содержимое
// // h1El.style.backgroundColor = 'grey'; заменили на .setAttribute
// // h1El.style.textAlign = 'center'; заменили на .setAttribute
// // h1El.style.margin = '0px';   заменили на .setAttribute

// h1El.setAttribute('class', 'heading'); //добавляем стили
// const imgEl = document.createElement('img');
// imgEl.src = 'phohto.png';
// imgEl.alt = 'Крутое фото'; //первый вариант
// imgEl.setAttribute('alt', 'Очень крутое фото!'); //второй вариант


// content.appendChild(h1El); //иннициируем 
// content.appendChild(imgEl);




//===================подсказа от GPT=========================
// const h1El = document.createElement("h1");
// h1El.textContent = "h1 element";

// const styles = {
//   backgroundColor: "grey",
//   textAlign: "center",
//   margin: "0px",
// };

// for (const property in styles) {
//   h1El.style[property] = styles[property];
// }
//==================пример от GPT ======================
// const button = document.querySelector('.button')
// const buttonEl = document.createElement("button");
// buttonEl.setAttribute("type", "button");
// buttonEl.setAttribute("id", "myButton");
// buttonEl.setAttribute("onclick", 'buttonEl.textContent = "кнопка нажата"'); // сам поменял с 'alert("Кнопка нажата!")' на 'buttonEl.textContent = "кнопка нажата"'
// buttonEl.textContent = "Нажми меня";
// button.appendChild(buttonEl);
//========================================================================
// const liEl = document.querySelectorAll('.menu__list');
// const liElOne = document.querySelector(".menu__list");
// const linkEl = document.querySelector('.menu__link');
// const menuEl = document.querySelector('.menu');
// // console.log(liEl);
// // console.log(liElOne.parentNode.children);

// // console.log(linkEl.children);
// // console.log(linkEl.childNodes);

// // console.log(menuEl.children); // HTML Collection .forEach не работает 
// // console.log(menuEl.childNodes); // Node list

// menuEl.childNodes.forEach(element => {
//     console.log(element);
// });



//======================== опетратор spread===================


//======================== опетратор rest=======================



//==================работа с коллекциями===============

// const divEl = document.querySelector('.content');
// // console.log(divEl.childNodes);
// // console.log(divEl.children);

// // Array.from(divEl.childNodes).forEach((childNode) => {
// //     console.log('childNode "%s типа "%d', childNode.nodeName, childNode.nodeType)
// // });

// console.log(divEl.children);

// [...divEl.children].forEach(element => {
//     console.log(element);
// });

// [...divEl.children].forEach((child) => {
//     console.log('child "%s типа "%d', child.nodeName, child.nodeType);
// })

//===========================навигация по дереву DOM=================

const liEl = document.querySelectorAll('.menu__list');
const liElOne = document.querySelector(".menu__list");
const linkEl = document.querySelector('.menu__link');

console.log(liElOne);

// console.log(liElOne.parentElement.lastElementChild); // <li class="menu__list"><a href="#" class="menu__link">link4</a></li>
// console.log(liElOne.parentElement.lastChild); // text
console.log(liElOne.parentElement.firstElementChild);
// console.log(liElOne.nextElementSibling);
// console.log(liElOne.nextElementSibling.nextElementSibling);
console.log(liElOne.parentElement.lastElementChild.previousElementSibling);