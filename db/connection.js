const mysql = require('mysql2');
//a function to create a conection to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',

        password: 'password',
        database: 'employees'
    },
    console.log('Connected to the employee database'),
);

module.exports = db;