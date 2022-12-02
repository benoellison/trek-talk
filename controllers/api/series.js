const Series = require('../../models/movie');

module.exports = {
    index,
    show,
}

async function index(req, res) {
    const series = await Series.find({});
    res.json(series);
}

async function show(req, res) {
    const series =  await Series.findById(req.params.id)
    res.json(series);
}