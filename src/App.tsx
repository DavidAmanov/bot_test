import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Capability from './components/capability/Capability';
import Midjourney from './components/midjourney/Midjourney';

function App() {
  return (
    <main className='main'>
      <Header />
      <Banner />
      <Capability />
      <Midjourney />
      <Footer />
    </main>
  );
}

export default App;
