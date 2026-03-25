import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono tracking-widest uppercase mb-4"
        >
          Hello, I am
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          Madana Venkata<br />
          <span className="text-gradient-accent">Chaitanya Krishna</span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-textMuted mb-8 font-light max-w-2xl"
        >
          I am a <span className="text-textMain font-semibold">Full Stack Developer</span> passionate about building scalable web applications and elegant digital experiences.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <button className="btn-primary flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </button>
          </Link>
          
          <div className="flex items-center gap-4 ml-0 sm:ml-4">
            <a href="https://github.com/chaitanyakrishnamadana" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surface border border-borderC text-textMain hover:text-accent hover:border-accent transition-all duration-300">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/chaitanya67" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surface border border-borderC text-textMain hover:text-accent hover:border-accent transition-all duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:krishnachaithanya312@gmail.com" className="p-3 rounded-full bg-surface border border-borderC text-textMain hover:text-accent hover:border-accent transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
