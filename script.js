

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
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
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        }
        else {
            personalMovieDB.private = true;
        }

    },
    showMyDB: function () {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB);
        }
    },
    writeYouGenres: function () {
        // for (let i = 1; i <= 3; i++) {
        //     let genre = prompt(`ваш любимый жанр под номерм ${i}`);
        //     if (genre == "" || genre == null) {
        //         console.log('вы ввели некорректные данные, или неввели их вовсе.');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     } 
        // }
        for (let i = 1; i < 2; i++) {
            let genres = prompt('введите ваши любимые жанры через запятую');


            if (genres == "" || genres == null) {
                console.log('вы ввели некорректные данные, или неввели их вовсе.');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');     //можно сделать через split он разобьет строку от пользователя и запишет ее в массив
                personalMovieDB.genres.sort();
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Ваш любивый жанр ${i + 1} это ${item}`);
            });
        }
    }
};
