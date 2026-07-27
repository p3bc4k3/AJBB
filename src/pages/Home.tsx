import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Locations from '../components/Locations';
import Sponsors from '../components/Sponsors';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HEADER_HEIGHT = 80;

const Home = () => {
  useEffect(() => {
    if (!window.location.hash) return;

    const id = window.location.hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.offsetTop - HEADER_HEIGHT;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Locations />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
