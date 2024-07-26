import React, { useEffect, useState } from 'react'
import "../styles/home.css"
import { ImageSlider } from '../components/imageSlider/imageSlider'
import img2 from "../imgs/img2.jpg"
import img1 from "../imgs/img1.jpg"
import img3 from "../imgs/img3.jpg"
import img4 from "../imgs/img4.jpg"
import urgenceImg from "../imgs/stats-images/urgence.jpg"
import calendarImg from "../imgs/stats-images/calendar.jpg"
import hospitalRoomImg from "../imgs/stats-images/hospital-room.jpg"
import patient1Img from "../imgs/stats-images/patient.jpg"
import patient2Img from "../imgs/stats-images/patient2.jpg"
import medicalRecordImg from "../imgs/stats-images/medical-records.jpg"
import doctorImg from "../imgs/stats-images/doctor.jpg"
import svg24h from "../imgs/24-7.svg"
import { Link } from 'react-router-dom'
import { BookHeart, ClipboardPlus, PhoneCall, Users } from 'lucide-react'
import { Footer } from '../components/footer/footer'
import { Reveal } from '../utils/reveal'
import { Reveal2 } from '../utils/reveal2'
import Loader from '../components/Loader'


export const Home = () => {
    const Images = [img1, img2, img3, img4]
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const handleLoad = () => {
        setLoading(false);
      };
  
      // Add event listener for when the page is fully loaded
      window.addEventListener('load', handleLoad);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    
    }, []);
  return (

    <div className='home-page-container'>
     {loading && <Loader />}
        <Reveal2>
            <div className='image-slider-container'>
                <ImageSlider images={Images} />
            </div>
        </Reveal2>
        <div className="hero-section-container">
            <Reveal2 delay={.3}>
            <div className="hero-container">
                <h1 className='hero'>Bienvenue à l’EHS Frantz Fanon</h1>
            </div>
            </Reveal2>
              <div className="slogan-container">
                  <Reveal2 delay={.4}>
                      <p className="slogan">
                          Nous sommes dédiés à fournir des soins de santé de qualité et à promouvoir le bien-être de nos patients.
                      </p>
                  </Reveal2>
                      <Reveal delay={.1}>
                          <Link style={{ textDecoration: "none" }}>
                              <div className="more-button-container">
                                  En Savoir plus
                              </div>
                          </Link>
                      </Reveal>
              </div>
        </div>
        <div className="services-section-container">
                <div className='services-section-header-container'>
                    <Reveal2 delay={.3}>
                        <h1 className='services-section-header'>Services de qualité pour votre bien-être</h1>
                    </Reveal2>
                    <Reveal2 delay={.4}>
                        <p className='services-section-paragraph'>Nous offrons une gamme complète de services de thérapie et de réhabilitation pour répondre à vos besoins de santé mentale.
                        </p>
                    </Reveal2>
                </div>
                <div className="service-cards-container">
                
                        <Reveal>
                            <div className="service-card-container">
                                <Users width={72} height={72} color='#1E3E58'/>
                                <h2 className='service-card-header'>Consultations personnalisées</h2>
                                <p className="service-description">Rencontrez nos experts en santé mentale pour desconsultations personnalisées et des plans de traitement adaptés à vos besoins individuels.</p>
                            </div>
                        </Reveal>
                
                
                        <Reveal>
                            <div className="service-card-container">
                                <BookHeart width={72} height={72} color='#1E3E58'/>
                                <h2 className='service-card-header'>Thérapies spécialisées</h2>
                                <p className="service-description">Bénéficiez de thérapies spécialisées, telles que la thérapie individuelle, la thérapie de groupe et lathérapie familiale, pour vous aider à surmonter vosdifficultés.</p>
                            </div>
                        </Reveal>
                
                
                        <Reveal>
                            <div className="service-card-container">
                                <ClipboardPlus width={72} height={72} color='#1E3E58'/>
                                <h2 className='service-card-header'>Programmes de réhabilitation</h2>
                                <p className="service-description">Participez à nos programmes de réhabilitation qui visent à vous aider à retrouver votre indépendance et à améliorer votre qualité de vie</p>
                            </div>
                        </Reveal>
                
                </div>
              {/* <Reveal delay={.3}> */}
                  <Link style={{ textDecoration: "none" }}>
                      <div className="more-button-container more-services-button-container">
                          En Savoir plus
                      </div>
                  </Link>
              {/* </Reveal> */}
        </div>
          <div className="stats-section-container">
                <div className='stats-section-header-container'>
                    <Reveal2>
                        <h1 className='stats-section-header'>Statistiques Clés du Département de Psychiatrie (2019 - Présent)</h1>
                    </Reveal2>
                </div>
              <div className="stats-section">
                  <div className="grid-item emergency-card">
                      <img src={urgenceImg} alt="Emergency sign" className='grid-item-image' />
                      <div className="overlay"></div>
                      <div className="stat-card-header">
                          <Reveal2 delay={.2}>
                              <div className="stat-card-number">+40,382</div>
                              <div className="stat-card-text">Consultations d'urgence</div>
                          </Reveal2>
                      </div>
                  </div>
                  <div className="grid-item staying-days-card">
                      <img src={patient1Img} alt="patient image" className='grid-item-image' />
                      <div className="overlay"></div>
                      <div className="stat-card-header">
                          <Reveal2 delay={.2}>
                              <div className="stat-card-number">+114.67</div>
                              <div className="stat-card-text">Séjour Moyen</div>
                          </Reveal2>
                      </div>
                  </div>
                  <div className="grid-item lorem-ipsum-card">
                      <img src={patient2Img} alt="Patient" className='grid-item-image' />
                      <div className="overlay"></div>
                      <div className="stat-card-header">
                          <Reveal2 delay={.2}>
                              <div className="stat-card-number">60.98%</div>
                              <div className="stat-card-text">Taux d'occupation</div>
                          </Reveal2>
                      </div>
                  </div>
                  <div className="grid-item consultaion-card">
                      <img src={doctorImg} alt="Doctor" className='grid-item-image' />
                      <div className="overlay"></div>
                      <div className="stat-card-header">
                          <Reveal2 delay={.2}>
                              <div className="stat-card-number">+132,165</div>
                              <div className="stat-card-text">Consultation Spécialisé</div>
                          </Reveal2>
                      </div>
                  </div>
                  <div className="grid-item accepted-patients-card">
                      <img src={medicalRecordImg} alt="medical clip board" className='grid-item-image' />
                      <div className="overlay"></div>
                      <div className="stat-card-header">
                          <Reveal2 delay={.2}>
                              <div className="stat-card-number">+7,132</div>
                              <div className="stat-card-text">Malades Admis</div>
                          </Reveal2>
                      </div>
                  </div>
                  <div className="grid-item hospitalisation-days-card">
                      <img src={calendarImg} alt="Calendar" className='grid-item-image' />
                      <div className="overlay"></div>
                      <div className="stat-card-header">
                          <Reveal2 delay={.2}>
                              <div className="stat-card-number">+1,240,112</div>
                              <div className="stat-card-text">Journée de Hospitalisation</div>
                          </Reveal2>
                      </div>
                  </div>
                  <div className="grid-item beds-card">
                      <img src={hospitalRoomImg} alt="" className='grid-item-image' />
                      <div className="overlay"></div>
                      <div className="stat-card-header">
                          <Reveal2 delay={.2}>
                              <div className="stat-card-number">+764</div>
                              <div className="stat-card-text">Lits Organisé</div>
                          </Reveal2>
                      </div>
                  </div>
              </div></div>

        <div className='emergency-section'>
            <Reveal2>
                <div className="svg-container">
                    <img src={svg24h} alt="24h" className='svg-image' />
                </div>
            </Reveal2>
            <Reveal2 delay={.3}>
                <div className='emergency-section-header-container'>
                    <h2 className='emergency-section-header'>Besoin d'aide en urgence ?</h2>
                </div>
            </Reveal2>
                  <Reveal delay={.2}>
                      <div className="phone-number-button-container">
                        <div className='phone-icon-container'>
                         <PhoneCall color='#fff' className='phone-icon'/>
                        </div>
                        <div className='phone-number'>
                            025 20 90 46
                        </div>
                      </div>
                  </Reveal>
        </div>

        <div className="faq-section">
            <div className="faq-section-header-container">
                <Reveal2>
                    <h1 className="faq-section-header">FAQs</h1>
                </Reveal2>
                <Reveal2 delay={.2}>
                    <p className="faq-section-paragraph">Trouvez des reponses aux questions frequemment posees sur les services et les traitements de l’hopital </p>
                </Reveal2>
            </div>
            <div className="question-cards-container">
                <Reveal>
                    <div className="question-card-container">
                        <div className="question-container">L'hôpital offre-t-il des services d'urgence psychiatrique? </div>
                        <div className="answer-container">
                            <p className="answer">
                            Oui, 24h/24 et 7j/7.
                            </p>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="question-card-container">
                        <div className="question-container">Quelles sont les services offerts ? </div>
                        <div className="answer-container">
                            <p className="answer">
                            L'hôpital offre une gamme complète de services médicaux et psychiatriques, y compris des consultations, des thérapies individuelles et de groupe, des programmes de réadaptation et des traitements spécialisés.
                            </p>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="question-card-container">
                        <div className="question-container">L'hôpital propose-t-il des programmes de réhabilitation?</div>
                        <div className="answer-container">
                            <p className="answer">
                            Oui, plusieurs programmes disponibles.
                            </p>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="question-card-container">
                        <div className="question-container">Comment contacter l'hôpital?</div>
                        <div className="answer-container">
                            <p className="answer">
                            Par téléphoneou par email.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>

              <div className="faq-section-secondary-header-container">
                  <Reveal2>
                      <div className="secondary-header">
                          Vous avez encore des questions ?
                      </div>
                  </Reveal2>
              </div>
              <Reveal>
                  <Link to="/contactez-nous" style={{ textDecoration: "none" }}>
                      <div className="contact-button-container">
                          Contactez Nous
                      </div>
                  </Link>
              </Reveal>
          </div>
          <Footer />
      </div>
  )
}
