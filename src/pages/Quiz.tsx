import React from 'react';
import Header from '../components/Header';

const Quiz = () => (
  <>
    <Header />
    <iframe
      src="https://quizz.sharejudo.com"
      title="Quiz Culture Judo"
      allow="clipboard-write"
      style={{
        position: 'fixed',
        top: 64,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: 'calc(100dvh - 64px)',
        border: 'none',
        display: 'block',
      }}
    />
  </>
);

export default Quiz;
