import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Locations from './components/Locations';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Inscription from './pages/Inscription';
import InformationsPratiques from './pages/InformationsPratiques';
import Planning from './pages/Planning';
import Calendrier from './pages/Calendrier';
import Photos from './pages/Photos';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen">
        <Routes>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/informations-pratiques" element={<InformationsPratiques />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/calendrier" element={<Calendrier />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/" element={
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
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;