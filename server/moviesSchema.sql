
CREATE DATABASE badmovies;

use badmovies;

CREATE TABLE favorites (
	id int NOT NULL AUTO_INCREMENT ,
	userid int NOT NULL , 
	genre varchar(200)  NOT NULL,
	movie varchar(100) NOT NULL, 
	PRIMARY KEY (ID)
); 
