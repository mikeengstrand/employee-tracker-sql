DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(30) UNIQUE NOT NULL,
    lname VARCHAR(30) UNIQUE NOT NULL,
    role_id VARCHAR(30) UNIQUE NOT NULL,
    -- manager_id VARCHAR(30) UNIQUE NOT NULL
    -- may need to make manager.id null for non managers?
);

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

