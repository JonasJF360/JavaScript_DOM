// atributos
const elementoH3 = document.querySelector('h3')

// hasAttribute
if (elementoH3.hasAttribute('id')) console.log('SIM, o H3 tem um "id"')

// getAttribute
console.log(elementoH3.getAttribute('id'))

// setAttribute
elementoH3.setAttribute('title', 'Título do sumário')

// removeAttribute
elementoH3.removeAttribute('class')

// attributes
const imagem = document.querySelector('img')
console.log(imagem.attributes[0])
console.log(imagem.attributes[1])
console.log(imagem.attributes['src'])
console.log(imagem.attributes['alt'])

