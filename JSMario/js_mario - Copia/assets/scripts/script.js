var marioImg = document.querySelector(".mario")
var tuboImg = document.querySelector(".pipe")
var nuvemImg = document.querySelector(".cloud")

function pular(){

  marioImg.classList.add("pulo")

  setTimeout(() =>{
    marioImg.classList.remove("pulo")
  }, 500)

}

const VerificarJogo = setInterval(() =>{

    var posicaonuvem = tuboImg.offsetLeft
    var posicaoTubo = tuboImg.offsetLeft
  var posicaoMario = +window.getComputedStyle(marioImg).bottom.replace("px", "")

  
  if( posicaoTubo  <= 120 && posicaoTubo > 0 && posicaoMario < 80 ) {
    
    marioImg.style = "../img/game-over.png"
    marioImg.computedStyleMap.bottom = posicaoMario + "px"
    marioImg.computedStyleMap.animation = "none"
    marioImg.style.width = "75px"
    marioImg.style.marginLeft = "50px"


    tuboImg.style.animation = "none"
    tuboImg.style.left = 


    clearInterval( VerificarJogo)
  }

}, 10)

document.addEventListener("keydown", pular)