app.service('movieService', ['$q', 'movieResource', 'movieFactory', '$http', 
	function(q, movieResource, movieFactory, $http){
	this.getMovieList = function(url){
		var deferred = q.defer();
		// return movieResource.get(url).then(function(responseData){
		// 	movieFactory.setMovieFactory(responseData.data);
		// 	deferred.resolve(responseData.data);
		// });

		var promise =
		$http({
			url: url,
			type: 'GET'
		}).success(function(responseData){
			movieFactory.setMovieFactory(responseData);
			deferred.resolve(responseData);
		});

		return promise;
	};
}]);