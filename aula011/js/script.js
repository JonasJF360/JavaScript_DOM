const divContainer = document.querySelector('.container')

// // Adicionando elementos antes do div container
// divContainer.before('before')

// // Adicionar dentro do div, mas no início
// divContainer.prepend('prepend')

// // Adicionar dentro do div, mas no fim
// divContainer.append('append')

// // Adicionar depois do div
// divContainer.after('after')

const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const p4 = document.createElement('p')
p1.innerText = 'parágrafo 01'
p2.innerText = 'parágrafo 02'
p3.innerText = 'parágrafo 03'
p4.innerText = 'parágrafo 04'

// Adicionando elementos antes do div container
divContainer.before(p1)

// Adicionar dentro do div, mas no início
divContainer.prepend(p2)

// Adicionar dentro do div, mas no fim
divContainer.append(p3)

// Adicionar depois do div
divContainer.after(p4)