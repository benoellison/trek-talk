const Movie = require('../../models/movie');

module.exports = {
    index,
    // show,
}

async function index(req, res) {
    const movies = await Movie.find({});
    res.json(movies);
}