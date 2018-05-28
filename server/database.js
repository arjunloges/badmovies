const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);




db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + db.threadId);
});



const getAllFavorites = function(callback) {
  var queryStr = `SELECT * FROM favorites;`
  db.query(queryStr, function(err, results){
    if(err) {
      console.log('ERROR IN DATABASE.JS:', err); 
    }
    callback(results);
  })
};

const saveFavorite = function(movie, callback) {
  var queryStr = `INSERT INTO favorites (id, poster_path, title, release_date, vote_average) VALUES (${movie.id}, '${movie.poster_path}', '${movie.title}', '${movie.release_date}', '${movie.vote_average}');`;
  db.query(queryStr, function(err, results){
   if(err) {
      console.log('ERROR IN DATABASE.JS:', err); 
    }
    callback(results);
  })
};

const deleteFavorites = function(id, callback) {
  var queryStr = `DELETE FROM favorites WHERE id = '${movieID}'`;
  db.query(queryStr, function(err, results){
    if(err) {
      console.log('ERROR IN DATABASE.JS:', err); 
    }
    callback(results);
  })
};




module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorites
};



