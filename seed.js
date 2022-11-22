require('dotenv').config();
require('./config/database');

const Movie = require('./models/movie');
const Series = require('./models/series');

(async function() {

    await Movie.deleteMany({});
    const movies = await Movie.create([
        {name: 'The Motion Picture',},
        {name: 'The Wrath of Khan',},
        {name: 'The Search for Spock',},
        {name: 'The Voyage Home',},
        {name: 'The Final Frontier'},
        {name: 'The Undiscovered Country',},
        {name: 'Generations'},
        {name: 'First Contact'},
        {name: 'Insurrection'},
        {name: 'Nemesis'},
        {name: 'Star Trek'},
        {name: 'Into Darkness'},
        {name: 'Beyond'},
    ]);

  await Series.deleteMany({});
  const series = await Series.create([
    {name: 'The Original Series'},
    {name: 'The Next Generation'},
    {name: 'Deep Space Nine'},
    {name: 'Voyager'},
    {name: 'Enterprise'},
    {name: 'Discovery'},
    {name: 'Short Treks'},
    {name: 'Lower Decks'},
    {name: 'Picard'},
    {name: 'Strange New Worlds'},
    {name: 'Prodigy'},
    {name: 'Star Trek Continues'},
  ]);

  process.exit();

})();