import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
 
import "./Signin.css";

import BackgroundImage from "../../assets/images/background.png";
import Logo from "../../assets/images/logo.png";

const Signin = () => {
    
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await delay(500);
        console.log(`Username :${inputUsername}, Password :${inputPassword}`);
        /*if (inputUsername !== "admin" || inputPassword !== "admin") {
          setShow(true);
        }
        setLoading(false);*/
        if (inputUsername !== "" && inputPassword !== "") {
            console.log("call api")
            axios.post('http://localhost:8080/signin', [inputUsername,inputPassword])
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
        setLoading(false);
    };

    const handlePassword = () => { };

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
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
                <div className="h4 mb-2 text-center">Sign In</div>
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
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={inputUsername}
                        placeholder="Username"
                        onChange={(e) => setInputUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={inputPassword}
                        placeholder="Password"
                        onChange={(e) => setInputPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="checkbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                {!loading ? (
                    <Button className="w-100" variant="primary" type="submit">
                        Register
                    </Button>
                ) : (
                    <Button className="w-100" variant="primary" type="submit" disabled>
                        Logging In...
                    </Button>
                )}
                 <div className="d-grid justify-content-end">
                    <Link to="/signup" type='submit' className='w-100 mt-2'>Register</Link>
                </div>
                <div className="d-grid justify-content-end">
                    <Button
                        className="text-muted px-0"
                        variant="link"
                        onClick={handlePassword}
                    >
                        Forgot password?
                    </Button>
                </div>
            </Form>
            {/* Footer */}
            <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
                Made by Hendrik C | &copy;2022
            </div>
        </div>
    );
};

export default Signin;