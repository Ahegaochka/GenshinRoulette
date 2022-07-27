const cardsBlock = document.querySelector('.cards')
const cards = document.querySelectorAll('.cards > div')

let currentCard = 0
let Dilucs = [3, 7, 11, 15, 19, 23, 27, 31]

function start() {

  cards[currentCard].style.background = 'white'
  let random = Dilucs[Math.floor(Math.random() * Dilucs.length)] -1
  cardsBlock.style.left = -random * 200 + 'px'
  setTimeout(function () {     
    random++
    currentCard = random   
    cards[random].style.background = '#7B90F7'
    
  }, 8500)
}
