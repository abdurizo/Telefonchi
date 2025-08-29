'use strict'

const modal = document.querySelector('.modal');
const search = document.querySelector('.search_modal');
const close = document.querySelector('.close');

function toggleModal(isOpen) {
    modal.classList.toggle('open', isOpen);
    lock.classList.toggle('lock', isOpen);
}

search.addEventListener('click', () => toggleModal(true));
close.addEventListener('click', () => toggleModal(false));



document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleModal(false);
});
