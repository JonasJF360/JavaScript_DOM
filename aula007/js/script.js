function imprimir(e) {
    console.log(e)
}

let elementoH3 = document.querySelector('#titulo > i > u')
elementoH3.style.color = 'red'

let elementoDivNoticia = document.querySelector('.noticia > h1')
// innerText
imprimir(elementoDivNoticia.innerText)

// innerHTML
elementoDivNoticia.innerHTML = 'Novo <u>título</u>'
imprimir(elementoDivNoticia.innerHTML)

// outerHTML
imprimir(elementoDivNoticia.outerHTML)

// atributos
// operações no console
