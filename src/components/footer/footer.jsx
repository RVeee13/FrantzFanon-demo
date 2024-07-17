import React from 'react'
import "./footer.css"
import {Facebook, Mail, MapPin, Phone} from "lucide-react"
import { Reveal } from '../../utils/reveal'
import {ReactComponent as FacebookIcon} from "../../imgs/facebook-icon.svg"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <Reveal>
          <div className='footer-item'>
              <div className="footer-header">Frantz Fanon Psychiatrie</div>
              <p style={{color: "white"}}>Nous sommes dédiés à fournir des soins de santé de qualité et à promouvoir le bien-être de nos patients.</p>
              <a href="https://www.facebook.com/Frantz1Fanon/" target='_blank' rel="noopener noreferrer"><img src="../imgs/facebook-icon.svg" alt="" /><FacebookIcon/></a>
          </div>
        </Reveal>

        <Reveal>
          <div className="footer-item">
              <div className="footer-header">Liens Utiles</div>
              <Link to={""} className='footer-usefull-link'>Accueil</Link>
              <Link to={""} className='footer-usefull-link'>A propos</Link>
              <Link to={""} className='footer-usefull-link'>Services</Link>
              <Link to={""} className='footer-usefull-link'>Informations</Link>
          </div>
        </Reveal>

        <Reveal>
          <div className="footer-item">
              <div className="footer-header">Contact</div>
              <div className='footer-icon-container'><a href="tel:+21325209046" target='_blank' rel="noopener noreferrer"><Phone width={24} height={24} color='#fff'/><span className='footer-icon-text'>025 20 90 46</span></a> </div>
              <div className='footer-icon-container'><a href="mailto:chublida8@gmail.com" target='_blank' rel="noopener noreferrer"><Mail width={24} height={24} color='#fff'/><span className='footer-icon-text'>chublida8@gmail.com</span></a> </div>
              <div className='footer-icon-container'><a href="https://www.google.com/maps/dir//''/@36.4835656,2.7554726,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x128f0ca26ac33231:0xf1641e29ac04e262!2m2!1d2.7967579!2d36.4835037!3e0?entry=ttu" target='_blank' rel="noopener noreferrer"><MapPin width={24} height={24} color='#fff'/><span className='footer-icon-text'>Joinville, Blida</span></a></div>
          </div>
        </Reveal>
    </div>
  )
}
