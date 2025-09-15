import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlanningComponent from '../components/Planning';

const Planning = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PlanningComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Planning;