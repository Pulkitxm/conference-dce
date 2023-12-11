import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';
import Carousel from './components/Carousel/Carousel.jsx';
import About from './components/About/About.jsx';
import Dates from './components/Dates/Dates.jsx';
import Speakers from './components/Speaker/Speakers.jsx';
import Call from './components/Call/Call.jsx';
import Registration from './components/Registration/Registration.jsx';
import Contact from './components/Contact/Contact.jsx';

const App = () => {
  const spaceRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const scopeRef = useRef(null);
  const datesRef = useRef(null);
  const speakersRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
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
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar id="nav"
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        scopeRef={scopeRef}
        datesRef={datesRef}
        speakersRef={speakersRef}
      />
      <div ref={homeRef}></div>
      <div className="extra-space" ref={spaceRef}></div>
      <Carousel homeRef={homeRef} />
      {showScrollButton && (
        <img src="https://cdn3.iconfinder.com/data/icons/common-4/24/ui-12-512.png" alt="" id='scrollToTop' draggable='false' onClick={scrollToTop} />
      )}
      <About aboutRef={aboutRef} scopeRef={scopeRef} />
      <Dates datesRef={datesRef} />
      <Speakers speakersRef={speakersRef} />
      <Call />
      <Registration />
      <Contact contactRef={contactRef} />
    </>
  );
};

export default App;
