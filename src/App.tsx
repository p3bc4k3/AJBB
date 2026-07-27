import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SeoManager from './components/SeoManager';
import CherryBlossomBackground from './components/CherryBlossomBackground';
import Inscription from './pages/Inscription';
import InformationsPratiques from './pages/InformationsPratiques';
import Planning from './pages/Planning';
import Calendrier from './pages/Calendrier';
import Photos from './pages/Photos';
import Quiz from './pages/Quiz';
import LeClub from './pages/LeClub';
import Partenaires from './pages/Partenaires';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <CherryBlossomBackground />
        <SeoManager />
        <Routes>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/informations-pratiques" element={<InformationsPratiques />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/calendrier" element={<Calendrier />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/le-club" element={<LeClub />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;