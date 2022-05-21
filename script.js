let p = document.querySelector('#weight')
let a = document.querySelector('#height')
let i = document.querySelector('#age')
let result1 = document.querySelector('#span1')
let result2 = document.querySelector('#span2')

function calc1(){
    result1.innerHTML = Math.floor(10 * p.value + 6.25 * a.value + 5 * i.value + 5)
}
function calc2(){
    result2.innerHTML = Math.floor(10 * p.value + 6.25 * a.value + 5 * i.value + 5)
}