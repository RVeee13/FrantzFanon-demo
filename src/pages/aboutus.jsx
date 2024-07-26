import { useEffect, useState } from 'react'
import { Footer } from '../components/footer/footer'
import heroSectionImg from "../imgs/aboutus-images/Frantz_Fanon_hospital_in_1933.jpg"
import "../styles/aboutus.css"
import leadershipImg from "../imgs/aboutus-images/leadership.jpg"
import excellenceImg from "../imgs/aboutus-images/excellence.jpg"
import inclusionImg from "../imgs/aboutus-images/inclusion.jpg"
import respectImg from "../imgs/aboutus-images/respect.jpg"
import { Reveal2 } from '../utils/reveal2'
import { Reveal } from '../utils/reveal'


export const AboutUs= () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const [toggledMission, setToggeledMission] = useState(0)
    const valuesCards = [{header: "Leadership & Intégrité", img: leadershipImg},
                         {header: "Excellence & Découverte", img: excellenceImg},
                         {header: "Diversité & Inclusion", img: inclusionImg},
                         {header: "Respect & Collégialité", img: respectImg}
                        ];

    return(
        <div className='about-us-page-container'>
            <div className="about-us-hero-section-container">
                <div className="about-us-hero-section-content-container">
                    <Reveal2>
                        <h1 className="about-us-section-header">
                            À propos de nous
                        </h1>
                    </Reveal2>
                    <Reveal2 delay={.2}>
                        <div className="about-us-history-content-container">
                            <div className="about-us-history-subheader-container">
                                <h2 className="about-us-history-subheader">
                                    Brève histoire
                                </h2>
                            </div>
                            <Reveal2 delay={.2}>
                                <div className="about-us-history-text-container">
                                    <p className="about-us-history-text">
                                        L'Hôpital de Psychiatrie Frantz Fanon, établi à Blida, en Algérie, est un pilier des soins de santé mentale dans la région depuis plusieurs décennies. Nommé d'après le célèbre psychiatre et philosophe Frantz Fanon, l'hôpital a été fondé avec pour mission de fournir des soins psychiatriques complets et de faire progresser la compréhension et le traitement des troubles mentaux. Au fil des ans, il est devenu une institution de premier plan dans le domaine, reconnue pour son engagement envers les soins aux patients, la recherche et l'implication communautaire.
                                    </p>
                                </div>
                            </Reveal2>
                        </div>
                    </Reveal2>
                </div>
                <Reveal2 delay={.4}>
                    <div className="about-us-hero-section-img-container">
                        <img src={heroSectionImg} alt="" className="about-us-hero-section-img" />
                    </div>
                </Reveal2>
            </div>

            <div className="about-us-mission-section-container">
                <Reveal2 delay={.5}>
                    <div className="about-us-mission-section-header-container">
                        <h1 className='about-us-mission-section-header'>Nos missions</h1>
                    </div>
                </Reveal2>
                <div className="about-us-mission-section-content-container">
                    <div className="about-us-mission-section-subheaders-container">
                        <Reveal delay={.1}>
                            <button className="about-us-mission-section-subheader-container" onClick={() => setToggeledMission(0)}>
                                <h2 className={toggledMission === 0 ? "about-us-mission-section-subheader active-subheader" : "about-us-mission-section-subheader"}>Soigner les patients</h2>
                            </button>
                        </Reveal>
                        <Reveal delay={.2}>
                            <button className="about-us-mission-section-subheader-container" onClick={() => setToggeledMission(1)}>
                                <h2 className={toggledMission === 1 ? "about-us-mission-section-subheader active-subheader" : "about-us-mission-section-subheader"}>Servir la communauté</h2>
                            </button>
                        </Reveal>
                    </div>
                    <div className="about-us-mission-section-texts-container">
                        <Reveal2>
                            <div className={toggledMission === 0 ? "about-us-mission-section-text-container" : "about-us-mission-section-text-container hidden-mission"}>
                                <p className="about-us-mission-section-text">À l'Hôpital de Psychiatrie Frantz Fanon, notre mission principale est de fournir des soins compatissants et efficaces à nos patients. Nous offrons une large gamme de services psychiatriques, y compris des soins hospitaliers et ambulatoires, des programmes de traitement spécialisés et des interventions thérapeutiques. Notre équipe de psychiatres, psychologues, infirmières et personnel de soutien expérimentés travaille en collaboration pour s'assurer que chaque patient reçoit des soins personnalisés et holistiques adaptés à ses besoins spécifiques. Nous nous engageons à aider nos patients à atteindre les meilleurs résultats possibles et à les soutenir dans leur cheminement vers la guérison.</p>
                            </div>
                            <div className={toggledMission === 1 ? "about-us-mission-section-text-container" : "about-us-mission-section-text-container hidden-mission"}>
                                <p className="about-us-mission-section-text">Au-delà des soins individuels aux patients, l'Hôpital de Psychiatrie Frantz Fanon s'engage profondément à servir la communauté au sens large. Nous participons à de nombreux programmes de sensibilisation visant à promouvoir la santé mentale, à réduire la stigmatisation et à fournir des informations et des ressources au public. Nos initiatives incluent des ateliers communautaires, des dépistages de santé mentale et des groupes de soutien, tous conçus pour promouvoir le bien-être mental et la résilience. En favorisant une culture de compréhension et de soutien, nous nous efforçons de créer une société plus saine et plus inclusive pour tous.</p>
                            </div>
                        </Reveal2>
                    </div>
                </div>
            </div>

            <div className="about-us-values-section-container">
                <Reveal2>
                    <div className="about-us-values-section-header-container">
                        <h2 className="about-us-values-section-header">Nos Valeurs</h2>
                    </div>
                </Reveal2>
                <div className="about-us-values-section-cards-container">
                    {valuesCards.map((card) => (
                        <div className="about-us-values-section-card">
                            <div className="about-us-values-section-image-container">
                            <div class="about-us-values-section-card-overlay"></div>
                                <img src={card.img} className='about-us-values-section-image'/>
                            </div>
                                <div className="about-us-values-section-card-header-container">
                                    <Reveal2><span className="about-us-values-section-card-header">{card.header}</span></Reveal2>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>


    )


}