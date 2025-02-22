'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar el menú cuando se redimensiona la pantalla a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brand-cream shadow-md relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo Marca Imán" width={50} height={50} />
          <span className="ml-2 font-bold text-xl text-brand-forest">Marca Imán</span>
        </div>

        {/* Botón hamburguesa - visible solo en móvil */}
        <button 
          className="md:hidden text-brand-forest hover:text-brand-sage transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6 transform transition-transform duration-300"
          >
            {isMenuOpen ? (
              // Ícono X para cerrar
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Ícono de menú hamburguesa
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>

        {/* Navegación */}
        <nav className={`
          absolute left-0 right-0 top-full
          md:relative md:top-auto md:block
          transition-all duration-300 ease-in-out
          transform
          ${isMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-2 invisible md:opacity-100 md:translate-y-0 md:visible'}
          bg-brand-cream md:bg-transparent
          shadow-lg md:shadow-none
          z-50
        `}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0">
            <li>
              <Link 
                href="#hero" 
                className="text-brand-forest hover:text-brand-sage transition-colors duration-300 block text-center md:inline"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="text-brand-forest hover:text-brand-sage transition-colors duration-300 block text-center md:inline"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre el Libro
              </Link>
            </li>
            <li>
              <Link 
                href="#benefits" 
                className="text-brand-forest hover:text-brand-sage transition-colors duration-300 block text-center md:inline"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </Link>
            </li>
            <li>
              <Link 
                href="#testimonials" 
                className="text-brand-forest hover:text-brand-sage transition-colors duration-300 block text-center md:inline"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;