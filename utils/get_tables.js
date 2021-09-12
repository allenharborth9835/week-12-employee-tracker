const db = require("../db/connection");

function getTable(sqlArgs){
  new Promise((Resolve, Reject)=>{
    db.query('SELECT * FROM departments', (err, Table, feilds)=>{
      Resolve("\n\n"+Table)
    })
  })
};

module.exports = getTable;