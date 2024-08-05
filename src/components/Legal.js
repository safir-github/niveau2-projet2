//Legal.js
import React, { useEffect } from "react";
import "../css/Legal.css";

function Legal() {
  // Balise méta pour empêcher l'indexation de cette page
  useEffect(() => {
    const metaTag = document.createElement("meta");
    metaTag.name = "robots";
    metaTag.content = "noindex, nofollow";
    document.getElementsByTagName("head")[0].appendChild(metaTag);
    return () => {
      document.getElementsByTagName("head")[0].removeChild(metaTag);
    };
  }, []);

  return (
    <div className="container py-4 legal-container">
      <h1 className="h1-legal">MENTIONS LÉGALES</h1>
      <h2 className="h2-legal">Voici les prestations sur lesquelles je peux intervenir.</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              John Doe <br />
              40 rue laure Diebold <br />
              <span className="span-blue">69009 Lyon, France</span> <br />
              <span className="span-blue">john.doe@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              O2Switch <br />
              Chem. des Pardiaux, 63000 Clermont-Ferrand, France <br></br> <br></br> <span className="span-blue">https://www.o2switch.fr/</span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Site développé par John Doe, étudiant du CEF. <br />
              Les images libres de droit sont issues du site <span className="span-blue">Pixabay</span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legal;
