import './App.css';
import {NavBar} from "./components/navbar/navbar"
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { useEffect, useState } from 'react';
import { ContactUs } from './pages/contactus';
import { AboutUs } from './pages/aboutus';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactez-nous" element={<ContactUs />} />
          <Route path="/a-propos" element={<AboutUs />} />
        </Routes>
    </>
  );
}

export default App;
