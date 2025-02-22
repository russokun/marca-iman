'use client';

import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-brand-forest">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand-cream">
          ¿Lista para Convertirte en una Marca Imán?
        </h2>
        <p className="text-xl mb-8 text-brand-cream/90 max-w-2xl mx-auto">
          Únete a nuestra masterclass y descubre cómo transformar tu presencia digital en una marca magnética.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center items-center">
          <Link 
            href="/inscripcion" 
            className="bg-brand-cream text-brand-forest px-10 py-4 rounded-full font-semibold hover:bg-brand-sage hover:text-brand-cream transition-all duration-300 inline-block"
          >
            Inscribirme Ahora
          </Link>
          <Link 
            href="#about" 
            className="bg-transparent border-2 border-brand-cream text-brand-cream px-10 py-4 rounded-full font-semibold hover:bg-brand-sage/20 transition-all duration-300 inline-block"
          >
            Saber Más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;