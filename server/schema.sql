DROP DATABASE IF EXISTS trashPanda;

CREATE DATABASE trashPanda;

USE trashPanda;

CREATE TABLE users (
  userId INT AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  password varchar(200) NOT NULL,
  email varchar(50) NOT NULL,
  business varchar(255),
  PRIMARY KEY (userId)
);

CREATE TABLE posts (
  postId INT NOT NULL AUTO_INCREMENT,
  text varchar (255), 
  img1 varchar (255) NOT NULL,
  title varchar (50),
  location varchar (255),
  tags varchar (300),
  postNum INT DEFAULT 0,
  userId INT,
  PRIMARY KEY (postId),
  FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE postCount (
  count INT DEFAULT 0,
  userId INT,
  FOREIGN KEY (userId)
  REFERENCES users(userId)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables. */