app.directive('movieCardDirective', [function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			data: '=movieData'
		},
		templateUrl: 'scripts/app/directives/partials/movie-card-partial.html',
		link: function(scope, element, attrs){
			// scope.data = scope.movieData;
		}
	};
}]);