albums = require('./albums.json');

function Album({title,artist,year}){ //constructeur de objet album
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.getTitle = () => {return this.title};
    this.getArtist = () => {return this.artist};
    this.getYear = () => {return this.year};
    return this;
}

pink = new Album(albums["The Piper at the Gates of Dawn"]);

console.log(pink.getTitle());
console.log(pink.getArtist());
console.log(pink.getYear());