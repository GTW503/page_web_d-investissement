import React from 'react';
import '../styles/ProjectPage.css';

const ProjectPage: React.FC = () => {
  return (
    <div className="project-page">
      <section className="financement-services">
        <h2>Nos différents offres ou services de financement participatif</h2>
        <div className="services-buttons">
          <button>Projet Création d’Entreprise Innovantes</button>
          <button>Projet à portée Communautaire</button>
          <button>Projet Sociaux et Solidaire</button>
          <button>Projet de Prêt entre Entreprise</button>
        </div>
      </section>

      <section className="projects">
        <h2>PROJETS EN COURS DE FINANCEMENT</h2>
        <div className="projects-list">
          <div className="project-card">
            <img src="/public/image/image1.jpg" alt="Projet 1" />
            <h3>Piscine Pour To..</h3>
            <p>Communautaire</p>
            <button>Voir la vidéo de speech du projet</button>
            <button>Découvrir et financer ce projet</button>
          </div>
          <div className="project-card">
            <img src="/public/image/image2.jpeg" alt="Projet 2" />
            <h3>Construction D..</h3>
            <p>Communautaire</p>
            <button>Voir la vidéo de speech du projet</button>
            <button>Découvrir et financer ce projet</button>
          </div>
        </div>
        <button className="view-all">Voir tous les projets</button>
      </section>

      <section className="why-us">
        <h2>Pourquoi BANIZIinvest</h2>
        <div className="why-us-list">
          <div className="why-us-item">Le meilleur réseau de collecte de fonds</div>
          <div className="why-us-item">Soutenez plus de 10 donateurs</div>
          <div className="why-us-item">Outil facile de gestion de votre campagne</div>
          <div className="why-us-item">BANIZIinvest bénéficie d'une assistance dédiée</div>
        </div>
      </section>

      <section className="fundraising-steps">
        <h2>Lancez une collecte de fonds en trois étapes simples</h2>
        <div className="steps-list">
          <div className="step-item">Choisissez une catégorie de projet</div>
          <div className="step-item">Partagez votre collecte de fonds</div>
          <div className="step-item">Recevez les fonds</div>
        </div>
        <button className="start-project">Lancer un projet à financer</button>
      </section>

      <section className="world-map">
        <h2>Statistiques</h2>
        <p>3 Projets terminés</p>
        <p>8 Pays observés</p>
        <p>2 Projets ayant accès à l'eau potable</p>
      </section>
    </div>
  );
};

export default ProjectPage;
