// define array for img src
const imgArray = [
  'images/dice1.png',
  'images/dice2.png',
  'images/dice3.png',
  'images/dice4.png',
  'images/dice5.png',
  'images/dice6.png',
]

// random array number
const randomNum1 = Math.floor(Math.random() * imgArray.length)
const randomNum2 = Math.floor(Math.random() * imgArray.length)

// assign img src to img
function changeImg() {
  document.querySelectorAll('img')[0].src = imgArray[randomNum1]
  document.querySelectorAll('img')[1].src = imgArray[randomNum2]
}

// change title depending on who wins
function whoWins() {
  if (randomNum1 > randomNum2) {
    document.querySelector('h1').textContent = 'Player 1 Wins! 🎉'
  } else if (randomNum1 < randomNum2) {
    document.querySelector('h1').textContent = 'Player 2 Wins! 🎉'
  } else {
    document.querySelector('h1').textContent = 'Draw...'
  }
  document.querySelector('h1').classList.add('display-title')
}
// call functions
changeImg()
setTimeout(whoWins, 500)

// hide and display footer animation
setInterval(() => {
  document.querySelector('footer').classList.toggle('display-footer')
}, 600)

// change title color animation
setInterval(() => {
  document.querySelector('h1').classList.toggle('change-color')
}, 1000)

// change title to refresh page after seconds
const refreshPage = () => {
  document.querySelector('h1').textContent = 'Click here to roll the dice!'
  document.querySelector('footer').classList.toggle('display-footer-2')
}

setTimeout(refreshPage, 3000)

// refresh page on h1 click
document.querySelector('h1').addEventListener('click', () => {
  location.reload()
  // return false;
})
