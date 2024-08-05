//Portfolio.js
import React from 'react';
import CardProject from './CardProject';
import "../css/Portfolio.css";

const projects = [
  {
    title: "Fresh food",
    description: "Réalisation d'un site avec commande en ligne.",
    technologies: "Site réalisé avec PHP et MySQL",
    image: "/images/portfolio-1.png",
    link: "/portfolio/fresh-food"
  },
  {
    title: "Restaurant Akira",
    description: "Réalisation d'un site vitrine.",
    technologies: "Site réalisé avec WordPress",
    image: "/images/portfolio-2-2.png",
    link: "/portfolio/restaurant-akira"
  },
  {
    title: "Espace bien-être",
    description: "Réalisation d'un site vitrine pour un praticien de bien-être.",
    technologies: "Site réalisé en HTML/CSS",
    image: "/images/portfolio.png",
    link: "/portfolio/espace-bien-etre"
  },
];

function Portfolio() {
  return (

    
    <div className="portfolio-container">

      

      <div className='div-img-portfolio'></div>



      <h1>PORTFOLIO</h1>
      <h2>Voici quelques-unes de mes réalisations.</h2>
      
      <div className="container my-5">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <CardProject project={project} />
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default Portfolio;
