import './trivial.css'

export const trivial = (QUIZ) => {
  let aciertos = 0
  let fallos = 0
  let preguntasResueltas = []
  let preguntasPendientes = []
  const gameContainer = document.createElement('div')
  gameContainer.className = 'container'
  const app = document.querySelector('#app')
  app.append(gameContainer)

  const iniciarTrivial = () => {
    mostrarBotonesTematicas()
  }

  const mostrarBotonesTematicas = () => {
    gameContainer.innerHTML = ''

    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'button-container'

    for (const item of QUIZ) {
      const buttonTheme = createButtonTheme(item)
      buttonContainer.appendChild(buttonTheme)
    }

    gameContainer.appendChild(buttonContainer)
  }

  const createButtonTheme = (item) => {
    const buttonTheme = document.createElement('button')
    buttonTheme.className = 'button-theme'
    buttonTheme.setAttribute('data-tema', item.tematica)
    const imageButton = document.createElement('img')
    imageButton.className = 'image-icon'
    imageButton.src = item.image
    buttonTheme.append(imageButton)
    gameContainer.appendChild(buttonTheme)
    buttonTheme.addEventListener('click', () => {
      mostrarPreguntas(item.preguntas)
    })

    return buttonTheme
  }

  const mostrarPreguntas = (preguntas) => {
    gameContainer.innerHTML = ''
    preguntasPendientes = [...preguntas]
    mostrarSiguientePregunta()
  }

  const mostrarSiguientePregunta = () => {
    if (preguntasPendientes.length > 0) {
      const pregunta = preguntasPendientes.shift()
      mostrarPregunta(pregunta)
    } else {
      mostrarResultados()
    }
  }

  const mostrarPregunta = (pregunta) => {
    const gameContainer = document.querySelector('.container')
    gameContainer.innerHTML = ''
    const questionContainer = document.createElement('div')
    questionContainer.className = 'question-container'
    const question = document.createElement('h3')
    question.className = 'question'
    question.textContent = pregunta.pregunta
    questionContainer.appendChild(question)

    const answerContainer = document.createElement('div')
    answerContainer.className = 'answer-container'

    pregunta.respuestas.forEach((respuesta) => {
      const answerButton = document.createElement('button')
      answerButton.className = 'answer'
      answerButton.textContent = respuesta.texto
      answerButton.addEventListener('click', () => {
        if (respuesta.correcta) {
          aciertos++
        } else {
          fallos++
        }
        mostrarSiguientePregunta()
      })
      answerContainer.appendChild(answerButton)
    })
    gameContainer.appendChild(questionContainer)
    gameContainer.appendChild(answerContainer)
  }

  const mostrarResultados = () => {
    const gameContainer = document.querySelector('.container')
    gameContainer.innerHTML = ''
    const resultadosContainer = document.createElement('div')
    resultadosContainer.className = 'resultados-container'
    const aciertosElement = document.createElement('p')
    aciertosElement.textContent = `Aciertos: ${aciertos}`
    const fallosElement = document.createElement('p')
    fallosElement.textContent = `Fallos: ${fallos}`
    resultadosContainer.appendChild(aciertosElement)
    resultadosContainer.appendChild(fallosElement)
    gameContainer.appendChild(resultadosContainer)
  }

  iniciarTrivial()
}