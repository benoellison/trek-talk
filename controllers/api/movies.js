const Movie = require('../../models/movie');

module.exports = {
    index,
    show,
}

async function index(req, res) {
    const movies = await Movie.find({});
    res.json(movies);
}

async function show(req, res) {
    const movie =  await Movie.findById(req.params.id)
    await movie.populate('comments.user')
    res.json(movie);
}