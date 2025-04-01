// const heading = document.querySelector('.title');
// const text = document.querySelectorAll('.text')
// // for (let i = 0; i < text.length; i++) {
// // console.log(text[i]);
    
// // }
// // console.log(heading);
// // console.log(text);
// text.forEach(element => {
//     console.log(element);
// });

// const heading2 = document.getElementById('heading');
// console.log(heading2);
// const heading3 = document.querySelector('#heading');
// console.log(heading3);
// const heading = document.querySelectorAll('.title');
// const listEls = document.getElementsByClassName('list');
// console.log(listEls);
// const listElsQS = document.querySelectorAll('.list')
// console.log(listElsQS);
// const listElGEBTN = document.getElementsByTagName('li');
// console.log(listElGEBTN);

//========createElement==========

// const paragraphElement = document.createElement('H1');
// paragraphElement.textContent = "Мой первый текст";
// // document.body.appendChild(paragraphElement); //Добавляем в конeц body



// const titleEl =  document.querySelector('.title');
// titleEl.textContent = 'Заголовок из JS';

//===================Node.appendChild()============

// const paragraphElementText = 


//==============cloneNode()==============


//==========Удаление узлов из DOM==========
// parentNode.removeChild(child);
// Element.remove();

// const heading2 = document.querySelector('#heading');
// heading2.remove();


//==========замена узла===========
// parentNode.replaseChild(newChild, oldChild);
// Element.replaseWith(...nodes);

const buttomEl = document.querySelector('.btn');
const contentEl = document.querySelector(".content");
const imgEl = document.querySelector('.img');

// console.log(buttomEl);

const textEl = document.createElement('p');
textEl.textContent = 'Тут много текста';

buttomEl.onclick = function () {
  buttomEl.textContent = "Товар в корзине";
  contentEl.appendChild(textEl);
  
};
imgEl.onclick = function(){
    imgEl.src = "img/577074bef439c056a64ecfea4468bc79.jpg";
    
}

imgEl.src = "img/457952625135df63c60fc54929da3fdf.jpg";