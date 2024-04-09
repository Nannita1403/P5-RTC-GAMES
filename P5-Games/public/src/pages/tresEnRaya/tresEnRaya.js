import './tresEnRaya.css'

export const tresEnRaya = () => {
  const players = ['X', 'O']
  const arrayBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  let currentPlayer = ''
  let pcPlayer = ''
  const winningCombinations = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],

    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],

    ['00', '11', '22'],
    ['02', '11', '20']
  ]
  let gameOver = false
  let playerVictories = 0
  let pcVictories = 0

  const bloquearTablero = () => {
    const casillas = document.querySelectorAll('.box')
    casillas.forEach((casilla) => {
      casilla.removeEventListener('click', boxClicked)
      casilla.style.pointerEvents = 'none'
    })
  }

  const clickedPlayer = (e) => {
    if (currentPlayer || gameOver) {
      return
    }
    const playerChosen = e.target
    const player = document.querySelectorAll('.player').forEach((player) => {
      player.classList.remove('focus')
    })
    playerChosen.classList.add('focus')
    currentPlayer = playerChosen.innerText
  }
  const getEmptyBoxes = () => {
    return document.querySelectorAll('.box:not(.clicked)')
  }
  const checkTie = () => {
    let allCellsFilled = true
    const emptyBoxes = getEmptyBoxes()
    if (emptyBoxes.length > 0) {
      allCellsFilled = false
    }
    if (allCellsFilled && !checkWinner()) {
      const tieMessage = document.createElement('h3')
      tieMessage.innerText = '¡Ha habido un empate!'
      tieMessage.className = 'result'
      const buttonContainer = document.querySelector('.button-container')
      buttonContainer.append(tieMessage)
      gameOver = true
      bloquearTablero()
      return true
    }

    return false
  }

  const pcMovement = () => {
    if (gameOver) return
    const emptyBoxes = getEmptyBoxes()
    if (emptyBoxes.length === 0) return
    const randomIndex = Math.floor(Math.random() * emptyBoxes.length)
    const randomBox = emptyBoxes[randomIndex]
    const pc = document.createElement('span')
    pc.innerText = currentPlayer === 'X' ? 'O' : 'X'
    randomBox.appendChild(pc)
    randomBox.classList.add('clicked')
    const row = randomBox.getAttribute('data-row')
    const col = randomBox.getAttribute('data-col')
    arrayBoard[row][col] = currentPlayer === 'X' ? 'O' : 'X'
    if (checkWinner() || checkTie() || checkLoose()) {
      gameOver = true
      bloquearTablero()
      return
    }
    checkTie()
  }

  const checkWinner = () => {
    if (!currentPlayer) return
    for (const combination of winningCombinations) {
      const [box1, box2, box3] = combination
      const elem1 = document.querySelector(
        `[data-row="${box1.charAt(0)}"][data-col="${box1.charAt(1)}"]`
      )
      const elem2 = document.querySelector(
        `[data-row="${box2.charAt(0)}"][data-col="${box2.charAt(1)}"]`
      )
      const elem3 = document.querySelector(
        `[data-row="${box3.charAt(0)}"][data-col="${box3.charAt(1)}"]`
      )

      if (
        elem1.innerText === currentPlayer &&
        elem2.innerText === currentPlayer &&
        elem3.innerText === currentPlayer
      ) {
        const winMessage = document.createElement('h3')
        winMessage.innerText = '¡Ganaste!'
        winMessage.className = 'result'
        const buttonContainer = document.querySelector('.button-container')
        buttonContainer.append(winMessage)
        gameOver = true
        bloquearTablero()
        return true
      }
    }
    return false
  }
  const checkLoose = () => {
    setTimeout(() => {
      if (!pcPlayer) return
      for (const combination of winningCombinations) {
        const [box1, box2, box3] = combination
        const elem1 = document.querySelector(
          `[data-row="${box1.charAt(0)}"][data-col="${box1.charAt(1)}"]`
        )
        const elem2 = document.querySelector(
          `[data-row="${box2.charAt(0)}"][data-col="${box2.charAt(1)}"]`
        )
        const elem3 = document.querySelector(
          `[data-row="${box3.charAt(0)}"][data-col="${box3.charAt(1)}"]`
        )

        if (
          elem1.innerText === pcPlayer &&
          elem2.innerText === pcPlayer &&
          elem3.innerText === pcPlayer
        ) {
          const looseMessage = document.createElement('h3')
          looseMessage.innerText = '¡Has perdido!'
          looseMessage.className = 'result'
          const buttonContainer = document.querySelector('.button-container')
          buttonContainer.append(looseMessage)
          gameOver = true
          bloquearTablero()
          return true
        }
      }
      return false
    }, 500)
  }
  const boxClicked = (e) => {
    if (!currentPlayer || gameOver) return
    const clickedBox = e.target
    if (clickedBox.classList.contains('clicked')) {
      return
    }
    const row = clickedBox.getAttribute('data-row')
    const col = clickedBox.getAttribute('data-col')
    if (arrayBoard[row][col] !== '') {
      return
    }
    const moveChosen = () => {
      if (currentPlayer === 'X') {
        const Xmove = document.createElement('span')
        Xmove.innerHTML = 'X'
        clickedBox.appendChild(Xmove)
        clickedBox.classList.add('clicked')
        pcPlayer = 'O'
        setTimeout(() => {
          pcMovement(pcPlayer)
        }, 500)
      } else if (currentPlayer === 'O') {
        const Omove = document.createElement('span')
        Omove.innerHTML = 'O'
        clickedBox.appendChild(Omove)
        clickedBox.classList.add('clicked')
        pcPlayer = 'X'
        setTimeout(() => {
          pcMovement(pcPlayer)
        }, 500)
      }
    }
    moveChosen()
    checkWinner()
    checkTie()
  }

  const printGame = (array) => {
    const divContainerGame = document.createElement('div')
    divContainerGame.className = 'container-game'
    const board = document.createElement('div')
    board.className = 'board'
    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'button-container'
    const reloadButton = document.createElement('button')
    reloadButton.className = 'reload'
    reloadButton.innerText = 'Reiniciar partida'
    reloadButton.addEventListener('click', () => {
      const app = document.querySelector('#app')
      app.innerHTML = ''
      tresEnRaya()
    })
    const playerDiv = document.createElement('div')
    playerDiv.className = 'player-div'
    buttonContainer.append(playerDiv)
    players.forEach((player) => {
      const buttonPlayer = document.createElement('button')
      buttonPlayer.className = 'player'
      buttonPlayer.innerText = player
      playerDiv.append(buttonPlayer)
      buttonPlayer.addEventListener('click', clickedPlayer)
    })
    buttonContainer.append(reloadButton)
    divContainerGame.append(buttonContainer, board)
    const app = document.querySelector('#app')
    app.append(divContainerGame)
    for (let i = 0; i < array.length; i++) {
      const row = array[i]
      const rowBoard = document.createElement('div')
      board.append(rowBoard)
      for (let j = 0; j < row.length; j++) {
        const box = row[j]
        const boxBoard = document.createElement('div')
        boxBoard.className = 'box'
        boxBoard.id = box
        boxBoard.setAttribute('data-row', i)
        boxBoard.setAttribute('data-col', j)
        rowBoard.append(boxBoard)
        boxBoard.addEventListener('click', boxClicked)
      }
    }
  }

  printGame(arrayBoard)
}