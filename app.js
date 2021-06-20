let slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}

let slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}


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
        // error.classList.add('error-show')
        slideToggle(error, 300)
        if (width.value == '') { width.classList.add('error-red') }
        if (height.value == '') { height.classList.add('error-red') }
        setTimeout(function() {
            slideToggle(error, 300)
                // error.classList.remove('error-show')
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
        // res.classList.add('result-show');
        slideToggle(res, 300)
    }
})