import React from 'react'
import "./styles.css";
import { Container } from 'react-bootstrap';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './components/login/Signin';
import Signup from './components/login/Signup';
import Home1 from './components/home/Home';

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/signin" element={<Signin />} />
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
