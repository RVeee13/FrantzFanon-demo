import React, { useEffect } from 'react'
import { Reveal } from '../utils/reveal'
import "../styles/contactus.css"
import { Map } from '../components/map/map'
import { MailCheck, MapIcon, MapPin, PhoneCall } from 'lucide-react'
import { Footer } from '../components/footer/footer'

export const ContactUs = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
      <div className='contact-page-container'>
              <div className="contact-page-header-container">
                <Reveal>
                    <h1 className='contact-page-header'>Contactez-Nous</h1>
                </Reveal>
                <Reveal delay={0.3}>
                    <p className='contact-page-paragraph'>Nous sommes ici pour vous aider. Contactez-nous pour toute question ou demande de soutien.</p>
                </Reveal>
              </div>
              <div className="contact-cards-container">
                  <Reveal delay={0.6}>
                      <div className="contact-card-container">
                          <div className="contact-card-icon-container">
                              <div className="card-icon"><PhoneCall width={63} height={63} color='#1E3E58' /></div>
                          </div>
                          <div className="contact-card-title">
                              Appelez-nous
                          </div>
                          <div className="contact-information">
                              025 20 90 46
                          </div>
                      </div>
                  </Reveal>
                  <Reveal delay={0.9}>
                      <div className="contact-card-container">
                          <div className="contact-card-icon-container">
                              <div className="card-icon"><MailCheck width={63} height={63} color='#1E3E58' /></div>
                          </div>
                          <div className="contact-card-title">
                             Email
                          </div>
                          <div className="contact-information">
                              chublida8@gmail.com
                          </div>
                      </div>
                  </Reveal>
              </div>
          <div className='contact-page-map-container'>
              <Reveal delay={0.9}><Map /></Reveal>
              <div className='coordinates-container'>
                  <Reveal>
                      <div className="address-container">
                          <MapPin width={24} height={24} color='#1E3E58' />
                          <div className='address'>Hôpital Frantz Fanon, Zabana Blida, Algeria</div>
                      </div>
                  </Reveal>
                  <Reveal>
                      <a href="https://www.google.com/maps/dir//''/@36.4835656,2.7554726,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x128f0ca26ac33231:0xf1641e29ac04e262!2m2!1d2.7967579!2d36.4835037!3e0?entry=ttu" target="_blank" style={{textDecoration: 'none'}}>
                          <div className='direction-button-container'>
                              J'y Vais
                              <div className='direction-button-icon-container'>
                                  <MapIcon width={32} height={32} color='#FFF'/>
                              </div>
                          </div>
                      </a>
                  </Reveal>
              </div>
          </div>
           <Footer />
      </div> 
  )
}
