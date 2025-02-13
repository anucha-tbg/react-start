const pool = require('../db/MysqlConnect');
 
pool.query('SELECT * FROM user',(err,reault,fields) =>{
    console.log(err);
    console.log(reault);
    console.log(fields);
  });