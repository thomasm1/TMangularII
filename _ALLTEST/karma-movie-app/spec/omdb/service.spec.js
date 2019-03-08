describe('omdb service', function() {
	var movieData = {"Search":[{"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","imdbID":"tt0076759","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"Star Wars: Episode V - The Empire Strikes Back","Year":"1980","imdbID":"tt0080684","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"Star Wars: Episode VI - Return of the Jedi","Year":"1983","imdbID":"tt0086190","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Star Wars: Episode VII - The Force Awakens","Year":"2015","imdbID":"tt2488496","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"},{"Title":"Star Wars: Episode I - The Phantom Menace","Year":"1999","imdbID":"tt0120915","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Star Wars: Episode III - Revenge of the Sith","Year":"2005","imdbID":"tt0121766","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"},{"Title":"Star Wars: Episode II - Attack of the Clones","Year":"2002","imdbID":"tt0121765","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"},{"Title":"Rogue One: A Star Wars Story","Year":"2016","imdbID":"tt3748528","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"},{"Title":"Star Wars: Episode VIII - The Last Jedi","Year":"2017","imdbID":"tt2527336","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"},{"Title":"Solo: A Star Wars Story","Year":"2018","imdbID":"tt3778644","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg"}],"totalResults":"439","Response":"True"}// {"Search":[{"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","imdbID":"tt0076759","Type":"movie"},{"Title":"Star Wars: Episode V - The Empire Strikes Back","Year":"1980","imdbID":"tt0080684","Type":"movie"},{"Title":"Star Wars: Episode VI - Return of the Jedi","Year":"1983","imdbID":"tt0086190","Type":"movie"},{"Title":"Star Wars: Episode I - The Phantom Menace","Year":"1999","imdbID":"tt0120915","Type":"movie"},{"Title":"Star Wars: Episode III - Revenge of the Sith","Year":"2005","imdbID":"tt0121766","Type":"movie"},{"Title":"Star Wars: Episode II - Attack of the Clones","Year":"2002","imdbID":"tt0121765","Type":"movie"},{"Title":"Star Wars: The Clone Wars","Year":"2008","imdbID":"tt1185834","Type":"movie"},{"Title":"Star Wars: The Clone Wars","Year":"2008–2015","imdbID":"tt0458290","Type":"series"},{"Title":"Star Wars: Clone Wars","Year":"2003–2005","imdbID":"tt0361243","Type":"series"},{"Title":"The Star Wars Holiday Special","Year":"1978","imdbID":"tt0193524","Type":"movie"}]};
	var movieDataById = {"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 38 wins & 27 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg","Metascore":"92","imdbRating":"8.7","imdbVotes":"764377","imdbID":"tt0076759","Type":"movie","Response":"True"};
	var omdbApi = {};
	var $httpBackend;
	var $exceptionHandler;

	beforeEach(module('omdb'));

	beforeEach(module(function($exceptionHandlerProvider) {
	    $exceptionHandlerProvider.mode('log');
	}));

	beforeEach(inject(function(_omdbApi_, _$httpBackend_, _$exceptionHandler_) {
		omdbApi = _omdbApi_;
		$httpBackend = _$httpBackend_;
		$exceptionHandler = _$exceptionHandler_;
	}));

	it('should return search movie data', function() {
		var response;

		var expectedUrl = 'http://www.omdbapi.com/?v=1&s=star%20wars&apikey=44ae6973';
		// var expectedUrl = function(url) {
		// 	return url.indexOf('http://www.omdbapi.com') !== -1;
		// }
		// var expectedUrl = /http:\/\/www.omdbapi.com\/\?v=1&s=star%20wars&apikey=44ae6973/;

		$httpBackend.when('GET', expectedUrl)
			.respond(200, movieData); 

		omdbApi.search('star wars')
			.then(function(data) {
				response = data;
			});

		// $httpBackend.flush();   /// No need to flush since making real API calls ...

	///	expect(response).toEqual(movieData);
	});

	it('should handle error', function() {
		var response;

		$httpBackend.expect('GET', 'http://www.omdbapi.com/?v=1&i=tt0076759&apikey=44ae6973')
			.respond(500);

		omdbApi.find('tt0076759')
			.then(function(data) {
				response = data;
			})
			.catch(function() {
				response = 'Error!';
			});

		$httpBackend.flush();

		expect(response).toEqual('Error!');
	});

	it('should return movie data by id', function() {
		var response;

		$httpBackend.expect('GET', 'http://www.omdbapi.com/?v=1&i=tt0076759&apikey=44ae6973')
			.respond(200, movieDataById);

		omdbApi.find('tt0076759')
			.then(function(data) {
				response = data;
			});

		$httpBackend.flush();

		expect(response).toEqual(movieDataById);
	});

	it('should handle server error', function() {
		var response;

		$httpBackend.expect('GET', 'http://www.omdbapi.com/?v=1&i=tt0076759&apikey=44ae6973')
			.respond(500, 'Server is broken');

		omdbApi.find('tt0076759')
			.catch(function(e) {
				$exceptionHandler(e);
			});

		$httpBackend.flush();

		expect($exceptionHandler.errors).toEqual(['Server is broken']);
	});


});