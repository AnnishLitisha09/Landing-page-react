import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopDestinations from './components/TopDestinations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <TopDestinations />
      <Footer />
    </div>
  );
}

export default App;