import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/shared/Login';
import Register from './pages/shared/Register';
import Home from './pages/shared/Home';
import './App.css';
import DashboardParent from './pages/parent/Dashboard';
import DashboardUser from './pages/user/Dashboard';
import Contact from './pages/shared/Contact';








function App() {
  return (

    <Router>
     
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboardparent" element={<DashboardParent />} />
          <Route path="/dashboarduser" element={<DashboardUser />} /> 
          <Route path="/contact" element={<Contact />} />
          
       
         
       

          
        </Routes>
        </main>
    </Router>
  );
};

export default App;




