import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-brand-sage/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-forest">Sobre el Libro y Masterclass</h2>
          <div className="bg-brand-cream p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-950">
              "Marca Imán" es una guía práctica diseñada para ayudarte a construir una marca personal 
              que atraiga oportunidades y conecte de manera auténtica con tu audiencia. A través del libro 
              y la masterclass, descubrirás las estrategias probadas para destacar en el mercado digital 
              y convertir tu presencia en resultados tangibles.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white border border-brand-sage/20 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-brand-forest">El Libro</h3>
                <p className="text-brand-dark/80">
                  Una guía completa con ejercicios prácticos y estrategias accionables para construir tu marca personal.
                </p>
              </div>
              <div className="p-4 bg-white border border-brand-sage/20 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-brand-forest">La Masterclass</h3>
                <p className="text-brand-dark/80">
                  Sesiones interactivas donde profundizaremos en las estrategias del libro con casos prácticos y feedback personalizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;