import './wellcome.css'
export const wellcome = () => {
  const wellcomeContainer = document.createElement('div')
  wellcomeContainer.className = 'container'
  const titleWellcome = document.createElement('h2')
  titleWellcome.id = 'titleWellcome'
  titleWellcome.innerHTML = 'Vamos a Jugar!'
  //const bottonPlay = document.createElement('button')
  //bottonPlay.id = 'bottonPlay'
  //bottonPlay.innerText = 'PLAY'
  wellcomeContainer.append(titleWellcome)//bottonPlay)
  const app = document.querySelector('#app')
  app.append(wellcomeContainer)
}