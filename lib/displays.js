// this file does all the output to display items on screen

const inquirer = require("inquirer");


function displayAllDepartments(data){
  console.log("\n");
  console.table(data);
}

module.exports = {
  displayAllDepartments
}