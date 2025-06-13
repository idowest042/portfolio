import ParticlesUI from '@/Animation/ParticlesUI';
import { ArrowBigUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import Banner from '../../Components/Home/Banner';
import StartProject from '../../Components/Home/StartProject';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../Contact/ContactMe';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Certification from '@/Components/Common/Certification';

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isBottom = window.innerHeight + scrollY >= document.body.offsetHeight;

      if (scrollY > 200 && !isBottom) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Particles */}
      <ParticlesUI />

      <Banner />
      <AboutMe />
      <Skills />
       <Projects />
      <Certification/>
      <div id="contact-me">
        <ContactMe />
      </div>

      <StartProject />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button className="fixed bottom-6 right-3 bg-white dark:bg-dark-lite p-0 rounded-full max-sm:hidden border" onClick={scrollToTop}>
          <ArrowBigUp strokeWidth={1} size={40} className="text-5xl" />
        </button>
      )}
    </div>
  );
};

export default Home;
