import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlanningComponent from '../components/Planning';
import CtaBanner from '../components/CtaBanner';

const Planning = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PlanningComponent />
        <div className="max-w-6xl mx-auto px-5">
          <CtaBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Planning;