
const db = require("./db/connection");
let inquirer = require("inquirer");
const getTable = require("./utils/get_tables")
let departmentChoice = [];
let managerChoices = [];
let roleChoices = [];
const employees = `SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id AS manager,
                    roles.title AS role, roles.salary AS salary, departments.name AS department
                    FROM employees
                    LEFT JOIN roles ON employees.role_id = roles.id
                    LEFT JOIN departments ON roles.department_id = departments.id`
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
  .then( answer=>{
    switch(answer.options){
      case "Veiw all employees":
        new async function(){
          await console.table(getTable(employees));
          mainMenu();
        }
        break;
      case "Veiw departments":
        console.table(getTable(departments));
        mainMenu();
        break;
      case "Veiw roles":
        getTable(roles)
        mainMenu();
        break;
      case "Add Employee":
        break;
      case "Add department":
        createDepartment();
        break;
      case "Add role":
        createRole();
        break;
      case "Update employee's role":
        break;
    };
  });
};



function getDepts(){
  db.query("SELECT * FROM departments",(err, data)=>{
    if(err)throw err;
    for(i=0; i< data.length; i++){
      departmentChoice.push(data[i].id+"-"+data[i].name)
    }
  })
}

function createRole(){
  getDepts()
  inquirer.prompt([
    {
      name: "role",
      type:"input",
      message:"enter name of role:"
    },
    {
      name: "dept",
      type: "list",
      message: "what is the roles department?",
      choices: departmentChoice
    },
    {
      name:"salary",
      type:"number",
      message:"enter salary"
    },
    {
      name:"desc",
      type:"input",
      message:"add short description"
    },
  ]).then(answer=>{
    var getDeptId = answer.dept.split("-")
    db.query(`INSERT INTO roles(title, salary, department_id, description)
              VALUES('${answer.role}', '${answer.salary}', '${getDeptId[0]}', '${answer.desc}')`,
              err=>{
                if(err) throw err
                console.log(`added ${answer.role} to roles`)  
    });
    mainMenu();
  });
};
function createDepartment(){
  inquirer.prompt({
    name:"dept",
    type:"input",
    message:"Enter new department:"
  }).then(answer=>{
    db.query(`INSERT INTO departments(name) VALUES('${answer.dept}')`);
    console.log(`element created ${answer.dept}`)
    mainMenu();
  });
};

mainMenu();

