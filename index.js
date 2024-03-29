const inquirer = require("inquirer");
const connection = require("./config/connection");
const { listAllDepartments, listAllRoles, listAllEmployees, addDepartments, addRoles } = require("./lib/queries")

const { displayAllDepartments, displayAllRoles, displayAllEmployees } = require("./lib/displays")
/*
  There are a lot of menu items presented to users in this app. The only real way you cam manage them 
  is by creating a function to handle each one.

  I'm giving you a bit of starter code below.
*/ 


// uncomment each option below after you succesfully get the one above it to work
function start(){
  inquirer.prompt([
    {   
      type: "list",
      message: "Choose an item from the list below:",
      name: "option", 
      choices: [
        "List All Departments",
        "List All Roles",
        "List All Employees",
        "Add Employee",
        "Add Role",
        "Add Department"
      ]
    }
  ]).then( response => {
    switch(response.option){
      case "List All Departments":
        // this will go to query.js
        listAllDepartments().then( ([rows]) => {
          // this will go to display.js
          displayAllDepartments(rows);
          start();
        });
        
        break;

      case "List All Roles":
        listAllRoles().then( ([rows]) => {
          displayAllRoles(rows);
          start();
        });
        
        break;

      case "List All Employees":
        listAllEmployees().then( ([rows]) => {
          displayAllEmployees(rows);
          start();
        });
        
        break;


      case "Add Department":
        addDepartment()

        break;

      case "Add Role":
        addRole()

        break;

        case "Add Employee":
          addEmployee()
  
          break;
       
      // case "Add Role":
      //   addRole().then( ([rows]) => {
      //     displayAddRole(rows);
      //     start();
      //   });
        
      //   break;

      // case "Add Employees":
      //   addEmployee().then( ([rows]) => {
      //     displayAddEmployee(rows);
      //     start();
      //   });
        
      //   break;

        



      default:
        start();
    }
  })
}

function addDepartment(){
  inquirer.prompt([
    {   
      type: "input",
      message: "What is the name of the new department?:",
      name: "newDepartment"
    }
  ]).then( response => {
    addDepartments(response.newDepartment).then(()=> {
      listAllDepartments().then( ([rows]) => {
        displayAllDepartments(rows);
        start();
    })
    })
  })
}
/////////////
function addRole(){
  inquirer.prompt([
    {
      type: "input",
      message: "What is the title of the new role?:",
      title: "newTitle",
      name: "addTitle", 
    },
    {
      type: "input",
      message: "What is the salary of the new role?:",
      salary: "newSalary",
      name: "addSalary"
    },
    {
      type: "input",
      message: "What is the department ID of the new role?:",
      department_id: "newDepartment_id",
      name: "addDept"
    }
  ]).then( response => {
    addRoles(response.newRole).then(()=> {
      listAllRoles().then( ([rows]) => {
        displayAllRoles(rows);
        start();
    ////////////////////////////////////////    
    })
    })
  })
}

////////////////////////
function addEmployee(){
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employees first name??:",
      title: "newFNAme",
      name: "addFName", 
    },
    {
      type: "input",
      message: "What is the last name of the employee?:",
      salary: "newLName",
      name: "addLName"
    },
    {
      type: "input",
      message: "What is the Role ID for the new employee?:",
      department_id: "newRole_id",
      name: "addNewRole_id"
    },
    {
      type: "input",
      message: "What is the Manager ID for the new employee?:",
      department_id: "newManager_id",
      name: "addNewRole_id"
    }
  ]).then( response => {
    addEmployees(response.newEmployee).then(()=> {
      listAllEmployees().then( ([rows]) => {
        displayAllEmployees(rows);
        start();
      })
    })
  })
}


start();