// this file does all the output to display items on screen

const inquirer = require("inquirer");

function displayAllDepartments(data){
  // line break
  console.log("\n");
  // console.log(data)
  // this gives us a table in node with our data
  console.table(data);
}

function displayAllRoles(data){
  console.log("\n");
  console.table(data);
}

function displayAllEmployees(data){
  console.log("\n");
  console.table(data);
}

// function displayAddDepartment(data){
//   console.log("\n");
//   console.table(data);
// }

// function displayAddRole(data){
//   console.log("\n");
//   console.table(data);
// }

// function displayAddEmployee(data){
//   console.log("\n");
//   console.table(data);
// }


// add commas below as you uncomment

module.exports = {
  displayAllDepartments,
  displayAllRoles,
  displayAllEmployees
  // displayAddDepartment
  // displayAddRole
  // displayAddEmployee
}