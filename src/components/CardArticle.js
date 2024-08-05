//CardArticle.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../css/CardArticle.css";

function CardArticle({ article }) {
  return (
    <div className="card h-100">
      <img src={article.image} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <Link to={article.link} className="btn btn-primary">Lire la suite</Link>
      </div>
      <div className="card-footer text-muted">
        Publié le {article.date}
      </div>
    </div>
  );
}

export default CardArticle;
