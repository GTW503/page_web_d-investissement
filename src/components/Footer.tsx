import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Financement Participatifs</h2>
          <p>BANIZIinvest est un site de financement participatif créé depuis 2018</p>
          <div className="footer-social">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaYoutube size={24} />
          </div>
        </div>
        <div className="footer-section">
          <h3>Ressources</h3>
          <ul>
            <li><a href="#who-we-are">Qui sommes nous?</a></li>
            <li><a href="#how-it-works">Comment ça marche</a></li>
            <li><a href="#faq">Poser une question</a></li>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#terms">Termes et conditions</a></li>
            <li><a href="#privacy">Politique de confidentialité</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Utiles</h3>
          <ul>
            <li><a href="#projects">Les projets</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#download">Télécharger l'app</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Emplacements</h3>
          <p>Lomé</p>
          <p>Totsi-Lome, Togo</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>BANIZIinvest Website - © 2024 par GCENT Consulting</p>
      </div>
    </footer>
  );
};

export default Footer;
