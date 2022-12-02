const Comment = require('../../models/comment')
// const Episode = require('../../episode')
const Movie = require('../../models/movie')

module.exports = {
    create,
    delete: deleteComment,
    update,
}

function create(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        movie.comments.push(req.body)
        movie.save(async function(err) {
            await movie.populate('comments.user');
            res.json(movie);
        })
    })
}

function deleteComment(req, res, next) {
    Movie.findOne({'comments._id': req.params.id, 'comments.user': req.user._id}).then(function(movie) {
        if (!movie) return;
        movie.comments.remove(req.params.id);
        movie.save(async function(err) {
            await movie.populate('comments.user');
            res.json(movie);
        })
    })
}

function update(req, res) {
    console.log('editing editing')
}
