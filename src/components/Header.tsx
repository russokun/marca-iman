'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-brand-cream shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo Marca Imán" width={50} height={50} />
          <span className="ml-2 font-bold text-xl text-brand-forest">Marca Imán</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#hero" className="text-brand-forest hover:text-brand-sage transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-brand-forest hover:text-brand-sage transition-colors">
                Sobre el Libro
              </Link>
            </li>
            <li>
              <Link href="#benefits" className="text-brand-forest hover:text-brand-sage transition-colors">
                Beneficios
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-brand-forest hover:text-brand-sage transition-colors">
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