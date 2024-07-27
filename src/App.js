import './App.css';
import {NavBar} from "./components/navbar/navbar"
import { Route, Routes } from 'react-router-dom';
import { Services } from './pages/services';
import { Home } from './pages/home';
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
          <Route path="/services" element={<Services />} />
        </Routes>
    </>
  );
}

export default App;
