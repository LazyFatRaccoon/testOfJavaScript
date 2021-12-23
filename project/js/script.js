"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  function putOnScreen() {
    movieList.innerHTML = "";
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
      movieList.innerHTML += `<li class="promo__interactive-item">${
        i + 1
      }. ${film}
                            <div class="delete"></div>
                        </li>`;
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        putOnScreen();
      });
    });
  }

  const promo = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    movieGenre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector(".add"),
    addBtn = addForm.querySelector("button"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  // console.log(addInput);
  // console.log(checkbox);

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = newFilm.slice(0, 21) + "...";
      }
      if (checkbox.checked == true) {
        console.log("Add a favorite movie");
      }
      movieDB.movies.push(newFilm);
      putOnScreen();
      //addInput.value = "";
      //checkbox.checked = false;
      event.target.reset();
    }
  });

  const deletePromo = (adv) => {
    adv.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    movieGenre.textContent = "ДРАММА";
  };

  deletePromo(promo);
  makeChanges();
  putOnScreen();
});
