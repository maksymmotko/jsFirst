"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Logan",
            "Justice league",
            "La-la land",
            "Whiplash",
            "Scott Pilgrim vs. the World"
        ]
    };
    
    
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
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Adding favorite film");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    
    const makeChanges = () => {
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    
    function createMovieList (films, parent) {
        parent.innerHTML = "";

        sortArr(films);
        
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieDB.movies, movieList);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});