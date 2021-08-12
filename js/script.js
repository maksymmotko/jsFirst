"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('How much films you watched?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How much films you watched?', '');
        }
    },

    rememberMyFilms: () => {
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
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Little films you watched');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are good viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are kinoman');
        } else {
            console.log('error happened');
        }
    },

    showMyDB: () => {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB);
        } else {
            console.log('Data base is private');
        }
    },

    toggleVisibleMyDatabase: () => {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },

    writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre number ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некоректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

};