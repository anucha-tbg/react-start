const express = require('express');
//const mysql = require('mysql');
const mysql = require('mysql2');
//const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');
 

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
 
const db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "5WV3gxFHzJ",
  database: "tpp_test"
});


app.post('/signup', (req, res) => {
  console.log("signup", req.body)
  const username = req.body.username;
  const password = req.body.password;
  db.query("INSERT INTO user(user_name,password) VALUES(?,?)", [username, password], (err, data) => {
    if (err) {
      console.log(err)
    } else {
      return res.json("success");
      //res.send({ username: username })
    }
  })
})

app.post('/signin', (req, res) => {
  //const username = req.body.username;
  //const password = req.body.password;
  const username = req.body[0];
  const password = req.body[1];
  console.log(req.body[0])
  db.query("SELECT * FROM user where user_name = ? and password= ? ", [username, password], (err, data) => {
    if (err) {
      console.log(err)
      return res.json(err);
    }

    if (data.length > 0) {
      console.log(data)
      return res.json("success");
    } else {
      return res.json("false");
    }
  })
})

app.get('/getUser', (req, res) => {
  console.log("getUser")
  db.query("SELECT * FROM user ", (err, data) => {
    if (err) {
      console.log(err)
      return res.json(err);
    }
    if (data.length > 0) {
      console.log(data)
      return res.json(data);
    } else {
      return res.json("false");
    }
  })
})

// ลบข้อมูล
app.post('/deleteusers', (req, res) => {
  console.log(req.body)
  const id = req.body[0];
  db.query("DELETE FROM user WHERE id=?", [id], (err, result) => {
    if (err) {
      res.status(500).json(err);
      console.log(err)
    }
    else res.json({ message: "✅ ลบข้อมูลสำเร็จ!" });
  });
});
app.listen(8080, () => {
  console.log("web listening port 8080");
});

