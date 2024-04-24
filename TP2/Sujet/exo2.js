'use strict';

const albums = {
    'Fresh Cream': {artist: 'Cream', year: 1966, title: 'Fresh Cream'},
    'Hot Rats': {artist: 'Frank Zappa', year: 1969, title: 'Hot Rats'},
    'Space Oddity': {artist: 'David Bowie', year: 1969, title: 'Space Oddity'},
    'Merry Christmas': {artist: 'Mariah Carey', year: 1994, title: 'Merry Christmas'},
    'Songs from a Room': {artist: 'Leonard Cohen', year: 1969, title: 'Songs from a Room'},
    Ummagumma: {artist: 'Pink Floyd', year: 1969, title: 'Ummagumma'},
    'Camembert Électrique': {artist: 'Gong', year: 1971, title: 'Camembert Électrique'},
    'The Piper at the Gates of Dawn': {artist: 'Pink Floyd', year: 1967, title: 'The Piper at the Gates of Dawn'},

};

function afficherArtiste(nomAlbum) {
    if (nomAlbum in albums) {
        console.log(`L artiste de "${nomAlbum}" est "${albums[nomAlbum]}`);
    } else {
        console.log('le nom nexiste pas');
    }
}

function albumTitle({artist, year, title}) {
    console.log(`le Titre de l album est "${title}"`);
}

function albumyear({artist, year, title}) {
    console.log(`la date de l album est "${year}"`);
}

function albumartist({artist, year, title}) {
    console.log(`l artiste de l album est "${artist}"`);
}



function Album({artist, year, title}) {
    this.title = title;
    this.artist = artist;
    this.year = year;
}

function GetArtist(Album){
    console.log
}


afficherArtiste('Ummagumma');
albumTitle(albums["Hot Rats"]);
albumyear(albums["Fresh Cream"]);
albumartist(albums["Songs from a Room"]);
new Album({artist: 'Cream', year: 1966, title: 'Fresh Cream'});

