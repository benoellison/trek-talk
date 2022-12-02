const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/movies/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);
// router.put('/comments/:id', ensureLoggedIn, commentsCtrl.update);

module.exports = router;