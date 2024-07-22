import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectPage />
      <Footer />
    </div>
  );
};

export default App;
