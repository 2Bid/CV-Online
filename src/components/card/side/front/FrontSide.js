import React from 'react'
import ToggleItem from '../../../toggleItem/ToggleItem'
import SocialLink from '../../../socialLink/SocialLink'

import "./frontSide.css"

import ProfilPicture from '../../../images/moi.jpg'

/* svg */
import LinkedIn from '../../../images/svg/linkedIn.svg'
import Github from '../../../images/svg/github.svg'
import Mail from '../../../images/svg/mail.svg'
import Phone from '../../../images/svg/phone.svg'

export default function FrontSide() {

  return (
    <div className='cardSide__front'>
        <div className='cardSide__left'>
            <div className='cardSide__left-top'>
                <div className='info__container'>
                    <div className='about__container'>
                        <h1>Axel Salenbier</h1>
                        <p>Développeur front Junior</p>
                    </div>
                    <div className='img__container'>
                        <img src={ProfilPicture} alt="Axel Salenbier"/>
                    </div>
                </div>

                <p className='text-content'>Le front-end n'est pas seulement un métier numérique, pour moi c'est aussi un art</p>
            </div>

            <div className='social__container'>
                <SocialLink name='LinkedIn' link='https://www.linkedin.com/in/axel-salenbier-906130186/' svg={LinkedIn} />
                <SocialLink name='Github' link='https://github.com/2Bid' svg={Github} />
                <SocialLink name='salenbieraxel@gmail.com' link='mailto:salenbieraxel@gmail.com' svg={Mail} />
                <SocialLink name='07 69 89 07 82' link='tel:+33769890782' svg={Phone} />
            </div>

            <div className='softskills__container'>
                    <h3>SoftSkill</h3>
                    <div className='skills__container'>
                        <span className='skills'>Perséverance</span>
                        <span className='skills'>Dynamisme</span>
                        <span className='skills'>Adaptabilité</span>
                        <span className='skills'>Bienveillance</span>
                    </div>
                </div>

                <div className='hobbies__container'>
                    <h3>Hobbies</h3>
                    <div className='skills__container'>
                        <span className='skills'>Musique</span>
                        <span className='skills'>Nature</span>
                        <span className='skills'>Snowboard</span>
                        <span className='skills'>Jeux vidéo</span>
                    </div>
                </div>
        </div>

        <div className='cardSide__right'>
            <div className='exp__container professional'>
                <h2>Expériences professionelles</h2>
                <ToggleItem active={true} title="HBJO ( Alternance )" date="2021-2023" list={["Développement de parts dans le système","Création et mise à jour des sites clients","Ecriture documentation interne","Intégration de newsletters"]}/>
            </div>

            <div className='form__container formation'>
                <h2>Formations</h2>
                <ToggleItem title="Développeur front-end Openclassrooms" date="2021-2023" reward="Diplôme rncp de niveau 6 ( BAC +3 )" list={["Choisir une solution technique adaptée à votre client et travailler en mode Agile","Créer des sites webs avec HTML et CSS","Créer des applications web dynamiques avec Javascript et React", "Communiquer avec le back-end de l'application grâce à une API", "Mettre en œuvre des test unitaires et d’intégration et débugger le code", "Résoudre des problèmes techniques avec un langage de programmation et des algorithmes", "Refactoriser du code pour qu’il soit plus moderne et optimisé"]}/>
                <ToggleItem title="Formation React - MikeCodeur" date="2021" list={["Découverte React","Création d'un projet Single Page Application", "Utilisation API"]}/>
                <ToggleItem title="Formation Développeur Web - Udemy" date="2020" list={["Apprentissage HTML","Connaissances CSS", "Notion Javascript", "Découverte Bootstrap", "Initiation Jquery"]}/>
            </div>
        </div>
    </div>
  )
}
