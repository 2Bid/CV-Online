import React from 'react'
import ToggleItem from '../../../toggleItem/ToggleItem'

import "./frontSide.css"

export default function FrontSide() {

  return (
    <div className='cardSide__front'>
        <div className='cardSide__left'>
            <div className='info__container'>
                <div className='about__container'>
                    <h1>Axel Salenbier</h1>
                    <p>Développeur front Junior</p>
                </div>
                <div className='img__container'>
                    <img src="https://codeur-production.s3.eu-west-3.amazonaws.com/9fvfd23bpmzmab438qughbqj9jv6" alt="pp"/>
                </div>
            </div>
            <p className='text-content'>Le front-end n'est pas seulement un métier numérique, pour moi c'est aussi un art</p>
            <div className='social__container'>
                <div className='social__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path fill="#e3e5eb" d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/></svg>
                    <a className='social__link' href=''>LinkedIn</a>
                </div>
                <div className='social__item'>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path fill="#e3e5eb" d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/></svg>
                    <a className='social__link' href="">Github</a>
                </div>
                <div className='social__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.25 32" width="20px" height="20px"><rect fill="#e3e5eb" class="cls-1" x="1" y="1" width="45.25" height="30" rx="1"/><path fill="#e3e5eb" stroke="#232F3E" class="cls-1" d="M46.25,2l-22,17.78a1,1,0,0,1-1.29,0L1,2"/><line stroke="#232F3E" class="cls-1" x1="45.5" y1="31" x2="28.95" y2="16"/><line stroke="#232F3E" class="cls-1" x1="2" y1="31" x2="18" y2="16.5"/></svg>
                    <a className='social__link' href='mailto:salenbieraxel@gmail.com'>salenbieraxel@gmail.com</a>
                </div>
                <div className='social__item'>
                    <svg width="28px" height="25px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M729.6 870.4c0 28.16-23.04 51.2-51.2 51.2H345.6c-28.16 0-51.2-23.04-51.2-51.2V179.2c0-28.16 23.04-51.2 51.2-51.2h332.8c28.16 0 51.2 23.04 51.2 51.2v691.2z" fill="#e3e5eb" /><path d="M678.4 934.4H345.6c-35.84 0-64-28.16-64-64V179.2c0-35.84 28.16-64 64-64h332.8c35.84 0 64 28.16 64 64v691.2c0 35.84-28.16 64-64 64zM345.6 140.8c-21.76 0-38.4 16.64-38.4 38.4v691.2c0 21.76 16.64 38.4 38.4 38.4h332.8c21.76 0 38.4-16.64 38.4-38.4V179.2c0-21.76-16.64-38.4-38.4-38.4H345.6z" fill="#e3e5eb" /><path d="M691.2 744.96c0 12.8-11.52 23.04-25.6 23.04H358.4c-14.08 0-25.6-10.24-25.6-23.04V253.44c0-12.8 11.52-23.04 25.6-23.04h307.2c14.08 0 25.6 10.24 25.6 23.04v491.52z" fill="#e3e5eb" /><path d="M665.6 780.8H358.4c-21.76 0-38.4-16.64-38.4-35.84V253.44c0-20.48 16.64-35.84 38.4-35.84h307.2c21.76 0 38.4 16.64 38.4 35.84v491.52c0 19.2-16.64 35.84-38.4 35.84zM358.4 243.2c-7.68 0-12.8 5.12-12.8 10.24v491.52c0 5.12 5.12 10.24 12.8 10.24h307.2c7.68 0 12.8-5.12 12.8-10.24V253.44c0-5.12-5.12-10.24-12.8-10.24H358.4z" fill="#232F3E" /><path d="M512 844.8m-38.4 0a38.4 38.4 0 1 0 76.8 0 38.4 38.4 0 1 0-76.8 0Z" fill="#D4594C" /><path d="M512 896c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2 51.2 23.04 51.2 51.2-23.04 51.2-51.2 51.2z m0-76.8c-14.08 0-25.6 11.52-25.6 25.6s11.52 25.6 25.6 25.6 25.6-11.52 25.6-25.6-11.52-25.6-25.6-25.6z" fill="#232F3E" /><path d="M460.8 166.4h102.4v25.6h-102.4z" fill="#232F3E" /></svg>
                    <a className='social__link' href='tel:+33769890782'>0769890782</a>
                </div>
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
                <ToggleItem title="Développeur front-end Openclassrooms" date="2021-2023" reward="Diplôme rncp de niveau 6 ( BAC +2 )" list={["Intégration maquettes","Utilisation Git et Github","Création algorithme javascript", "Développement d'applications React", "Utilisation API"]}/>
                <ToggleItem title="Formation React - MikeCodeur" date="2021" list={["Découverte React","Création d'un projet Single Page Application", "Utilisation API"]}/>
                <ToggleItem title="Formation Développeur Web - Udemy" date="2020" list={["Apprentissage HTML","Connaissances CSS", "Notion Javascript", "Découverte Bootstrap", "Initiation Jquery"]}/>
            </div>
        </div>
    </div>
  )
}
