

// Criando um novo elemento que será adicionado na página
const msg_alerta = document.createElement('p')
msg_alerta.className = 'alerta'
msg_alerta.innerText = 'Esta é uma menságem de alerta!'

// Adicionar o novo elemento ao div da classe "caixa"
const div_caixa = document.querySelector('div.caixa')

const btn_adicionar = document.querySelector('button')
btn_adicionar.addEventListener('click', () => {
    div_caixa.appendChild(msg_alerta.cloneNode(true))
})