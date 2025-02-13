import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as FaIcons from "react-icons/fa";
import { Card, Form, Button, Table } from 'react-bootstrap';
export default function Home() {

  const [data, setData] = useState([]);
  //http://localhost:8080/getUser  
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


  const handleDelete = (id) => {
    axios
      .post('http://localhost:8080/deleteusers', [id])
      .then(() => {
        alert("ลบข้อมูลสำเร็จ!");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (id) => {
     alert("edit item id = " + id)
  };

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>Password</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(item => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.user_name}</td>
                  <td>{item.password}</td>
                  <td>
                    <span>
                      <Button className='btn btn-danger' onClick={() => handleDelete(item.id)}>ลบ</Button>
                    </span>
                    <span>
                      <Button className='btn btn-success  p-2' onClick={() => handleEdit(item.id)}>แก้ไข</Button>
                    </span>

                  </td>
                </tr>
              ))}

          </tbody>
        </Table>

      </div>
    </>
  );
}
