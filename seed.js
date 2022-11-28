require('dotenv').config();
require('./config/database');

const Movie = require('./models/movie');
const Series = require('./models/series');

(async function() {

    await Movie.deleteMany({});
    const movies = await Movie.create([
        {title: 'The Motion Picture',},
        {title: 'The Wrath of Khan',},
        {title: 'The Search for Spock',},
        {title: 'The Voyage Home',},
        {title: 'The Final Frontier'},
        {title: 'The Undiscovered Country',},
        {title: 'Generations'},
        {title: 'First Contact'},
        {title: 'Insurrection'},
        {title: 'Nemesis'},
        {title: 'Star Trek'},
        {title: 'Into Darkness'},
        {title: 'Beyond'},
    ]);

  await Series.deleteMany({});
  const series = await Series.create([
    {title: 'The Original Series'},
    {title: 'The Next Generation'},
    {title: 'Deep Space Nine'},
    {title: 'Voyager'},
    {title: 'Enterprise'},
    {title: 'Discovery'},
    {title: 'Short Treks'},
    {title: 'Lower Decks'},
    {title: 'Picard'},
    {title: 'Strange New Worlds'},
    {title: 'Prodigy'},
    {title: 'Star Trek Continues'},
  ]);

  process.exit();

})();