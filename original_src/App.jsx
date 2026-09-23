import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Industries from './components/Industries';
import FeaturedProduct from './components/FeaturedProduct';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import AboutPage from './components/pages/AboutPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';

import ArtificialIntelligencePage from './components/pages/ArtificialIntelligencePage';
import SaaSDevelopmentPage from './components/pages/SaaSDevelopmentPage';
import MobileAppsPage from './components/pages/MobileAppsPage';
import WebDevelopmentPage from './components/pages/WebDevelopmentPage';

import UIUXDesignPage from './components/pages/UIUXDesignPage';
import AutomationPage from './components/pages/AutomationPage';
import DigitalMarketingPage from './components/pages/DigitalMarketingPage';
import DataAnalyticsPage from './components/pages/DataAnalyticsPage';

function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <Services />
        <Industries />
        <FeaturedProduct />
        <Stats />
        <WhyChoose />
        <Process />
        <Portfolio />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <ScrollProgress />

        <Navbar />

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <main id="main-content">
                <AboutPage />
              </main>
            }
          />

          {/* BLOG */}
          <Route
            path="/blog"
            element={
              <main id="main-content">
                <BlogPage />
              </main>
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <main id="main-content">
                <ContactPage />
              </main>
            }
          />

          {/* SERVICES */}

          <Route
            path="/services/artificial-intelligence"
            element={
              <main id="main-content">
                <ArtificialIntelligencePage />
              </main>
            }
          />

          <Route
            path="/services/saas-development"
            element={
              <main id="main-content">
                <SaaSDevelopmentPage />
              </main>
            }
          />

          <Route
            path="/services/mobile-apps"
            element={
              <main id="main-content">
                <MobileAppsPage />
              </main>
            }
          />

          <Route
            path="/services/web-development"
            element={
              <main id="main-content">
                <WebDevelopmentPage />
              </main>
            }
          />

          <Route
            path="/services/ui-ux-design"
            element={
              <main id="main-content">
                <UIUXDesignPage />
              </main>
            }
          />

          <Route
            path="/services/automation"
            element={
              <main id="main-content">
                <AutomationPage />
              </main>
            }
          />

          <Route
            path="/services/digital-marketing"
            element={
              <main id="main-content">
                <DigitalMarketingPage />
              </main>
            }
          />

          <Route
            path="/services/data-analytics"
            element={
              <main id="main-content">
                <DataAnalyticsPage />
              </main>
            }
          />

        </Routes>

        <Footer />

        <BackToTop />

      </div>

    </BrowserRouter>
  );
}

export default App;