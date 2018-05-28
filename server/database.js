const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

// module.exports = {
//   host: 'localhost',
//   user: 'root', 
//   password: '', 
//   database: 'badmovies',
//   API_KEY: 'c3013f80cc7cb069f379b2d2fddeda36',
// };


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});



const getAllFavorites = function(callback) {
  
};

const saveFavorite = function(callback) {
  // save movie to favorites in the database
};

const deleteFavorites = function(callback) {
  // delete a movie from favorites in the database
};




module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorites
};



