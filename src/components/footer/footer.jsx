import React from 'react'
import "./footer.css"
import {Facebook} from "lucide-react"
import { Reveal } from '../../utils/reveal'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <Reveal>
          <div className='footer-item'>
              <div className="footer-header">Blida-Joinville Psychiatric Hospital</div>
              <span>Address: FQMW+CP2, Blida</span>
              <span>Hours: Open 24 hours</span>
              <span>Phone: 024 20 90 46</span>
              <span>Email: chublida8@gmail.com</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="footer-item">
              <div className="footer-header">Suivez Nous</div>
              <a href="https://www.facebook.com/Frantz1Fanon/" target="_blank" rel="noopener noreferrer"><Facebook color='white' width={40} height={40}/></a>
          </div>
        </Reveal>
    </div>
  )
}
