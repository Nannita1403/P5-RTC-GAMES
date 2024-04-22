import { GAMES } from '../../utils/data'
import './memory.css'

export const memory = (data) => {
  const cards = [
    'https://cdn.pixabay.com/photo/2023/01/09/01/15/flash-7706360_1280.png',
    'https://cdn.pixabay.com/photo/2021/01/29/03/44/hulk-5959620_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/20/03/40/captain-america-6192855_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/20/03/40/scarlet-witch-6192856_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/20/03/42/thor-6192858_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/29/14/23/vision-6216730_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/22/22/06/iron-man-6200313_1280.png',
    'https://cdn.pixabay.com/photo/2023/02/24/07/40/spiderman-7810368_1280.png',
    'https://cdn.pixabay.com/photo/2023/01/09/01/15/flash-7706360_1280.png',
    'https://cdn.pixabay.com/photo/2021/01/29/03/44/hulk-5959620_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/20/03/40/captain-america-6192855_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/20/03/40/scarlet-witch-6192856_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/20/03/42/thor-6192858_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/29/14/23/vision-6216730_1280.png',
    'https://cdn.pixabay.com/photo/2021/04/22/22/06/iron-man-6200313_1280.png',
    'https://cdn.pixabay.com/photo/2023/02/24/07/40/spiderman-7810368_1280.png'
  ]
  let flipped = []
  let score = 0
  let contador = 0
  let tries = 0
  let gameInitiated = false

  const createBoard = (array, data) => {
    const tablero = document.createElement('div')
    tablero.className = 'game-container'
    tablero.id = data.id

    array.forEach((card) => {
      const flipCard = document.createElement('div')
      flipCard.className = 'flip-card disabled'
      flipCard.addEventListener('click', handleCardClick)

      const flipCardInner = document.createElement('div')
      flipCardInner.className = 'flip-card-inner'

      const flipCardFront = document.createElement('div')
      flipCardFront.className = 'flip-card-front'

      const imageCard = document.createElement('img')
      imageCard.className = 'image-card'
      imageCard.src =
      'https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/1cfbd69d-ab65-43b8-b2c0-a13ccb7e09e7.png'

      const flipCardBack = document.createElement('div')
      flipCardBack.className = 'flip-card-back'
      const imgBack = document.createElement('img')
      imgBack.className = 'img-back'
      imgBack.src = card

      flipCardBack.append(imgBack)
      flipCardFront.append(imageCard)
      flipCardInner.append(flipCardFront, flipCardBack)
      flipCard.append(flipCardInner)
      tablero.append(flipCard)
    })

    const app = document.querySelector('#app')
    divContainerGame.append(tablero)
    app.append(divContainerGame)
  }

  const handleCardClick = (event) => {
    const clickedCard = event.currentTarget
    if (flipped.length === 2 || clickedCard.classList.contains('flipped')) {
      return
    }

    clickedCard.classList.add('flipped')
    flipped.push(clickedCard)

    if (flipped.length === 2) {
      const [img1, img2] = flipped.map(
        (card) => card.querySelector('.img-back').src
      )

      if (img1 === img2) {
        flipped = []
        score++

        document.querySelector('#score').innerText = `Puntuación: ${score}`
      } else {
        setTimeout(() => {
          flipped.forEach((card) => card.classList.remove('flipped'))
          flipped = []
        }, 700)
      }
      document.querySelector('#tries').innerText = `Intentos: ${tries}`
      tries++
    }
  }

  const iniciarContador = () => {
    gameInitiated = true
    const time = document.createElement('p')
    time.className = 'time'
    time.innerText = contador
    timeCounterStart.appendChild(time)

    const intervalo = setInterval(() => {
      contador++
      time.innerText = contador + `segundos`

      if (score === cards.length / 2) {
        clearInterval(intervalo)
        const winMessage = document.createElement('h3')
        winMessage.innerText = '¡Ganaste!'
        winMessage.className = 'win-text'
        counterScore.append(winMessage)
      }
    }, 1000)

    const cards = document.querySelectorAll('.flip-card')
    cards.forEach((card) => card.classList.remove('disabled'))
    return intervalo
  }
  const divContainerGame = document.createElement('div')
  divContainerGame.className = 'container-game2'
  const divContainerApp = document.createElement('div')
  divContainerApp.className = 'container-app'
  const timeCounterStart = document.createElement('button')
  timeCounterStart.className = 'time-start'
  timeCounterStart.innerText = 'Start'
  timeCounterStart.addEventListener('click', iniciarContador)
  const counterScore = document.createElement('h2')
  counterScore.className = 'counter-title'
  counterScore.id = 'score'
  counterScore.innerText = `Puntuación: ${score}`
  const triesScore = document.createElement('h2')
  triesScore.className = 'counter-title'
  triesScore.id = 'tries'
  triesScore.innerText = `Intentos: ${tries}`
  const reloadButton = document.createElement('button')
  reloadButton.className = 'reload'
  reloadButton.innerText = 'Reiniciar partida'
  divContainerApp.append(
    timeCounterStart,
    counterScore,
    triesScore,
    reloadButton
  )
  const app = document.querySelector('#app')
  divContainerGame.append(divContainerApp)
  app.append(divContainerGame)

  reloadButton.addEventListener('click', () => {
    const app = document.querySelector('#app')
    app.innerHTML = ''
    memory(GAMES[0].id)
  })

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  shuffleArray(cards)
  createBoard(cards, data)
}