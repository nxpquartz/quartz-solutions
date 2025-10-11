'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoRef.current) {
              videoRef.current.play().catch(() => {
                console.log('Autoplay blocked');
              });
            } else if (videoRef.current) {
              videoRef.current.pause();
            }
          });
        },
        { threshold: 0.25 }
      );
      
      observer.observe(videoRef.current);
      
      videoRef.current.addEventListener('canplaythrough', () => {
        setVideoLoaded(true);
      });
      
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, []);
  
  const handleContactClick = () => {
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };
  
  return (
    <section className="relative py-12 md:py-24 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#3752E0] via-[#887CE7] to-[#9597FB]">
      {/* Poster Image - Shows immediately */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-poster.jpg"
          alt="FEAM Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setPosterLoaded(true)}
          loading="eager"
        />
      </div>
      
      {/* Video Background - Lazy loaded */}
      <div className="absolute inset-0 z-1">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          muted
          loop
          playsInline
          preload="none"
          poster="/hero-poster.jpg"
        >
          <source src="/hero-desktop.mp4" type="video/mp4" />
          {/* Add WebM for better compression if you create one */}
          {/* <source src="/hero-desktop.webm" type="video/webm" /> */}
        </video>
      </div>
      
      {/* Background effects layer */}
      <div className="absolute inset-0 pointer-events-none z-2">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#887CE7]/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content layer */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg"
          >
            From Aging Infrastructure to
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-white mt-2 drop-shadow-lg"
            >
              Intelligent Assets
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 max-w-3xl font-light drop-shadow"
          >
            Our FEAM (Facilities Equipment Asset Management) methodology delivers 
            field-verified asset intelligence that saves millions and drives strategic 
            decisions for existing buildings and new construction handovers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('team-action')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 md:px-8 py-3 md:py-4 bg-white text-[#3752E0] rounded-lg font-semibold hover:shadow-2xl transition-all inline-flex items-center justify-center text-sm md:text-base"
            >
              See Our Team in Action
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#3752E0] transition-all text-sm md:text-base"
            >
              Start Your FEAM Journey
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl"
          >
            {[
              { value: '3-6', label: 'Month Implementation' },
              { value: '60', label: 'Day Handover Window' },
              { value: '100%', label: 'Asset Verification' },
              { value: '770+', label: 'Buildings Assessed' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Loading state for video */}
      {!videoLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="animate-pulse text-white text-sm">Optimizing experience...</div>
          </div>
        </div>
      )}
    </section>
  );
}