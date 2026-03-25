import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-borderC py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-borderC/50">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-black text-textMain mb-4">M.V.C.K</h2>
            <p className="text-textMuted max-w-sm">
              Design-driven software engineer focused on building beautiful, functional, and user-centric digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest uppercase text-textMain mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Training', 'Skills', 'Contact'].map(link => (
                <li key={link}>
                  <Link 
                    to={link.toLowerCase()} 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                    className="text-textMuted hover:text-accent transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest uppercase text-textMain mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/chaitanyakrishnamadana" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-textMuted hover:text-accent border border-borderC transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com/in/chaitanya67" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-textMuted hover:text-accent border border-borderC transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:krishnachaithanya312@gmail.com" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-textMuted hover:text-accent border border-borderC transition-colors">
                <Mail size={18} />
              </a>
            </div>
            
            <div className="mt-8 bg-background/50 border border-borderC p-4 rounded-xl flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              <div className="text-sm">
                <p className="text-textMain font-medium">Available for hire</p>
                <p className="text-textMuted text-xs mt-1">Open to new opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-textMuted text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} Madana Venkata Chaitanya Krishna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
