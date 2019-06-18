import { Router } from 'express';

const { Movie, Genre } = require('../sequelize')
const router = Router();

//Returns all movies
router.get('/', (req, res) => {
  Movie.findAll({
    include: [{
      model: Genre,
      through: {
      }
    }]
  }).then(movies => res.json(movies))
});

//Returns a movie by movieId with its genres
router.get('/:movieId', (req, res) => {
  let query;
  if(req.params.movieId) {
    query = Movie.findAll({
      where: {
        movieId : req.params.movieId
      }
    })
  }
  return query.then(movie => res.json(movie))
});

//Creates a new movie
router.post('/', (req, res) => {
  Movie.create(req.body).then(movie => {
    movie.addGenre(req.body.genres).then(()=>{})
    res.json(movie)
  })
});

//Deletes a movie by movieId
router.delete('/:movieId', (req, res) => {
  let query;
  if(req.params.movieId) {
    query = Movie.destroy({
      where: {
        movieId : req.params.movieId
      }
    })
  }
  return query.then(() => res.json({}))
});

//Deletes all movies
router.delete('/', (req, res) => {
  let query;
  query = Movie.destroy({
    where: {}
  })
  return query.then(() => res.json({}))
});

export default router;