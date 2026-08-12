import Header from './components/Header';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import Products from './components/Products';
import Heritage from './components/Heritage';
import Benefits from './components/Benefits';
import ProjectGallery from './components/ProjectGallery';
import BeforeAfter from './components/BeforeAfter';
import InstallationProcess from './components/InstallationProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedCompanies />
        <Products />
        <Heritage />
        <Benefits />
        <ProjectGallery />
        <BeforeAfter />
        <InstallationProcess />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <GoogleMap />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
