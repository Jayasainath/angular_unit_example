describe('\n Suite #1 => services => movieService \n', function() {
	
	var movieService,
		movieResource,
		httpBackend,
		getMovieListUrl = 'scripts/app/mock/json/movieList.json';
	var	movieData = 
		[{
			"Title": "Interstellar",
			"Year": "2014",
			"Rated": "PG-13",
			"Released": "07 Nov 2014",
			"Runtime": "169 min",
			"Genre": "Adventure, Drama, Sci-Fi",
			"Director": "Christopher Nolan",
			"Writer": "Jonathan Nolan, Christopher Nolan",
			"Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
			"Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
			"Language": "English",
			"Country": "USA, UK",
			"Awards": "Won 1 Oscar. Another 36 wins & 122 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
			"Metascore": "74",
			"imdbRating": "8.6",
			"imdbVotes": "845,024",
			"imdbID": "tt0816692",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "Snatch.",
			"Year": "2000",
			"Rated": "R",
			"Released": "19 Jan 2001",
			"Runtime": "102 min",
			"Genre": "Comedy, Crime",
			"Director": "Guy Ritchie",
			"Writer": "Guy Ritchie",
			"Actors": "Benicio Del Toro, Dennis Farina, Vinnie Jones, Brad Pitt",
			"Plot": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
			"Language": "English, Russian",
			"Country": "UK, USA",
			"Awards": "4 wins & 6 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMTk5NzE0MDQyNl5BMl5BanBnXkFtZTcwNzk4Mjk3OA@@._V1_SX300.jpg",
			"Metascore": "55",
			"imdbRating": "8.3",
			"imdbVotes": "573,208",
			"imdbID": "tt0208092",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "No Country for Old Men",
			"Year": "2007",
			"Rated": "R",
			"Released": "21 Nov 2007",
			"Runtime": "122 min",
			"Genre": "Crime, Drama, Thriller",
			"Director": "Ethan Coen, Joel Coen",
			"Writer": "Joel Coen (screenplay), Ethan Coen (screenplay), Cormac McCarthy (novel)",
			"Actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
			"Plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
			"Language": "English, Spanish",
			"Country": "USA",
			"Awards": "Won 4 Oscars. Another 149 wins & 123 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
			"Metascore": "91",
			"imdbRating": "8.1",
			"imdbVotes": "581,710",
			"imdbID": "tt0477348",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "The Good, the Bad and the Ugly",
			"Year": "1966",
			"Rated": "NOT RATED",
			"Released": "23 Dec 1966",
			"Runtime": "161 min",
			"Genre": "Western",
			"Director": "Sergio Leone",
			"Writer": "Luciano Vincenzoni (story), Sergio Leone (story), Agenore Incrocci (screenplay), Furio Scarpelli (screenplay), Luciano Vincenzoni (screenplay), Sergio Leone (screenplay), Mickey Knox (English version by)",
			"Actors": "Eli Wallach, Clint Eastwood, Lee Van Cleef, Aldo Giuffrè",
			"Plot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
			"Language": "Italian",
			"Country": "Italy, Spain, West Germany, USA",
			"Awards": "1 nomination.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg",
			"Metascore": "90",
			"imdbRating": "8.9",
			"imdbVotes": "478,947",
			"imdbID": "tt0060196",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "Inception",
			"Year": "2010",
			"Rated": "PG-13",
			"Released": "16 Jul 2010",
			"Runtime": "148 min",
			"Genre": "Action, Mystery, Sci-Fi",
			"Director": "Christopher Nolan",
			"Writer": "Christopher Nolan",
			"Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
			"Plot": "A thief who steals corporate secrets through use of the dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
			"Language": "English, Japanese, French",
			"Country": "USA, UK",
			"Awards": "Won 4 Oscars. Another 139 wins & 192 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
			"Metascore": "74",
			"imdbRating": "8.8",
			"imdbVotes": "1,388,652",
			"imdbID": "tt1375666",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "Road to Perdition",
			"Year": "2002",
			"Rated": "R",
			"Released": "12 Jul 2002",
			"Runtime": "117 min",
			"Genre": "Crime, Drama, Thriller",
			"Director": "Sam Mendes",
			"Writer": "Max Allan Collins (graphic novel), Richard Piers Rayner (graphic novel), David Self (screenplay)",
			"Actors": "Tyler Hoechlin, Rob Maxey, Liam Aiken, Jennifer Jason Leigh",
			"Plot": "Bonds of loyalty are put to the test when a hitman's son witnesses what his father does for a living.",
			"Language": "English",
			"Country": "USA",
			"Awards": "Won 1 Oscar. Another 20 wins & 70 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMjA0MDM4ODM0Ml5BMl5BanBnXkFtZTYwNDE3MjU3._V1_SX300.jpg",
			"Metascore": "72",
			"imdbRating": "7.7",
			"imdbVotes": "194,251",
			"imdbID": "tt0257044",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "Casino Royale",
			"Year": "2006",
			"Rated": "PG-13",
			"Released": "17 Nov 2006",
			"Runtime": "144 min",
			"Genre": "Action, Adventure, Thriller",
			"Director": "Martin Campbell",
			"Writer": "Neal Purvis (screenplay), Robert Wade (screenplay), Paul Haggis (screenplay), Ian Fleming (novel)",
			"Actors": "Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench",
			"Plot": "Armed with a licence to kill, Secret Agent James Bond sets out on his first mission as 007 and must defeat a weapons dealer in a high stakes game of poker at Casino Royale, but things are not what they seem.",
			"Language": "English, French",
			"Country": "UK, Czech Republic, USA, Germany, Bahamas",
			"Awards": "Won 1 BAFTA Film Award. Another 25 wins & 35 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMTM5MjI4NDExNF5BMl5BanBnXkFtZTcwMDM1MjMzMQ@@._V1_SX300.jpg",
			"Metascore": "80",
			"imdbRating": "8.0",
			"imdbVotes": "447,924",
			"imdbID": "tt0381061",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "Layer Cake",
			"Year": "2004",
			"Rated": "R",
			"Released": "03 Jun 2005",
			"Runtime": "105 min",
			"Genre": "Crime, Drama, Thriller",
			"Director": "Matthew Vaughn",
			"Writer": "J.J. Connolly (screenplay), J.J. Connolly (novel)",
			"Actors": "Daniel Craig, Tom Hardy, Jamie Foreman, Sally Hawkins",
			"Plot": "A successful cocaine dealer gets two tough assignments from his boss on the eve of his planned early retirement.",
			"Language": "English, Romanian",
			"Country": "UK",
			"Awards": "2 wins & 9 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMTI5MTE1OTAzOV5BMl5BanBnXkFtZTcwNDc2OTgyMQ@@._V1_SX300.jpg",
			"Metascore": "73",
			"imdbRating": "7.4",
			"imdbVotes": "130,099",
			"imdbID": "tt0375912",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "The Godfather",
			"Year": "1972",
			"Rated": "R",
			"Released": "24 Mar 1972",
			"Runtime": "175 min",
			"Genre": "Crime, Drama",
			"Director": "Francis Ford Coppola",
			"Writer": "Mario Puzo (screenplay), Francis Ford Coppola (screenplay), Mario Puzo (novel)",
			"Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
			"Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
			"Language": "English, Italian, Latin",
			"Country": "USA",
			"Awards": "Won 3 Oscars. Another 23 wins & 27 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg",
			"Metascore": "100",
			"imdbRating": "9.2",
			"imdbVotes": "1,098,061",
			"imdbID": "tt0068646",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "12 Angry Men",
			"Year": "1957",
			"Rated": "NOT RATED",
			"Released": "01 Apr 1957",
			"Runtime": "96 min",
			"Genre": "Crime, Drama",
			"Director": "Sidney Lumet",
			"Writer": "Reginald Rose (story)",
			"Actors": "Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall",
			"Plot": "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
			"Language": "English",
			"Country": "USA",
			"Awards": "Nominated for 3 Oscars. Another 16 wins & 8 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg",
			"Metascore": "N/A",
			"imdbRating": "8.9",
			"imdbVotes": "421,352",
			"imdbID": "tt0050083",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "The Departed",
			"Year": "2006",
			"Rated": "R",
			"Released": "06 Oct 2006",
			"Runtime": "151 min",
			"Genre": "Crime, Drama, Thriller",
			"Director": "Martin Scorsese",
			"Writer": "William Monahan (screenplay), Alan Mak, Felix Chong",
			"Actors": "Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg",
			"Plot": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
			"Language": "English, Cantonese",
			"Country": "USA, Hong Kong",
			"Awards": "Won 4 Oscars. Another 83 wins & 112 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
			"Metascore": "86",
			"imdbRating": "8.5",
			"imdbVotes": "824,871",
			"imdbID": "tt0407887",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "Inglourious Basterds",
			"Year": "2009",
			"Rated": "R",
			"Released": "21 Aug 2009",
			"Runtime": "153 min",
			"Genre": "Adventure, Drama, War",
			"Director": "Quentin Tarantino, Eli Roth",
			"Writer": "Quentin Tarantino",
			"Actors": "Brad Pitt, Mélanie Laurent, Christoph Waltz, Eli Roth",
			"Plot": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
			"Language": "English, German, French, Italian",
			"Country": "USA, Germany",
			"Awards": "Won 1 Oscar. Another 117 wins & 143 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMjIzMDI4MTUzOV5BMl5BanBnXkFtZTcwNDY3NjA3Mg@@._V1_SX300.jpg",
			"Metascore": "69",
			"imdbRating": "8.3",
			"imdbVotes": "834,631",
			"imdbID": "tt0361748",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "Catch Me If You Can",
			"Year": "2002",
			"Rated": "PG-13",
			"Released": "25 Dec 2002",
			"Runtime": "141 min",
			"Genre": "Biography, Crime, Drama",
			"Director": "Steven Spielberg",
			"Writer": "Jeff Nathanson (screenplay), Frank Abagnale Jr. (book), Stan Redding (book)",
			"Actors": "Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen",
			"Plot": "A true story about Frank Abagnale Jr., who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
			"Language": "English, French",
			"Country": "USA, Canada",
			"Awards": "Nominated for 2 Oscars. Another 11 wins & 33 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
			"Metascore": "76",
			"imdbRating": "8.0",
			"imdbVotes": "477,823",
			"imdbID": "tt0264464",
			"Type": "movie",
			"Response": "True"
	    },
	    {
			"Title": "Goodfellas",
			"Year": "1990",
			"Rated": "R",
			"Released": "21 Sep 1990",
			"Runtime": "146 min",
			"Genre": "Biography, Crime, Drama",
			"Director": "Martin Scorsese",
			"Writer": "Nicholas Pileggi (book), Nicholas Pileggi (screenplay), Martin Scorsese (screenplay)",
			"Actors": "Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco",
			"Plot": "Henry Hill and his friends work their way up through the mob hierarchy.",
			"Language": "English, Italian",
			"Country": "USA",
			"Awards": "Won 1 Oscar. Another 37 wins & 31 nominations.",
			"Poster": "http://ia.media-imdb.com/images/M/MV5BMTY2OTE5MzQ3MV5BMl5BanBnXkFtZTgwMTY2NTYxMTE@._V1_SX300.jpg",
			"Metascore": "89",
			"imdbRating": "8.7",
			"imdbVotes": "690,841",
			"imdbID": "tt0099685",
			"Type": "movie",
			"Response": "True"
	    }];

	beforeEach(module('unitTestingApp'));

	beforeEach(inject(function(_movieService_, _movieResource_, _$httpBackend_){
		movieService = _movieService_;
		movieResource = _movieResource_;
		httpBackend = _$httpBackend_;
	}));

	afterEach(function(){
		httpBackend.verifyNoOutstandingExpectation();
	});

	it('should return movie data \n', function (){
		var fake_response;

		httpBackend
			.when('GET', getMovieListUrl)
			.respond(200, movieData);

		movieService.getMovieList(getMovieListUrl).then(function (response) {
			fake_response = response.data;
		});
		
		httpBackend.flush();
		expect(fake_response).toEqual(movieData);
	});

	it('should handle HTTP Error Code: 500 \n', function(){
		var fake_response;

		httpBackend
			.expect('GET', getMovieListUrl)
			.respond(500);

		movieService.getMovieList(getMovieListUrl).then(function(response){
			fake_response = response.data;
		}).catch(function(error){
			fake_response = 'Error in getMovieList service';
		});

		httpBackend.flush();
		expect(fake_response).toEqual('Error in getMovieList service');
	});
});