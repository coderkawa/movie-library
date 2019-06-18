const Sequelize = require('sequelize')
const MovieModel = require('./models/movie')
const GenreModel = require('./models/genre')

//Connection to the PostgreSQL database
const sequelize = new Sequelize('database', 'api_user', 'Api@user', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
})

const MovieGenre = sequelize.define('movie_genre', {})
const Movie = MovieModel(sequelize, Sequelize)
const Genre = GenreModel(sequelize, Sequelize)

//Creating a Many to Many relation between movies and genres
Movie.belongsToMany(Genre, { through: MovieGenre})
Genre.belongsToMany(Movie, { through: MovieGenre})

sequelize.sync({ force: false })
  .then(() => {
  })

module.exports = {
  Movie,
  Genre
}