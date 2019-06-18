var supertest = require('supertest');
var chai = require('chai');
var uuid = require('uuid');
var app = require('../src/index.js');
const { Movie, Genre } = require('../src/sequelize')

global.app = app;
global.uuid = uuid;
global.expect = chai.expect;
global.request = supertest(app);
global.movie = Movie;
global.genre = Genre;