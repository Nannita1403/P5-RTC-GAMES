import './header.css'

export const createHeader = (data) => {
  const header = document.createElement('header')
  header.id = 'header'
  const title = document.createElement('h1')
  title.innerText = 'GamesHub'
  title.id = 'title'
  const gamesNav = document.createElement('nav')
  gamesNav.className = 'nav'
  data.forEach((game) => {
    const anchor = document.createElement('a')
    anchor.className = 'anchor'
    anchor.href = game.id
    const gameButton = document.createElement('button')
    gameButton.className = 'game-btn'
    gameButton.id = game.name
    gameButton.innerText = game.name
    anchor.append(gameButton)
    gamesNav.append(anchor)
  })
  header.append(title, gamesNav)
  const app = document.querySelector('#app')
  document.body.insertBefore(header, app)
}