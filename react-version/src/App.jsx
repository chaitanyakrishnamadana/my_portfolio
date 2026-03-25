import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
