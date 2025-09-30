'use strict'

const burger =document.querySelector('.burger');
const menu =document.querySelector('.nav_bottom_med');
const lock =document.querySelector('body');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    lock.classList.toggle('lock');
});

