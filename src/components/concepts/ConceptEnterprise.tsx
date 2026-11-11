import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Factory,
  ShoppingBag,
  Fuel,
  Sprout,
  Workflow,
  FlaskConical,
  Layers,
  Cpu,
  Globe2,
  Clock,
  Compass,
  FileCheck,
  BarChart3,
  Server,
  Zap,
  PhoneCall,
  Mail,
  Database,
  Code2,
  Target,
  Search,
  SlidersHorizontal,
  TrendingUp,
  Sparkles,
  Users,
  Briefcase,
  Activity,
  Boxes,
  Network,
  Check,
  MapPin,
  Laptop,
  CheckCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/siteData';

// Word-by-word animated reveal component for premium headings
const AnimatedHeading: React.FC<{
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
}> = ({ text, className = '', highlightWords = [], highlightClass = 'text-transparent bg-clip-text bg-gradient-to-r from-[#DFCA9C] via-[#C6A66B] to-[#DFCA9C]' }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className={`inline-block mr-[0.28em] ${isHighlight ? highlightClass : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

export const ConceptEnterprise: React.FC = () => {
  // 4-Slide Automatic Hero Revolution Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Exact ZisanTech authentic messaging across 4 SAP & IT Enterprise Slides
  const heroSlides = [
    {
      id: 1,
      badge: 'SAP S/4HANA ENTERPRISE ERP',
      line1: 'Empower Your Business',
      highlight: 'With Customizable SAP',
      line2: 'Solutions With ZisanTech',
      description: 'Elevate your enterprise with certified SAP S/4HANA solutions, clean-core implementations, cloud migrations, and 24/7 dedicated support.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=85',
      btnText: 'GET A FREE DEMO',
      secondaryBtnText: 'EXPLORE SERVICES'
    },
    {
      id: 2,
      badge: 'ENTERPRISE IT & DATA INFRASTRUCTURE',
      line1: 'Driving Smarter Operations',
      highlight: '& Connected Experiences',
      line2: 'With Modern IT Systems',
      description: 'Your trusted partner for Enterprise Cloud, On-Premise Data Centers, Gate Management, and Weighbridge integrations, empowering operational excellence.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85',
      btnText: 'CONSULT AN ARCHITECT',
      secondaryBtnText: 'EXPLORE SOLUTIONS'
    },
    {
      id: 3,
      badge: 'PROVEN SAP ERP DELIVERY',
      line1: 'Analyze → Design → Deploy',
      highlight: 'Support With Impact',
      line2: 'Comprehensive Deployment',
      description: 'We collaborate with companies to enhance workflows, boost productivity, and fuel expansion by offering comprehensive SAP consulting, smooth integration, and continuous improvement.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=85',
      btnText: 'SCHEDULE AUDIT',
      secondaryBtnText: 'ABOUT ZISANTECH'
    },
    {
      id: 4,
      badge: 'HYBRID CLOUD & CYBER INFRASTRUCTURE',
      line1: 'Our Work Is For',
      highlight: 'Your Success & Growth',
      line2: 'Sustainable IT Partnerships',
      description: 'Leveraging deep SAP expertise and modern IT solutions, we help organizations enhance operational efficiency and equip enterprise teams with simulated real-world project experiences.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85',
      btnText: 'GET CONSULTATION',
      secondaryBtnText: 'KNOW OUR STORY'
    }
  ];

  // Auto-play timer (6.5s per slide)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // ZisanTech 3-Feature Benefit Cards below Hero
  const benefitCards = [
    {
      icon: BarChart3,
      title: 'Swift ERP Implementation',
      desc: 'Minimize downtime with our seasoned consulting team, ensuring a fast and seamless SAP Cloud & S/4HANA rollout.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      desc: 'Harness the power of real-time data insights with SAP analytics, empowering proactive decision-making across all business units.'
    },
    {
      icon: Clock,
      title: '24/7 Dedicated Support',
      desc: 'Continuous operational support to optimize performance, resolve bottlenecks, and ensure uninterrupted business operations.'
    }
  ];

  // 6 Upgraded Premium Luxury SAP Enterprise Service Cards with Imagery & Depth
  const enterpriseServices = [
    {
      id: 1,
      title: 'SAP Rollout',
      category: 'SAP SERVICES',
      code: 'SR-01',
      desc: 'Standardized multi-location and multi-entity SAP rollout solutions, ensuring seamless template extension, localized statutory compliance, and flawless business continuity.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      icon: Layers,
      highlight: 'Enterprise Template',
      features: ['Multi-entity template adoption', 'Data harmonization & cutover', 'End-user change management']
    },
    {
      id: 2,
      title: 'SAP Custom Solutions',
      category: 'SAP SERVICES',
      code: 'CS-02',
      desc: 'Bespoke SAP enhancements and workflow automations tailored to your unique business workflows, closing critical process gaps without bloating core system logic.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      icon: Compass,
      highlight: 'Workflow Automation',
      features: ['Custom report programs & enhancements', 'User exit & BAdI extensions', 'Automated business validations']
    },
    {
      id: 3,
      title: 'SAP Support',
      category: 'SAP SERVICES',
      code: 'SP-03',
      desc: 'Dependable Level 1 to Level 3 support, ticket governance, preventive landscape maintenance, and continuous performance tuning for mission-critical operations.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      icon: Clock,
      highlight: 'Reliable SLA Support',
      features: ['24/7 incident & problem handling', 'System health checks & patching', 'Continuous user assistance']
    },
    {
      id: 4,
      title: 'SAP Integration',
      category: 'SAP SERVICES',
      code: 'IN-04',
      desc: 'Seamless integration with external platforms including Gate Management, Weighbridge, Bank Integration, E-commerce portals, and HRMS applications.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      icon: Network,
      highlight: 'Platform Interconnect',
      features: ['Gate Management & Weighbridge', 'Bank host-to-host payment APIs', 'Third-party cloud SaaS connectors']
    },
    {
      id: 5,
      title: 'SAP Consulting',
      category: 'SAP SERVICES',
      code: 'CN-05',
      desc: 'Strategic guidance on SAP S/4HANA deployment, business process optimization, landscape rationalization, and digital roadmap execution.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      icon: ShieldCheck,
      highlight: 'Strategic Advisory',
      features: ['Business process re-engineering', 'S/4HANA migration readiness', 'License & landscape audits']
    },
    {
      id: 6,
      title: 'SAP E-Invoice & E-Way Bill',
      category: 'SAP SERVICES',
      code: 'EI-06',
      desc: 'Direct automated integration with Government NIC tax portals for seamless real-time GST E-Invoicing, QR code generation, and instant E-Way bill clearance.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      icon: FileCheck,
      highlight: 'Statutory Automation',
      features: ['Direct NIC portal API integration', 'Real-time IRN & QR generation', 'Automated cancel & reconciliation']
    }
  ];

  // Exactly 6 Industries Served
  const sixIndustries = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      tagline: 'End-to-End Shop Floor to Top Floor Orchestration',
      desc: 'Empowering discrete and process manufacturers with lean production workflows, integrated supply chains, synchronized shop floor planning, and predictive maintenance.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      icon: Factory,
      metrics: 'Synchronized MRP'
    },
    {
      id: 'retail-textile',
      name: 'Retail & Textile',
      tagline: 'Unified Merchandising & Omnichannel Inventory',
      desc: 'Real-time inventory management, unified POS integrations, demand forecasting, and agile supply chain logistics tailored for fast-moving retail and textile operations.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
      icon: ShoppingBag,
      metrics: 'Unified SKU Matrix'
    },
    {
      id: 'oil-gas',
      name: 'Oil & Gas',
      tagline: 'Asset Integrity, Safety & Upstream-to-Downstream Operations',
      desc: 'Robust plant maintenance, asset tracking, regulatory environmental compliance, and integrated procurement for high-stakes oil and energy infrastructure.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      icon: Fuel,
      metrics: 'Asset Governance'
    },
    {
      id: 'agro-chemical',
      name: 'Agro Chemical',
      tagline: 'Batch Traceability, Formulation Integrity & Safety',
      desc: 'Precise recipe management, batch serialization, hazardous goods documentation, and compliance with stringent environmental and agricultural chemical regulations.',
      image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=1000&q=80',
      icon: Sprout,
      metrics: 'Traceable Batches'
    },
    {
      id: 'steel',
      name: 'Steel',
      tagline: 'Heavy Industrial Production, Metallurgy & Rolling Planning',
      desc: 'Heat tracking, billet inventory optimization, scrap accounting, quality certification, and integrated transport dispatch for primary and secondary steel producers.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      icon: Workflow,
      metrics: 'Continuous Heat Tracking'
    },
    {
      id: 'pharma',
      name: 'Pharma',
      tagline: 'GMP Validation, Quality Control & Cold-Chain Logistics',
      desc: 'Adherence to 21 CFR Part 11 protocols, electronic batch records (eBR), automated certificate of analysis (CoA), and temperature-controlled logistics traceability.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
      icon: FlaskConical,
      metrics: 'GMP Compliance'
    }
  ];

  // Authentic 4-Step Approach: Analyze -> Design -> Deploy -> Support
  const approachSteps = [
    {
      step: '01',
      title: 'Analyze',
      phase: 'Business & Process Discovery',
      desc: 'We analyze your existing workflows and identify operational inefficiencies, uncovering bottlenecks in data flow and process synchronization.',
      icon: Search,
      deliverable: 'Workflow & Gap Analysis'
    },
    {
      step: '02',
      title: 'Design',
      phase: 'Tailored Solution Architecture',
      desc: 'We design streamlined, standardized processes and custom SAP configurations that fit seamlessly into your specific business requirements.',
      icon: SlidersHorizontal,
      deliverable: 'Tailored SAP Solution Blueprint'
    },
    {
      step: '03',
      title: 'Deploy',
      phase: 'Seamless Integration & Testing',
      desc: 'Our team deploys solutions with smooth integration across Gate, Weighbridge, HRMS, E-commerce, and banking platforms with rigorous quality checks.',
      icon: Server,
      deliverable: 'Tested Live Production Deployment'
    },
    {
      step: '04',
      title: 'Support',
      phase: 'Continuous Improvement & SLA',
      desc: 'Dependable support, ongoing monitoring, and continuous process optimization ensuring your business runs efficiently and adapts to changing needs.',
      icon: TrendingUp,
      deliverable: 'Dependable Ongoing Support'
    }
  ];

  // Authentic ZisanTech Capabilities
  const techExpertise = [
    {
      title: 'SAP Consulting & Modules',
      tag: 'SAP Expertise 90%',
      items: ['SAP SD (Sales & Distribution)', 'SAP MM (Materials Management)', 'SAP PP (Production Planning)', 'SAP QM & FICO Financial Management'],
      icon: Database
    },
    {
      title: 'System Integration',
      tag: 'System Integration 70%',
      items: ['Gate Management System Integration', 'Weighbridge Hardware & Software Linking', 'Bank Host-to-Host Payment Handshake', 'E-commerce & Custom Portal Connectors'],
      icon: Network
    },
    {
      title: 'Technical Modules & Dev',
      tag: 'IT & Digital Solutions 95%',
      items: ['SAP ABAP Advanced Programming', 'SAP BASIS Administration', 'SAP PI/PO & CPI Cloud Integration', 'Custom Web & Mobile Enterprise Apps'],
      icon: Code2
    },
    {
      title: 'Regulatory & Governance',
      tag: 'Continuous Improvement',
      items: ['Statutory E-Invoice & E-Way System', 'Data Security & Transaction Compliance', 'HRMS & Payroll Management Integration', '24/7 SLA Support & Ticket Governance'],
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full bg-[#FFFFFF] text-[#252B29] selection:bg-[#087F5B] selection:text-white font-sans overflow-hidden">
      
      {/* ========================================================
          1. ZISANTECH REVOLUTION SLIDER HERO BANNER (SAP & IT IMAGERY)
          ======================================================== */}
      <section
        className="relative w-full h-[620px] sm:h-[680px] md:h-[720px] lg:h-[760px] overflow-hidden bg-[#252B29]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides Container */}
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Animated Cinematic Zoom on SAP & IT Image */}
              <motion.img
                src={slide.image}
                alt={slide.line1}
                animate={
                  isActive
                    ? { scale: [1, 1.15], x: [0, -12], y: [0, -8] }
                    : { scale: 1, x: 0, y: 0 }
                }
                transition={{
                  duration: 8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.40] contrast-125"
              />

              {/* Multi-Stop Emerald & Gold Vignette Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#252B29] via-[#252B29]/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#252B29] via-transparent to-[#252B29]/80"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(8,127,91,0.35)_0%,transparent_65%)]"></div>

              {/* Hero Content - Staggered Kinetic Text Animations */}
              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-10">
                <div className="max-w-3xl space-y-6">
                  
                  {/* Badge with Entrance Motion */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1F1D]/90 border border-[#C6A66B]/60 text-[#DFCA9C] text-xs font-bold tracking-widest uppercase shadow-xl"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#087F5B] animate-pulse"></span>
                    <span>{slide.badge}</span>
                  </motion.div>

                  {/* Headline with 3D Word-Drop Motion */}
                  <div className="space-y-1">
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                      transition={{ duration: 0.7, delay: 0.25 }}
                      className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] tracking-tight leading-[1.12] font-heading drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                    >
                      {slide.line1}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                      transition={{ duration: 0.7, delay: 0.35 }}
                      className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DFCA9C] via-[#C6A66B] to-[#DFCA9C] tracking-tight leading-[1.12] font-heading drop-shadow-[0_4px_15px_rgba(198,166,107,0.3)]"
                    >
                      {slide.highlight}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                      transition={{ duration: 0.7, delay: 0.45 }}
                      className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] tracking-tight leading-[1.12] font-heading"
                    >
                      {slide.line2}
                    </motion.div>
                  </div>

                  {/* Description with Smooth Fade & Slide */}
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    className="text-sm sm:text-base lg:text-lg text-[#E8F1EC]/90 font-light leading-relaxed max-w-2xl drop-shadow-md"
                  >
                    {slide.description}
                  </motion.p>

                  {/* Buttons with Hover Elevation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="flex flex-wrap items-center gap-4 pt-2"
                  >
                    <div className="relative group cursor-default select-none transition-transform duration-300 hover:scale-105">
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#087F5B] via-[#C6A66B] to-[#087F5B] opacity-85 blur-md group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#087F5B] to-[#055B41] border border-[#C6A66B]/60 text-[#FFFFFF] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-2xl flex items-center gap-2">
                        <span>{slide.btnText}</span>
                        <ArrowRight className="w-4 h-4 text-[#DFCA9C]" />
                      </div>
                    </div>

                    <div className="relative cursor-default select-none px-7 py-3.5 rounded-xl bg-[#1A1F1D]/90 hover:bg-[#1A1F1D] border border-[#C6A66B]/50 text-[#DFCA9C] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      <span>{slide.secondaryBtnText}</span>
                      <Sparkles className="w-4 h-4 text-[#087F5B]" />
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1A1F1D]/80 hover:bg-[#087F5B] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 shadow-xl backdrop-blur-sm group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#DFCA9C] group-hover:text-white" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1A1F1D]/80 hover:bg-[#087F5B] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 shadow-xl backdrop-blur-sm group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#DFCA9C] group-hover:text-white" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-30 flex items-center justify-center gap-2.5">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentSlide
                  ? 'w-9 h-2.5 bg-gradient-to-r from-[#087F5B] to-[#C6A66B] shadow-lg shadow-[#087F5B]/50'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>


      {/* ========================================================
          2. ZISANTECH 3-FEATURE BENEFIT BAR (Emerald & Gold Hover Cards)
          ======================================================== */}
      <section className="relative z-30 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefitCards.map((card, i) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-[#FFFFFF] hover:bg-[#252B29] p-7 sm:p-8 rounded-2xl shadow-xl border border-[#D2E2D9] hover:border-[#C6A66B] transition-all duration-500 overflow-hidden cursor-default select-none"
              >
                {/* Ambient Emerald & Gold Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#252B29] via-[#1A1F1D] to-[#252B29] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"></div>
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-[radial-gradient(circle,rgba(8,127,91,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#087F5B] to-[#044230] text-white flex items-center justify-center shadow-lg shadow-[#087F5B]/20 group-hover:scale-110 transition-transform duration-300 border border-[#C6A66B]/40">
                    <IconComp className="w-7 h-7 text-[#DFCA9C]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#252B29] group-hover:text-white transition-colors duration-300 font-heading">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#252B29]/75 group-hover:text-[#E8F1EC]/85 leading-relaxed transition-colors duration-300">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* ========================================================
          3. ZISANTECH "ABOUT SECTION" (Dual-Layer Image Montage & Interactive Hover)
          ======================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Multi-Layer Image Montage with Interactive Zoom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative pb-8 sm:pb-0"
          >
            {/* Vertical Emerald Accent Strip */}
            <div className="w-2.5 h-16 bg-gradient-to-b from-[#087F5B] to-[#C6A66B] rounded-full absolute -top-4 right-10 z-20 shadow-lg shadow-[#087F5B]/30 hidden sm:block"></div>

            {/* Base Image: Team Collaboration with Hover Zoom */}
            <div className="relative w-full sm:w-[82%] rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="ZisanTech Enterprise Team"
                className="w-full h-[360px] sm:h-[420px] object-cover filter brightness-95 contrast-105 transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Image with Infinite Float & Smooth Hover Zoom */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative sm:absolute sm:right-0 sm:bottom-4 w-full sm:w-[68%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white mt-4 sm:mt-0 z-10 group cursor-default"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80"
                alt="Digital Transformation Cloud Architecture"
                className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-700 ease-out group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252B29]/80 via-transparent to-transparent"></div>

              {/* Floating Experience Badge with Shimmer */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-[#D2E2D9] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#087F5B] text-white flex items-center justify-center font-bold shadow-md shadow-[#087F5B]/30">
                    <ShieldCheck className="w-5 h-5 text-[#DFCA9C]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#252B29]">Enterprise Excellence</p>
                    <p className="text-[11px] text-[#087F5B] font-semibold">10+ Years Advisory Heritage</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Text Column with Animated Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F1EC] text-[#087F5B] text-xs font-bold uppercase tracking-wider border border-[#087F5B]/30 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Know Our Story • ZisanTech Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#252B29] leading-[1.2] font-heading">
              <AnimatedHeading
                text="Digitize Your Business Processes With Our Top SAP Solutions"
                highlightWords={['Digitize', 'Business', 'Processes', 'SAP']}
                highlightClass="text-[#087F5B]"
              />
            </h2>

            <p className="text-sm sm:text-base text-[#252B29]/80 leading-relaxed font-light">
              ZisanTech Solutions is dedicated to helping businesses embrace digital transformation through intelligent SAP solutions and modern IT services. Our focus is on aligning technology with real business objectives to improve efficiency, visibility, and decision-making.
            </p>

            <p className="text-xs sm:text-sm text-[#252B29]/75 leading-relaxed">
              With a strong foundation in SAP consulting and training, we enable organizations to build capable teams while implementing systems that deliver long-term value. Our approach emphasizes clarity, adaptability, and measurable outcomes in every project we undertake.
            </p>

            {/* ZisanTech Bullet Points with Icon Pulse */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'Swift ERP Implementation & Support',
                'Gate & Weighbridge Integration',
                'Statutory E-Invoice & E-Way System',
                '24/7 SLA Mission-Critical Support'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#252B29] group">
                  <div className="w-5 h-5 rounded-full bg-[#087F5B]/15 text-[#087F5B] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-3 h-3 text-[#087F5B] stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#087F5B] to-[#055B41] border border-[#C6A66B]/50 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default select-none">
                <span>Discover More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#DFCA9C]" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ========================================================
          4. ZISANTECH "WHY CHOOSE US" SECTION
          ======================================================== */}
      <section className="bg-gradient-to-br from-[#252B29] via-[#1A1F1D] to-[#252B29] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#DFCA9C] font-mono">
              THE ZISANTECH ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white font-heading">
              <AnimatedHeading text="Why Choose ZisanTech" highlightWords={['ZisanTech']} />
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#087F5B] to-[#C6A66B] mx-auto mt-2 rounded-full"></div>
            <p className="text-sm sm:text-base text-[#E8F1EC]/80 leading-relaxed pt-2">
              At ZisanTech Solutions, we provide dependable, business-focused solutions designed to simplify your operations and support sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Process Optimization',
                desc: 'Streamlined, standardized processes that boost productivity and reduce operational friction.'
              },
              {
                icon: Layers,
                title: 'Tailored Implementation',
                desc: 'Customizing SAP solutions to fit your specific business requirements and maximize ROI.'
              },
              {
                icon: Award,
                title: 'Quality & Improvement',
                desc: 'Rigorous testing and ongoing monitoring maintaining reliability and high performance.'
              },
              {
                icon: Users,
                title: 'Workforce Enablement',
                desc: 'Empowering teams by integrating SAP tools that simplify management and elevate skillsets.'
              }
            ].map((pillar, i) => {
              const IconPillar = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                  className="p-6 rounded-2xl bg-[#FFFFFF]/[0.05] hover:bg-[#FFFFFF]/[0.1] border border-white/10 hover:border-[#C6A66B]/60 transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#087F5B]/25 text-[#DFCA9C] flex items-center justify-center mb-4 border border-[#087F5B]/40 group-hover:scale-110 transition-transform">
                    <IconPillar className="w-6 h-6 text-[#DFCA9C]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#DFCA9C] transition-colors font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#E8F1EC]/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================
          5. ZISANTECH FUN FACTS / METRICS STRIP
          ======================================================== */}
      <section className="bg-[#F5F3ED] py-16 border-y border-[#D2E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 group cursor-default"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087F5B] font-heading group-hover:scale-110 transition-transform duration-300">
                {COMPANY_INFO.experienceYears}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#252B29]/70 font-bold">Years of Trust</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2 group cursor-default"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#C6A66B] font-heading group-hover:scale-110 transition-transform duration-300">
                {COMPANY_INFO.clientsCount}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#252B29]/70 font-bold">Enterprise Engagements</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2 group cursor-default"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087F5B] font-heading group-hover:scale-110 transition-transform duration-300">
                {COMPANY_INFO.consultantsCount}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#252B29]/70 font-bold">SAP Consultants</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-2 group cursor-default"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#C6A66B] font-heading group-hover:scale-110 transition-transform duration-300">
                24/7
              </p>
              <p className="text-xs uppercase tracking-wider text-[#252B29]/70 font-bold">SLA Availability</p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ========================================================
          6. ZISANTECH "INDUSTRIES WE SERVE" (Smooth 3D Photographic Zoom)
          ======================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087F5B]">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#252B29] font-heading">
            <AnimatedHeading
              text="Digitize Your Industry Performance With Our SAP ERP Solutions"
              highlightWords={['Digitize', 'Industry', 'Performance', 'SAP']}
              highlightClass="text-[#087F5B]"
            />
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#087F5B] to-[#C6A66B] mx-auto mt-2 rounded-full"></div>
          <p className="text-sm text-[#252B29]/75 leading-relaxed pt-2">
            Tailored SAP ERP solutions engineered for discrete and process manufacturing, retail networks, and specialized regulatory sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sixIndustries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[380px] flex flex-col justify-end p-7 border border-[#D2E2D9] hover:border-[#C6A66B] block bg-[#252B29]">
                {/* Background Image with Smooth Scale Zoom on Hover */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-120 filter brightness-90 group-hover:brightness-100 contrast-110"
                />

                {/* Multi-Stop Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252B29] via-[#252B29]/60 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1A1F1D]/80 text-[#DFCA9C] border border-[#C6A66B]/40 backdrop-blur-sm">
                    {ind.metrics}
                  </span>
                </div>

                {/* Content with Upward Slide on Hover */}
                <div className="relative z-10 space-y-2 transform transition-transform duration-300 group-hover:translate-y-[-6px]">
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-[#DFCA9C] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#E8F1EC]/85 leading-relaxed line-clamp-3">
                    {ind.desc}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#DFCA9C]">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ========================================================
          7. PREMIUM ANIMATED SAP & ENTERPRISE SERVICE CARDS
          ======================================================== */}
      <section className="bg-[#F5F3ED] py-24 sm:py-32 border-t border-[#D2E2D9] relative overflow-hidden">
        {/* Subtle decorative emerald & gold ambient glow rings */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#087F5B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#C6A66B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header with Word Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1EC] border border-[#087F5B]/30 text-[#087F5B] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Certified Enterprise Capabilities</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#252B29] font-heading leading-tight">
              <AnimatedHeading
                text="Our Core SAP & Enterprise Solutions"
                highlightWords={['Core', 'SAP', 'Enterprise', 'Solutions']}
                highlightClass="text-[#087F5B]"
              />
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#087F5B] via-[#C6A66B] to-[#087F5B] mx-auto rounded-full"></div>
            <p className="text-sm sm:text-base text-[#252B29]/75 leading-relaxed pt-2">
              Driving smarter operations and connected experiences with flexible, future-ready SAP solutions.
            </p>
          </motion.div>

          {/* 6 Upgraded Premium Luxury Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, idx) => {
              const IconService = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="rounded-3xl bg-[#FFFFFF] border border-[#D2E2D9] hover:border-[#C6A66B] shadow-[0_10px_30px_-5px_rgba(37,43,41,0.06)] hover:shadow-[0_25px_50px_-12px_rgba(8,127,91,0.2),0_0_30px_rgba(198,166,107,0.2)] transition-all duration-500 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Photographic Header with Ken Burns Hover Zoom */}
                    <div className="relative h-44 overflow-hidden bg-[#252B29]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover filter brightness-[0.75] contrast-110 transition-transform duration-700 ease-out group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1D] via-[#1A1F1D]/40 to-transparent" />
                      
                      {/* Top Overlay Badge & Code */}
                      <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                        <span className="px-2.5 py-1 rounded-md bg-[#252B29]/90 border border-white/20 text-[11px] font-mono font-bold text-[#DFCA9C] backdrop-blur-sm shadow-md">
                          {service.code}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#087F5B]/90 text-white border border-[#087F5B] backdrop-blur-sm shadow-md">
                          {service.highlight}
                        </span>
                      </div>

                      {/* Floating Icon with 3D Pop on Hover */}
                      <div className="absolute -bottom-5 left-6 z-20">
                        <div className="w-13 h-13 p-3 rounded-2xl bg-[#FFFFFF] border-2 border-[#D2E2D9] group-hover:border-[#C6A66B] shadow-xl text-[#087F5B] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                          <IconService className="w-7 h-7 text-[#087F5B] transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-7 pt-9 space-y-4">
                      <div>
                        <span className="text-[11px] font-bold tracking-wider text-[#C6A66B] uppercase font-mono">
                          {service.category}
                        </span>
                        <h3 className="text-xl font-bold text-[#252B29] group-hover:text-[#087F5B] transition-colors duration-300 font-heading mt-1">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#252B29]/75 leading-relaxed">
                        {service.desc}
                      </p>

                      {/* Staggered Features List with Animated Checks */}
                      <div className="pt-3 border-t border-[#D2E2D9]/70 space-y-2">
                        {service.features.map((feat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.15 + (i * 0.08) }}
                            className="flex items-center gap-2.5 text-xs text-[#252B29]/85 group-hover:text-[#252B29] transition-colors"
                          >
                            <div className="w-4 h-4 rounded-full bg-[#E8F1EC] text-[#087F5B] flex items-center justify-center flex-shrink-0 border border-[#087F5B]/30 group-hover:border-[#087F5B]">
                              <CheckCheck className="w-2.5 h-2.5 text-[#087F5B]" />
                            </div>
                            <span className="font-medium">{feat}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Interactive CTA */}
                  <div className="p-6 pt-4 border-t border-[#D2E2D9]/60 flex items-center justify-between text-xs font-bold text-[#087F5B] group-hover:text-[#252B29] transition-colors cursor-default select-none bg-[#F5F3ED]/40">
                    <span className="tracking-wide">Delivering Smart IT Solutions</span>
                    <div className="w-8 h-8 rounded-full bg-[#E8F1EC] group-hover:bg-[#087F5B] text-[#087F5B] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================
          8. ZISANTECH "OUR APPROACH" (Analyze → Design → Deploy → Support)
          ======================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087F5B]">
            REAL-WORLD IMPACT METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#252B29] font-heading">
            <AnimatedHeading
              text="Our Consulting Approach"
              highlightWords={['Consulting', 'Approach']}
              highlightClass="text-[#087F5B]"
            />
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#087F5B] to-[#C6A66B] mx-auto mt-2 rounded-full"></div>
          <p className="text-sm text-[#252B29]/75 leading-relaxed pt-2">
            Analyze → Design → Deploy → Support with real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachSteps.map((step, idx) => {
            const IconStep = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                className="p-7 rounded-2xl bg-[#F5F3ED] border border-[#D2E2D9] hover:border-[#C6A66B] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border-2 border-[#087F5B] group-hover:border-[#C6A66B] flex items-center justify-center text-[#087F5B] shadow-md group-hover:scale-115 transition-transform duration-300">
                      <IconStep className="w-6 h-6 text-[#087F5B]" />
                    </div>
                    <span className="text-2xl font-black text-[#252B29]/20 group-hover:text-[#C6A66B] transition-colors font-mono">
                      {step.step}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-[#087F5B] uppercase tracking-wider">
                      {step.phase}
                    </span>
                    <h3 className="text-xl font-bold text-[#252B29] mt-0.5 font-heading">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#252B29]/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D2E2D9] text-[11px] font-medium text-[#C6A66B]">
                  <span className="text-[#252B29]/60">Deliverable:</span> <br />
                  <strong className="text-[#252B29]">{step.deliverable}</strong>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* ========================================================
          9. TECHNOLOGY EXPERTISE SHOWCASE
          ======================================================== */}
      <section className="bg-[#F5F3ED] py-24 border-t border-[#D2E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#087F5B]">
              TECHNICAL EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#252B29] font-heading">
              <AnimatedHeading
                text="SAP & Technology Expertise"
                highlightWords={['SAP', 'Technology', 'Expertise']}
                highlightClass="text-[#087F5B]"
              />
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#087F5B] to-[#C6A66B] mx-auto mt-2 rounded-full"></div>
            <p className="text-sm text-[#252B29]/75 leading-relaxed pt-2">
              We combine advanced technical skills, real-world project experience, and a strong understanding of business needs to create impactful, tailored solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techExpertise.map((tech, idx) => {
              const IconTech = tech.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                  className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D2E2D9] hover:border-[#087F5B] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F1EC] text-[#087F5B] flex items-center justify-center border border-[#087F5B]/20">
                      <IconTech className="w-5 h-5 text-[#087F5B]" />
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C6A66B] font-bold">
                        {tech.tag}
                      </span>
                      <h3 className="text-base font-bold text-[#252B29] font-heading mt-0.5">
                        {tech.title}
                      </h3>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-[#D2E2D9]">
                      {tech.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#252B29]/75 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B] mt-1.5 flex-shrink-0"></span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#D2E2D9] text-[11px] text-[#087F5B] font-bold">
                    Verified Capabilities
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================
          10. ZISANTECH CALL TO ACTION SECTION
          ======================================================== */}
      <section className="bg-gradient-to-r from-[#087F5B] via-[#055B41] to-[#044230] text-white py-16 relative overflow-hidden">
        {/* Subtle decorative champagne gold ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A66B]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C6A66B]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 border border-[#C6A66B]/40 text-[#DFCA9C] text-xs font-bold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFCA9C]" />
            <span>Contact Details • ZisanTech Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading"
          >
            Ready to Transform Your Business With Innovative Technology?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#E8F1EC]/90 max-w-2xl mx-auto leading-relaxed"
          >
            Contact ZisanTech Solutions today and let our experts help you achieve your goals. Whether scaling your business or optimizing your SAP landscape, we help you grow smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="cursor-default select-none px-8 py-3.5 bg-white hover:bg-[#F5F3ED] text-[#087F5B] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-105 flex items-center gap-2">
              <span>Get a Free Demo / Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#C6A66B]" />
            </div>

            <div className="cursor-default select-none px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#DFCA9C]" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
