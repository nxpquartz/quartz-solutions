// app/page.tsx - Quartz Solutions FEAM-focused landing page
'use client';
import toast, { Toaster } from 'react-hot-toast';
import HeroSection from './components/HeroSection';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Building2, FileText, Database, Users, Clock, 
  ArrowRight, ChevronRight, Menu, X, TrendingUp,
  AlertCircle, CheckCircle, Shield, Briefcase,
  FileWarning, Target, Layers, Award, ChevronDown,
  Mail, Globe, MapPin, Sparkles, Zap, BarChart,
  GitBranch, Cpu, Package, DollarSign, RefreshCw, 
  Landmark, Camera, ClipboardCheck, Wrench, HardHat,
  Building, CheckSquare, FileSearch, Hash, QrCode,
  BookOpen, Settings, GraduationCap, HeadphonesIcon
} from 'lucide-react';

interface ContactFormData {
  // Required fields
  organization: string;
  name: string;
  email: string;
  role: string;
  facilitySize: string;
  primaryInterest: string;
  
  // Optional fields
  timeline: string;
  currentSystems: string;
  painPoints: string[];
  referralSource: string;
  message: string;
}

export default function QuartzSolutions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeService, setActiveService] = useState<string>('existing');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactFormData>({
    organization: '',
    name: '',
    email: '',
    role: '',
    facilitySize: '',
    primaryInterest: '',
    timeline: '',
    currentSystems: '',
    painPoints: [],
    referralSource: '',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenContactModal = () => {
      setShowContactModal(true);
    };
    
    window.addEventListener('openContactModal', handleOpenContactModal);
    
    return () => {
      window.removeEventListener('openContactModal', handleOpenContactModal);
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

// Validate email
  if (!validateEmail(formData.email)) {
    toast.error('Please enter a valid email address');
    return;
  }

      setFormSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      toast.success('Thank you! We\'ll contact you within one business day.');
      setFormSubmitted(true);
      setTimeout(() => {
        setShowContactModal(false);
        setFormSubmitted(false);
        // Reset form
        setFormData({
          organization: '',
          name: '',
          email: '',
          role: '',
          facilitySize: '',
          primaryInterest: '',
          timeline: '',
          currentSystems: '',
          painPoints: [],
          referralSource: '',
          message: ''
        });
      }, 2000);
    } else {
      toast.error('Something went wrong. Please try again or email us directly.');
    }
  } catch (error) {
    toast.error('Connection error. Please check your internet and try again.');
  } finally {
    setFormSubmitting(false);
  }
};

  // FEAM Process Steps with enhanced colors
  const feamSteps = [
    { 
      phase: 'Planning', 
      icon: ClipboardCheck,
      description: 'Strategic assessment and roadmap development',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      phase: 'Asset Verification', 
      icon: Camera,
      description: 'Comprehensive site survey and documentation',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      phase: 'Data Reconciliation', 
      icon: Database,
      description: 'Asset record validation and register development',
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      phase: 'Physical Tagging', 
      icon: QrCode,
      description: 'On-site asset tagging with QR code labels',
      color: 'from-violet-500 to-violet-600'
    },
    { 
      phase: 'Digital Integration', 
      icon: GitBranch,
      description: 'System integration and document linking',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  // Team in action photos - using optimized versions
  const teamPhotos = [
    { src: '/optimized_IMG_0166.jpg', caption: 'Asset Verification in Mechanical Rooms' },
    { src: '/optimized_IMG_0169.jpg', caption: 'MEP Equipment Documentation' },
    { src: '/optimized_IMG_0213.jpg', caption: 'Rooftop Equipment Survey' },
    { src: '/optimized_IMG_0238.jpg', caption: 'Critical Asset Identification' },
    { src: '/optimized_IMG_1735.jpg', caption: 'Field Data Collection' },
    { src: '/optimized_IMG_1831.jpg', caption: 'Asset Tagging Process' },
    { src: '/optimized_IMG_5689.jpg', caption: 'Equipment Condition Assessment' },
    { src: '/optimized_IMG_9603.jpg', caption: 'Digital Documentation Capture' }
  ];

  return (
    <div className="min-h-screen bg-white">
<Toaster 
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        success: {
          iconTheme: {
            primary: '#10b981',
            secondary: '#fff',
          },
        },
      }}
    />

{/* Navigation */}
<header className={`sticky top-0 z-50 transition-all duration-300 ${
  scrolled 
    ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
    : 'bg-white/80 backdrop-blur-md'
} border-b border-gray-200`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
    <div className="flex items-center justify-between">
      <a href="/" className="block flex-shrink-0">
        <img 
          src="/Quartz-Logo-Design-10.png"
          alt="Quartz Consulting Group"
          className="h-6 sm:h-7 md:h-8 w-auto"
        />
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
        <a href="#feam-process" className="text-sm lg:text-base text-gray-700 hover:text-[#3752E0] font-medium transition-colors whitespace-nowrap">
          FEAM Process
        </a>
        <a href="#services" className="text-sm lg:text-base text-gray-700 hover:text-[#3752E0] font-medium transition-colors">
          Services
        </a>
        <a href="#team-action" className="text-sm lg:text-base text-gray-700 hover:text-[#3752E0] font-medium transition-colors whitespace-nowrap">
          Our Team
        </a>
        <button 
          onClick={() => setShowContactModal(true)}
          className="px-4 lg:px-6 py-2 bg-gradient-to-r from-[#3752E0] to-[#887CE7] text-white rounded-lg hover:shadow-lg transition-all font-medium text-sm lg:text-base whitespace-nowrap"
        >
          Start Your Assessment
        </button>
      </nav>
      
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  </div>
</header>

{/* Mobile Menu - Improved */}
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="lg:hidden bg-white border-b border-gray-200 shadow-lg"
    >
      <div className="px-4 py-4 space-y-3">
        <a 
          href="#feam-process" 
          onClick={() => setMobileMenuOpen(false)}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#3752E0] rounded-lg font-medium transition-colors"
        >
          FEAM Process
        </a>
        <a 
          href="#services" 
          onClick={() => setMobileMenuOpen(false)}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#3752E0] rounded-lg font-medium transition-colors"
        >
          Services
        </a>
        <a 
          href="#team-action" 
          onClick={() => setMobileMenuOpen(false)}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#3752E0] rounded-lg font-medium transition-colors"
        >
          Our Team
        </a>
        <button 
          onClick={() => {
            setMobileMenuOpen(false);
            setShowContactModal(true);
          }}
          className="w-full px-4 py-3 bg-gradient-to-r from-[#3752E0] to-[#887CE7] text-white rounded-lg font-medium transition-all hover:shadow-lg"
        >
          Start Your Assessment
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Hero Section - Using the new HeroSection component */}
      <HeroSection />

      {/* FEAM Process Section - Enhanced with more color */}
      <section id="feam-process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                The FEAM Process Model
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3752E0] to-[#887CE7]">
                  {' '}That Delivers Results
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven five-phase methodology transforms facility data into strategic intelligence, 
                whether for existing portfolios or new construction handovers.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#3752E0] via-[#887CE7] to-[#9597FB] hidden md:block"></div>
            
            <div className="space-y-8">
              {feamSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`bg-white rounded-xl p-6 shadow-xl border-2 border-opacity-50 ${
                      idx % 2 === 0 ? 'md:text-right border-purple-300' : 'md:text-left border-blue-300'
                    }`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Phase {idx + 1}: {step.phase}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FEAM Value Props with enhanced visuals */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                For Existing Portfolios
              </h3>
              <p className="text-gray-600 mb-4">
                Level-set your entire portfolio with verified asset intelligence. Perfect for:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Aging infrastructure requiring strategic renewal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Budget constraints demanding data-driven decisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Compliance requirements across multiple facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50 rounded-2xl p-8 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <HardHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                For New Construction
              </h3>
              <p className="text-gray-600 mb-4">
                Capture critical asset data during the 60-day handover window:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Initial verification at 75% MEP completion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full documentation at 100% MEP completion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Final tagging before owner acceptance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team in Action Section */}
<section id="team-action" className="py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
        Our Team
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3752E0] to-[#887CE7]">
          {' '}in Action
        </span>
      </h2>
      <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
        From mechanical rooms to rooftops, our certified technicians capture 
        every critical asset in your facility.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
      {teamPhotos.map((photo, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          className="group relative overflow-hidden rounded-lg shadow-lg"
        >
          <div className="aspect-square relative bg-gray-100">
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                <p className="text-white text-xs md:text-sm font-medium">{photo.caption}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Enterprise Shield Section */}
    <div className="mt-8 md:mt-12 bg-gradient-to-r from-[#3752E0] to-[#887CE7] rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center">
      <Shield className="h-10 w-10 md:h-12 md:w-12 text-white/80 mx-auto mb-3 md:mb-4" />
      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Enterprise-Scale Experience</h3>
      <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
        Our team brings decades of combined experience in facilities management, 
        engineering, and technology integration to every project.
      </p>
    </div>
  </div>
</section>

      {/* Services Section - Updated */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Comprehensive Services for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3752E0] to-[#887CE7]">
                {' '}Enterprise Facilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions designed for large-scale institutional portfolios
            </p>
          </div>

          {/* Service Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveService('existing')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeService === 'existing'
                  ? 'bg-gradient-to-r from-[#3752E0] to-[#887CE7] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Existing Building Intelligence
            </button>
            <button
              onClick={() => setActiveService('construction')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeService === 'construction'
                  ? 'bg-gradient-to-r from-[#3752E0] to-[#887CE7] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Construction Handover
            </button>
            <button
              onClick={() => setActiveService('technology')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeService === 'technology'
                  ? 'bg-gradient-to-r from-[#3752E0] to-[#887CE7] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Post-FEAM Support
            </button>
          </div>

          {/* Active Service Display */}
          <AnimatePresence mode="wait">
            {activeService === 'existing' && (
              <motion.div
                key="existing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-5xl mx-auto"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <Building2 className="h-12 w-12 text-[#3752E0] flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">
                        Existing Building Intelligence
                      </h3>
                      <p className="text-lg text-[#3752E0] font-medium">
                        Transform your aging infrastructure into strategic assets
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8">
                    Comprehensive FEAM implementation for existing portfolios, providing complete 
                    asset visibility and intelligence across your entire facility ecosystem.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Package className="h-5 w-5 text-[#3752E0] mr-2" />
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Field Verified Asset Inventory Register</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Physical asset tagging with durable aluminum QR code labels engineered for 20+ year outdoor life</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">CMMS integration & data migration</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Digital document linking (warranties, O&M)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Clock className="h-5 w-5 text-[#887CE7] mr-2" />
                          Timeline
                        </h4>
                        <p className="text-gray-700">3-6 months depending on portfolio size</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Target className="h-5 w-5 text-[#887CE7] mr-2" />
                          Ideal For
                        </h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Facilities with aging infrastructure</li>
                          <li>• Organizations facing compliance audits</li>
                          <li>• Portfolios requiring capital planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#3752E0] to-[#887CE7] rounded-lg p-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Enterprise pricing based on portfolio size and complexity</span>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeService === 'construction' && (
              <motion.div
                key="construction"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-5xl mx-auto"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <HardHat className="h-12 w-12 text-[#3752E0] flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">
                        Construction Handover Intelligence
                      </h3>
                      <p className="text-lg text-[#3752E0] font-medium">
                        Capture asset intelligence from Day One
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8">
                    Strategic asset data capture during the critical 60-day substantial 
                    completion window, ensuring seamless transition from construction to operations.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Wrench className="h-5 w-5 text-[#3752E0] mr-2" />
                        Process Milestones
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Initial walk at 75% MEP completion</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Verification at 100% MEP completion</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Final tagging and documentation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Handover to facilities management</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Clock className="h-5 w-5 text-[#887CE7] mr-2" />
                          Critical Window
                        </h4>
                        <p className="text-gray-700">60-day substantial completion period</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <FileText className="h-5 w-5 text-[#887CE7] mr-2" />
                          Documentation Integration
                        </h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Critical O&M manual integration</li>
                          <li>• Warranty document organization</li>
                          <li>• Integration into client's chosen repository</li>
                          <li>• Complete asset inventory register</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#3752E0] to-[#887CE7] rounded-lg p-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Protect your investment from day one of operations</span>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeService === 'technology' && (
              <motion.div
                key="technology"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-5xl mx-auto"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <Settings className="h-12 w-12 text-[#3752E0] flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">
                        Post-FEAM Support & Optimization
                      </h3>
                      <p className="text-lg text-[#3752E0] font-medium">
                        Sustain and enhance your asset intelligence investment
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8">
                    After FEAM implementation, we provide comprehensive support to ensure your 
                    organization maximizes the value of your asset intelligence system through 
                    proper procedures, training, and ongoing optimization.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="h-5 w-5 text-[#3752E0] mr-2" />
                        Operational Excellence
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Asset Change Management protocols</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Asset Decommissioning procedures</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Standard Operating Procedures (SOPs)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Quality assurance frameworks</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <GraduationCap className="h-5 w-5 text-[#887CE7] mr-2" />
                          Training & Support
                        </h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Staff training programs</li>
                          <li>• System optimization guidance</li>
                          <li>• Ongoing technical support</li>
                          <li>• Best practices documentation</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Database className="h-5 w-5 text-[#887CE7] mr-2" />
                          Platform Integration
                        </h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Platform-agnostic CMMS/CAFM integration</li>
                          <li>• Capital planning tool connectivity</li>
                          <li>• Reporting dashboard development</li>
                          <li>• Data quality maintenance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#3752E0] to-[#887CE7] rounded-lg p-4 text-white">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Ensure long-term success with comprehensive support</span>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Value Proposition Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Enterprise Organizations
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3752E0] to-[#887CE7]">
                {' '}Choose FEAM
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing the critical challenges facing large-scale facility portfolios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <AlertCircle className="h-8 w-8 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">Aging Infrastructure</h3>
                <p className="text-gray-600 text-sm group-hover:text-white/90 transition-colors">
                  Strategic renewal planning based on verified asset conditions and life cycles
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <DollarSign className="h-8 w-8 text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">Budget Constraints</h3>
                <p className="text-gray-600 text-sm group-hover:text-white/90 transition-colors">
                  Data-driven prioritization to maximize impact of limited capital resources
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Shield className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">Compliance Requirements</h3>
                <p className="text-gray-600 text-sm group-hover:text-white/90 transition-colors">
                  Complete audit trails and documentation for regulatory compliance
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Users className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">Enrollment Pressures</h3>
                <p className="text-gray-600 text-sm group-hover:text-white/90 transition-colors">
                  Optimize facilities to support modern programs and student expectations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3752E0] via-[#887CE7] to-[#9597FB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Facilities?
              <span className="block mt-2">Start with FEAM.</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join leading institutions leveraging field-verified asset intelligence 
              to drive strategic decisions and operational excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowContactModal(true)}
                className="group px-8 py-4 bg-white text-[#3752E0] rounded-lg font-semibold hover:shadow-2xl transition-all inline-flex items-center justify-center"
              >
                Schedule Your FEAM Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-sm text-white/60 mt-8">
              Enterprise solutions for education, healthcare, and government facilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer - Updated */}
      <footer className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <img 
                src="/Quartz-Logo-Design-08.png"
                alt="Quartz Consulting Group"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-600 mb-4">
                Facilities Equipment Asset Management (FEAM) services for enterprise facility portfolios.
              </p>
              <p className="text-sm text-gray-500">
                Transforming facilities through field-verified intelligence.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>FEAM - Existing Portfolios</li>
                <li>Construction Handover</li>
                <li>Post-FEAM Support</li>
                <li>Training & SOPs</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Get Started</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#3752E0]" />
                  <span>info@quartz.solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#3752E0]" />
                  <span>quartz.solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#3752E0]" />
                  <span>HQ: Long Beach, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2025 Quartz Consulting Group • A Division of Network Transformation Partners, Inc.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal - Complete and Fixed */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowContactModal(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {formSubmitted ? (
                <div className="p-12 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your information and will contact you within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="p-8 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Start Your FEAM Assessment</h3>
                        <p className="text-gray-600 mt-1">Tell us about your facility portfolio</p>
                      </div>
                      <button
                        onClick={() => setShowContactModal(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="h-6 w-6 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleFormSubmit} className="p-8 space-y-6">
                    {/* Required Fields Section */}
                    <div className="pb-4 border-b border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-4">Required Information</h4>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Organization *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.organization}
                            onChange={(e) => setFormData({...formData, organization: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                            placeholder="Your organization name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                            placeholder="John Smith"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Role *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.role}
                            onChange={(e) => setFormData({...formData, role: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                            placeholder="Director of Facilities"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Facility Portfolio Size *
                          </label>
                          <select
                            required
                            value={formData.facilitySize}
                            onChange={(e) => setFormData({...formData, facilitySize: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                          >
                            <option value="">Select size</option>
                            <option value="under-10">Under 10 buildings</option>
                            <option value="10-50">10-50 buildings</option>
                            <option value="50-100">50-100 buildings</option>
                            <option value="100+">100+ buildings</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Primary Interest *
                          </label>
                          <select
                            required
                            value={formData.primaryInterest}
                            onChange={(e) => setFormData({...formData, primaryInterest: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                          >
                            <option value="">Select interest</option>
                            <option value="feam-existing">FEAM for Existing Buildings</option>
                            <option value="construction-handover">New Construction Handover</option>
                            <option value="asset-verification">Asset Verification & Tagging</option>
                            <option value="post-feam-support">Post-FEAM Support & Training</option>
                            <option value="sop-development">SOP & Procedure Development</option>
                            <option value="consultation">Facilities Consulting</option>
                            <option value="other">Other Services</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Optional Fields Section */}
                    <div className="space-y-6">
                      <h4 className="text-sm font-semibold text-gray-900">Optional Information</h4>
                      <p className="text-xs text-gray-500 -mt-2">Help us better understand your needs</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                          >
                            <option value="">Select timeline</option>
                            <option value="immediate">Immediate need</option>
                            <option value="30-days">Within 30 days</option>
                            <option value="1-3-months">1-3 months</option>
                            <option value="3-6-months">3-6 months</option>
                            <option value="next-fiscal">Next fiscal year</option>
                            <option value="exploring">Just exploring options</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            How did you hear about us?
                          </label>
                          <select
                            value={formData.referralSource}
                            onChange={(e) => setFormData({...formData, referralSource: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                          >
                            <option value="">Select source</option>
                            <option value="web-search">Web Search</option>
                            <option value="referral">Referral</option>
                            <option value="industry-event">Industry Event</option>
                            <option value="direct-outreach">Direct Outreach</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Facilities Management Systems
                          <span className="text-xs text-gray-500 ml-2">(if comfortable sharing)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.currentSystems}
                          onChange={(e) => setFormData({...formData, currentSystems: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                          placeholder="e.g., Maximo, AiM, Archibus, Excel, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Current Challenges
                          <span className="text-xs text-gray-500 ml-2">(check all that apply)</span>
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            'Incomplete asset inventory',
                            'Manual tracking processes',
                            'Compliance reporting challenges',
                            'Deferred maintenance backlog',
                            'Budget planning difficulties',
                            'Space utilization visibility',
                            'Multi-campus coordination',
                            'Aging infrastructure concerns'
                          ].map((painPoint) => (
                            <label key={painPoint} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                              <input
                                type="checkbox"
                                checked={formData.painPoints.includes(painPoint)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFormData({...formData, painPoints: [...formData.painPoints, painPoint]});
                                  } else {
                                    setFormData({...formData, painPoints: formData.painPoints.filter(p => p !== painPoint)});
                                  }
                                }}
                                className="h-4 w-4 text-[#3752E0] rounded border-gray-300 focus:ring-[#3752E0]"
                              />
                              <span className="text-sm text-gray-700">{painPoint}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Information
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3752E0] focus:border-transparent"
                          placeholder="Any specific questions or details about your project..."
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={() => setShowContactModal(false)}
                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={formSubmitting}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-[#3752E0] to-[#887CE7] text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formSubmitting ? 'Submitting...' : 'Submit Assessment Request'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}