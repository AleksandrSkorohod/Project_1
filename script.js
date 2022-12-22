const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('один из последних просмотренных фильмов?', '');
const b = +prompt('на сколько вы его оцениваете?', '');
const c = prompt('один из последних просмотренных фильмов?', '');
const d = +prompt('на сколько вы его оцениваете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);