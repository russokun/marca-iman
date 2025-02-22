'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-b from-brand-sage/20 to-brand-cream py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6 text-brand-forest">
          Conviértete en una <span className="text-brand-dark">Marca Imán</span>
        </h1>
        <p className="text-xl mb-8 text-brand-dark max-w-2xl mx-auto">
          Descubre los secretos para conectar, liderar y monetizar con éxito tu marca personal.
        </p>
        <Link 
          href="#cta" 
          className="bg-brand-forest text-brand-cream px-8 py-4 rounded-full font-semibold hover:bg-brand-sage transition-colors duration-300 inline-block"
        >
          Únete a la Masterclass
        </Link>
      </div>
    </section>
  );
};

export default Hero;