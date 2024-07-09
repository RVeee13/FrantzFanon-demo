import React from 'react'
import "../styles/home.css"
import { ImageSlider } from '../components/imageSlider/imageSlider'
import img1 from "../imgs/img2.jpg"
import img2 from "../imgs/img1.jpg"
import img3 from "../imgs/img3.jpg"
import svg24h from "../imgs/24h.svg"
import { Link } from 'react-router-dom'
import { BookHeart, ClipboardPlus, PhoneCall, Users } from 'lucide-react'
import { Footer } from '../components/footer/footer'
import { Reveal } from '../utils/reveal'

const Images = [img1, img2, img3]

export const Home = () => {
  return (
    <div className='home-page-container'>
        <Reveal>
            <div className='image-slider-container'>
                <ImageSlider images={Images} />
            </div>
        </Reveal>
        <div className="hero-section-container">
            <Reveal delay={.2}>
            <div className="hero-container">
                <h1 className='hero'>Bienvenue à l'Hôpital Frantz Fanon</h1>
            </div>
            </Reveal>
              <div className="slogan-container">
                  <Reveal delay={.3}>
                      <p className="slogan">
                          Nous sommes dédiés à fournir des soins de santé de qualité et à promouvoir le bien-être de nos patients.
                      </p>
                  </Reveal>
                      <Reveal delay={.3}>
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
                    <Reveal delay={.3}>
                        <h1 className='services-section-header'>Services de qualité pour votre bien-être</h1>
                    </Reveal>
                    <Reveal delay={.4}>
                        <p className='services-section-paragraph'>Nous offrons une gamme complète de services de thérapie et de réhabilitation pour répondre à vos besoins de santé mentale.
                           Notre équipe expérimentée est là pour vous soutenir et vous aider à retrouver une vie épanouissante.
                        </p>
                    </Reveal>
                </div>
                <div className="service-cards-container">
                
                        <Reveal delay={.1}>
                            <div className="service-card-container">
                                <Users width={72} height={72} color='#1E3E58'/>
                                <h2 className='service-card-header'>Consultations personnalisées</h2>
                                <p className="service-description">Rencontrez nos experts en santé mentale pour desconsultations personnalisées et des plans de traitement adaptés à vos besoins individuels.</p>
                            </div>
                        </Reveal>
                
                
                        <Reveal delay={.2}>
                            <div className="service-card-container">
                                <BookHeart width={72} height={72} color='#1E3E58'/>
                                <h2 className='service-card-header'>Thérapies spécialisées</h2>
                                <p className="service-description">Bénéficiez de thérapies spécialisées, telles que la thérapie individuelle, la thérapie de groupe et lathérapie familiale, pour vous aider à surmonter vosdifficultés.</p>
                            </div>
                        </Reveal>
                
                
                        <Reveal delay={.3}>
                            <div className="service-card-container">
                                <ClipboardPlus width={72} height={72} color='#1E3E58'/>
                                <h2 className='service-card-header'>Programmes de réhabilitation</h2>
                                <p className="service-description">Participez à nos programmes de réhabilitation qui visent à vous aider à retrouver votre indépendance et à améliorer votre qualité de vie</p>
                            </div>
                        </Reveal>
                
                </div>
              <Reveal>
                  <Link style={{ textDecoration: "none" }}>
                      <div className="more-button-container more-services-button-container">
                          En Savoir plus
                      </div>
                  </Link>
              </Reveal>
        </div>

        <div className='emergency-section'>
            <Reveal>
                <div className="svg-container">
                    <img src={svg24h} alt="24h" className='svg-image' />
                </div>
            </Reveal>
            <Reveal>
                <div className='emergency-section-header-container'>
                    <h2 className='emergency-section-header'>Besoin d'aide en urgence ?</h2>
                </div>
            </Reveal>
                  <Reveal>
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
                <Reveal>
                    <h1 className="faq-section-header">FAQs</h1>
                </Reveal>
                <Reveal>
                    <p className="faq-section-paragraph">Trouvez des reponses aux questions frequemment posees sur les services et les traitements de l’hopital </p>
                </Reveal>
            </div>
            <div className="question-cards-container">
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
            </div>
            <div className="question-cards-container">
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
            </div>
            <div className="question-cards-container">
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
            </div>
            <div className="question-cards-container">
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
            </div>

              <div className="faq-section-secondary-header-container">
                  <Reveal>
                      <div className="secondary-header">
                          Vous avez encore des questions ?
                      </div>
                  </Reveal>
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
