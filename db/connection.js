const mysql = require('mysql2');

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