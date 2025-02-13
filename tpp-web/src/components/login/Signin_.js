import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import Validation from './SingupValidation';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

export default function Signin() {

  const [value, setValues] = useState({
    username: "",
    password: ""

  })

  const handleInput = (even) => {
    setValues(prev => ({ ...prev, [even.target.name]: [even.target.value] }))
  }

  const navigate = useNavigate();
  const [errors, serErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    serErrors(Validation(value));
    if (errors.username === "" && errors.password === "") {
      axios.post('http://localhost:8080/signin', value)
        .then(res => {
          console.log(res)
          if (res.data === "success") {
            navigate('/home');
          } else {
            alert("ไม่พบข้อมูล");
          }

        })
        .catch(err => console.log(err));
    }
  }
  return (
    <> 
        <Card className='w-50 center'>
          <Card.Body>
            <h3 className='text-center mb-2'>Sign In</h3>

            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>User name</Form.Label>
                <Form.Control type='text' id="username" name="username" onChange={handleInput}></Form.Control>
                {errors.username && <span className='text-danger'>{errors.username}</span>}
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' id="password" name="password" onChange={handleInput}></Form.Control>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </Form.Group>
              <Button type='submit' className='w-100 mt-2'>Sign In</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
        <Link to="/signup" type='submit' className='w-100 mt-2'>Register</Link>
        </div>
     
    </>
  );
}