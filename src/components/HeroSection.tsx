import React from 'react';
import '../styles/HeroSection.css';
import backgroundImage from '/public/image/im.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>BIENVENUE SUR BANIZIinvest</h1>
        <p>
          Votre Plateforme de Financement Participatif au Togo </p><p>et dans l'UEMOA.
          Contribuez à notre campagne de financement participatif pour</p> soutenir
          des projets qui font la différence.
        <div className="hero-buttons">
          <button className="btn">Financer</button>
          <button className="btn">Créer un compte</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
