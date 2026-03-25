import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Training = () => {
  return (
    <section id="training" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-large">Training<span className="text-accent">.</span></h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card max-w-4xl mx-auto border-l-4 border-l-accent"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-borderC pb-4">
            <div>
              <h3 className="text-2xl font-bold font-serif text-textMain mb-1">Code Quest – DSA Summer Bootcamp</h3>
              <p className="text-accent font-mono text-sm">From Basics to Brilliance</p>
            </div>
            <div className="mt-2 md:mt-0 text-left md:text-right">
              <span className="bg-accent/10 text-accent px-3 py-1 rounded inline-block text-sm font-bold">June 2025 - July 2025</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-6 text-textMuted list-disc pl-5">
            <li>Explored key concepts in Data Structures, Algorithms, and logical problem-solving during the DSA Summer Bootcamp, along with hands-on practice through small projects.</li>
            <li>Handled the attendance system logic, set the allowed location condition, ensuring that only eligible students could mark their attendance.</li>
            <li>Strengthened understanding of DSA fundamentals along with core web concepts, validation techniques, and building simple, reliable features.</li>
          </ul>

          <div className="pt-4 border-t border-borderC">
            <p className="font-mono text-sm text-textMain">
              <span className="text-accent">Tech Stack:</span> HTML, CSS, JavaScript, Data Structures and Algorithms
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
