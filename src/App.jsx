import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/shared/Login';
import Register from './pages/shared/Register';
import Home from './pages/shared/Home';
import './App.css';
import DashboardParent from './pages/parent/DashboardParent';
import DashboardUser from './pages/user/DashboardUser';
import Contact from './pages/shared/Contact';
import DepartmentPage from './pages/shared/Department';
import Amusement from './pages/user/Amusement';
import Navigation from './components/Navigation';









function App() {
  return (

    <Router>
     

<Navigation />





        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboardparent" element={<DashboardParent />} />
          <Route path="/dashboarduser" element={<DashboardUser />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/departmentPage" element={<DepartmentPage />} />
          <Route path="/amusement" element={<Amusement />} />

          
       
         
       

          
        </Routes>
        </main>
    </Router>
  );
};

export default App;




