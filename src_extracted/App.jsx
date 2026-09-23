import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Industries from './components/Industries';
import FeaturedProduct from './components/FeaturedProduct';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Industries />
      <FeaturedProduct />
      <WhyChoose />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
