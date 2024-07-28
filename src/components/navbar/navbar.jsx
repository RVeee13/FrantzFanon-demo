import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
import { Menu } from 'lucide-react'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const NavBar = () => {
  const { height, width } = useWindowDimensions();
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="primary-container">
      <Link to={"/"} className="logo">EHS Frantz Fanon</Link>
      <div className="navbar-toggle" onClick={()=>setMenuOpened(!menuOpened)}>
        <Menu height={48} width={48} color='#1E3E58' />
      </div>
      <div className={menuOpened ? "navbar-container opened" : "navbar-container"}>
        <ul className="navbar">
          <li><NavLink onClick={()=>setMenuOpened(false)} to={"/"}>Accueil</NavLink></li>
          <li><NavLink onClick={()=>setMenuOpened(false)} to={"/a-propos"}>A propos</NavLink></li>
          <li><NavLink onClick={()=>setMenuOpened(false)} to={"/services"}>Services</NavLink></li>
        </ul>
        <Link onClick={()=>setMenuOpened(false)} to={"/contactez-nous"} style={{ textDecoration: "none" }}>
          <div className="navbar-contact-button-container">
            Contactez Nous
          </div>
        </Link>
      </div>
    </div>
  )
}
