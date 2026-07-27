import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CalendarComponent from '../components/Calendar';
import CtaBanner from '../components/CtaBanner';

const Calendrier = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CalendarComponent />
        <div className="max-w-6xl mx-auto px-5">
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calendrier;