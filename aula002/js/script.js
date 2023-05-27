// BOM (Browser Object Model)
function saudacao() {
    alert(window.innerWidth())
}

document.body.style.background = "red"
document.body.style.color = "white"

document.querySelector('#titulo').textContent = 'Novo Título | ' + location.href

// if (confirm('Deseja ir para a página do Google?')) {
//     location.href = 'https://www.google.com'
// }