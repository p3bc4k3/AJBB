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

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/informations-pratiques" element={<InformationsPratiques />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/calendrier" element={<Calendrier />} />
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