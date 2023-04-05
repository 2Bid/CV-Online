import React, { useEffect } from "react";
import Slider from "react-slick";
import Project from "../project/Project";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

// img projects
import Reservia from './../images/projects/reservia.jpg'
import Ohmyfood from './../images/projects/omf.jpg'
import Gameon from './../images/projects//GameOn.jpg'
import Kasa from './../images/projects//kasa.jpg'
import plats from './../images/projects//plats.jpg'
import SportSee from './../images/projects//sportsee.jpg'
import datepicker from './../images/projects//datepicker.jpg'
import argentbank from './../images/projects//argentbank.jpg'
import fisheye from './../images/projects//Fisheye.jpg'
import gamepreview from './../images/projects//gamepreview.jpg'
import Billedapp from './../images/projects//Billedapp.jpg'

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const projects = [
    /* OpenClassrooms */
    <Project name="Reservia" link="https://github.com/2Bid/AxelSalenbier_2_07032021" img={Reservia} description={<p className='project__description'>- Intégration HTML CSS</p>}/>,
    <Project name="Oh my food" link="https://github.com/2Bid/AxelSalenbier_3_30032021" img={Ohmyfood} description={<p className='project__description'>- Intégration HTML<br/>- Animation CSS</p>}/>,
    <Project name="Gameon" link="https://github.com/2Bid/GameOn-website-FR/tree/develop" img={Gameon} description={<p className='project__description'>- Reprise d'un repo forké<br/>- Ajout Fonction Javascript<br/>- Test manuels</p>}/>,
    <Project name="FishEye" link="https://github.com/2Bid/AxelSalenbier_6_010721" img={fisheye} description={<p className='project__description'>- Intégration<br/>- Création d'un design pattern<br/>- Mise en avant Accessibilité</p>}/>,
    <Project name="Les petits plats" link="https://github.com/2Bid/AxelSalenbier_7_06102021" img={plats} description={<p className='project__description'>- Analyse d'un problème<br/>- Développement d'un algorithme de recherche JS</p>}/>,
    <Project name="Billed App" link="https://github.com/2Bid/AxelSalenbier_7_06102021" img={Billedapp} description={<p className='project__description'>- Ecriture de test unitaire<br/>- Plan de test end-to-end<br/>- Test d'intégration</p>}/>,
    <Project name="Kasa" link="https://github.com/2Bid/AxelSalenbier_11_01042022" img={Kasa} description={<p className='project__description'>- Intégration Application React</p>}/>,
    <Project name="SportSee" link="https://github.com/2Bid/AxelSalenbier_12_24042022" img={SportSee} description={<p className='project__description'>- Intégration Application React<br/>- Intéraction API<br/>- Documentation Js</p>}/>,
    <Project name="BankAPI" link="https://github.com/2Bid/AxelSalenbier_13_27072022" img={argentbank} description={<p className='project__description'>- Mise en place Redux toolkit<br/>- Intéraction et Authentification API<br/>- Création Endpoints</p>}/>,
    <Project name="Datepicker input" link="https://github.com/2Bid/AxelSalenbier_14_01112022" img={datepicker} description={<p className='project__description'>- Création d'une librarie react<br/>- Conversion de Jquery à React<br/>- Analyse de performances</p>}/>,
    /* Projet Pers */ 
    <Project name="GamePreview" link="https://github.com/2Bid/game-preview-v2" img={gamepreview} description={<p className='project__description'>- Application React<br/>- Connexion API Rawg.io</p>}/>
  ]
  
  return (
    <Slider {...settings}>
      {
        projects.map((project)=>{
          return project
        })
      }      
    </Slider>
  );
}
