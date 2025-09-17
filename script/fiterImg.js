
const productDemons = document.querySelector('.product_demonstration');
productDemons.addEventListener('click', function (event) {
    const productBigImgs = productDemons.querySelectorAll('.big_img');
    const clickProductImg = event.target.closest('.product_image_card');

    const productImgAll=productDemons.querySelectorAll('.product_image_card');
    productImgAll.forEach(el => {
      el.classList.remove('active')
    })

    if (!clickProductImg) return;
    productBigImgs.forEach(el => {
        el.classList.remove('active')
    });
    const filterValue = clickProductImg.dataset.filterImg;

  const activeBigImg = productDemons.querySelector(`.big_img[data-filter-img="${filterValue}"]`);
    if (activeBigImg) {
         activeBigImg.classList.add('active');
    }
    clickProductImg.classList.add('active')
})