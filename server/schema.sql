DROP DATABASE IF EXISTS trashPanda;

CREATE DATABASE trashPanda;

USE trashPanda;


CREATE TABLE users (
  userId INT NOT NULL AUTO_INCREMENT,
  numPosts INT,
  username varchar(50) NOT NULL,
  password varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  business varchar(255),
  PRIMARY KEY (userId)
);

CREATE TABLE posts (
  postId INT NOT NULL AUTO_INCREMENT,
  postText varchar (255), 
  img1 varchar (255) NOT NULL,
  img2 varchar(255),
  img3 varchar(255),
  userId INT,
  PRIMARY KEY (postId),
  FOREIGN KEY (userId) REFERENCES users(userId)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables. */