import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Book from '../components/Book';
import Masterclass from '../components/Masterclass';

export const metadata = {
  title: 'Marca Imán - Conecta, Lidera y Monetiza',
  description: 'Guía práctica para convertirte en una marca personal exitosa. Inscríbete en la masterclass y descubre los secretos del libro Marca Imán.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Marca Imán - Conecta, Lidera y Monetiza',
    description: 'Guía práctica para convertirte en una marca personal exitosa. Inscríbete en la masterclass y descubre los secretos del libro Marca Imán.',
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Header />
      <Hero />
      <About />
      <Book />
      <Masterclass />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
