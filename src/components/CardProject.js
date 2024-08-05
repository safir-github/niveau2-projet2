//CardProject.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../css/CardProject.css";

function CardProject({ project }) {
  return (
    <div className="card h-100">
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <Link to={project.link} className="btn btn-primary">Voir</Link>
      </div>
      <div className="card-footer text-muted">
        {project.technologies}
      </div>
    </div>
  );
}

export default CardProject;
