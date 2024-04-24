'use strict';
/* eslint-env browser, es6 */

// Pas besoin d'évenement window.onload puisqu'on utilise l'attribut defer
// lorsque l'on charge notre script
console.log('zéahahahah');

/*const reponse = await fetch('http://localhost:3000/genres');
const genres = await reponse.json()*/


async function loadGenres() {

    fetch('/api/genres')
        .then((reponse) => reponse.json())// une promesse doit etre une fonction
        .then((Jason) => {
                const genre = {};
                Object.assign(genre, Jason);
                console.log(genre);
                const select = document.querySelector('#main > nav > form > select');
                const option1 = document.createElement('option');
                const option2 = document.createElement('option');
                const option3 = document.createElement('option');
                option1.text = genre[0].name;
                option1.value = genre[0].id;
                option2.text = genre[1].name;
                option2.value = genre[1].id;
                option3.text = genre[2].name;
                option3.value = genre[2].id;
                select.add(option1);
                select.add(option2);
                select.add(option3);
                loadArtists(genre[0]);
                select.addEventListener('change', (evt)=> {
                    const genresArray = Object.values(genre);
                    const nom = genresArray.find((element) => element.id === evt.target.value);
                    loadArtists(nom);
                    //descripGenre.textContent =
                });
            }
        );
}

async function loadArtists(genre) {
    const titreTopArtist = document.querySelector('#main > h2');
    const descripGenre = document.querySelector('#main > p');
    titreTopArtist.textContent = `Top ${genre.name} artists`;
    descripGenre.textContent = `${genre.description}`;

    const reponse = await fetch(`/api/genres/${genre.id}/artists`);
    const fichier = await reponse.json();
    const objectArtists = {};
    Object.assign(objectArtists, fichier);
    const listArtist = Object.values(objectArtists);
    const Artists = document.querySelector('#main > ul');
    listArtist.forEach((element) => {
        const titreArtist = document.createElement('titre');
        titreArtist.
            Artists.innerHTML = '<li><h3><a href="#">${element.name}</a></h3> \n <img src=`https://rovimusic.rovicorp.com/image.jpg?c=91YlNgmaTmzaCa8-xJy2yxyhM-OFI8zG4l-qVpXXB1I=&f=3` alt = ${element.name}></li>';
    });

}
loadGenres();
