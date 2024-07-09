import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/navbar/navbar"
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import {motion, useInView, useAnimation, useIsPresent} from "framer-motion"
import { useEffect, useRef } from 'react';
import { ContactUs } from './pages/contactus';

function App() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
   const mainControls = useAnimation()

  useEffect(()=>{
    console.log(isInView)
    if(isInView){
      mainControls.start("visible")
    }
  }, [isInView]);

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactez-nous" element={<ContactUs />} />
        </Routes>
    </>
  );
}

export default App;
