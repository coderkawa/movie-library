import express from 'express';
import routes from './routes';

const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.use('/movies', routes.movies);
app.use('/genres', routes.genres);

//Port configuration for Heroku
app.listen(process.env.PORT || 3000, () =>
  console.log('Example app listening on port 3000!'),
);

module.exports = app