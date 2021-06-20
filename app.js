let width = document.querySelector('#width')
let height = document.querySelector('#height')
let error = document.querySelector('.error')
let calc = document.querySelector('.calc')
let sectionOne = document.querySelector('#sec-1')
let sectionTwo = document.querySelector('#sec-2')
let sectionThree = document.querySelector('#sec-3')
let price = 500;
var sum = 0;
console.log(sectionTwo.checked);
calc.addEventListener('click', function() {
    if (width.value == '' || height.value == '') {
        error.classList.add('error-show')
        if (width.value == '') { width.classList.add('error-red') }
        if (height.value == '') { height.classList.add('error-red') }
        setTimeout(function() {
            error.classList.remove('error-show')
            width.classList.remove('error-red')
            height.classList.remove('error-red')
        }, 3000)

    } else {
        let radioBut = document.querySelectorAll('.radio-value');
        console.log(radioBut.length);
        for (var i = 0; i < radioBut.length; i++) {
            if (radioBut[i].checked) {
                sum = width.value * height.value * price * radioBut[i].value;
            }
        }

        let result = document.querySelector('.result-text');
        result.textContent = sum + ' руб.';
        let res = document.querySelector('.result');
        res.classList.add('result-show');
    }
})