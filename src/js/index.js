const btn = document.querySelector(".btn-menu");

btn.addEventListener("click", function() {
    const menuArea = document.querySelector("#menu-aside");
    
  if(menuArea.style.display === "none") {
        menuArea.style.display = "block";
    } else {
      menuArea.style.display = "none";
  }
    
});



const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

function esconderImagens() {
    
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function() {
    
    const totalDeImagens = imagensPainel.length -1
    if(imagemAtual === totalDeImagens) {
        return
    }
    imagemAtual++;

    esconderImagens()
    
    mostrarImagem()

    if(setaVoltar.classList.add('opacidade') !== 1) {
        setaVoltar.classList.remove('opacidade')
    }

    if(imagemAtual === totalDeImagens) {
        setaAvancar.classList.add('opacidade')
    }

})

setaVoltar.addEventListener('click', function() {
    
    if(imagemAtual === 0) {
        return
    }
    imagemAtual--;

    esconderImagens()
    
    mostrarImagem()

    if(setaAvancar.classList.add('opacidade') !== 1) {
        setaAvancar.classList.remove('opacidade')
    }

    if(imagemAtual === 0) {
        setaVoltar.classList.add('opacidade')
    }
})