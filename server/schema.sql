DROP DATABASE IF EXISTS trashPanda;

CREATE DATABASE trashPanda;

USE trashPanda;

CREATE TABLE users (
  userId INT AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  password varchar(25) NOT NULL,
  email varchar(50) NOT NULL,
  business varchar(255),
  PRIMARY KEY (userId)
);

CREATE TABLE posts (
  postId INT AUTO_INCREMENT,
  img1 varchar (255) NOT NULL,
  title varchar (25),
  text varchar (255),
  tags varchar (100),
  address varchar (255),
  city varchar (100),
  state varchar (25),
  zip int,
  geolocationLat varchar(100),
  geolocationLng varchar (100),
  postNum INT DEFAULT 0,
  userId INT,
  PRIMARY KEY (postId),
  FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE postCount (
  count INT DEFAULT 0,
  userId INT,
  PRIMARY KEY (count),
  FOREIGN KEY (userId)
  REFERENCES users(userId)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables. */