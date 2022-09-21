DROP DATABASE junkyarddb;

CREATE DATABASE junkyarddb WITH template=template0;
\connect junkyarddb;

ALTER DEFAULT PRIVILEGES GRANT ALL ON tables TO postgres;
ALTER DEFAULT PRIVILEGES GRANT ALL ON sequences TO postgres;

CREATE TABLE USERS (
id INTEGER PRIMARY KEY NOT NULL,
name VARCHAR(50) not null,
phone_number VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL,
password text NOT NULL
);

CREATE SEQUENCE users_seq increment 1 start 1;


CREATE TABLE GARAGES(
id INTEGER PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
image_url VARCHAR(200),
address1 VARCHAR(100) NOT NULL,
address2 VARCHAR(100),
city VARCHAR(20) NOT NULL,
country VARCHAR(20) NOT NULL,
postcode INTEGER NOT NULL,
description VARCHAR(500) NOT NULL,
userID INTEGER REFERENCES USERS(id)
);

CREATE SEQUENCE garage_seq increment 1 start 1;

CREATE TABLE COMMENT(
id INTEGER PRIMARY KEY NOT NULL,
content VARCHAR(200) NOT NULL,
garageID INTEGER REFERENCES GARAGES(id),
userID INTEGER REFERENCES USERS(id)
);

