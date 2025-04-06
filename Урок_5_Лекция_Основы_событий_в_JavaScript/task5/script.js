// const buttonEl = document.querySelector(".btn");
// let count = 0;



// const click = function () {
//   console.log("click js button");
//   count++;
//   console.log(`Кликов по кнопке ${count}`);
// };

// // buttonEl.onclick = click;
// // buttonEl.onclick = click();

// document.addEventListener('click', click);

// // buttonEl.addEventListener('click', function (e) {
// //   console.log('click add');
// // })

// // buttonEl.addEventListener("click", function (e) {
// //   console.log("click add two");
// // });

//================================

// const buttonEls = document.querySelectorAll(".button");

// buttonEls.forEach((element) => {
//     element.addEventListener("click", function (e) {
//       const target = e.target;
//       console.log(target);
//     });
//   });


//===================================

// const menuEl = document.querySelector('.menu');


// const nameFunction = (e) => {
//   console.log(e.target, e.curentTarget);
  
// }

// menuEl.addEventListener('click', nameFunction);

//===================================


// document.addEventListener('DOMContentLoaded', ev => {
//   console.log('loaded');
  
// });

// window.addEventListener('load', ev => {
//   console.log('Load all');
// });

//====================================

// const button = document.querySelector('button');

// button.addEventListener('mouseover', ev => {
//   console.log('Лучше не наводить, ты лучше кликни');
// });

// button.addEventListener("mouseleave", (ev) => {
//   console.log("Не убегай, жми!");
// });

//===============================

// window.addEventListener('keydown', ev => {
//   console.log(ev);
  
// })

// window.addEventListener("keyup", (ev) => {
//   console.log(ev);
// });

// window.addEventListener("keypress", (ev) => {
//   console.log(ev);
// });

// keyup, keypress
  //  • keypress устарел и не рекомендуется для использования в новых проектах, так как он не поддерживает все клавиши, и в современных браузерах его поведение может быть непредсказуемым.
//================================

// const linkEl = document.querySelector('.link');


// linkEl.addEventListener('click', ev => {
//   ev.preventDefault();
//   console.log('hello link');
// })

//===================================

// document.addEventListener('copy', ev => {
//   const copyText = document.getSelection().toString();
//   console.log(copyText);
// })

//=========================
// window.addEventListener('resize', ev => {
//   console.log("resize");
// })


//============================

// const inputEl = document.querySelector('input');

// inputEl.addEventListener('input', ev => {
//   if (Number(ev.target.value) === 123) {
//     console.log('Верно');
//   } else {
//     console.log("Пока не угадал");
//   }
  
// })

//это тоже работает:
// document.querySelector('input').addEventListener('input', ev => {
//   console.log(ev.target.value);
// })

//======================================================

// const inputText = document.querySelector("input");
// const formRun = document.querySelector('form');
// const errorEl = document.querySelector('.error');

// formRun.addEventListener("submit", (ev) => {
//   if (inputText.value === "") {
//     ev.preventDefault();
//     errorEl.textContent = "Поле не должно быть пустым";
//   }
// });
//=============================================================