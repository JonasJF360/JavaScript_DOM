function imprimir(e) {
    console.log(e)
}

// QuerySelector
let elemento01 = document.querySelector('p')
imprimir(elemento01)
let elemento02 = document.querySelector('#segundo')
imprimir(elemento02)

let elemento03 = document.querySelector('.primeiro-div')
imprimir(elemento03)

let elemento04 = document.querySelector('ul li:last-child')
imprimir(elemento04)

// QuerySelectorAll
let elementoDiv = document.querySelectorAll('div')
imprimir(elementoDiv)