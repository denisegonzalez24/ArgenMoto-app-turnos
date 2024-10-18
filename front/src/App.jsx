// App.jsx
import React from 'react';
import Home from './views/home/Home';
import Appointment from './views/appointment/Appointment';
import Login from './views/login/Login';
import Register from './views/register/Register';
import { Routes, Route } from 'react-router-dom'; // Importar Route
import About from './views/about/About';
import Contact from './views/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Landing from './views/landing/Landing';
import Footer from './components/footer/Footer';
import AppoinmentForm from './components/appoitnmentform/AppointmeentForm';


function App() {
  return (
    <>
      <Navbar /> {/* Si tienes un Navbar, puedes agregarlo aquí */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointmentform" element={<AppoinmentForm />} />
       
        
        
      </Routes>
      <div>
      <Footer /> {Footer}
      </div>
      
    </>
  );
}

export default App;
