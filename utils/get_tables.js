const db = require("../db/connection");

function getTable(sqlArgs){
  new Promise((Resolve, Reject)=>{
    db.query('SELECT * FROM departments', (err, Table, feilds)=>{
      console.log(Table)
      Resolve(console.table(Table))
    })
  })
};

module.exports = getTable;