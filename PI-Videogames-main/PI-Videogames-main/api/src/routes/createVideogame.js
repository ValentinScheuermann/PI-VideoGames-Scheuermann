const { Router } = require('express');
const { Videogame, Genre } = require('../db.js');

const router = Router();

// Recibe la data colectada desde el formulario por el body
// Creo el videojuego en la db
// POST // http://localhost:3001/videogame
// Por body (JSON) pasar el arreglo:
// {
//   "name": "Holis",
//   "description": "Descripción del Videojuego",
//   "platforms": ["Plataforma(s) del Videojuego"],
//   "image": "URL de la Imagen",
//   "released": "10/12/1994",
//   "rating": 9.0,
//   "genres": ["Action, Adventure"]
// }

router.post('/', async (req, res) => {
  const { name, description, image, released, rating, platforms, genres } = req.body;
  let platformString;
  let gameCreated;

  // Verifica si 'platforms' es un array
  if (Array.isArray(platforms)) {
    platformString = platforms.join(', ');

    gameCreated = await Videogame.create({
      name,
      description,
      image,
      released,
      rating,
      platforms: platformString,
    });
  }

  if (gameCreated) {
    for (const G of genres) {
      let genresGame = await Genre.findOne({ where: { name: G } });
      if (genresGame) {
        await gameCreated.addGenre(genresGame);
      }
    }

    // Enviar el objeto del videojuego creado como JSON
    res.status(201).json(gameCreated);
  } else {
    res.status(400).json({ error: 'Error al crear el videojuego' });
  }
});

module.exports = router;