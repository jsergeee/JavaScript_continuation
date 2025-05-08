// Каталог товаров (можно взять из HTML или определить отдельно)
const catalog = [
  {
    id: 1,
    title: "ELLERY X M'O CAPSULE",
    price: "$52.00",
    image: "/image/11.jpg"
  },
  {
    id: 2,
    title: "ELLERY X M'O CAPSULE",
    price: "$52.00",
    image: "/image/12.jpg"
  },
  {
    id: 3,
    title: "ELLERY X M'O CAPSULE",
    price: "$52.00",
    image: "/image/13.jpg"
  },
  // добавьте остальные товары по аналогии
];

// Обработчик для кнопки "Add to Cart"
document.querySelectorAll('.product__add').forEach(btn => {
  btn.addEventListener('click', () => {
    const productElem = btn.closest('.product');
    const title = productElem.querySelector('.product__title').textContent;
    const price = productElem.querySelector('.product__price').textContent;
    const imgSrc = productElem.querySelector('.product__image').src;

    // Создаем элемент корзины
    const li = document.createElement('li');
    li.className = 'cart-item';

    li.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <div style="display:flex; align-items:center;">
          <img src="${imgSrc}" style="width:50px; margin-right:10px;">
          <div>
            <h4 style="margin:0;">${title}</h4>
            <p style="margin:0;">${price}</p>
          </div>
        </div>
        <a href="#" class="remove-item" style="margin-left:10px;">
          <img src="/icon/the_cross.svg" alt="Remove" style="width:20px;">
        </a>
      </div>
    `;

    // Обработка удаления
    li.querySelector('.remove-item').addEventListener('click', (e) => {
      e.preventDefault();
      li.remove();
    });

    // Добавляем в корзину
    document.querySelector('.cart2__list').appendChild(li);
  });
});