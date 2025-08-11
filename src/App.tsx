import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Planning from './components/Planning';
import Calendar from './components/Calendar';
import Locations from './components/Locations';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Inscription from './pages/Inscription';
import InformationsPratiques from './pages/InformationsPratiques';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/informations-pratiques" element={<InformationsPratiques />} />
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <Planning />
                <Calendar />
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