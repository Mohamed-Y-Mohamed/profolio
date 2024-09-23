import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './App';
import ProjectDetail from './components/project';
import Footer from './components/footer';
import ContactUs from './components/contactus';
import Hero from './components/hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Hero />
    <Routes>
      {/* Home page route */}
      <Route path="/" element={<Home />} />

      {/* Dynamic route for each project */}
      <Route path="/projects" element={<ProjectDetail />} />
      <Route path="/ContactUs" element={<ContactUs />} />

    </Routes>
    <Footer />
  </Router>
);
