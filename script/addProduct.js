    'use strict'

const navCard = document.querySelector('.nav_cart');
const navCardCircle = document.querySelector('.nav_cart_circle');
let count = 0

document.querySelectorAll('.content').forEach(content => {
    const cartBtn = content.querySelector('.cart');
    const priceProducWrap = content.querySelector('.price_wrap');
    const priceProduc = content.querySelector('.price');
    const addProduc = content.querySelector('.add');

    if (!cartBtn || !priceProducWrap || !addProduc){
        return; 
    } 

    cartBtn.addEventListener('click', () => {
        count++
        navCardCircle.textContent = count;

        cartBtn.classList.add('color')
        // показываем эффект только для этой карточки
        setTimeout(() => {
            addProduc.style.right = '0';
            priceProduc.style.opacity = '0'
        }, 100);

        setTimeout(() => {
            addProduc.style.right = '-120%';
        }, 2000);

        setTimeout(() => {
            priceProduc.style.opacity = '1';
        }, 2200);

        // анимация картинки в корзину
        const slide = content.closest(".swiper-slide");
        const img = slide?.querySelector(".image img");
        if (!img || !document.querySelector('.nav_cart')) return;
        const clone = img.cloneNode(true);
        document.body.appendChild(clone);
        clone.classList.add("fly");
        // ставим клон на позицию оригинала
        const rectImg = img.getBoundingClientRect();
        clone.style.left = rectImg.left + "px";
        clone.style.top = rectImg.top + "px";
        clone.style.width = rectImg.width + "px";
        clone.style.height = rectImg.height + "px";
        // анимация: летим в корзину
        const rectCart = navCard.getBoundingClientRect();
        setTimeout(() => {
            clone.style.left = rectCart.left + rectCart.width / 2 + "px";
            clone.style.top = rectCart.top + rectCart.height / 2 + "px";
            clone.style.width = "20px";
            clone.style.height = "20px";
            clone.style.opacity = "0";
        }, 50);
        // удалить после анимации
        setTimeout(() => clone.remove(), 1200);
    });
});



// const carts = document.querySelectorAll('.cart');
// const addProduc = document.querySelector('.add');
// const priceProduc = document.querySelector('.price');
// carts.forEach(cart => {
//     cart.addEventListener('click', () => {
//         priceProduc.classList.add('display');
//         setTimeout(() => {
//             addProduc.style.right = '55px';
//         }, 100);
//         setTimeout(() => {
//             addProduc.style.right = '-100%';
//             //  carts.forEach(c => c.style.pointerEvents = "none");
//         }, 2000);
//         // ищем картинку внутри текущего слайда
//         const slide = cart.closest(".swiper-slide");
//         const img = slide.querySelector(".image img");
//         if (!img) return;
//         // создаём клон
//         const clone = img.cloneNode(true);
//         document.body.appendChild(clone);
//         clone.classList.add("fly");
//         // ставим клон на позицию оригинала
//         const rectImg = img.getBoundingClientRect();
//         clone.style.left = rectImg.left + "px";
//         clone.style.top = rectImg.top + "px";
//         clone.style.width = rectImg.width + "px";
//         clone.style.height = rectImg.height + "px";
//         // анимация: летим в корзину
//         setTimeout(() => {
//             const rectCart = navCard.getBoundingClientRect();
//             clone.style.left = rectCart.left + rectCart.width / 2 + "px";
//             clone.style.top = rectCart.top + rectCart.height / 2 + "px";
//             clone.style.width = "20px";
//             clone.style.height = "20px";
//             clone.style.opacity = "0";
//         }, 50);
//         // удалить после анимации
//         setTimeout(() => clone.remove(), 1200)
//     });
// });