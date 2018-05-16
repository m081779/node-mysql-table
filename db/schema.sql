DROP DATABASE if exists table_data;
CREATE DATABASE table_data;
USE table_data;
CREATE TABLE table_data(
	id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(20),
	last_name VARCHAR(20),
	home VARCHAR(20)
);
