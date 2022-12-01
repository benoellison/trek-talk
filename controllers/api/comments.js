const Comment = require('../../models/comment')
// const Episode = require('../../episode')
const Movie = require('../../models/movie')

module.exports = {
    create,
    delete: deleteComment,
}

function create(req, res) {
    console.log(req.body)
    console.log(req.params)
    Movie.findById(req.params.id, function(err, movie) {
        req.body.user = req.user._id
        // req.body.userName = req.user.name
        console.log(req.body)
        movie.comments.push(req.body)
        movie.save(function(err) {
            res.json(movie);
        })
    })
}

function deleteComment(req, res, next) {
    Movie.findById(req.comment.movie._id)
}
