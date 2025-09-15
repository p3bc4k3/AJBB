import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CalendarComponent from '../components/Calendar';

const Calendrier = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CalendarComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Calendrier;