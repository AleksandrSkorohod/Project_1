const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// const a = prompt('один из последних просмотренных фильмов?', '');
// const b = +prompt('на сколько вы его оцениваете?', '');
// const c = prompt('один из последних просмотренных фильмов?', '');
// const d = +prompt('на сколько вы его оцениваете?', '');


// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('один из последних просмотренных фильмов?', ''),
        b = prompt('на сколько вы его оцениваете?', '');

    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        personalMovieDB.movies[a] = b;
        
    } else {
        alert('ебать, ты дэбил');
        i--;
    }
    
}

if (personalMovieDB.count < 10) {
    alert('чот слишком мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('нууу, такое сабе');
} else if (personalMovieDB.count >= 30) {
    alert('хоть что то в тебе хорошее');
} else {
    alert('чот ты дэбил не то вводишь.');
}
console.log(personalMovieDB);