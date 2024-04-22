let bgBigCup = document.querySelector('.circulo')
let bigCupImage = document.querySelector('.starbucks')
let greenCup = document.querySelector('.thumb1')
let lightPinkCup = document.querySelector('.thumb2') // mudar .src e background
let pinkCup = document.querySelector('.thumb3')
let spanTitle = document.querySelector('.span')

greenCup.addEventListener('click', () => {
  bigCupImage.src = '../../images/Starbucks-Coffee-PNG-Transparent.png'
  bgBigCup.style.background = '#017143'
  bgBigCup.style.transition = '.7s'
  spanTitle.style.color = '#017143'
})

lightPinkCup.addEventListener('click', () => {
  bigCupImage.src = '../../images/big-two.png'
  bgBigCup.style.background = '#F2CFD7'
  bgBigCup.style.transition = '.7s'
  spanTitle.style.color = '#F2CFD7'
})

pinkCup.addEventListener('click', () => {
  bigCupImage.src = '../../images/big-three.png'
  bgBigCup.style.background = '#E060B9'
  bgBigCup.style.transition = '.7s'
  spanTitle.style.color = '#E060B9'
})
/*function trocaImagem(cor) {
  let circ = document.getElementsByClassName('circulo')

  circ.style.background = cor

  let cup = document.getElementsByClassName('starbucks')

  if (cor === '#017143') {
    cup.src = './img/img1.png'
  } else if (cor === '#DDA0DD') {
    cup.src = './img/img2.png'
  } else {
    cup.src = './img/img3.png'
  }
}*/
