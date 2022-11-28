const Comment = require('../../models/comments')
const Episode = require('../../episode')

module.exports = {
    create,
    delete: deleteComment,
}

function create(req, res) {
    Episode.findById(req.params.id, function(err, episode) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        episode.comments.push(req.body)
        episode.save(function(err) {
            res.redirect(`/episodes/${episode._id}`)
        })
    })
}

function deleteComment(req, res, next) {
    Episode.findById(req.comment.episode._id)
}
