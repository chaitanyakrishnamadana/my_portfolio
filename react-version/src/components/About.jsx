import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.png';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="mb-2">
              <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">Who I Am</span>
              <h2 className="heading-large">About Me<span className="text-accent">.</span></h2>
            </div>
            
            <p className="text-lg text-textMuted leading-relaxed">
              I am a dedicated Full Stack Developer with a strong foundation in modern web technologies. My approach combines clean, maintainable code with intuitive user interfaces, aiming to build applications that solve real-world problems efficiently.
            </p>
            
            <p className="text-lg text-textMuted leading-relaxed">
              I thrive in environments that challenge me to continuously learn and adapt. From designing secure back-end architectures to crafting responsive front-end experiences, I am passionate about every aspect of software development.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 mt-6 border-t border-borderC/50">
              <div>
                <p className="text-textMuted text-sm font-mono mb-1">Email</p>
                <a href="mailto:krishnachaithanya312@gmail.com" className="text-textMain hover:text-accent transition-colors font-medium">krishnachaithanya312@gmail.com</a>
              </div>
              <div>
                <p className="text-textMuted text-sm font-mono mb-1">Location</p>
                <p className="text-textMain font-medium">India</p>
              </div>
            </div>
          </div>

          {/* Visual Element / Profile Image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative group mt-10 md:mt-0">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              {/* Backglow Profile Ring */}
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-700 opacity-60"></div>
              
              {/* Outer Border Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/50 scale-[1.03] group-hover:scale-110 transition-transform duration-500 z-0"></div>

              {/* Inner Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-surface shadow-2xl relative z-10 bg-surface">
                {/* 
                  The original image is natively flat-cropped at the top of the hair. 
                  By anchoring the transformation origin firmly to the 'top' and scaling it, 
                  the flat crop aligns flawlessly with the inside apex of the circular boundary.
                */}
                <img 
                  src={profileImg} 
                  alt="Madana Venkata Chaitanya Krishna Profile" 
                  className="w-full h-full object-cover object-top origin-top scale-110 group-hover:scale-[1.15] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
