import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SingupValidation';
import axios from 'axios';
import BackgroundImage from "../../assets/images/background.png";
import Logo from "../../assets/images/logo.png";

export default function Signup() {
  const [value, setValues] = useState({
    username: "",
    password: ""

  })

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleInput = (even) => {
    setValues(prev => ({ ...prev, [even.target.name]: [even.target.value] }))
  }

  const navigate = useNavigate();
  const [errors, serErrors] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    //await delay(500);
    console.log(errors);
    serErrors(Validation(value));
    if (errors.username !== "" && errors.password !== "") {
      axios.post('http://localhost:8080/signup', value)
        .then(res => {
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
      <div
        className="sign-in__wrapper"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >

        {/* Overlay */}
        <div className="sign-in__backdrop"></div>
        {/* Form */}

        <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
          {/* Header */}
          <img
            className="img-thumbnail mx-auto d-block mb-2"
            src={Logo}
            alt="logo"
          />
          <div className="h4 mb-2 text-center">Sign Up</div>
          {/* ALert */}
          {show ? (
            <Alert
              className="mb-2"
              variant="danger"
              onClose={() => setShow(false)}
              dismissible
            >
              Incorrect username or password.
            </Alert>
          ) : (
            <div />
          )}
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
          <Button type='submit' className='w-100 mt-2'>Sign up</Button>
        </Form>


      </div>
    </>);
}