//Blog.js
import React from 'react';
import CardArticle from './CardArticle';
import "../css/Blog.css";

const articles = [
  {
    title: "Coder son site en HTML/CSS",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "22 août 2022",
    image: "/images/blog-1.png",
    link: "/blog/html-css"
  },
  {
    title: "Vendre ses produits sur le web",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "20 août 2022",
    image: "/images/blog-2.png",
    link: "/blog/vendre-produits"
  },
  {
    title: "Se positionner sur Google",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "1 août 2022",
    image: "/images/blog-3.png",
    link: "/blog/positionner-google"
  },
  {
    title: "Coder en responsive design",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "31 juillet 2022",
    image: "/images/blog-4-2.png",
    link: "/blog/responsive-design"
  },
  {
    title: "Techniques de référencement",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "30 juillet 2022",
    image: "/images/blog-5.png",
    link: "/blog/referencement"
  },
  {
    title: "Apprendre à coder",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: "12 juillet 2022",
    image: "/images/blog-6.png",
    link: "/blog/apprendre-coder"
  },
];

function Blog() {
  return (
    <div className="blog-container">

      <div className='div-img-portfolio'></div>



      <h1>BLOG</h1>
      <h2>Retrouvez ici quelques articles sur le développement web.</h2>
      
      <div className="container my-5">
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <CardArticle article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
