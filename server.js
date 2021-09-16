const db = require("./db/connection");
let inquirer = require("inquirer");
const {getTable, createDepartment, createRole, createEmployee, changeEmployeeRole} = require("./utils/routes")

const employees = `SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, roles.salary AS salary,
                    departments.name AS department, manager.first_name AS manager_first_name, manager.last_name AS manager_last_name
                    FROM employees
                    LEFT JOIN roles ON employees.role_id = roles.id
                    LEFT JOIN departments ON roles.department_id = departments.id
                    LEFT JOIN employees manager ON manager.id = employees.manager_id`

const departments = 'SELECT * FROM departments';

const roles = `SELECT roles.*,
                departments.name AS department_assigned
                FROM roles
                LEFT JOIN departments ON roles.department_id = departments.id`;

function mainMenu(){
  inquirer
    .prompt({
    type: "list",
    name: "options",
    message: "what would you like to do?",
    choices:
      [
        "Veiw all employees",
        "Veiw departments",
        "Veiw roles",
        "Add Employee",
        "Add department",
        "Add role",
        "Update employee's role"
      ]
    })
  .then(async answer=>{
    switch(answer.options){
      case "Veiw all employees":
        console.table(await getTable(employees));
        break;
      case "Veiw departments":
        console.table(await getTable(departments));
        break;
      case "Veiw roles":
        console.table(await getTable(roles));
        break;
      case "Add Employee":
        await createEmployee();
        break;
      case "Add department":
        await createDepartment();
        break;
      case "Add role":
        await createRole();
        break;
      case "Update employee's role":
        await changeEmployeeRole();
        break;
    };
    mainMenu();
  });
};

mainMenu();

