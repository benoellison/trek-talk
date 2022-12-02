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
    {title: 'The Original Series', seasons: 3,},
    {title: 'The Next Generation', seasons: 7,},
    {title: 'Deep Space Nine', seasons: 7,},
    {title: 'Voyager', seasons: 7,},
    {title: 'Enterprise', seasons: 4,},
    {title: 'Discovery', seasons: 4,},
    {title: 'Short Treks', seasons: 2,},
    {title: 'Lower Decks', seasons: 3,},
    {title: 'Picard', seasons: 2,},
    {title: 'Strange New Worlds', seasons: 1,},
    {title: 'Prodigy', seasons: 1,},
    {title: 'Star Trek Continues', seasons: 1,},
  ]);

  process.exit();

})();