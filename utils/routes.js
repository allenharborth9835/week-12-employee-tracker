const db = require("../db/connection");
let inquirer = require("inquirer");

//array to store options for 
//departments, employees, and roles
let departmentChoice = [];
let employeeChoice = [];
let roleChoice = [];

//a function to return a table after taking in an sql statment
function getTable(sqlArgs){
  return new Promise((Resolve, Reject)=>{
    db.query(sqlArgs, (err, Table, feilds)=>{
      Resolve(Table)
    })
  })
};

//a function to create a new department
function createDepartment(){
  return new Promise((res, rej)=>{
    inquirer.prompt({
      name:"dept",
      type:"input",
      message:"Enter new department:"
    }).then(answer=>{
      db.query(`INSERT INTO departments(name) VALUES('${answer.dept}')`);
      res(console.log(`element created ${answer.dept}`))
    })
  })
}

//a function that collects all the current deptarments as options to choose
function getDepts(){
  db.query("SELECT * FROM departments",(err, data)=>{
    if(err)throw err;
    for(i=0; i< data.length; i++){
      departmentChoice.push(data[i].id+"-"+data[i].name)
    }
  })
}

//a function that collects all the current roles as options to choose
function getRoles(){
  db.query("SELECT * FROM roles",(err, data)=>{
    if(err)throw err;
    for(i=0; i< data.length; i++){
      roleChoice.push(data[i].id+"-"+data[i].title)
    }
  })
}

//a function that collects all the current emplyees as options to choose
function getEmployees(){
  db.query("SELECT * FROM employees",(err, data)=>{
    if(err)throw err;
    for(i=0; i< data.length; i++){
      employeeChoice.push(data[i].id+"-"+data[i].first_name+" "+data[i].last_name)
    }
  })
}

//a function to create a new role
function createRole(){
  return new Promise((res,req)=>{
    getDepts()
    console.log(departmentChoice)
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
      let getDeptId = answer.dept.split("-")
      db.query(`INSERT INTO roles(title, salary, department_id, description)
                VALUES('${answer.role}', '${answer.salary}', '${getDeptId[0]}', '${answer.desc}')`,
                err=>{
                  if(err) throw err
                  res(console.log(`added ${answer.role} to roles`))
      });
    });
  });
};

//a function to create a new employee
function createEmployee(){
  return new Promise((res, req)=>{
    getRoles();
    getEmployees();
    console.log(employeeChoice);
    inquirer.prompt([
      {
        name: "first_name",
        type:"input",
        message:"enter the first name of Employee:"
      },
      {
        name: "last_name",
        type:"input",
        message:"enter the last name of Employee:"
      },
      {
        name: "role",
        type: "list",
        message: "what is the employee's role?",
        choices: roleChoice
      },
      {
        name:"manager",
        type:"list",
        message:"who is the employee's manager?",
        choices: employeeChoice
      }
    ]).then(answer=>{
      let getRole = answer.role.split("-")
      let getEmployee = answer.manager.split("-")
      db.query(`INSERT INTO employees(first_name, last_name, role_id, manager_id)
                VALUES('${answer.first_name}','${answer.last_name}','${getRole[0]}', '${getEmployee[0]}')`,
                err=>{
                  if(err) throw err
                  res(console.log(`added ${answer.last_name}, ${answer.first_name} to employees`))
                })
    })
  })
}

//a function to change employees role
function changeEmployeeRole(){
  return new Promise((res, req)=>{
    getEmployees();
    getRoles();
    console.log(employeeChoice);
    inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "are sure you wish to change an employees role"
      },
      {
        type: "list",
        name: "employee",
        message:"choose the Employee you wish to change",
        choices: employeeChoice,
        when: (answer)=>answer.confirm
      },
      {
        type: "list",
        name: "role",
        message: "what is the employee's new role?",
        choices: roleChoice,
        when: (answer)=>answer.confirm
      }
    ]).then(answer=>{
      if(answer.confirm){
        let getRole = answer.role.split("-")
        let getEmployee = answer.employee.split("-")
        db.query(`UPDATE employees SET role_id = ${getRole[0]}
                  WHERE id = ${getEmployee[0]}`,
                  err=>{
                    if(err) throw err
                    res(console.log(`changed ${getEmployee[1]}'s to ${getRole[1]}`))
                })
      }else{
        res()
      }
    })
  })
}

module.exports = {getTable, createDepartment, createRole, createEmployee, changeEmployeeRole};