'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Masterclass = () => {
    return (
      <section id="masterclass" className="bg-brand-forest py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-brand-cream">Masterclass Marca Imán</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-brand-forest mb-2">Módulo 1: Fundamentos</h3>
                  <p className="text-brand-dark/80">
                    Establece las bases de tu marca personal y define tu propuesta de valor única.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-brand-forest mb-2">Módulo 2: Estrategia</h3>
                  <p className="text-brand-dark/80">
                    Desarrolla una estrategia efectiva para posicionar y promocionar tu marca.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-brand-forest mb-2">Módulo 3: Monetización</h3>
                  <p className="text-brand-dark/80">
                    Aprende a monetizar tu marca personal a través de diferentes canales y oportunidades.
                  </p>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link 
                  href="#cta" 
                  className="bg-brand-sage text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-forest transition-colors duration-300"
                >
                  Inscribete en la masterclass
                </Link>
              </div>
            </div>
          </section>
    );
  };
  
  export default Masterclass;