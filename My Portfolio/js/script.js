let arrayBtn = document.querySelector('.back__uzor')
let mod = document.querySelector('.modal')


let burger = document.querySelector('.burger')
let wrapp = document.querySelector('.wrapper')
let closeX = document.querySelector('.close')


burger.addEventListener('click', function(){
    wrapp.style.display = 'flex'
    closeX.style.display = 'flex'
    burger.style.display = 'none'
    // burger.style.display = 'none'
//    alert('hello')
})

closeX.addEventListener('click', function(){
    wrapp.style.display = 'none'    
    burger.style.display = 'flex'
    closeX.style.display = 'none'
    // burger.style.display = 'none'
})



arrayBtn.addEventListener('click', function(){
    arrayBtn.style.display = 'flex'
    mod.style.display = 'flex'
})


// let right = document.querySelector('.curs')

// right.addEventListener('click', function(){
//     alert('Picture online')
// })



// let tugma = document.querySelector('.btn')
// let madal = document.querySelector('.modal')
// let x = document.querySelector('.x')

// tugma.addEventListener('click', function(){
//     tugma.style.background = 'green'
//     madal.style.display = 'flex'
// })

// x.addEventListener('click', function () {
//     madal.style.display = 'none'
// })

let index = 0;

const parent_Img_Container = document.querySelector('.picture');
const sliders= parent_Img_Container.querySelectorAll('div');
const slider_buttons = document.querySelectorAll('.curs .right svg');

console.log(slider_buttons)
xisob()
function show(parent){
    parent.style.trasform = `translate()`
}

slider_buttons[0].addEventListener('click',left);
slider_buttons[1].addEventListener('click',right);

function left(){
    index--;
    if(index < 0){
        index = sliders.length- 1;
    }
    xisob(); 
}
function right(){
    index++;
    if(index == sliders.length){
        index = 0;
    }
    xisob(); 
}

function xisob(){
   parent_Img_Container.style.transform = `translateX(-${index*(100/sliders.length)}%)`;
}