let p = document.querySelector('#weight')
let a = document.querySelector('#height')
let i = document.querySelector('#age')

let sed = document.querySelector('#sed')
let lev = document.querySelector('#lev')
let mod = document.querySelector('#mod')
let alt = document.querySelector('#alt')
let ext = document.querySelector('#ext')

let result1 = document.querySelector('#span11')
let result2 = document.querySelector('#span2')

function calc1(){
    result1.innerHTML = Math.floor(10 * p.value + 6.25 * a.value + 5 * i.value + 5)
    result1.style.display = 'inline';
}

function sedexec(){
    result2.innerHTML = Math.floor(1.2 *(10 * p.value + 6.25 * a.value + 5 * i.value + 5))
    result2.style.display = 'inline';
}
function levexec(){
    result2.innerHTML = Math.floor(1.375 *(10 * p.value + 6.25 * a.value + 5 * i.value + 5))
    result2.style.display = 'inline';
}
function modexec(){
    result2.innerHTML = Math.floor(1.55 *(10 * p.value + 6.25 * a.value + 5 * i.value + 5))
    result2.style.display = 'inline';
}
function altexec(){
    result2.innerHTML = Math.floor(1.725 *(10 * p.value + 6.25 * a.value + 5 * i.value + 5))
    result2.style.display = 'inline';
}
function extexec(){
    result2.innerHTML = Math.floor(1.9 *(10 * p.value + 6.25 * a.value + 5 * i.value + 5))
    result2.style.display = 'inline';
}