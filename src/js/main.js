let burgerMenu = document.querySelector(".header__burger")
let burgerList= document.querySelector(".header__list")
//  let body = document.querySelector("body")
let activeRange = document.querySelector(".javascript__range-active")
let range = document.querySelector(".javascript__range-line")
let selectOriginalValue = document.querySelector("#select")
//  let selectCounter = 0;
var all = document.getElementsByTagName("*");
let selectOriginal = document.querySelector('.personal__select');
let selectTemplate = document.querySelector('.personal__select-template');
let selectPlaceholder = document.querySelector('.personal__select-placeholder');
let selectValue = document.querySelector('.personal__select-value')
let selectBox = document.querySelector('.personal__select-box');
let selectArrow = document.querySelector('.personal__select-arrow');
let selectOption = document.querySelectorAll('.personal__select-option');
let selectBlock = document.querySelector('.select-block')
let drugItem = document.querySelector(".javascript__drug-item")

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active-burger')
    burgerList.classList.toggle('active-list')
})
range.addEventListener('mousemove', function () {
    activeRange.style.width = range.value + "%"
})
range.addEventListener('change', function () {
    activeRange.style.width = range.value + "%"
})
for (let i = 0; i < selectOption.length; i++) {
    selectOption[i].addEventListener("click", function () {
        selectOriginalValue.value = this.dataset.value;
        selectValue.innerHTML = selectOriginalValue.value;
        if (this.dataset.value === "none") {
            selectPlaceholder.classList.remove("active-placeholder");
            selectOriginalValue.value = "";
        } else {
            selectPlaceholder.classList.add("active-placeholder");
        }
        return selectOriginalValue;
    })
}

selectOption[1].click()



selectTemplate.addEventListener("click", function () {
    selectTemplate.classList.toggle('select-focus');
    selectArrow.classList.toggle('rotate-arrow');
    selectBox.classList.toggle('active-box');
})


selectBlock.addEventListener("mouseleave", function () {
    selectTemplate.classList.remove('select-focus');
    selectArrow.classList.remove('rotate-arrow');
    selectBox.classList.remove('active-box');
})