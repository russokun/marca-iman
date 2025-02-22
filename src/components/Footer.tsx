'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const [currentYear, setCurrentYear] = React.useState(2024);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-brand-dark text-brand-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Marca Imán</h3>
            <p className="text-brand-cream/80">
              Transformando personas en marcas magnéticas que atraen éxito.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Contacto</h3>
            <a 
              href="mailto:contacto@marcaiman.com" 
              className="block hover:text-brand-sage transition-colors mb-2"
            >
              contacto@marcaiman.com
            </a>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com" 
                className="text-brand-cream hover:text-brand-sage transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
              <Link 
                href="https://instagram.com" 
                className="text-brand-cream hover:text-brand-sage transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
              <Link 
                href="https://twitter.com" 
                className="text-brand-cream hover:text-brand-sage transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-sage/20 pt-8 text-center text-brand-cream/60">
          <p>© {currentYear} Marca Imán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;