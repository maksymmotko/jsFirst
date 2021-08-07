"use strict";

const numberOfFilms = +prompt('How much films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


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

if (personalMovieDB.count < 10) {
    console.log('Little films you watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are good viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('You are kinoman');
} else {
    console.log('error happened');
}

console.log(personalMovieDB);