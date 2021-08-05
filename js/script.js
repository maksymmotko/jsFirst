"use strict";

const numberOfFilms = +prompt('How much films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('One of last watched film?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('One of last watched film?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);