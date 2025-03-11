
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The story behind Wedding Dreams and our mission
            </p>
          </div>
          
          <div className="py-12 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <p className="text-gray-600">About page content coming soon...</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
