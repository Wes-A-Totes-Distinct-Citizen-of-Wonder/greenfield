CREATE DATABASE trashPanda;

USE trashPanda;


CREATE TABLE users (
  userId int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  password varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  business varchar(255),
  PRIMARY KEY (userId)
);

CREATE TABLE posts (
  postId int NOT NULL AUTO_INCREMENT,
  text varchar NOT NULL (255), 
  img1 varchar NOT NULL (255),
  img2 varchar(255),
  img3 varchar(255),
  PRIMARY KEY (postId),
  FOREIGN KEY (user_id) REFERENCES users(userId)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables. */