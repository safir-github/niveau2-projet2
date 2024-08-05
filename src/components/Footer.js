//Footer.js
import React, { useState, useEffect } from 'react';
import "../css/Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);




  return (
    <footer className="footer text-white pt-4 footer-custom">
      <div className="container-fluid-footer">
        <div className="row">
          <div className="col-md-3 col-footer col-footer-1">
            <h5>John Doe</h5>
            <p>40 Rue Laure Diebold<br />69009 Lyon, France <br></br> Téléphone: 06 20 30 40 50</p>
            <p>
              <a href="https://github.com/safir-github" target="_blank" rel="noopener noreferrer">
                 GitHub,
              </a>
              <a href="https://x.com/New_dev_github" target="_blank" rel="noopener noreferrer">
                  Twitter,
              </a>
              <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fmynetwork%2F" target="_blank" rel="noopener noreferrer">
                  LinkedIn
              </a>
            </p>
          </div>

          <div className="col-md-3 col-footer">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/"> Accueil</a></li>
              <li><a href="/about"> À propos</a></li>
              <li><a href="/services"> Services</a></li>
              <li><a href="/contact"> Me contacter</a></li>
              <li><a href="/legal"> Mentions légales</a></li>
            </ul>

          </div>

          <div className="col-md-3 col-footer">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio/project1">Fresh food</a></li>
              <li><a href="/portfolio/project2">Restaurant Akira</a></li>
              <li><a href="/portfolio/project3">Espace bien-être</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-footer">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li><a href="/blog/post1">Coder son site en HTML/CSS</a></li>
              <li><a href="/blog/post2">Vendre ses produits sur le web</a></li>
              <li><a href="/blog/post3">Se positionner sur Google</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3">
          <p>&copy; Designed by John Doe.</p>
          {isVisible && (
            <button onClick={scrollToTop} className="back-to-top btn btn-primary">
              Remonter en haut
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
