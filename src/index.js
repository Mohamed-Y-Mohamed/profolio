import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './App';
import Footer from './components/footer';
import ContactUs from './components/contactus';
import Hero from './components/hero';
import Header from './components/header';
import ProjectSection from './components/projectcards';
import Loader from './components/loader';  // Import the updated Loader component

function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Trigger the loading state on route change
  useEffect(() => {
    setLoading(true);  // Start loading when the route changes
  }, [location]);

  // Handle when the loader finishes its fade-out
  const handleLoaderFinish = () => {
    setLoading(false);  // Set loading to false after the fade-out animation ends
  };

  return (
    <>
      {loading ? <Loader onFinish={handleLoaderFinish} /> : children}  {/* Show loader or content */}
    </>
  );
}

export default PageWrapper;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Hero />
    <Routes>
      {/* Wrap each route with PageWrapper */}
      <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/ContactUs" element={<PageWrapper><ContactUs /></PageWrapper>} />
      <Route path="/project" element={<PageWrapper><ProjectSection /></PageWrapper>} />
    </Routes>
    <Footer />
  </Router>
);
