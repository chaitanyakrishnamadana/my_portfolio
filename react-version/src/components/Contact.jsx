import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">Reach Out</span>
            <h2 className="heading-large mb-6">Let's Connect<span className="text-accent">.</span></h2>
            
            <p className="text-textMuted text-lg mb-10 max-w-md">
              Currently open to new opportunities matching my skills and collaborations. Feel free to contact me via email or LinkedIn.
            </p>

            <div className="space-y-6">
              <a href="mailto:krishnachaithanya312@gmail.com" className="flex items-center gap-4 text-textMain hover:text-accent transition-colors group">
                <div className="w-12 h-12 bg-surface border border-borderC rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-textMuted font-mono">Email</p>
                  <p className="font-medium">krishnachaithanya312@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/chaitanya67" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-textMain hover:text-accent transition-colors group">
                <div className="w-12 h-12 bg-surface border border-borderC rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-textMuted font-mono">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/chaitanya67</p>
                </div>
              </a>

              <a href="https://github.com/chaitanyakrishnamadana" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-textMain hover:text-accent transition-colors group">
                <div className="w-12 h-12 bg-surface border border-borderC rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-textMuted font-mono">GitHub</p>
                  <p className="font-medium">github.com/chaitanyakrishnamadana</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <form action="https://formsubmit.co/krishnachaithanya312@gmail.com" method="POST" className="glass-card flex flex-col gap-6">
              {/* Added a hidden Subject field to improve the email title */}
              <input type="hidden" name="_subject" value="New Portfolio Message!" />
              <input type="hidden" name="_template" value="basic" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-textMuted mb-2">FULL NAME</label>
                  <input type="text" name="name" required placeholder="Enter your name" className="w-full bg-background border border-borderC rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-mono text-textMuted mb-2">EMAIL ADDRESS</label>
                  <input type="email" name="email" required placeholder="Enter your email" className="w-full bg-background border border-borderC rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-mono text-textMuted mb-2">YOUR MESSAGE</label>
                <textarea name="message" required rows="5" placeholder="Feel free to reach out..." className="w-full bg-background border border-borderC rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex justify-center items-center gap-2 mt-4">
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
