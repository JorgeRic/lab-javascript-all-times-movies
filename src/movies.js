/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {

	var acumulador = arr.reduce(function(acc, movie){
 		return acc + movie.rate;
	}, 0);

	return acumulador / arr.length;
}
console.log(ratesAverage(movies))

// Get the average of Drama Movies

function dramaMoviesRate(arr){


		var array = arr.map(function(obj){
 			return obj.genre;
		})
		var cant = 0;
		for(var i = 0; i < array.length; i++){
			
		if (array[i].indexOf('Drama') === -1){
			cant++;
		}
	}
	return cant / arr.length;
}
console.log(dramaMoviesRate(movies))

//Order by time duration, in growing order

function orderByDuration (arr){
	var array = arr.map(function(obj){
 			return obj.duration;
 		})
	return array.sort()
}
console.log(orderByDuration(movies))


// How many movies did STEVEN SPIELBERG
var cantPelis = 0;
function howManyMovies(arr){
 		var array = arr.filter(function(obj){
			if(obj.director === 'Steven Spielberg'){
				cantPelis++;
			}
			// else if(obj.director.length === 0){
			// 	return undefiend
			// }


 		})
	return cantPelis;
}
console.log(howManyMovies(movies))


// Order by title and print the first 20 titles
function orderAlphabetic (arr){
	var array = arr.map(function(obj){
 			return obj.title;
 		});
	array.splice(20,500);
	return array.sort();
}
console.log(orderAlphabetic(movies))

// Best yearly rate average
