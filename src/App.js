//App.js
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/components/Home"
import About from "../src/components/About"
import Services from "../src/components/Services"
import Portfolio from "../src/components/Portfolio"
import Blog from "../src/components/Blog"
import Contact from "../src/components/Contact"
import Legal from "../src/components/Legal"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Navigation from "../src/components/Navigation"
import GitHubProfile from '../src/components/GitHubProfile';






function App() {
  return (
    <Router>
      <div id='top' className="App">

      <Helmet>
          <title>John Doe - Développeur Web en Formation à la Recherche d'un Emploi en Alternance</title>
          <meta name="description" content="John Doe, en formation de développeur web, recherche un emploi en alternance. Découvrez son parcours, ses compétences et ses projets sur son site internet de présentation." />
          <link rel="canonical" href="https://www.john-doe-presentation.xevo3905.odns.fr " />
        </Helmet>


        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            
          </Routes>
        </main>
        <Footer />
        <GitHubProfile username="safir-github" />
      </div>
    </Router>
  );
}

export default App;
