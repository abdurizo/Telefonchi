
const productDemons = document.querySelector('.product_demonstration');
productDemons.addEventListener('click', function (event) {
    const productBigImgs = productDemons.querySelectorAll('.big_img');
    const clickProductImg = event.target.closest('.product_image_card');

    if (!clickProductImg) return;
    productBigImgs.forEach(el => {
        el.classList.remove('active')
    });
    const filterValue = clickProductImg.dataset.filterImg;

  const activeBigImg = productDemons.querySelector(`.big_img[data-filter-img="${filterValue}"]`);
    if (activeBigImg) {
         activeBigImg.classList.add('active');
    }
})