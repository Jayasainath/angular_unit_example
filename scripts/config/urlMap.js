var urlMap = {
	getMoviesList: function(){
		return env.getBaseUrlPath() + 'movieList' + (env.getInstanceType() === 'local' ? '.json' : '');
	}
}