
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  var moviesToMinutes = [...movies]; //create new array
  moviesToMinutes.forEach(function(movie) {
    var sumMinutes = 0;
    var convertedTime = [];
    //If the time has hours (and, or not, minutes)
    if (movie.duration.includes("h")) {
      var hours = movie.duration.split("h");
      convertedTime.push(Number.parseInt(hours[0]) * 60);
      if (hours[1].includes("min")) {
        var minutes = hours[1].split("min");
        convertedTime.push(Number.parseInt(minutes[0]));
      }
      sumMinutes = convertedTime.reduce(function(acc, val) {
        return acc + val;
      });
      movie.duration = sumMinutes;
      //If the time is only minutes
    } else if (movie.duration.includes("min")) {
      let minutes = movie.duration.split("min");
      movie.duration = Number.parseInt(minutes[0]);
    }
  });
  return moviesToMinutes;
}
console.log(turnHoursToMinutes(movies))

// Get the average of all rates with 2 decimals 

function averageRate(){
	let suma = 0;
	let average = 0;
	for (var i = 0; i < movies.length; i++){
		suma = suma + movies[i].rate;
		average = suma/movies.length;
		average = average.toFixed(2);
	}
	return average;
}
console.log(averageRate());

// Get the average of Drama Movies

function dramaMoviesRate(){
	let suma = 0;
	let average = 0;
	for (var i = 0; i < movies.length; i++){
		if(movies[i].genre.includes('Drama') === true){
		suma = suma + movies[i].rate;
		average = suma/movies.length;
		average = average.toFixed(2);
		}
	}
	return average;
}
console.log(dramaMoviesRate());

//Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration (arr){
	var array = arr.map(function(obj){
 			return obj;
 		})
	return array.sort(function(a, b){
		return a.duration - b.duration;
	})
}
console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG

function howManyMovies(){

	var peliculasStevenSpilberg = movies.filter(function(peliculas){
		return peliculas.director === 'Steven Spielberg';
	})
console.log(peliculasStevenSpilberg);
}
howManyMovies();

// Order by title and print the first 20 titles

function orderAlphabetically(){
	let newArray = []
	for(var i = 0; i < movies.length; i++){
		newArray.push(movies[i].title);
		newArray.sort();
		newArray.splice(20,250);
	}
	return newArray;
}
console.log(orderAlphabetically());