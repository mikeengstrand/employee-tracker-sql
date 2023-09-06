DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary INT NOT NULL,
  department_id INT NOT NULL
);

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(30) UNIQUE NOT NULL,
    lname VARCHAR(30) UNIQUE NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
    -- may need to make manager.id null for non managers?
);


