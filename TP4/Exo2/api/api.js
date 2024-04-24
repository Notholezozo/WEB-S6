'use strict';

// import du module Express
let express = require('express');
let app = express();
const db = require('./data/db.json');

app.get('/genres/', (req, res) => {
    const strgenre = JSON.stringify(db.genres);
    res.set('Content-Type', 'application/json; charset=utf-8',)
    res.send(strgenre);
})

app.get('/genres/:name/artists', (req, res) => {
    const genre = req.params.name;
    for (let i  = 0 ; i < db.artists.length ; i = i +1);
    const strartists = JSON.stringify((db.artists.filter((element)=> element.genreId === genre )));
    res.set('Content-Type', 'application/json; charset=utf-8',)
    res.send(strartists);
})


// export de notre application vers le serveur principal
module.exports = app;
