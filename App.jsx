import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ScrollToTopButton from './components/ScrollToTopButton';
import About from './components/About';

function App(){
  return (
    <>
     <Navbar />
     <HeroSection />
     <About/>
     <Services />
     <Packages />
     <Testimonials />
     <Contact />
     <Footer />
     <ScrollToTopButton />
    </>
    
  );
}

export default App;
