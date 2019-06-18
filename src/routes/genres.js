import { Router } from 'express';

const { Movie, Genre } = require('../sequelize')
const router = Router();

//Returns all genres
router.get('/', (req, res) => {
  Genre.findAll().then(genres => res.json(genres))
});

//Returns a genre by genreId
router.get('/:genreId', (req, res) => {
  let query;
  if(req.params.genreId) {
    query = Genre.findAll({
      where: {
        genreId : req.params.genreId
      }
    })
  }
  return query.then(genres => res.json(genres))
});

//Creates a new genre
router.post('/', (req, res) => {
  Genre.create(req.body).then(genre => res.json(genre))
});

//Deletes a genre by genreId
router.delete('/:genreId', (req, res) => {
  let query;
  if(req.params.genreId) {
    query = Genre.destroy({
      where: {
        genreId : req.params.genreId
      }
    })
  }
  return query.then(() => res.json({}))
});

//Deletes all genres
router.delete('/', (req, res) => {
  let query;
  query = Genre.destroy({
    where: {}
  })
  return query.then(() => res.json({}))
});

export default router;