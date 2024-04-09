export const GAMES = [
    {
      name: 'Memory',
      id: '#Memory',
      description:
        'En el juego Memory, tendrás que emparejar todas las cartas con su pareja correspondiente. Haz click en una carta y ¡descubre quién está detrás! Cuando hayas conseguido encontrar todas las parejas habrás ganado el juego.'
    },
    {
      name: 'TresEnRaya',
      id: '#TresEnRaya',
      description:
        'El objetivo en Tres en Raya es alinear tres de tus fichas en línea horizontal, vertical o diagonal. Tendrás que escoger primero con qué ficha quieres jugar'
    },
    {
      name: 'Trivial',
      id: '#Trivial',
      description:
        'En este juego se te van a hacer diferentes preguntas y ganarás un punto por cada respuesta acertada.'
    }
  ]
  
  export const QUIZ = [
    {
      tematica: 'Juego de Tronos',
      image:
        'https://cdn4.iconfinder.com/data/icons/game-of-thrones-4/64/game_of_thrones_game_thrones_king_walker_north_winter_series-512.png',
      preguntas: [
        {
          pregunta: '¿Quién es el Rey de los Siete Reinos al inicio de la serie?',
          respuestas: [
            { texto: 'Robert Baratheon', correcta: true },
            { texto: 'Ned Stark', correcta: false },
            { texto: 'Tywin Lannister', correcta: false },
            { texto: 'Aerys Targaryen', correcta: false }
          ]
        },
        {
          pregunta: '¿Cómo se llama el continente donde se desarrolla la serie?',
          respuestas: [
            { texto: 'Westeros', correcta: false },
            { texto: 'Essos', correcta: false },
            { texto: 'Poniente', correcta: true },
            { texto: 'Dorne', correcta: false }
          ]
        },
        {
          pregunta: '¿Quién asesina al Rey Robert Baratheon?',
          respuestas: [
            { texto: 'Cersei Lannister', correcta: true },
            { texto: 'Jaime Lannister', correcta: false },
            { texto: 'Tyrion Lannister', correcta: false },
            { texto: 'Joffrey Baratheon', correcta: false }
          ]
        },
        {
          pregunta: '¿Qué casa lidera la región de Winterfell?',
          respuestas: [
            { texto: 'Stark', correcta: true },
            { texto: 'Targaryen', correcta: false },
            { texto: 'Lannister', correcta: false },
            { texto: 'Baratheon', correcta: false }
          ]
        },
        {
          pregunta: '¿Cuál es el lema de la Casa Lannister?',
          respuestas: [
            { texto: 'Ours is the Fury', correcta: false },
            { texto: 'Hear Me Roar!', correcta: true },
            { texto: 'Unbowed, Unbent, Unbroken', correcta: false },
            { texto: 'We Do Not Sow', correcta: false }
          ]
        },
        {
          pregunta: "¿Qué es 'Valar Morghulis'?",
          respuestas: [
            { texto: 'Todos los hombres deben morir', correcta: true },
            { texto: 'El invierno está llegando', correcta: false },
            { texto: 'Fuego y sangre', correcta: false },
            { texto: 'Un vaso de vino, por favor', correcta: false }
          ]
        },
        {
          pregunta:
            '¿Quién lidera la Guardia de la Noche al principio de la serie?',
          respuestas: [
            { texto: 'Jeor Mormont', correcta: true },
            { texto: 'Jon Nieve', correcta: false },
            { texto: 'Ser Alliser Thorne', correcta: false },
            { texto: 'Qhorin Mediamano', correcta: false }
          ]
        },
        {
          pregunta: '¿Qué arma especial utiliza Arya Stark?',
          respuestas: [
            { texto: 'Espada de acero valyrio', correcta: false },
            { texto: 'Aguja', correcta: true },
            { texto: 'Lanza', correcta: false },
            { texto: 'Arco y flechas', correcta: false }
          ]
        }
      ]
    },
    {
      tematica: 'Friends',
      image: 'https://www.curiosite.es/img/auto_catalogo/w618/28198.jpg',
      preguntas: [
        {
          pregunta:
            '¿Cuál es el nombre del café donde siempre se reúnen los amigos?',
          respuestas: [
            { texto: 'Central Perk', correcta: true },
            { texto: 'Coffee Time', correcta: false },
            { texto: 'Café Friends', correcta: false },
            { texto: 'Perk Central', correcta: false }
          ]
        },
        {
          pregunta: '¿Qué personaje interpreta Jennifer Aniston?',
          respuestas: [
            { texto: 'Rachel Green', correcta: true },
            { texto: 'Monica Geller', correcta: false },
            { texto: 'Phoebe Buffay', correcta: false },
            { texto: 'Joey Tribbiani', correcta: false }
          ]
        },
        {
          pregunta: '¿Cuál es el trabajo de Ross Geller?',
          respuestas: [
            { texto: 'Paleontólogo', correcta: true },
            { texto: 'Actor', correcta: false },
            { texto: 'Chef', correcta: false },
            { texto: 'Médico', correcta: false }
          ]
        },
        {
          pregunta: '¿Qué profesión tiene Chandler Bing?',
          respuestas: [
            { texto: 'Contable', correcta: false },
            { texto: 'Publicista', correcta: false },
            { texto: 'Ejecutivo de Ventas', correcta: false },
            { texto: 'Analista Estadístico', correcta: true }
          ]
        },
        {
          pregunta: '¿Qué animal asusta a Chandler?',
          respuestas: [
            { texto: 'Gatos', correcta: false },
            { texto: 'Ratones', correcta: false },
            { texto: 'Perros', correcta: true },
            { texto: 'Patos', correcta: false }
          ]
        },
        {
          pregunta: '¿En qué país Ross se casa con Emily?',
          respuestas: [
            { texto: 'Francia', correcta: false },
            { texto: 'Reino Unido', correcta: true },
            { texto: 'Italia', correcta: false },
            { texto: 'España', correcta: false }
          ]
        },
        {
          pregunta: '¿Cuál es el segundo nombre de Chandler?',
          respuestas: [
            { texto: 'Bing', correcta: false },
            { texto: 'Muriel', correcta: true },
            { texto: 'Francis', correcta: false },
            { texto: 'Kevin', correcta: false }
          ]
        },
        {
          pregunta: '¿En qué año se emitió el primer episodio de Friends?',
          respuestas: [
            { texto: '1994', correcta: false },
            { texto: '1995', correcta: false },
            { texto: '1996', correcta: false },
            { texto: '1993', correcta: true }
          ]
        }
      ]
    },
    {
      tematica: 'Vengadores',
      image:
        'https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/1cfbd69d-ab65-43b8-b2c0-a13ccb7e09e7.png',
      preguntas: [
        {
          pregunta:
            '¿Cuál de estos personajes no es un Vengador original en los cómics?',
          respuestas: [
            { texto: 'Spider-Man', correcta: false },
            { texto: 'Hulk', correcta: true },
            { texto: 'Thor', correcta: false },
            { texto: 'Iron Man', correcta: false }
          ]
        },
        {
          pregunta:
            '¿Cuál es la primera película de los Vengadores en el Universo Cinematográfico de Marvel?',
          respuestas: [
            { texto: 'Iron Man', correcta: false },
            { texto: 'Thor', correcta: false },
            { texto: 'Los Vengadores (The Avengers)', correcta: true },
            { texto: 'Capitán América: El primer vengador', correcta: false }
          ]
        },
        {
          pregunta: '¿Cuál es el nombre real de Iron Man?',
          respuestas: [
            { texto: 'Tony Stark', correcta: true },
            { texto: 'Steve Rogers', correcta: false },
            { texto: 'Bruce Banner', correcta: false },
            { texto: 'Peter Parker', correcta: false }
          ]
        },
        {
          pregunta: '¿Quién es el hermano de Thor?',
          respuestas: [
            { texto: 'Loki', correcta: true },
            { texto: 'Heimdall', correcta: false },
            { texto: 'Odin', correcta: false },
            { texto: 'Frigga', correcta: false }
          ]
        },
        {
          pregunta:
            "¿Quién es el villano principal en la película 'Vengadores: Infinity War'?",
          respuestas: [
            { texto: 'Loki', correcta: false },
            { texto: 'Ultron', correcta: false },
            { texto: 'Thanos', correcta: true },
            { texto: 'Red Skull', correcta: false }
          ]
        },
        {
          pregunta: '¿Cuál es el nombre real de Capitán América?',
          respuestas: [
            { texto: 'Tony Stark', correcta: false },
            { texto: 'Bruce Banner', correcta: false },
            { texto: 'Steve Rogers', correcta: true },
            { texto: 'Clint Barton', correcta: false }
          ]
        },
        {
          pregunta:
            "¿Qué gema del infinito obtiene Thanos primero en la película 'Vengadores: Infinity War'?",
          respuestas: [
            { texto: 'Gema de la Mente', correcta: false },
            { texto: 'Gema del Espacio', correcta: false },
            { texto: 'Gema del Poder', correcta: true },
            { texto: 'Gema del Tiempo', correcta: false }
          ]
        },
        {
          pregunta:
            '¿Qué actor interpreta a Hulk en el Universo Cinematográfico de Marvel?',
          respuestas: [
            { texto: 'Chris Evans', correcta: false },
            { texto: 'Chris Hemsworth', correcta: false },
            { texto: 'Mark Ruffalo', correcta: true },
            { texto: 'Robert Downey Jr.', correcta: false }
          ]
        }
      ]
    }
  ]