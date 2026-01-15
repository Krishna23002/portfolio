import React from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Home from './Section/Home.jsx';
import About from './Section/About.jsx';
import Project from './Section/Project.jsx';
import Contact from './Section/Contact.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
