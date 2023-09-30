const pool = require('../queries.js');
const fs = require('fs');

const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf8'});
pool.query(seedQuery, (e, res) => {
    console.log(e);
    console.log('seeding complete');
    pool.end();
});