import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Mail, Sun, Moon } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleDownloadCV = () => {
    fetch('/chinnu_cv.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Madana_V_Chaitanya_Krishna_CV.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(err => console.error('Download failed:', err));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Training', to: 'training' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Education', to: 'education' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-md shadow-lg border-b border-borderC' : 'bg-transparent py-2'}`}>
      <div className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold font-serif text-accent tracking-wider">MVCK</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-5 mr-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  smooth={true} 
                  duration={500} 
                  offset={-70}
                  className="text-xs font-bold hover:text-accent transition-colors cursor-pointer uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3 border-l border-borderC pl-6">
            <button 
              onClick={toggleTheme} 
              className="w-9 h-9 flex items-center justify-center rounded-full bg-borderC/30 text-textMuted hover:text-accent transition-colors border border-borderC/50 mr-1"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <button onClick={handleDownloadCV} className="btn-outline h-9 px-5 py-0 text-xs flex items-center justify-center whitespace-nowrap">
              Download CV
            </button>
            <a href="#contact" className="btn-primary h-9 px-5 py-0 text-xs flex items-center justify-center whitespace-nowrap">
              Contact Me
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-textMain hover:text-accent transition" onClick={toggleNav}>
          {navOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface shadow-xl border-b border-borderC flex flex-col items-center py-6 space-y-5">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              smooth={true} 
              duration={500} 
              offset={-70}
              onClick={toggleNav}
              className="text-lg font-medium hover:text-accent transition-colors cursor-pointer uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="flex items-center gap-2 p-2 rounded-full bg-borderC/30 text-textMain transition-colors border border-borderC/50"
          >
            {theme === 'dark' ? <><Sun size={18} /><span className="text-sm">Light Mode</span></> : <><Moon size={18} /><span className="text-sm">Dark Mode</span></>}
          </button>

          <button onClick={() => { handleDownloadCV(); toggleNav(); }} className="btn-outline w-2/3 text-center mt-2">Download CV</button>
          <a href="#contact" onClick={toggleNav} className="btn-primary w-2/3 text-center mt-2">Contact Me</a>
          
          <div className="flex space-x-6 pt-4 border-t border-borderC w-2/3 justify-center">
            <a href="https://github.com/chaitanyakrishnamadana" target="_blank" rel="noreferrer" className="text-textMuted hover:text-accent"><FaGithub size={24}/></a>
            <a href="https://linkedin.com/in/chaitanya67" target="_blank" rel="noreferrer" className="text-textMuted hover:text-accent"><FaLinkedin size={24}/></a>
            <a href="mailto:krishnachaithanya312@gmail.com" className="text-textMuted hover:text-accent"><Mail size={24}/></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
