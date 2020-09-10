-- CREATE DATABASE parking;
-- USE parking;

-- DROP TABLE IF EXISTS parkingspaces;

-- CREATE TABLE users (
--     id int NOT NULL AUTO_INCREMENT,
--     firstname varchar(100) NOT NULL,
--     lastname varchar(100) NOT NULL,
--     email varchar(100) NOT NULL,
--     password varchar(100) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE guests (
--     id int NOT NULL AUTO_INCREMENT,
--     firstname varchar(100) NOT NULL,
--     lastname varchar(100) NOT NULL,
--     email varchar(100) NOT NULL,
--     password varchar(100) NOT NULL,
--     userID INT,
--     PRIMARY KEY (id),
--     FOREIGN KEY (userID) REFERENCES users(id)
    
-- );

-- CREATE TABLE managers (
--     id int NOT NULL AUTO_INCREMENT,
--     firstname varchar(100) NOT NULL,
--     lastname varchar(100) NOT NULL,
--     email varchar(100) NOT NULL,
--     password varchar(100) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE parkingspaces (
--     id int NOT NULL AUTO_INCREMENT,
--     PRIMARY KEY (id),
--     parkinglotsID INT,
--     FOREIGN KEY (parkinglotsID) REFERENCES parkinglots(id)
-- );
-- CREATE TABLE parkinglots (
--     id int NOT NULL AUTO_INCREMENT,
--     street varchar(100) NOT NULL,
--     city varchar(100) NOT NULL,
--     state varchar(100) NOT NULL,
--     postalcode INT,
--     country varchar(100) NOT NULL,
--     managerID INT,

--     totalspaces INT,
--     availablespaces INT,
--     floorlevels INT,

--     PRIMARY KEY (id),
--     FOREIGN KEY (managerID) REFERENCES managers(id)
-- );



-- DROP TABLE IF EXISTS parkinglots;
-- SET FOREIGN_KEY_CHECKS=0; DROP TABLE parkinglots; SET FOREIGN_KEY_CHECKS=1;