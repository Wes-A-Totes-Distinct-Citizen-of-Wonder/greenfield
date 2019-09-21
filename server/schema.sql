-- DROP DATABASE IF EXISTS trashPanda;

CREATE DATABASE IF NOT EXISTS trashPanda;

USE trashPanda;

CREATE TABLE IF NOT EXISTS users (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) NOT NULL,
  password varchar(200) NOT NULL,
  email varchar(50) NOT NULL,
  business varchar(255),
  isHiddenEmail boolean,
);

CREATE TABLE IF NOT EXISTS posts (
  post_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text varchar (255), 
  img1 varchar (255) NOT NULL,
  img2 varchar (255),
  img3 varchar (255),
  title varchar (50),
  location varchar (255),
  tagList varchar (150),
  lumber BOOLEAN,
  metal BOOLEAN,
  concrete BOOLEAN,
  glass BOOLEAN,
  piping BOOLEAN,
  user_id INT,
  postNum INT DEFAULT 0,
  zip INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS postCount (
  count INT DEFAULT 0,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS messages (
  mess_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  subject varchar(200) NOT NULL,
  content varchar(255) NOT NULL,
  recepient_id INT NOT NULL,
  sender_id INT NOT NULL,
  FOREIGN KEY (recepient_id) REFERENCES users(user_id),
  FOREIGN KEY (sender_id) REFERENCES users(user_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables. */