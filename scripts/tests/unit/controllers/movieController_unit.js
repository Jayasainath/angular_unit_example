describe('\n Suite #1 => controllers => movieController \n', function() {
	
	beforeEach(module('unitTestingApp'));
	
	var controller,
		scope = {};

	beforeEach(inject(function(_$controller_){
		controller = _$controller_;
		controller('movieController as MovieCtrl', {$scope: scope});
		scope = scope.MovieCtrl;
	}));

	it('should have movies array of length 0\n', function(){
		expect(scope.movies.length).toEqual(0);
	});
});