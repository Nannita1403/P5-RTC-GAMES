import { footer } from './public/src/components/footer/footer'
import { createHeader } from './public/src/components/header/header'
import { memory } from './public/src/pages/memory/memory'
import { tresEnRaya } from './public/src/pages/tresEnRaya/tresEnRaya'
import { trivial } from './public/src/pages/trivial/trivial'
import { wellcome } from './public/src/pages/wellcome/wellcome'
import { GAMES, QUIZ } from './public/src/utils/data'

import './style.css'
createHeader(GAMES)
wellcome();
const title = document.querySelector('#title')
title.addEventListener('click', () => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  wellcome()
})
const gameButton = document.querySelector('.game-btn')
gameButton.addEventListener('click', () => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  memory(GAMES[0].id)
})
const secondButtongame = document.querySelector('#TresEnRaya')
secondButtongame.addEventListener('click', () => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  tresEnRaya()
})
const thirdButtongame = document.querySelector('#Trivial')
thirdButtongame.addEventListener('click', () => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  trivial(QUIZ)
})