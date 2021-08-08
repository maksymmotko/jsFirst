"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('How much films you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of last watched film?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function writeYourGenres (genre) {
    for (let i = 1; i <= 3; i++) {
        const a = prompt(`Your favorite genre number ${i}`);
    
        if (a != null && a != '' && a.length < 50) {
            genre[i - 1] = a;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

writeYourGenres(personalMovieDB.genres);

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Little films you watched');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are good viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are kinoman');
    } else {
        console.log('error happened');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Data base is private');
    }
}

showMyDB();
