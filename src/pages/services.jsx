import React, { useEffect, useState } from 'react'
import servicesHeroImg from "../imgs/services-images/services-hero.jpg"
import "../styles/services.css"

import { Footer } from '../components/footer/footer'
import { ChevronRight, SquareActivity, UserRound } from 'lucide-react'
import { Reveal2 } from '../utils/reveal2'
import Loader from '../components/Loader'

export const Services = () => {

    const services = [
        {
            "name": "Service de Traitement des Addictions",
            "head": "Professeur Bourbon Nadir",
            "units": [
                {
                    "name": "Unité de Récupération des Hommes",
                    "beds": 30
                },
                {
                    "name": "Unité de Récupération des Femmes",
                    "beds": 10
                },
                {
                    "name": "Unité d'Examen",
                    "beds": null
                }
            ]
        },
        {
            "name": "Service de Psychiatrie de l'Enfant",
            "head": "Professeur Mitahri Nassima",
            "units": [
                {
                    "name": "Unité d'Urgence et de Dépistage",
                    "beds": null
                },
                {
                    "name": "Unité de Jour",
                    "beds": 26
                }
            ]
        },
        {
            "name": "Service de Psychiatrie Adulte A",
            "head": "Professeur Azzeddine Ratiba",
            "units": [
                {
                    "name": "Unité de Récupération des Hommes",
                    "beds": null
                },
                {
                    "name": "Unité de Récupération des Femmes",
                    "beds": null
                },
                {
                    "name": "Unité d'Urgence",
                    "beds": null
                }
            ]
        },
        {
            "name": "Service de Psychiatrie Adulte B",
            "head": "Professeur Gasti Ghania",
            "units": [
                {
                    "name": "Unité de Récupération des Hommes",
                    "beds": null
                },
                {
                    "name": "Unité de Récupération des Femmes",
                    "beds": null
                },
                {
                    "name": "Capacité Totale",
                    "beds": 140
                }
            ]
        },
        {
            "name": "Service de Psychiatrie Adulte C (Séjour de Longue Durée)",
            "head": "Professeur Bessedik Khedidja",
            "units": [
                {
                    "name": "Unité de Récupération des Hommes",
                    "beds": null
                },
                {
                    "name": "Unité de Récupération des Femmes",
                    "beds": null
                },
                {
                    "name": "Capacité Totale",
                    "beds": 190
                }
            ]
        },
        {
            "name": "Service de Psychiatrie Adulte D",
            "head": "Professeur Ben Messaoud Dalila",
            "units": [
                {
                    "name": "Unité de Récupération des Hommes",
                    "beds": null
                },
                {
                    "name": "Unité de Récupération des Femmes",
                    "beds": null
                },
                {
                    "name": "Unité de Formation Professionnelle",
                    "beds": null
                },
                {
                    "name": "Unité de Récupération des Hommes",
                    "beds": null
                },
                {
                    "name": "Unité d'Examen",
                    "beds": null
                }
            ]
        },
        {
            "name": "Service de Psychiatrie Légale",
            "head": "Professeur Ben Cherif Mohamed",
            "units": [
                {
                    "name": "Unité de Récupération Administrative des Hommes",
                    "beds": null
                },
                {
                    "name": "Unité de Récupération Administrative des Femmes",
                    "beds": null
                },
                {
                    "name": "Unité de Réhabilitation des Patients",
                    "beds": null
                },
                {
                    "name": "Unité d'Urgence et d'Examen",
                    "beds": null
                }
            ]
        }
    ]
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log('page loaded');
      setLoading(false)
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  return (
    <div className="services-page-container">
        {loading && <Loader />}
        <div className="services-page-hero-section">
                <div className="services-page-hero-section-text-container">
                    <div className="services-page-hero-section-header-container">
                        <h1 className="services-page-hero-section-header">Départements et Services</h1>
                    </div>
                    <div className="services-page-hero-section-paragraph">Nous  offrons des soins spécialisés en santé mentale avec des unités de récupération, d'urgence et d'examen pour répondre aux besoins des patients avec compassion et expertise.</div>
                </div>
            <div className="services-page-hero-section-image-container">
                <div className="services-page-hero-section-imgae-overlay"></div>
                <img src={servicesHeroImg} alt="stethoscope and hearts" className="services-page-hero-section-image" />
            </div>
        </div>
        <div className="services-page-services-container">
            {services.map((service, index) =>(
                <Service service={service} key={index}/>
            ))}
        </div>
        <Footer />
    </div>
  )

}

const Service = ({service})=>{
    const [isOpen, setIsOpne] = useState(false)
    return(
                <div className='services-page-service-container'>
                    <Reveal2>
                        <button className="services-page-service-header-container" onClick={()=>setIsOpne(!isOpen)}>
                            <div className="cheveron-container">
                                <ChevronRight  color={"#1E3E58"} style={isOpen ? {"rotate": "90deg"} : {}}/>
                            </div>
                            <h2 className="services-page-service-header">{service.name}</h2>
                        </button>
                    </Reveal2>
            {isOpen && (
                <>
                    <div className="services-page-service-chiefe-container">
                        <UserRound  width={30} height={30} color={"#1E3E58"}  style={{}} />
                        <span className='services-page-service-chiefe'>Chef de service: {service.head}</span>
                    </div>
                    <div className="services-page-service-units-container">
                        <div className="services-page-service-units-header-container">
                            <SquareActivity className='square-activity' color={"#1E3E58"} />
                            <h2 className="services-page-units-header">
                                {service.units.length} Unités
                            </h2>
                        </div>
                        {service.units.map((unit) => (
                            <div className="services-page-service-unit-header-container">
                                <SquareActivity className='square-activity' color={"#1E3E58"} />
                                <h3 className='services-page-unit-header'>{unit.name}{unit.beds ? ` (${unit.beds} Lits)` : ""} </h3>
                            </div>
                        ))}
                    </div>
                </>
)}
                </div>
    )
}
