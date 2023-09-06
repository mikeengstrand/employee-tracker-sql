const inquirer = require("inquirer");
const connection = require("./config/connection");
const { listAllDepartments } = require("./lib/queries")
const { displayAllDepartments } = require("./lib/displays")
/*
  There are a lot of menu items presented to users in this app. The only real way you cam manage them 
  is by creating a function to handle each one.

  I'm giving you a bit of starter code below.
*/ 


// we need to fill in the additional options
function start(){
  inquirer.prompt([
    {   
      type: "list",
      message: "Choose an item from the list below:",
      name: "option", 
      choices: [
        // "List All Employees",
        // "Add Employee",
        // "Update Employee Role",
        "List All Roles",
        "List All Departments",
        // "Add Department"
      ]
    }
  ]).then( response => {
    switch(response.option){
      // case "List All Employees":
      //   // this will go to query.js
      //   listAllEmployees().then( ([rows]) => {
      //     // this will go to display.js
      //     displayAllEmployees(rows);
      //     start();
      //   });
        
      //   break;

      case "List All Departments":
        // this will go to query.js
        listAllDepartments().then( ([rows]) => {
          // this will go to display.js
          displayAllDepartments(rows);
          start();
        });
        
        break;
        


      default:
        start();
    }
  })
}

start();