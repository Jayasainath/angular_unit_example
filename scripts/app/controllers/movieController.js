app.controller("movieController", ['movieService', 'movieFactory',
	function(movieService, movieFactory){
		var _this = this;
		
		_this.movies = [];

		_this.loadMovies = function(){
			movieService.getMovieList(urlMap.getMoviesList()).then(function(){
				_this.movies = movieFactory.getMovieFactory();
			});
		};
	}
]);