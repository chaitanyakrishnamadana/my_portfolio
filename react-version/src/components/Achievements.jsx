import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Award, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "4 Star Badge in C++",
      platform: "HackerRank (Jan 2026)",
      icon: <Terminal size={40} className="text-accent mb-4" />,
    },
    {
      id: 2,
      title: "50 Days Badge (50+ days solving)",
      platform: "LeetCode (Dec 2025)",
      icon: <Target size={40} className="text-orange-400 mb-4" />,
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">Milestones</span>
          <h2 className="heading-large">Achievements<span className="text-accent">.</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col items-center justify-center text-center p-8 border hover:border-accent group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-textMuted font-mono text-sm">{item.platform}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
