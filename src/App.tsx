import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Planning from './components/Planning';
import Calendar from './components/Calendar';
import InfosPratiques from './components/InfosPratiques';
import Locations from './components/Locations';
import Inscription from './components/Inscription';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Planning />
        <Calendar />
        <InfosPratiques />
        <Locations />
        <Inscription />
      </main>
      <Footer />
    </div>
  );
}

export default App;