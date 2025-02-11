// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArr = moviesArray.map(movie => movie.director);
    return newArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movies => movies.director === "Steven Spielberg" && movies.genre.includes("Drama")).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let totalSum = 0;
    if (moviesArray.length <= 0){
        return 0;
    }

    totalSum = moviesArray.reduce((accumulator, movies) => {
        if (!movies.score){
            movies.score = 0;
            return accumulator + movies.score;
        } else {
            return accumulator + movies.score; 
        }
    }, 0);
  return Number((totalSum/moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if ((moviesArray.filter(movies => movies.genre.includes("Drama"))).length <= 0 ){
        return 0;
    }

    let totalSumDrama = 0;
    let pelis = moviesArray.filter(movies => movies.genre.includes("Drama"));
        totalSumDrama = pelis.reduce((accumulator, movies) => {
        if (!movies.score){
          movies.score = 0;
          return accumulator + movies.score;
        } else {
          return accumulator + movies.score; 
        } 
    }, 0);
    return Number((totalSumDrama / pelis.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArrYear = moviesArray.map((x) => x)
    newArrYear.sort((a, b) => a.year - b.year);
    let newArrYandT = newArrYear.sort((a, b) => {
        if(a.year == b.year){
            if (a.title < b.title) return -1; 
            if (a.title > b.title) return 1;
        }
      });
    return newArrYandT;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = moviesArray.map(movie => movie.title);    
    newArr.sort();
    if (newArr.length > 20){
        newArr.sort((a, b) => {
                if (a.title < b.title) return -1; 
                if (a.title > b.title) return 1;
            })
          };
    return newArr.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
