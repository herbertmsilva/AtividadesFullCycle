CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;

CREATE TABLE IF NOT EXISTS people(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100)
);