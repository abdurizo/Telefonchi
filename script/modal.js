'use strict'

const modal = document.querySelector('.modal');
const search = document.querySelector('.search_modal');
const close = document.querySelector('.close');
search.addEventListener('click', () => {
    modal.classList.add('open');
    lock.classList.add('lock');
})
close.addEventListener('click', () => {
    modal.classList.remove('open');
     lock.classList.remove('lock');
})