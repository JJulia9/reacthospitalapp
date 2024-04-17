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
import Appointments from './components/Appointments';
import StoryBoard from './pages/shared/StoryBoard';
import ProfileCard from './components/ProfileCard';










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
          <Route path="/departmentPage" element={<DepartmentPage />} />
          <Route path="/amusement" element={<Amusement />} />

          <Route path="/appointments" element={<Appointments />} />

          
          <Route path="/storyBoard/:name" element={<StoryBoard />} />

          <Route path="/profileCard/:id" component={ProfileCard} />

      

      
        </Routes>
      
        </main>
    </Router>
  );
};

export default App;




