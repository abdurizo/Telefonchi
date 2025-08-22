'use strict'

const lists = document.querySelectorAll('.list_wrap');

lists.forEach(list => {
    const subMenu = list.querySelector('.sub_menu_wrap');                           
    list.addEventListener('click', (e) => {
        e.preventDefault();
        const isActive = list.classList.contains('active_list')

        document.querySelectorAll('.sub_menu_wrap').forEach(menu => {
            menu.classList.remove('open_sub_menu');
        });

        lists.forEach(item => item.classList.remove('active_list'));

        if (!isActive) {
            list.classList.add('active_list');
            if (subMenu) {
                subMenu.classList.add('open_sub_menu');
            }
        }

    });
});