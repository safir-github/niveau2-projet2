//Contact.js
import React from 'react';
import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className='div-contact container-fluid'>
        <h1>ME CONTACTER</h1>
        <h2>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir ce formulaire de contact.</h2>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <form>
                <h3>Formulaire de contact</h3>
                <div className="mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Votre nom" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Votre adresse email" required />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="subject" placeholder="Sujet" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="message" rows="4" placeholder="Votre message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact-info">
                <h3>Mes coordonnées</h3>
                <p>Adresse: 40 Rue Laure Diebold, 69009 Lyon, France</p>
                <p>Téléphone: 06 20 30 40 50</p>
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4790674764115!2d4.805528915502057!3d45.76884937910511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c09c0c3bb1e5%3A0x4261d0c90b05e1e!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sus!4v1654088290745!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Google Maps">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
