import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './App';
import Footer from './components/footer';
import ContactUs from './components/contactus';
import Hero from './components/hero';
import Header from './components/header';
import ProjectSection from './components/projectcards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Hero />
    <Routes>
      {/* Home page route */}
      <Route path="/" element={<Home />} />

      {/* Dynamic route for each project */}
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/project" element={<ProjectSection />} />

    </Routes>
    <Footer />
  </Router>
);
