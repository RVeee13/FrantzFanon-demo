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
      <div className="logo">Frantz Fanon</div>
      <div className="navbar-toggle" onClick={()=>setMenuOpened(!menuOpened)}>
        <Menu height={48} width={48} color='#1E3E58' />
      </div>
      <div className={menuOpened ? "navbar-container opened" : "navbar-container"}>
        <ul className="navbar">
          <li><NavLink to={"/"}>Accueil</NavLink></li>
          <li><NavLink to={"/about"}>A propos</NavLink></li>
          <li><NavLink to={"/services"}>Services</NavLink></li>
          <li><NavLink to={"/informations"}>Informations</NavLink></li>
        </ul>
        <Link to={"/contactez-nous"} style={{ textDecoration: "none" }}>
          <div className="navbar-contact-button-container">
            Contactez Nous
          </div>
        </Link>
      </div>
    </div>
  )
}
