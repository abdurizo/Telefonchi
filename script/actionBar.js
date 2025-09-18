
const actionBar = document.querySelector('.product_action_bar');
actionBar.addEventListener('click', function (event) {
    const socialMedia = actionBar.querySelector('.social_media_wrap');
    clickActionOrder = event.target.closest('.product_action_bar_order');
    if(!clickActionOrder)return;
    clickActionOrder.classList.toggle('active');
    clickShare = event.target.closest('.share');
    if(clickShare){
        socialMedia.classList.toggle('show')
    }else{
        return
    }
})