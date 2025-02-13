import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SingupValidation';
import axios from 'axios';


export default function Signup() {
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
    if (errors.username !== "" && errors.password !== "") {
      axios.post('http://localhost:8080/signup', value)
        .then(res => {
          if (res.data === "success") {
            navigate('/');
          } else {
            alert("ไม่พบข้อมูล");
          }

        })
        .catch(err => console.log(err));
    }
  }

  return (
    <>
      <div
        className="sign-in__wrapper"
        
      >
        <Card>
          <Card.Body>
            <h3 className='text-center mb-2'>Sign Up</h3>

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
              <Button type='submit' className='w-100 mt-2'>Register</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>

        </div>
      </div>
    </>);
}