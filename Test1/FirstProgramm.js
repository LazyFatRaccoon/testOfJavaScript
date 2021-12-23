"use strict";

//let numberOfFilms;
// console.log(numberOfFilms);

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count == null ||
      personalMovieDB.count == "" ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    return personalMovieDB.count;
  },
  showMyBD: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  writеYourGenres: function (countOfRepeats) {
    for (let i = 0; i < countOfRepeats; i++) {
        let a = "";
        a = prompt(
          `Ваш любимый жанр под номером ${personalMovieDB.genres.length + 1}`,
          ""
          );
        if (a == null || a == "") {
            i--;
        } else {
            personalMovieDB.genres[personalMovieDB.genres.length] = a;
        }
      
    }
    let counter = 0;
    personalMovieDB.genres.forEach(function () {
      counter++;
      console.log(
        `Любимый женр #${counter} - это ${personalMovieDB.genres[counter - 1]}`
      );
    });
  },
  rememberMyFilms: function () {
    let a = "",
      b = "";
    for (let i = 0; i < 2; i++) {
      do {
        a = prompt("Один из последних просмотренных фильмов?", "");
      } while (a == null || a.length > 20 || a == "");
      do {
        b = prompt("На сколько оцените его?", "");
      } while (b == null || b.length > 20 || b == "");
      personalMovieDB.movies[a] = b;
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Nooby");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You are a cool viewer");
    } else if (personalMovieDB.count >= 30) {
      console.log("movie fan");
    } else {
      console.log("Error");
    }
  },
  toggleVisibleMyBD: function () {
    personalMovieDB.privat
      ? (personalMovieDB.privat = false)
      : (personalMovieDB.privat = true);
  },
};

//console.log(personalMovieDB.start());
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.rememberMyFilms();
// personalMovieDB.writеYourGenres(3);
//personalMovieDB.toggleVisibleMyBD();
// personalMovieDB.showMyBD();
