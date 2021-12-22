"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", "");
    personalMovieDB.movies[a] = prompt("На сколько оцените его?", "");
}

console.log(personalMovieDB);

