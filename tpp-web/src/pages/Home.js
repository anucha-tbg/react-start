import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as FaIcons from "react-icons/fa";
import { Card, Form, Button, Table } from 'react-bootstrap';
export default function Home() {

  const [data, setData] = useState([]);


  //http://localhost:8080/getUser
  var getUser = []
  console.log("Home")

  useEffect(() => {
    axios.get('http://localhost:8080/getUser')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log("data", data)
  return (
    <>
      <div className="Home">
        <h1>Home</h1>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(item => ( 
                <tr>
                  <td>{item.id}</td>
                  <td>{item.user_name}</td>
                  <td>{item.password}</td> 
                </tr>
              ))} 

          </tbody>
        </Table>

      </div>
    </>
  );
}
