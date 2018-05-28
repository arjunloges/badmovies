var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

var apiHelpers = require('./apiHelpers.js');

app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, res) {
	var params = req.query.foo; 
    apiHelpers.searchGenre(params, (response) => {
    	console.log('inside get in server', response.results)
    	res.send(response.results);
    })
});

app.get('/genres', function(req, res) {
    apiHelpers.getGenres((response) => {
      res.send(response.genres);
    })
});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


// var getGenres = function(callback) {
//   var options = {
//     url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${ API_KEY }&language=en-US`,
//     headers: {
//       Authorization: ``
//     }
//   };
//   request.get(options, function (err, response, body) {
//     if (error) throw new Error(error);
//     callback(JSON.parse(body))
//   })
// };
