
DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badmovies;

use badmovies;

CREATE TABLE favorites (
	id int NOT NULL,
	poster_path varchar(200),
	title varchar(200) NOT NULL,
	release_date varchar(200),
	vote_average int NOT NULL,
	PRIMARY KEY (ID)
); 
