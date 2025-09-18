const productInfo = document.querySelector('.product_information');

productInfo.addEventListener('click', function (event) {
    const productTab = event.target.closest('.product_tab');
    if (!productTab) return;

    const productTabAll = productInfo.querySelectorAll('.product_tab');
    productTabAll.forEach(el => {
        el.classList.remove('active');
    })
    const productContAll = productInfo.querySelectorAll('.product_contecst_wrap');
    productContAll.forEach(el => {
        el.classList.remove('show');
    });
    const filterProduct = productTab.dataset.info;
    constProductCont = productInfo.querySelector(`.product_contecst_wrap[data-info = "${filterProduct}"]`);
    if (constProductCont) {
        constProductCont.classList.add('show')
    }
    productTab.classList.add('active')
})