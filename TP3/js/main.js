'use strict';
/* eslint-env browser, es6 */

// Pas besoin d'évenement window.onload puisqu'on utilise l'attribut defer
// lorsque l'on charge notre script


/*const reponse = await fetch('http://localhost:3000/genres');
const genres = await reponse.json()*/


async function loadGenres() {

    //jE CHARGE MON FICHIER
    fetch('http://localhost:3000/genres')
        .then((reponse) => reponse.json())// une promesse doit etre une fonction
        .then((Jason) => {
            const genre = {};
            Object.assign(genre, Jason);
            console.log(genre);
            const select = document.querySelector('#main > nav > form > select');

            //je remplis mon bouton sans forEach car on avait pas la consigne
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
            //quand ma page se charge je chare le premier genre
            loadArtists(genre[0]);

            //quand je change de style avec le menu déroulant
            select.addEventListener('change', (evt) => {
                const genresArray = Object.values(genre);
                const nom = genresArray.find((element) => element.id === evt.target.value);
                const popup = document.querySelector('#albums');
                loadArtists(nom);

                //pour enlever mon popup quand je change de genre
                popup.style.visibility = 'hidden';
                popup.style.opacity = '0';
                //descripGenre.textContent =
            });
        });
}

async function loadArtists(genre) {
    //pour rempir le top genre artist avec le bon genre et la bonne description
    const titreTopArtist = document.querySelector('#main > h2');
    const descripGenre = document.querySelector('#main > p');
    titreTopArtist.textContent = `Top ${genre.name} artists`;
    descripGenre.textContent = `${genre.description}`;

    //pour venir mettre le nom des artistes ainsi que la photo qui va avec
    const reponse = await fetch(`http://localhost:3000/genres/${genre.id}/artists`);
    const fichier = await reponse.json();
    const objectArtists = {};
    Object.assign(objectArtists, fichier);
    const listArtist = Object.values(objectArtists);
    const Artists = document.querySelector('#main > ul');
    Artists.innerHTML = '';

    //on va remplir grâce a un forEach
    listArtist.forEach((element) => {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const a = document.createElement('a');
        a.text = element.name;
        a.href = '#';
        a.id = element.id;
        img.src = element.photo;
        img.alt = element.name;
        h3.appendChild(a);
        li.appendChild(h3);
        li.appendChild(img);
        Artists.appendChild(li);
    });


    //on va faire le pop up maintenant
    const ul = document.querySelector('#main > ul');
    const nbr = ul.childElementCount;
    console.log(nbr);
    for (let i = 1; i < nbr + 1; i = i + 1) {
        const eventt = document.querySelector(`#main > ul > li:nth-child(${i}) > h3 > a`);
        const artist = eventt.id;
        eventt.addEventListener('click', () => {
            artistSelected(artist);
        });
    }
}

async function artistSelected(artist) {
    const reponse = await fetch(`http://localhost:3000/artists/${artist}/albums`);
    const fichier = await reponse.json();
    const popup = document.querySelector('#albums');


    //remplir popup
    const objectAlbums = {};
    Object.assign(objectAlbums, fichier);
    const listAlbums = Object.values(objectAlbums);//je mets mes données dans un tableau pour le forEach

    const tbody = document.querySelector('#albums > table > tbody');
    tbody.innerHTML = '';
    let ind = 0;

    //on remplit les données du popup
    listAlbums.forEach((element) => {
        ind = ind + 1;
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const img = document.createElement('img');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        img.onload = function () {
            img.style.width = '40px';
            img.style.height = 'auto';
        };//pour attendre que l'image soit chargé pour modif sa taille

        img.src = element.cover;
        td1.appendChild(img);
        td2.textContent = element.title;
        console.log(td2.text);
        td3.textContent = element.year;
        td4.textContent = element.label;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);

    });

    //rendre popup visible
    popup.style.visibility = 'visible';
    popup.style.transition = 'opacity 0.6s';
    popup.style.opacity = '1';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%,-50%)';
    //faut que ca parte quand j'appuie sur ok

    const ok = document.querySelector('#albums > form > button');
    ok.addEventListener('click', () => {
        popup.style.transition = 'visibility 0s linear 0.6s, opacity 0.6s';
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';

    });
}


loadGenres();
