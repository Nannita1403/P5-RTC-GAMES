import { GAMES } from '../../utils/data'
import './wellcome.css'

export const wellcome = () => {
  const wellcomeContainer = document.createElement('div')
  wellcomeContainer.className = 'container'
  const titleWellcome = document.createElement('h2')
  titleWellcome.id = 'titleWellcome'
  titleWellcome.innerHTML = 'Vamos a Jugar!'

 /* const gamesNav = document.createElement('nav')
  gamesNav.className = 'nav'
  GAMES.forEach((game) => {
    const anchor = document.createElement('a')
    anchor.className = 'anchor'
    anchor.href = game.id
    const gameButton = document.createElement('button')
    gameButton.className = 'game-btn'
    gameButton.id = game.name
    gameButton.innerText = game.name
    anchor.append(gameButton)
    gamesNav.append(anchor)
  })*/

  wellcomeContainer.append(titleWellcome)
  const app = document.querySelector('#app')
  app.append(wellcomeContainer)
}