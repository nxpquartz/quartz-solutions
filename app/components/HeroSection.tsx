'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplaythrough', () => {
        setVideoLoaded(true);
      });
    }
  }, []);
  
  const handleContactClick = () => {
    const event = new CustomEvent('openContactModal');
    window.dispatchEvent(event);
  };
  
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#3752E0] via-[#887CE7] to-[#9597FB]">
      {/* Video Background - if you have one */}
      
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-desktop.mp4" type="video/mp4" />
        </video>
      </div>
    
      
      {/* Background effects layer (from your original) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#887CE7]/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content layer */}
      <div className="max-w-7xl mx-auto px-6 relative z-30">
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
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
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
            className="text-xl text-white mb-8 max-w-3xl font-light drop-shadow"
          >
            Our FEAM (Facilities Equipment Asset Management) methodology delivers 
            field-verified asset intelligence that saves millions and drives strategic 
            decisions for existing buildings and new construction handovers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('team-action')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-white text-[#3752E0] rounded-lg font-semibold hover:shadow-2xl transition-all inline-flex items-center justify-center"
            >
              See Our Team in Action
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#3752E0] transition-all"
            >
              Start Your FEAM Journey
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-yellow-300">3-6</div>
              <div className="text-sm text-white/80">Month Implementation</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-yellow-300">60</div>
              <div className="text-sm text-white/80">Day Handover Window</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-yellow-300">100%</div>
              <div className="text-sm text-white/80">Asset Verification</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-yellow-300">770+</div>
              <div className="text-sm text-white/80">Buildings Assessed</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}