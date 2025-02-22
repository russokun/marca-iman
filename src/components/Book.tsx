'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Book = () => {
  return (
    <section id="book" className="py-20 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/mockup_01.png"
                  alt="Portada del libro Marca Imán"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4 text-brand-forest">El Libro: Marca Imán</h2>
                <p className="text-brand-dark/80 mb-4">
                  Descubre los secretos para construir una marca personal poderosa que atraiga oportunidades y clientes
                  como un imán. Este libro te guiará paso a paso en el proceso de crear, desarrollar y monetizar tu
                  presencia única en el mercado.
                </p>
                <Link href="#cta" className="bg-brand-sage text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-forest transition-colors duration-300">
                  Compra el Libro
                </Link>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Book;
