import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, X, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Certificates list updated with the provided Google Drive IDs
  const certificates = [
    {
      id: 1,
      title: "The complete Full Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2025",
      videoId: "1mIEVsTjDqMbwZK4NAMeVulxx6WgORL0q",
      link: "https://drive.google.com/file/d/1mIEVsTjDqMbwZK4NAMeVulxx6WgORL0q/view"
    },
    {
      id: 2,
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2025",
      videoId: "1H2UI-6qUSQAFAgtVrHRwul4crha1d5gb",
      link: "https://drive.google.com/file/d/1H2UI-6qUSQAFAgtVrHRwul4crha1d5gb/view"
    },
    {
      id: 3,
      title: "Network communication",
      issuer: "Coursera",
      date: "2025",
      videoId: "1aUaWNGU08n8B35iC_aHdZCJsQ1aM2h6a",
      link: "https://drive.google.com/file/d/1aUaWNGU08n8B35iC_aHdZCJsQ1aM2h6a/view"
    },
    {
      id: 4,
      title: "Introduction as Hardware and Operating Systems",
      issuer: "Certificate",
      date: "2025",
      videoId: "1--2eUgw2mlKyX1j9sit37b6alvwmuUeA",
      link: "https://drive.google.com/file/d/1--2eUgw2mlKyX1j9sit37b6alvwmuUeA/view"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-surface/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">Credentials</span>
          <h2 className="heading-large">Certificates<span className="text-accent">.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-background border border-borderC rounded-xl overflow-hidden group hover:border-accent/50 transition-colors flex flex-col"
            >
              <div 
                className="h-48 bg-surface relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <img 
                  src={`https://drive.google.com/thumbnail?id=${cert.videoId}&sz=w800`} 
                  alt={cert.title} 
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-textMuted font-mono text-xs border-b border-borderC p-4 text-center -z-10">
                  <Award size={32} className="mb-2 opacity-50" />
                  Loading preview...
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-background font-bold">
                    <Eye size={20} /> Preview
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-accent font-mono text-xs block mb-1">{cert.date}</span>
                <h3 className="font-bold font-serif text-lg mb-1">{cert.title}</h3>
                <p className="text-textMuted text-sm mb-4">{cert.issuer}</p>
                <div className="mt-auto">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-textMain transition-colors"
                  >
                    Open Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-textMain hover:text-accent transition-colors"
            onClick={() => setSelectedCert(null)}
          >
            <X size={36} />
          </button>
          
          <div className="max-w-4xl w-full max-h-[90vh] bg-surface rounded-xl overflow-hidden border border-borderC flex flex-col">
            <div className="w-full h-[60vh] bg-background relative flex items-center justify-center">
              <img 
                src={`https://drive.google.com/thumbnail?id=${selectedCert.videoId}&sz=w1500`} 
                alt={selectedCert.title}
                className="max-w-full max-h-full object-contain p-4"
              />
            </div>
            <div className="p-6 bg-background border-t border-borderC flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold font-serif mb-1">{selectedCert.title}</h3>
                <p className="text-textMuted text-sm">{selectedCert.issuer}</p>
              </div>
              <a 
                href={selectedCert.link} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary flex justify-center items-center gap-2"
              >
                External Preview <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
