import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationHistory = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      cgpa: "7.52",
      period: "Since August 2023"
    },
    {
      institution: "Kendriya Vidyalaya No 1, Tirupati",
      location: "Andhra Pradesh, India",
      degree: "Intermediate",
      percentage: "66%",
      period: "August 2021 - April 2023"
    },
    {
      institution: "Kendriya Vidyalaya",
      location: "Andhra Pradesh, India",
      degree: "Schooling",
      percentage: "91%",
      period: "April 2011 - April 2021"
    }
  ];

  return (
    <section id="education" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">Academic Background</span>
          <h2 className="heading-large">Education<span className="text-accent">.</span></h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationHistory.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-background border border-borderC p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:border-accent/40 transition-colors"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-yellow-600"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-textMain mb-2">{edu.institution}</h3>
                  <p className="text-textMuted mb-2">{edu.degree}</p>
                  <p className="font-mono text-sm text-textMuted">Score: {edu.cgpa || edu.percentage}</p>
                </div>
                
                <div className="md:text-right">
                  <p className="text-accent font-bold bg-accent/10 px-3 py-1 rounded w-max inline-block mb-2">{edu.period}</p>
                  <p className="text-textMuted text-sm">{edu.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
