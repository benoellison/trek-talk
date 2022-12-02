// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Comment = require('./models/comment');
// const Episode = require('./models/episode');
const Movie = require('./models/movie');
const Series = require('./models/series');

// Local variables will come in handy for holding retrieved documents
let user, movie, series;
let users, movies;
