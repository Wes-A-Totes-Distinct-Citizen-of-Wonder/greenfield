DROP DATABASE IF EXISTS trashPanda;

CREATE DATABASE IF NOT EXISTS trashPanda;

USE trashPanda;

CREATE TABLE IF NOT EXISTS users (
  userId INT AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  password varchar(200) NOT NULL,
  email varchar(50) NOT NULL,
  business varchar(255),
  PRIMARY KEY (userId)
);

CREATE TABLE IF NOT EXISTS posts (
  postId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text varchar (255), 
  img1 varchar (255) NOT NULL,
  title varchar (50),
  location varchar (255),
  tagList varchar (150),
  lumber BOOLEAN,
  metal BOOLEAN,
  concrete BOOLEAN,
  glass BOOLEAN,
  piping BOOLEAN,
  userId INT,
  postNum INT DEFAULT 0,
  FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE IF NOT EXISTS postCount (
  count INT DEFAULT 0,
  userId INT,
  FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE IF NOT EXISTS messages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  subject varchar(200) NOT NULL,
  content varchar(255) NOT NULL,
  recepient INT NOT NULL,
  sender INT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (recepient) REFERENCES users(userId),
  FOREIGN KEY (sender) REFERENCES users(userId)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables. */