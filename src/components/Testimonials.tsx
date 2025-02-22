import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "La metodología de Marca Imán transformó completamente mi presencia digital. Los resultados fueron inmediatos.",
      author: "María González",
      role: "Coach Empresarial"
    },
    {
      quote: "Gracias a este programa, logré triplicar mi comunidad en redes y convertirla en clientes reales.",
      author: "Carlos Mendoza",
      role: "Consultor Digital"
    },
    {
      quote: "Una inversión que vale cada centavo. La claridad y estructura del programa son excepcionales.",
      author: "Ana Martínez",
      role: "Emprendedora"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-brand-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-brand-forest">
          Voces de Éxito
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 text-brand-sage text-4xl">"</div>
              <p className="italic text-brand-dark/90 mb-4">
                {testimonial.quote}
              </p>
              <div className="border-t border-brand-sage/30 pt-4">
                <p className="font-semibold text-brand-forest">
                  {testimonial.author}
                </p>
                <p className="text-sm text-brand-dark/70">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;