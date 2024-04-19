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
      tematica: 'Ficcion: Juegos de Tronos, Star Wars y El Señor de los Anillos',
      src:'./src/pages/trivial/CFLogo.png', alt:'Ficcion',      
      preguntas: [
        {
          pregunta: '¿Qué personaje de Star Wars es del planeta Serenno?',
          respuestas: [
            { texto: 'Dooku', correcta: true },
            { texto: 'Owen Lars', correcta: false },
            { texto: 'Wicket Systri Warrick', correcta: false },
            { texto: 'Cliegg Lars', correcta: false }
          ]
        },
        {
          pregunta: '¿Cómo se llama el continente donde se desarrolla la serie Juegos de Tronos?',
          respuestas: [
            { texto: 'Westeros', correcta: false },
            { texto: 'Essos', correcta: false },
            { texto: 'Poniente', correcta: true },
            { texto: 'Dorne', correcta: false }
          ]
        },
        {
          pregunta: '¿Qué personaje de Tolkien pertenece a la raza de Elfos?',
          respuestas: [
            { texto: 'Cemendur', correcta: false },
            { texto: 'Ecthelion of the Fountain', correcta: true },
            { texto: 'Thorin II Oakenshield', correcta: false },
            { texto: 'Dúnhere', correcta: false }
          ]
        },
        {
          pregunta: '¿Quién es el Rey de los Siete Reinos al inicio de la serie en Juego de Tronos?',
          respuestas: [
            { texto: 'Robert Baratheon', correcta: true },
            { texto: 'Ned Stark', correcta: false },
            { texto: 'Tywin Lannister', correcta: false },
            { texto: 'Aerys Targaryen', correcta: false }
          ]
        },
        {
          pregunta: '¿Cuál es la raza del personaje de Tolkien: Hending Greenhand?',
          respuestas: [
            { texto: 'Hobbits', correcta: true },
            { texto: 'Uruk-hai', correcta: false },
            { texto: 'Ents', correcta: false },
            { texto: 'Elfos', correcta: false }
          ]
        },
        {
          pregunta: '¿De qué planeta es el personaje de Star Wars Adi Gallia?',
          respuestas: [
            { texto: 'Coruscant', correcta: true },
            { texto: 'Muunilinst', correcta: false },
            { texto: 'Tatooine', correcta: false },
            { texto: 'Ryloth', correcta: false }
          ]
        },
        {
          pregunta: '¿Qué casa lidera la región de Winterfell en Juegos de Tronos?',
          respuestas: [
            { texto: 'Stark', correcta: true },
            { texto: 'Targaryen', correcta: false },
            { texto: 'Lannister', correcta: false },
            { texto: 'Baratheon', correcta: false }
          ]
        },
        {
          pregunta: '¿Nombre Élfico de Gandalf?',
          respuestas: [
            { texto: 'Curunir', correcta: false },
            { texto: 'Mithrandir', correcta: true },
            { texto: 'Elendil', correcta: false },
            { texto: 'Aiwendil', correcta: false }
          ]
        },
        {
          pregunta: '¿Cuál es el lema de la Casa Lannister en Juego de Tronos?',
          respuestas: [
            { texto: 'Ours is the Fury', correcta: false },
            { texto: 'Hear Me Roar!', correcta: true },
            { texto: 'Unbowed, Unbent, Unbroken', correcta: false },
            { texto: 'We Do Not Sow', correcta: false }
          ]
        },
        {
          pregunta: '¿De qué planeta es el personaje de Star Wars Palpatine?',
          respuestas: [
            { texto: 'Bestine IV', correcta: false },
            { texto: 'Naboo', correcta: true },
            { texto: 'Kamino', correcta: false },
            { texto: 'Quermia', correcta: false }
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
          '¿De dónde es la Dama Galadriel en Tolkien?',
          respuestas: [
            { texto: 'Lothlórien', correcta: true },
            { texto: 'Mirkwood', correcta: false },
            { texto: 'Rivendell', correcta: false },
            { texto: 'Lórien', correcta: false }
          ]
        },
        {
          pregunta:
            '¿Quién lidera la Guardia de la Noche al principio de Juegos de Tronos?',
          respuestas: [
            { texto: 'Jeor Mormont', correcta: true },
            { texto: 'Jon Nieve', correcta: false },
            { texto: 'Ser Alliser Thorne', correcta: false },
            { texto: 'Qhorin Mediamano', correcta: false }
          ]
        },
        {
          pregunta: '¿Quiénes tienen los 3 anillos de poder de los Elfos?',
          respuestas: [
            { texto: 'Celeborn, Galadriel y Elrond', correcta: false },
            { texto: 'Thranduil, Galadriel y Celeborn', correcta: false },
            { texto: 'Thranduil, Galadriel y Elrond', correcta: false },
            { texto: 'Gandalf, Galadriel y Elrond',correcta: true },
          ]
        },
        {
          pregunta: '¿Qué personaje de Star Wars es del planeta Mirial?',
          respuestas: [
            { texto: 'Ackbar', correcta: false },
            { texto: 'Jango Fett', correcta: false },
            { texto: 'Luminara Unduli	',correcta: true },
            { texto: 'Quarsh Panaka', correcta: false },
          ]
        },
        {
          pregunta: '¿Qué arma especial utiliza Arya Stark en Juegos de Tronos?',
          respuestas: [
            { texto: 'Espada de acero valyrio', correcta: false },
            { texto: 'Aguja', correcta: true },
            { texto: 'Lanza', correcta: false },
            { texto: 'Arco y flechas', correcta: false }
          ]
        },
        {
          pregunta: '¿Qué personaje de Tolkien pertenece a la raza de Hobbits?',
          respuestas: [
            { texto: 'Cirion', correcta: false },
            { texto: 'Forlong', correcta: false },
            { texto: 'Farmer Maggot	',correcta: true },
            { texto: 'Celepharn', correcta: false },
          ]
        }
      ]
    },
    {
      tematica: 'Historia',
      src:'./src/pages/trivial/HistLogo.png', alt:'Historia',    
      preguntas: [
        {
          pregunta:
            '¿Quién fue el primer presidente de Estados Unidos?',
          respuestas: [
            { texto: 'George Washington', correcta: true },
            { texto: 'Benjamin Franklin', correcta: false },
            { texto: 'Café Friends', correcta: false },
            { texto: 'Thomas Jefferson', correcta: false }
          ]
        },
        {
          pregunta: ' ¿Cuánto duró la Guerra de los Cien Años?',
          respuestas: [
            { texto: '116', correcta: true },
            { texto: '106', correcta: false },
            { texto: '145', correcta: false },
            { texto: '98', correcta: false }
          ]
        },
        {
          pregunta: '¿En qué año se disolvió la Unión Soviética?',
          respuestas: [
            { texto: '1990', correcta: false },
            { texto: '1992', correcta: false },
            { texto: '1991', correcta: true },
            { texto: '1989', correcta: false }
          ]
        },
        {
          pregunta: '¿Cuál era la moneda utilizada en España antes del euro?',
          respuestas: [
            { texto: 'El Franco', correcta: false },
            { texto: 'El Yan', correcta: false },
            { texto: 'La Corona', correcta: false },
            { texto: 'La Peceta', correcta: true }
          ]
        },
        {
          pregunta: '¿Cómo se conoce popularmente a la crisis económica de 1929?',
          respuestas: [
            { texto: 'La Burbuja Bursatil', correcta: false },
            { texto: 'EL Colapso', correcta: false },
            { texto: 'La Gran Depresión', correcta: true },
            { texto: 'La Gran Caida', correcta: false }
          ]
        },
        {
          pregunta: '¿En qué ciudad vivió Marco Polo?',
          respuestas: [
            { texto: 'Paris', correcta: false },
            { texto: 'Venecia', correcta: true },
            { texto: 'Madrid', correcta: false },
            { texto: 'Oporto', correcta: false }
          ]
        },
        {
          pregunta: '¿En qué año pisó el hombre la luna por primera vez?',
          respuestas: [
            { texto: '1973', correcta: false },
            { texto: '1969', correcta: true },
            { texto: '1957', correcta: false },
            { texto: '1963', correcta: false }
          ]
        },
        {
          pregunta: '¿En qué isla estuvo preso Napoleón?',
          respuestas: [
            { texto: 'Chipre', correcta: false },
            { texto: 'Santa Maria', correcta: false },
            { texto: 'Canarias', correcta: false },
            { texto: 'Santa Helena', correcta: true }
          ]
        }
      ]
    },
    {
      tematica: 'Entretenimiento',
      src:'./src/pages/trivial/EntLogo.png', alt:'Entretenimiento',          
      preguntas: [
        {
          pregunta:
            '¿En qué calle ficticia vivía Sherlock Holmes?',
          respuestas: [
            { texto: 'Holmes Lane', correcta: false },
            { texto: 'Baker Street', correcta: true },
            { texto: 'Orange High School Road', correcta: false },
            { texto: 'Tweed Trail', correcta: false }
          ]
        },
        {
          pregunta:
            '¿En qué ciudad vive el mago de Oz? ',
          respuestas: [
            { texto: 'Ciudad Imperial', correcta: false },
            { texto: 'Ciudad Oasis', correcta: false },
            { texto: 'Ciudad Esmeralda', correcta: true },
            { texto: 'Ciudad Capital', correcta: false }
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
          pregunta: '¿Cómo se llamaba el cantante de Queen?',
          respuestas: [
            { texto: 'Freddie Mercury', correcta: true },
            { texto: 'John Deacon', correcta: false },
            { texto: 'Bryan May', correcta: false },
            { texto: 'Roger Taylor', correcta: false }
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
          pregunta: '¿Cuál fue la primera película de Disney?',
          respuestas: [
            { texto: 'Cenicienta', correcta: false },
            { texto: 'Rapunzel', correcta: false },
            { texto: 'Blancanieves', correcta: true },
            { texto: 'La Sirenita', correcta: false }
          ]
        },
        {
          pregunta: "¿A qué grupo musical pertenece la canción 'Master of Puppets'? ",
          respuestas: [
            { texto: 'Rolling Stones', correcta: false },
            { texto: 'U2', correcta: false },
            { texto: 'Metallica', correcta: true },
            { texto: 'Queen', correcta: false }
          ]
        },
        {
          pregunta:
            '¿Cuál es la película más taquillera de la historia? ',
          respuestas: [
            { texto: 'Forrest Gump (1994)', correcta: false },
            { texto: 'Avatar (2009)', correcta: false },
            { texto: 'Vengadores: Endgame (2019)', correcta: true },
            { texto: 'Titanic (1997)', correcta: false }
          ]
        }
      ]
    }
  ]