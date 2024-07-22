import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaUserCircle, FaRocket } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">BANIZIinvest</div>
      <ul className="navbar-links">

      <li><a href="#Acceuille">Acceuil</a></li>
        <li
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
        >
          <a href="#about">À Propos</a>
          {aboutDropdown && (
            <ul className="dropdown">
              <li><a href="#who-we-are">Qui Sommes Nous</a></li>
              <li><a href="#how-it-works">Comment Ça Marche</a></li>
              <li><a href="#our-mission">Notre Mission</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#terms">Termes et Conditions</a></li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => setProjectsDropdown(true)}
          onMouseLeave={() => setProjectsDropdown(false)}
        >
          <a href="#projects">Les Projets</a>
          {projectsDropdown && (
            <ul className="dropdown">
              <li><a href="#all-projects">Tous les Projets</a></li>
              <li><a href="#community-projects">Communautaire</a></li>
              <li><a href="#business-projects">Création d'Entreprise</a></li>
              <li><a href="#loan-projects">Prêt d'Entreprise</a></li>
              <li><a href="#social-projects">Sociaux</a></li>
            </ul>
          )}
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <a href="#launch-project" className="navbar-action">
          <FaRocket size={24} />
          <span>Lancer un projet</span>
        </a>
        <a href="#login" className="navbar-login">
          <FaUserCircle size={24} />
        </a>
        <button className="btn" onClick={() => window.location.href = '#login'}>Se Connecter</button>
      </div>
    </nav>
  );
};

export default Navbar;
