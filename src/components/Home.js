//Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Home.css";

function Home() {
  return (
    <div className='home-container'>
      <div className='div-img-home'>
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <Link to="/about" className="btn btn-primary hero-button">En savoir plus</Link>
      </div>

      <div className='div-about-1 container'>
        <div className='row'>
          <div className="col-md-6">
            <h2>À propos</h2>
            <p className='p-home'>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. <br></br> <br></br> Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>. <br></br> <br></br> J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
          </div>

          <div className="col-md-6">
            <img src="../images/home-2.png" alt="John Doe" className="img-fluid rounded mb-3 w-50" />
            <h3 className='h3-home'>Mes compétences</h3>
            
            <div className="mb-2">
              <span className='span-home progress-label'>HTML5 90%</span>
              <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="mb-2">
              <span className='span-home progress-label'>CSS3 80%</span>
              <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="mb-2">
              <span className='span-home progress-label'>JavaScript 70%</span>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="mb-2">
              <span className='span-home progress-label'>PHP 60%</span>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="mb-2">
              <span className='span-home progress-label'>React 50%</span>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
