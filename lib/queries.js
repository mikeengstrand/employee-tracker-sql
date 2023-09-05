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


module.exports = {
  listAllDepartments
}