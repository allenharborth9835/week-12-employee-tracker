# week-12-employee-tracker
<img src="https://img.shields.io/badge/license-Unlicensed-blue" alt="Unlicensed">    

  ## Description
   In this project we had to create an employee tracker. It not only tracks employees but also tracks roles and departments. I first start by making the project structure and the initial sql for the database. In the db folder there are three sql files that are used to set up the database. The db file simply creates the database and calls for it to be used. The schema creates all of the tables for the database. The first table created is departments which will hold an id and a name for the specific department. The roles table is created next and an id, a title for that role, a brief description,  a salary for that role, and a department id which will attach the role to a department. The last table that's created is the employees table which contains id, the employees first name, the employees last name, the role of the employee that will attach it to a role, and a manager id that attaches to another employee for the employees manager. The seeds sql will create a few departments, roles, and employees for an example. The last file in the db folder simply creates a connection to be used in the project.  In the utils file I created a routes file that contains all the methods of the projects. The first method takes in an sql argument and returns a table. The next method creates a new department by taking in the department's name. The next method creates a new role. It first gets departments and takes in all the data for the role. The next method creates an employee by collecting roles and employees and then asking the user for the information for the new employee. The last method is the change employee role method. This method lets you select an employee and then allows you to change that employee's roles. The last file of the project is the server. It gathers the resources to include the routes file. I then create the different sql arguments for the different tables that are used to view the employee’s, department’s, and roles. I then create a main menu function that gives the user options on what to do, then I make a switch to attach the functions to the right options. Then at the end I call the main menu to let the user pick another option.

  ## Table of Contents
  * [Installation](#installation)
 * [Usage](#usage)
* [License](#license)

 * [Contact-Info](#contact-info)
## Installation  

Node must be installed please go to https://nodejs.org/en/ to install node.
After node is installed simply type “npm Install” to install all of the necessary packages needed for this project. this program also needs my sql installed from https://dev.mysql.com/downloads/installer/ and intial setup. also be sure to update the connection file in the db folder with your login info and run the sql files in the db folders.

## Usage

This is an employee tracker to start it simply type npm start. After that you will be given a menu to choose from. The first 3 options return the tables of employees, departments, and roles. The next three functions let you create an element for the tables. The last function lets you update the role of an employee.

## License
  <div style="height:300px; width:90%; overflow:auto;">

      This is free and unencumbered software released into the public domain.
    
      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
  </div>
For more information, please refer to https://unlicense.org

## Contact-Info
this project was created by Allen D Harborth  
Github(s)[allenharborth9835](https://github.com/allenharborth9835)

get in contact by sending an email at allenharborth9835@gmail.com