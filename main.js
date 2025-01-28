"use strict"
const botaoTrocaImagem = document.getElementById('trocar-imagem')

function trocarImagem () {
    const imagem = document.getElementById('imagem').value
    document.documentElement.style.setProperty('--cor-fundo', imagem)
}

botaoTrocaCor.addEventListener('click', trocarImagem)