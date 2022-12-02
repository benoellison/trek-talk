const express = require('express');
const router = express.Router();
const seriesCtrl = require('../../controllers/api/series');

router.get('/', moviesCtrl.index);