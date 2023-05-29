// usando funções e eventos para alterer o conteúdo
function mudarTitulo() {
    let tituloH3 = document.querySelector('#titulo')

    tituloH3.innerText = 'Novo título definido com JavaScript'
    tituloH3.style.color = 'blue'
}

const imagem = document.querySelector('#img-noticias')

imagem.addEventListener('click', function mudarImagem() {
    let indice = 1
    if(imagem.alt == 'Imagem news 01') {
        indice = 2
    }
    imagem.alt = `Imagem news 0${indice}`
    imagem.src = `../imagens/news_0${indice}.png`
})