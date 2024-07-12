import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';

function App() {
  return (
    <main className='main'>
      <Header />
      <Banner />
      <Footer />
    </main>
  );
}

export default App;
