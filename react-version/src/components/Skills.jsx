import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-accent mb-4" size={32} />,
      skills: ["C++", "Java", "JavaScript", "Python", "HTML", "CSS"]
    },
    {
      title: "Frameworks / Libraries",
      icon: <Layout className="text-blue-400 mb-4" size={32} />,
      skills: ["React JS", "Node JS", "Express JS", "Tailwind CSS"]
    },
    {
      title: "Tools & Databases",
      icon: <Database className="text-green-400 mb-4" size={32} />,
      skills: ["MySQL", "MongoDB", "Postman", "Git/GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">My Arsenal</span>
          <h2 className="heading-large">Skills<span className="text-accent">.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col items-center text-center"
            >
              {category.icon}
              <h3 className="text-xl font-bold mb-4 font-serif">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-background/50 border border-borderC rounded-full text-sm text-textMuted hover:text-textMain hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
