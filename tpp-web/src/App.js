import React from 'react'
import "./styles.css";
import { Container } from 'react-bootstrap';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './components/login/Signin';
import Signup from './components/login/Signup';

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <div className="flex">

      <Navbar />
      <Routes>
        <Route path="/" exact element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>

    </div>

    /*
    <Routes>
      <Route path='/' element={<Signin />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
*/


  );
}
