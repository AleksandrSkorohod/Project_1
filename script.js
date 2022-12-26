let numberOfFilms;



function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних фильмов которые вы посмотрели?', ''),
            b = prompt('на сколько вы его оцените?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        }
        else {
            alert('ну ты и олень');
            i--;
        }
    }

}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('чот маловато');
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('ну, таакое себе');
    }
    else if (personalMovieDB.count >= 30) {
        console.log('нармул');
    }
    else {
        console.log('ошибка ёпто');
    }
}
detectPersonalLevel();


function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();


function writeYouGenres() {
    for (let i = 1; i <= 3 ; i++) {
        const genre = prompt(`ваш любимый жанр под номерм ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYouGenres()