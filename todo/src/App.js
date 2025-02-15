import React from 'react';
import './App.css';
import Login from './comp/login';
// import Home from './comp/home';
import Navbar from './comp/navbar'; // Adjust the path as necessary
import { Route, Routes } from 'react-router-dom';
import Createtodo from './comp/createtodo';

function App() {
  return (
    <>
      <Navbar />
      <Createtodo/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        
      </Routes>
      
    </>
  );
}

export default App;


