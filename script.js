//menu nav

var menuExp = document.querySelector('#exp-icon')
var menuSide = document.querySelector('.menu-lateral ul')
var menuBtn = document.querySelector('.menu-lateral')


menuExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    menuBtn.classList.toggle('expandir')
})


//click selection

var menuItem = document.querySelectorAll('.menu-li')

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuItem.forEach((item)=>
item.addEventListener('click', selectLink)
)