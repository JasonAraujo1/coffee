var menuExp = document.querySelector('#exp-icon')
var menuSide = document.querySelector('.menu-lateral ul')
var menuBtn = document.querySelector('.menu-lateral')


menuExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    menuBtn.classList.toggle('expandir')
})