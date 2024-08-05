//CardService.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/Services.css";

function CardService({ service, icon }) {
  return (
    <div className="card h-100">
      <div className="card-body text-center-2">
       
        <div className="service-icon mb-3">
          <FontAwesomeIcon icon={icon} size="3x" />
        </div>
        
        <h5 className="card-title">{service.title}</h5>
        
        <p className="card-text">{service.description}</p>
      </div>
    </div>
  );
}

export default CardService;
