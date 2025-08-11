import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Planning from './components/Planning';
import Calendar from './components/Calendar';
import Locations from './components/Locations';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Planning />
        <Calendar />
        <Locations />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;