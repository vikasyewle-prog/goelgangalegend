import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SmoothScroll from './components/SmoothScroll';
import PageLoader from './components/PageLoader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Overview from './components/Overview';
import About from './components/About';
import Amenities from './components/Amenities';
import SportsAcademies from './components/SportsAcademies';
import Gallery from './components/Gallery';
import MasterLayout from './components/MasterLayout';
import FloorPlans from './components/FloorPlans';
import ROIHub from './components/ROIHub';
import Location from './components/Location';
import InfrastructureTracker from './components/InfrastructureTracker';
import Testimonials from './components/Testimonials';
import Developer from './components/Developer';
import ProjectMonograph from './components/ProjectMonograph';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import EnquiryModal from './components/EnquiryModal';
import ConstructionTracker from './components/ConstructionTracker';
import Specifications from './components/Specifications';
import ProjectCinema from './components/ProjectCinema';
import { SocialProofToast, ExitIntent, TimedCTA } from './components/ConversionEngine';
import SiloPage from './pages/SiloPage';
import NotFound from './pages/NotFound';
import ArticlePage from './pages/ArticlePage';
import SEO from './components/SEO';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Home = () => (
  <>
    <SEO 
      title="Goel Ganga Legend County | Luxury 3 & 3.5 BHK Sports Township, Bavdhan Pune"
      description="Discover Pune's premier 30-acre sports-first township. Luxury 3 & 3.5 BHK residences starting ₹1.77 Cr* with 9+ international sports academies."
      keywords="Goel Ganga Legend County, Luxury Flats Bavdhan, 3 BHK Pune, Sports Township Pune, Stadium Life Bavdhan"
    />
    <Hero />
    <Trust />
    <Overview />
    <About />
    <Amenities />
    <SportsAcademies />
    <Gallery />
    <ProjectCinema />
    <MasterLayout />
    <FloorPlans />
    <Specifications />
    <ROIHub />
    <Location />
    <InfrastructureTracker />
    <ConstructionTracker />
    <Testimonials />
    <ProjectMonograph />
    <BlogSection />
    <Developer />
    <Contact />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <SmoothScroll>
          <PageLoader />
          <ScrollProgress />
          <div className="grain" />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/insights/:slug" element={<ArticlePage />} />
              <Route path="/:slug" element={<SiloPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />

          {/* Conversion Layer */}
          <StickyCTA />
          <EnquiryModal />
          <SocialProofToast />
          <ExitIntent />
          <TimedCTA />
        </SmoothScroll>
      </Router>
    </HelmetProvider>
  );
}

export default App;
