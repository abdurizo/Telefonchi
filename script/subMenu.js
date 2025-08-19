'use strict'

const lists = document.querySelectorAll('.nav_bottom_content');
const subMenu = document.querySelector('.sub_menu_wrap')
lists.forEach(list => {
    list.addEventListener('click', (e) => {
        e.preventDefault();
        subMenu.classList.toggle('open_sub_menu'); 
        console.log('1');
    });
})