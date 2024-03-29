// this file handles database

const inquirer = require("inquirer");
// importing MySQGL already connected to database
const connection = require("../config/connection");

/*
  We are making use of a mysql2 method called promise() which allows us to 
  perform our database query asynchronously. This means we don't need to use
  .then() blocks or callback functions, which makes it much easier run the queries 
  and return values from them.
*/



function listAllDepartments(){
  // get back results imediately without needing a then block or call back function using .promise().query() and allow it to return it right back where it came from
  return connection.promise().query("SELECT department.id, department.name FROM department;");
}

function listAllRoles(){
  return connection.promise().query("SELECT role.title, role.salary, department_id FROM role;");
}

function listAllEmployees(){
  return connection.promise().query("SELECT employee.fname, employee.lname, employee.role_id, employee.manager_id FROM employee;");
}


// adding dept
function addDepartments(name){
  return connection.promise().query(`INSERT INTO department(name) VALUES ("${name}");`);
}

// adding roles  (do we need to do something diff with ID, or exclude it?)
function addRoles(title, salary, department_id){
  return connection.promise().query(`INSERT INTO role(title, salary, department_id) VALUES ("${title}", "${salary}, "${department_id}");`);
}

function addEmployees(fname, lname, role_id, manager_id){
  return connection.promise().query(`INSERT INTO employee (fname, lname, role_id, manager_id) VALUES ("${fname}", "${lname}, "${role_id}", "${manager_id}");`);
}


// need coma after each item, dont forget to add as necessary as you uncomment functions
module.exports = {
  listAllDepartments,
  listAllRoles,
  listAllEmployees,
  addDepartments,
  addRoles,
  addEmployees
}