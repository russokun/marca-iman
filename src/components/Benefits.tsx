import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: "Conexión Auténtica",
      description: "Desarrolla una presencia que resuene genuinamente con tu audiencia ideal.",
      icon: "🎯"
    },
    {
      title: "Liderazgo de Mercado",
      description: "Posiciónate como referente en tu nicho y construye autoridad.",
      icon: "👑"
    },
    {
      title: "Monetización Efectiva",
      description: "Transforma tu influencia en oportunidades de negocio concretas.",
      icon: "💎"
    },
    {
      title: "Estrategia Digital",
      description: "Domina las herramientas digitales para amplificar tu mensaje.",
      icon: "🚀"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-brand-sage/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-brand-forest">
          Beneficios de Marca Imán
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-6 bg-brand-cream rounded-lg hover:shadow-lg transition-shadow duration-300 border border-brand-sage/20"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-forest">
                {benefit.title}
              </h3>
              <p className="text-brand-dark/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;