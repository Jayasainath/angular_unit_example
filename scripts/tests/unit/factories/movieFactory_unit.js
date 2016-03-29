describe('\n Suite #1 => factories => movieFactory \n', function() {
	
	beforeEach(module('unitTestingApp'));

	var movieFactory;

	beforeEach(inject(function(_movieFactory_){
		movieFactory = _movieFactory_;
	}));

	it('should return a movie object \n', function(){
		expect(movieFactory.getMovieFactory()).toBeDefined();
	});

});