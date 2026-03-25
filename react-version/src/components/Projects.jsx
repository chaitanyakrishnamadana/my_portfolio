import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import virtualIcuImage from '../assets/images/image.png';

const Projects = () => {
  const projects = [
    {
      title: "Virtual ICU - Secure Video Communication System",
      date: "Recent",
      description: "A secure, customized video visiting platform designed for ICU environments, facilitating robust and reliable communication between patients and doctors with specialized features tailored for medical use.",
      techStack: ["React", "Node.js", "WebRTC", "Socket.io", "MongoDB"],
      image: virtualIcuImage,
      github: "https://github.com/chaitanyakrishnamadana", // update with actual
      live: "#" // update with actual
    },
    {
      title: "Customized Gift Store",
      date: "Recent",
      description: "An e-commerce platform dedicated to customized gifts. Features a dynamic product catalog, user authentication, and a seamless checkout experience designed to handle custom product options.",
      techStack: ["PHP", "JavaScript", "HTML", "CSS"],
      image: "placeholder",
      github: "https://github.com/chaitanyakrishnamadana", // update with actual
      live: "#" // update with actual
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">Portfolio</span>
            <h2 className="heading-large mb-0">Featured Projects<span className="text-accent">.</span></h2>
          </div>
          <a href="https://github.com/chaitanyakrishnamadana" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-accent hover:text-textMain transition-colors font-mono text-sm mt-4 md:mt-0">
            View full GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 h-[300px] md:h-[400px] relative group rounded-2xl overflow-hidden border border-borderC">
                {/* Note: Update src when images are placed in /public/images/projects/ */}
                {project.image !== 'placeholder' ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-surface flex items-center justify-center text-textMuted font-mono px-4 text-center">
                    [Proj Image: /public/images/projects/{project.title.replace(/\s+/g, '-').toLowerCase()}.jpg]
                  </div>
                )}
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Content Container */}
              <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
                <p className="font-mono text-accent text-sm mb-2">{project.date}</p>
                <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6 hover:text-accent transition-colors">{project.title}</h3>
                
                <div className={`bg-surface/80 backdrop-blur-sm p-6 rounded-xl border border-borderC mb-6 shadow-xl z-10 relative ${index % 2 !== 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <p className="text-textMuted leading-relaxed text-sm md:text-base">{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-4 font-mono text-xs text-textMuted mb-8 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end'}`}>
                  {project.techStack.map(tech => (
                    <li key={tech} className="hover:text-accent transition-colors">{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-4 ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-textMain hover:text-accent transition-colors p-2">
                    <FaGithub size={24} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-textMain hover:text-accent transition-colors p-2">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="https://github.com/chaitanyakrishnamadana" className="btn-outline inline-flex items-center gap-2">
            View full GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
