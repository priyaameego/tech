import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Clock,
  Sparkles,
  Phone,
  Layers,
  Cpu,
  GraduationCap,
  Play,
  MessageSquare,
  Rocket,
  ThumbsUp,
  BarChart3,
  Globe,
  User,
  Tag
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES,
  TRAINING_MODULES,
  INDUSTRIES,
  BLOGS,
  ServiceItem,
  IndustryItem,
  TrainingItem,
  BlogItem
} from '../../data/siteData';

export const ConceptEnterprise: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: 'IDEAL FOR ALL BUSINESS SIZES',
      line1: 'Empower Your Business',
      highlight: 'With Customizable SAP',
      line2: 'Solutions With ZisanTech',
      description: 'Elevate your small or medium-sized enterprise to the next level with our certified SAP S/4HANA solutions, agile implementations, and 24/7 dedicated support.',
      bgImage: '/slide1_bg.webp',
      btnText: 'GET A FREE DEMO',
      btnLink: '#contact-cta',
      secondaryBtnText: 'EXPLORE SERVICES',
      secondaryBtnLink: '#services'
    },
    {
      badge: 'CERTIFIED RISE WITH SAP PRACTICE',
      line1: 'Unlock The Power Of',
      highlight: 'SAP S/4HANA Cloud ERP',
      line2: 'With ZisanTech Enterprise',
      description: 'Your Trusted Partner for Cloud, On-Premise, and Hybrid Solutions, empowering your enterprise to achieve operational excellence and real-time visibility.',
      bgImage: '/slide2_bg.webp',
      btnText: 'CONSULT AN ARCHITECT',
      btnLink: '#contact-cta',
      secondaryBtnText: 'EXPLORE SOLUTIONS',
      secondaryBtnLink: '#services'
    },
    {
      badge: '10+ YEARS OF PROVEN DELIVERY',
      line1: 'Best SAP ERP Consultancy',
      highlight: 'Tailored For Enterprise Growth',
      line2: '& Process Automation',
      description: 'Comprehensive SAP consulting, tailored ERP modules for Indian manufacturing and retail, and hands-on professional corporate training.',
      bgImage: '/slide3_bg.webp',
      btnText: 'SCHEDULE DEMO',
      btnLink: '#contact-cta',
      secondaryBtnText: 'ABOUT ZISANTECH',
      secondaryBtnLink: '#about'
    }
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-[#063B83] selection:text-white overflow-hidden">
      {/* =========================================================================
          1. MAWAI AUTHENTIC REVOLUTION SLIDER HERO BANNER
      ========================================================================= */}
      <section className="relative w-full h-[580px] sm:h-[640px] md:h-[680px] lg:h-[720px] overflow-hidden bg-slate-950">
        {/* Slides Container - Smooth crossfade with Framer Motion luxury animated text */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Visual with Luxury Cinematic Ken Burns Effect */}
              <motion.img
                src={slide.bgImage}
                alt={slide.line1}
                animate={
                  isActive
                    ? { scale: [1, 1.12], x: [0, -12], y: [0, -8] }
                    : { scale: 1, x: 0, y: 0 }
                }
                transition={{
                  duration: 8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80';
                }}
              />

              {/* Digital Transformation Glass HUD Overlay with Royal Navy Vignette */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/35"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(6,59,131,0.35)_0%,transparent_65%)]"></div>

              {/* Slide Content: Active Staggered Fluid Motion */}
              {isActive && (
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div className="max-w-3xl text-left space-y-5 sm:space-y-6 pt-8 sm:pt-0">
                    {/* 1. Top Badge with Electric Cyan Accent Bar */}
                    <motion.div
                      key={`badge-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md"
                    >
                      <span className="w-5 h-0.5 bg-[#08B9E8] rounded-full shadow-[0_0_8px_#08B9E8]"></span>
                      <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-100 uppercase font-mono">
                        {slide.badge}
                      </span>
                    </motion.div>

                    {/* 2. Main Headline - 2-Tone Typography with Brand Cyan/Electric Blue Highlight */}
                    <motion.h1
                      key={`headline-${currentSlide}`}
                      initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.14] tracking-tight font-heading"
                    >
                      {slide.line1} <br />
                      <span className="text-[#08B9E8] drop-shadow-[0_2px_14px_rgba(8,185,232,0.45)]">
                        {slide.highlight}
                      </span>{' '}
                      <br />
                      {slide.line2}
                    </motion.h1>

                    {/* 3. Description */}
                    <motion.p
                      key={`desc-${currentSlide}`}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed max-w-xl font-normal"
                    >
                      {slide.description}
                    </motion.p>

                    {/* 4. Action CTA Buttons - Brand Royal & Electric Blue Demo Button */}
                    <motion.div
                      key={`btns-${currentSlide}`}
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                      <a
                        href={slide.btnLink}
                        className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#063B83] via-[#087FE5] to-[#08B9E8] hover:from-[#087FE5] hover:to-[#063B83] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-lg shadow-xl shadow-[#087FE5]/30 transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <span>{slide.btnText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </a>

                      <a
                        href={slide.secondaryBtnLink}
                        className="w-full sm:w-auto text-center px-6 sm:px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg backdrop-blur-md border border-white/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        {slide.secondaryBtnText}
                      </a>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Carousel Arrow Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#087FE5] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#087FE5] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all rounded-full cursor-pointer ${
                i === currentSlide ? 'w-8 bg-[#087FE5]' : 'w-2.5 bg-white/40 hover:bg-white'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          2. MAWAI 3-FEATURE BENEFIT BAR (Brand Matching Blue Hover Cards)
      ========================================================================= */}
      <section id="benefits" className="relative z-30 -mt-8 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Swift ERP Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-white hover:bg-[#071B49] p-7 sm:p-8 rounded-2xl shadow-xl border border-slate-200/80 hover:border-[#087FE5]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
          >
            {/* Ambient Deep Navy Background & Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"></div>
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[radial-gradient(circle,rgba(8,127,229,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center shadow-lg shadow-[#087FE5]/20 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] group-hover:text-white transition-colors font-heading">
                Swift ERP Implementation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                Minimize downtime with our seasoned consulting team, ensuring a fast and seamless SAP S/4HANA Cloud rollout.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Real-time Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-white hover:bg-[#071B49] p-7 sm:p-8 rounded-2xl shadow-xl border border-slate-200/80 hover:border-[#087FE5]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
          >
            {/* Ambient Deep Navy Background & Wave on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"></div>
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[radial-gradient(circle,rgba(8,185,232,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center shadow-lg shadow-[#087FE5]/20 group-hover:scale-105 transition-transform">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] group-hover:text-white transition-colors font-heading">
                Real-time Analytics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                Gain a decisive operational edge with instant data insights from SAP, driving enterprise efficiency and executive visibility.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Affordable Scalability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative bg-white hover:bg-[#071B49] p-7 sm:p-8 rounded-2xl shadow-xl border border-slate-200/80 hover:border-[#087FE5]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
          >
            {/* Ambient Deep Navy Background & Wave on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"></div>
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[radial-gradient(circle,rgba(8,127,229,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center shadow-lg shadow-[#087FE5]/20 group-hover:scale-105 transition-transform">
                <ThumbsUp className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] group-hover:text-white transition-colors font-heading">
                Affordable Scalability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                Enjoy the scalability and flexibility of SAP Cloud offerings, adapting seamlessly to your corporate growth without friction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          3. MAWAI "ABOUT SECTION" (Digitize Your Business Processes - Brand Blue Layout)
      ========================================================================= */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Multi-Layer Image Montage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative pb-8 sm:pb-0"
          >
            {/* Vertical Brand Electric Blue Accent Strip */}
            <div className="w-2.5 h-16 bg-gradient-to-b from-[#087FE5] to-[#08B9E8] rounded-full absolute -top-4 right-10 z-20 shadow-lg shadow-[#087FE5]/30 hidden sm:block"></div>

            {/* Base Image: Team Collaboration in Office */}
            <div className="relative w-full sm:w-[82%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="ZisanTech SAP Team"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Image: Digital City Hologram Network with 3D Float Animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative sm:absolute sm:right-0 sm:bottom-4 w-full sm:w-[68%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white mt-4 sm:mt-0 z-10 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80"
                alt="Digital Transformation Cloud Architecture"
                className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#063B83]/70 via-transparent to-transparent"></div>
              {/* 3D Sheen Light Swipe on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            </motion.div>

            {/* Floating Counter Badge: 360+ Satisfied Clients */}
            <div className="relative sm:absolute sm:-bottom-6 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 flex items-center gap-3.5 mt-4 sm:mt-0 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#063B83] to-[#087FE5] text-white flex items-center justify-center font-bold shadow-md shadow-[#087FE5]/20 flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#087FE5] leading-none font-heading">
                  360+
                </p>
                <p className="text-xs font-bold text-[#071B49] mt-1">
                  Satisfied Clients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content with Brand Blue Styling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
                  DIGITIZE YOUR BUSINESS PROCESSES
                </span>
                <span className="w-8 h-0.5 bg-[#087FE5] rounded-full"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#071B49] mt-3 leading-[1.2] font-heading">
                <span className="text-[#087FE5]">ZisanTech,</span> Your Partner in Building a Sustainable Digital Future with SAP
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              ZisanTech, a leading enterprise RISE with SAP S/4HANA Partner, delivers proven solutions drawn from over a decade of verified industry expertise, recognized for innovative ERP services including:
            </p>

            {/* Feature 1: ZisanTech Services */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-xl border-2 border-[#087FE5]/40 text-[#087FE5] flex items-center justify-center flex-shrink-0 shadow-sm bg-blue-50/60">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#071B49] font-heading">
                    ZisanTech Services
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    As a certified SAP Gold Partner, ZisanTech provides licensing, implementation, consulting, and 24/7 SLA hyper-care support services.
                  </p>
                </div>
              </div>

              {/* Feature 2: Customized ERP */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-xl border-2 border-[#087FE5]/40 text-[#087FE5] flex items-center justify-center flex-shrink-0 shadow-sm bg-blue-50/60">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#071B49] font-heading">
                    Customized ERP Add-ons
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Specialized GST E-Invoicing, E-Way Bill integrations, and automated statutory compliance modules built for Indian enterprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Inset Promo Card (Brand Blue Stripe & Button) */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-slate-50 to-[#f5f8fc] border-t-4 border-[#087FE5] shadow-sm flex items-center justify-between mt-4">
              <div>
                <p className="text-sm font-bold text-[#071B49]">
                  Affordable ERP Solution for your Business
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tailored implementations engineered for enterprise agility
                </p>
              </div>
              <a
                href="#services"
                className="text-xs font-bold text-[#087FE5] hover:text-[#063B83] flex items-center gap-1 uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          4. MAWAI "WHY CHOOSE US" SECTION (Full-width Navy Blue with 3D Depth)
      ========================================================================= */}
      <section id="why-us" className="bg-gradient-to-br from-[#071B49] via-[#05143A] to-[#040F2B] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#08B9E8] font-mono">
                WHY CHOOSE ZISANTECH
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
                Your Certified RISE with SAP S/4HANA Cloud Implementation Partner
              </h2>

              <p className="text-sm text-slate-200 leading-relaxed">
                We take pride in our extensive experience and dedication to delivering innovative solutions that drive business success. We're doing the right thing, the right way.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'End-to-end SAP services, pre and post-implementation.',
                  'Trusted SAP partner with proven enterprise delivery.',
                  '10+ Years of specialized SAP S/4HANA implementations.',
                  'Automated Indian statutory compliance: E-Invoice & E-Way Bill.',
                  'Expert certified SAP consultants with 24/7 round-the-clock support.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#087FE5] text-white flex items-center justify-center flex-shrink-0 shadow">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#contact-cta"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#087FE5] hover:bg-[#063B83] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-lg hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Connect With An Architect</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Video / Visual Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 relative group cursor-pointer bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise IT Team"
                  className="w-full h-[360px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#063B83]/40 group-hover:bg-[#071B49]/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-[#063B83] flex items-center justify-center shadow-2xl pl-1 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current" />
                  </div>
                </div>
                {/* 3D Light Sheen Swipe on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. MAWAI FUN FACTS / METRICS STRIP
      ========================================================================= */}
      <section id="metrics" className="bg-[#f5f8fc] py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#063B83] font-heading">
                {COMPANY_INFO.experienceYears}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">Years of Trust</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087FE5] font-heading">
                {COMPANY_INFO.clientsCount}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#063B83] font-heading">
                {COMPANY_INFO.consultantsCount}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">SAP Consultants</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087FE5] font-heading">
                {COMPANY_INFO.studentsTrained}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">Trained Professionals</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. MAWAI "INDUSTRIES WE SERVE" SECTION (With 3D Hover Zoom)
      ========================================================================= */}
      <section id="industries" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading">
            Digitize your industry performance with our top SAP ERP Solution
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your industry-specific customized SAP ERP solutions for all business sizes, ensuring statutory compliance. We optimize processes, integrate best practices, and drive operational success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind: IndustryItem, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.015 }}
            >
              <a
                href="#contact-cta"
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#087FE5]/30 transition-all duration-500 h-[360px] flex flex-col justify-end p-7 border border-slate-200/80 hover:border-[#087FE5] block bg-slate-900"
              >
                {/* Background Image with Smooth 3D Scale Zoom */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Multi-Stop Gradient Overlay (Dark Navy at Bottom, Light Vignette) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B49] via-[#071B49]/60 to-black/20 group-hover:from-[#063B83]/95 group-hover:via-[#071B49]/70 transition-all duration-500" />

                {/* 3D Light Sheen Sweep Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />

                {/* Top-Right Pill Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071B49]/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#08B9E8] border border-[#08B9E8]/30 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#08B9E8] animate-pulse" />
                    SAP Vertical
                  </span>
                </div>

                {/* Bottom Content Area with Smooth Text Stagger */}
                <div className="relative z-20 space-y-2.5">
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#087FE5]/30 backdrop-blur-md border border-[#087FE5]/40 text-[#08B9E8] text-[10px] font-bold uppercase tracking-wider font-mono">
                    {ind.tagline || 'ENTERPRISE ERP VERTICAL'}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#08B9E8] transition-colors font-heading leading-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                    {ind.summary}
                  </p>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#08B9E8] group-hover:text-white transition-colors">
                    <span>Explore Industry Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. MAWAI "SERVICES & SOLUTIONS" CARDS SECTION (3D Hover Glow & Sheen)
      ========================================================================= */}
      <section id="services" className="bg-[#f5f8fc] py-24 border-t border-slate-200 relative overflow-hidden">
        {/* Subtle decorative background aura */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#087FE5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#063B83]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FE5]/10 border border-[#087FE5]/20 text-xs font-bold uppercase tracking-widest text-[#063B83] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#087FE5] animate-pulse" />
                Proven Enterprise Practice
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] font-heading tracking-tight">
                Enterprise SAP & IT Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                End-to-end consulting, migration, customization, and 24/7 managed support powered by certified SAP architects.
              </p>
            </div>
            <a
              href="#contact-cta"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#063B83] to-[#087FE5] hover:shadow-lg hover:shadow-[#087FE5]/25 transition-all group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service: ServiceItem, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#087FE5]/20 transition-all duration-500 border border-slate-200/90 hover:border-[#087FE5] flex flex-col justify-between"
              >
                <div>
                  {/* Image container with 3D sheen swipe reflection & zoom */}
                  <div className="h-56 w-full overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-0.5 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* 3D Sheen Light Reflection Sweep on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                    {/* Category Badge */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-[#071B49]/90 backdrop-blur-md text-[#08B9E8] text-[10px] font-bold uppercase font-mono tracking-wider border border-[#087FE5]/40 shadow-md">
                      {service.category}
                    </div>

                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur text-[#063B83] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75 transition-all shadow-md">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-heading leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#contact-cta"
                      className="text-xs font-bold text-[#063B83] group-hover:text-[#087FE5] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="#contact-cta"
                      className="text-xs text-slate-400 group-hover:text-[#071B49] font-semibold transition-colors"
                    >
                      Enquire Now →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. MAWAI "CAREERS / TRAINING" SECTION (Take Your Careers to New Heights)
      ========================================================================= */}
      <section id="training" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FE5]/10 border border-[#087FE5]/20 text-xs font-bold uppercase tracking-widest text-[#063B83]">
            Career Incubation & Enablement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] font-heading tracking-tight">
            Take Your Careers to New Heights with the Leading ERP Solution Provider
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Upskill with real enterprise projects, 24/7 dedicated server sandboxes, and structured curriculum designed by veteran SAP consultants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_MODULES.slice(0, 8).map((mod: TrainingItem, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:shadow-[#087FE5]/20 border border-slate-200/90 hover:border-[#087FE5] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle gradient corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#087FE5]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#087FE5]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-[#063B83] bg-blue-50/90 border border-blue-200/60 px-2.5 py-1 rounded-md shadow-xs group-hover:bg-[#063B83] group-hover:text-white transition-colors">
                    {mod.code}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 font-mono">Live Sandbox</span>
                </div>
                <h3 className="text-base font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-heading mb-2">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed font-normal">
                  {mod.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact-cta"
                  className="text-xs font-bold text-[#087FE5] group-hover:text-[#063B83] flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>Request Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] font-semibold text-slate-500 font-mono bg-slate-50 px-2 py-0.5 rounded">
                  {mod.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          9. MAWAI "BLOGS" SECTION (Exact Match with Image 1: Date Block, Hover Zoom & Brand Blue)
      ========================================================================= */}
      <section id="blogs" className="bg-[#f8fafc] py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Mawai Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5] font-mono">
              INSIGHTS & PERSPECTIVES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#071B49] font-heading">
              Blogs
            </h2>
            <div className="w-12 h-1 bg-[#087FE5] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                day: '2',
                month: 'DEC',
                title: 'Empowering Your Business with SAP',
                author: 'by Admin',
                category: 'Technology',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                excerpt: 'How next-generation SAP ERP cloud architectures drive operational agility, eliminate process bottlenecks, and scale revenue.'
              },
              {
                id: 2,
                day: '7',
                month: 'JAN',
                title: 'SAP: Driving Industry Transformation ...',
                author: 'by Admin',
                category: 'Technology',
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
                excerpt: 'Explore how AI-integrated SAP S/4HANA automates predictive maintenance, supply chains, and statutory tax compliance.'
              },
              {
                id: 3,
                day: '12',
                month: 'FEB',
                title: 'SAP S/4HANA Cloud: Private or Public? ...',
                author: 'by Admin',
                category: 'Technology',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
                excerpt: 'Comprehensive decision framework comparing private versus public cloud ERP deployments for high-growth enterprises.'
              }
            ].map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/90 hover:border-[#087FE5]/50 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Image with Top-Right Date Badge & Smooth Hover Zoom */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Subtle Dark Vignette on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Top-Right Mawai Date Badge (Brand Electric Blue & White) */}
                    <div className="absolute top-3 right-3 z-20 bg-gradient-to-b from-[#087FE5] to-[#063B83] text-white px-3.5 py-2 rounded-lg shadow-lg text-center flex flex-col items-center justify-center min-w-[50px] border border-white/20 group-hover:scale-105 transition-transform">
                      <span className="text-lg font-black leading-none font-heading">{blog.day}</span>
                      <span className="text-[10px] font-extrabold tracking-wider leading-none mt-1 uppercase font-mono">{blog.month}</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 space-y-3">
                    {/* Meta info: by Admin & Technology */}
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <User className="w-3.5 h-3.5 text-[#087FE5]" />
                        <span>{blog.author}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Tag className="w-3.5 h-3.5 text-[#087FE5]" />
                        <span>{blog.category}</span>
                      </span>
                    </div>

                    {/* Blog Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors leading-snug font-heading">
                      <a href="#contact-cta">{blog.title}</a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-xs font-bold text-[#087FE5] group-hover:text-[#063B83] flex items-center gap-1 transition-colors">
                      <span>Read Full Insight</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. MAWAI CALL TO ACTION SECTION (Navy Blue Banner)
      ========================================================================= */}
      <section id="contact-cta" className="bg-gradient-to-r from-[#071B49] via-[#05143A] to-[#030A1C] text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Need Expert SAP ERP Consulting for Your Business?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our senior SAP S/4HANA architects to evaluate your ERP roadmap, cloud migration strategy, and statutory tax integrations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#087FE5] hover:bg-white hover:text-[#071B49] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-xl active:scale-95"
            >
              Get a Free Demo / Consultation
            </a>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full sm:w-auto text-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 transition-all active:scale-95"
            >
              Call: {COMPANY_INFO.primaryPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Floating Action / Chat Button on the Right Edge */}
      <a
        href="#contact-cta"
        className="fixed right-6 bottom-8 z-40 w-14 h-14 rounded-full bg-[#087FE5] hover:bg-[#063B83] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        aria-label="Enquire / Chat"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
