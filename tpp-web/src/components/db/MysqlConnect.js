
//const express = require('express');
//const app = express();
//const mysql = require('mysql2/promise');
const mysql = require('mysql2');
//const mysql = require('mysql');
//const cors = require('cors');
//import mysql from 'mysql2/promise'; 

//app.use(cors());
//app.use(express.json());

/*const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '5WV3gxFHzJ',
  database: 'smms'
});*/

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '5WV3gxFHzJ',
  database: 'tpp_test' 
});
module.exports = db;
/*
db.execute('SELECT * FROM tb_location where Id > ?',[1],(err,reault,fields) =>{
  console.log(err);
  console.log(reault);
  console.log(reault);
});*/
 /*
db.query('SELECT * FROM user',(err,reault,fields) =>{
  console.log(err);
  console.log(reault);
  console.log(fields);
});*/

 
/*
async function main() {
  try {
    // Connect to the database using promises
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '5WV3gxFHzJ',
      database: 'smms'
    });

    console.log('Connected to MySQL Database!');

    // Execute a query using promise
    const [rows, fields] = await connection.execute('SELECT * FROM users');
    console.log('Query Result:', rows);

    // Close the connection
    await connection.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
*/
