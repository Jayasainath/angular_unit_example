app.service('movieResource', ['$q', '$http', function(q, http){

	this.get = function (url) {
		var deferred = q.defer(), promise = 
		http({
			url: url,
			dataType: 'json',
			contentType: 'application/json',
			async: 'true'
		}).success(function(success){
			deferred.resolve(success);
		}).error(function(error, status){
			deferred.reject();
		});

		return promise;
	};
}]);