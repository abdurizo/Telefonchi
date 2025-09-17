
const infoOptions = document.querySelector('.product_info_options');
const number = document.querySelector('.number');
let countQuantity = 0

if (!infoOptions) {
    console.warn('Не найден .product_info_options в DOM');
} else {
    let countQuantity = 0;

    infoOptions.addEventListener("click", function (event) {
        if (event.target.closest(".increment")) {
            countQuantity++
            number.textContent = countQuantity
        } else if (event.target.closest(".decrement")) {
            if (countQuantity > 0) {
                countQuantity--
                number.textContent = countQuantity
            }
        }
        const colorEl = event.target.closest('.product_options_color');
        if (colorEl) {
            const optionsColors = infoOptions.querySelectorAll('.product_options_color');
            optionsColors.forEach(element => {
                element.classList.remove('active');
            });
            colorEl.classList.add('active');
        }
    })
}