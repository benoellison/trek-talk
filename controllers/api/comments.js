const Comment = require('../../models/comments')
// const Episode = require('../../episode')
const Movie = require('../../models/movie')

module.exports = {
    create,
    delete: deleteComment,
}

function create(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        movie.comments.push(req.body)
        movie.save(function(err) {
            res.redirect(`/movie/${movie._id}`)
        })
    })
}

function deleteComment(req, res, next) {
    Movie.findById(req.comment.movie._id)
}
