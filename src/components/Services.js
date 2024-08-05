//Services.js
import React from 'react';
import CardService from './CardService';
import { faLaptopCode, faMobileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import "../css/Services.css";

const services = [
  {
    title: "UX DESIGN",
    description: "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.",
    icon: faLaptopCode
  },
  {
    title: "DÉVELOPPEMENT WEB",
    description: "Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.",
    icon: faMobileAlt
  },
  {
    title: "RÉFÉRENCEMENT",
    description: "Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.",
    icon: faSearch
  }
];

function Services() {
  return (
    <div className="services-container">

        <div className='div-img-portfolio'></div>

        <h1>MON OFFRE DE SERVICES</h1>
        <h2>Voici les prestations sur lesquelles je peux intervenir.</h2>
      
      <div className="container my-5">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <CardService service={service} icon={service.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;



