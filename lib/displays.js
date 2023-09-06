// this file does all the output to display items on screen

const inquirer = require("inquirer");

// function displayAllEmployees(data){
//   console.log("\n");
//   console.table(data);
// }

function displayAllDepartments(data){
  // line break
  console.log("\n");
  // console.log(data)
  // this gives us a table in node with our data
  console.table(data);
}

module.exports = {
  displayAllDepartments
  // displayAllEmployees
}