
const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../server/config.js');


// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover

// Don't forget to export your functions and require them within your server file/

var getGenres = function(callback) {
  var options = {
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${ API_KEY }&language=en-US`,
    headers: {
      Authorization: ``
    }
  };
  request.get(options, function(err, data) {
    if (err) console.log('error in apihelper', err);
     // console.log('data from genGenres is: ',data)

    callback(JSON.parse(data.body))
  })
};


var searchGenre = function(genre, callback) {
  
  var options = { 
	  url: `https://api.themoviedb.org/3/discover/movie?api_key=${ API_KEY }&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${ genre }`,
	  headers: {
	  	Authorization:``
	  }
	};

	request.get(options, function (error, data) {
	  if (error) throw new Error(error);
	  callback(JSON.parse(data.body));
	});
};

// module.exports.getGenres;
// module.exports.searchGenre;
module.exports = {getGenres, searchGenre};

