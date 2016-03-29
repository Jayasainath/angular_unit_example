app.factory("movieFactory", function(){

	var _m = {};

	get = function(){
		return _m;
	};

	set = function(movie){
		_m = movie;
	};

	return {
		getMovieFactory: get,
		setMovieFactory: set
	};
});