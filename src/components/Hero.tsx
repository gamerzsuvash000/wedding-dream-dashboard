
import React, { useEffect, useRef } from 'react';
import Search from './Search';

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      
      const { clientX, clientY } = e;
      const xValue = clientX / window.innerWidth;
      const yValue = clientY / window.innerHeight;
      
      // Subtle parallax effect
      bgRef.current.style.transform = `translate(${xValue * -20}px, ${yValue * -20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Parallax Effect */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop")',
          backgroundSize: 'cover',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-wedding-pink/90 to-white/60 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 animate-fade-in">
          Wedding Management Dashboard
        </h1>
        
        <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Simplify your wedding planning process with our elegant dashboard. Manage everything from videos to albums in one beautiful place.
        </p>
        
        <div 
          className="w-full max-w-3xl animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Hero;
