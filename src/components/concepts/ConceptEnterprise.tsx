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
  MessageSquare
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
              {/* Background Visual (Absolute positioning ensures text is NEVER pushed down) */}
              <img
                src={slide.bgImage}
                alt={slide.line1}
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75 scale-105 transition-transform duration-[6000ms]"
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
                    {/* 1. Mawai Top Badge with Gold Accent Bar */}
                    <motion.div
                      key={`badge-${currentSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md"
                    >
                      <span className="w-5 h-0.5 bg-[#F59E0B] rounded-full"></span>
                      <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-100 uppercase font-mono">
                        {slide.badge}
                      </span>
                    </motion.div>

                    {/* 2. Main Headline - Exact 2-Tone Mawai Style with Gold SAP Highlights */}
                    <motion.h1
                      key={`headline-${currentSlide}`}
                      initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.14] tracking-tight font-heading"
                    >
                      {slide.line1} <br />
                      <span className="text-[#F59E0B] drop-shadow-[0_2px_12px_rgba(245,158,11,0.3)]">
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

                    {/* 4. Action CTA Buttons - Mawai Gold Demo Button */}
                    <motion.div
                      key={`btns-${currentSlide}`}
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                      <a
                        href={slide.btnLink}
                        className="w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-lg shadow-xl shadow-[#F59E0B]/20 transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:scale-95 cursor-pointer"
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

        {/* Carousel Arrow Controls (Mawai Style round dark glass buttons) */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#F59E0B] hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#F59E0B] hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-90 cursor-pointer"
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
                i === currentSlide ? 'w-8 bg-[#F59E0B]' : 'w-2.5 bg-white/40 hover:bg-white'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          2. MAWAI 3-FEATURE BENEFIT BAR (Overlapping 3D Tilt Cards)
      ========================================================================= */}
      <section id="benefits" className="relative z-30 -mt-8 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="bg-white p-7 rounded-xl shadow-xl border-t-4 border-[#063B83] space-y-3 transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#063B83] flex items-center justify-center shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Swift ERP Implementation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Minimize downtime with our seasoned consulting team, ensuring a fast and seamless SAP S/4HANA Cloud rollout.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="bg-white p-7 rounded-xl shadow-xl border-t-4 border-[#087FE5] space-y-3 transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#087FE5] flex items-center justify-center shadow-sm">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Real-time Analytics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gain a decisive operational edge with instant data insights from SAP, driving enterprise efficiency and executive visibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="bg-white p-7 rounded-xl shadow-xl border-t-4 border-[#063B83] space-y-3 transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#063B83] flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Affordable Scalability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enjoy the scalability and flexibility of SAP Cloud offerings, adapting seamlessly to your corporate growth without friction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          3. MAWAI "ABOUT SECTION" (Digitize Your Business Processes)
      ========================================================================= */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
                Digitize Your Business Processes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] mt-2 leading-tight font-heading">
                ZisanTech, Your Partner in Building a Sustainable Digital Future with SAP
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              ZisanTech Solutions is a premier technology and ERP consulting practice drawn from over a decade of verified industry expertise. As an enterprise partner, we provide licensing, implementation, consulting, custom development, and round-the-clock support services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-4 rounded-xl bg-[#f5f8fc] border-l-4 border-[#063B83] space-y-1.5 shadow-sm">
                <h4 className="text-sm font-bold text-[#071B49]">Affordable ERP Solution</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tailored implementations engineered for enterprise agility and mid-market growth.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f5f8fc] border-l-4 border-[#087FE5] space-y-1.5 shadow-sm">
                <h4 className="text-sm font-bold text-[#071B49]">Customized ERP Add-ons</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  GST E-Invoicing, E-Way Bill, and proprietary workflow automation for Indian compliance.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#063B83] hover:bg-[#087FE5] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="ZisanTech SAP Consulting"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-xs font-bold text-[#071B49]">Certified SAP Consultants</p>
                  <p className="text-[11px] text-slate-500">24/7 SLA Hyper-care Support</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#063B83] text-white flex items-center justify-center shadow">
                  <Award className="w-5 h-5" />
                </div>
              </div>
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
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 relative group">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise IT Team"
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#063B83]/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-[#063B83] flex items-center justify-center shadow-2xl pl-1 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current" />
                  </div>
                </div>
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
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <a
                href="#contact-cta"
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-72 flex flex-col justify-end p-6 border border-slate-200 block"
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="relative z-10 space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors font-heading">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {ind.summary}
                  </p>
                  <div className="pt-2 flex items-center text-xs font-bold text-sky-400 group-hover:text-white transition-colors">
                    <span>Enquire Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. MAWAI "SERVICES & SOLUTIONS" CARDS SECTION (3D Hover Glow)
      ========================================================================= */}
      <section id="services" className="bg-[#f5f8fc] py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
                Our Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] mt-2 font-heading">
                Enterprise SAP & IT Services
              </h2>
            </div>
            <a
              href="#contact-cta"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#063B83] hover:text-[#087FE5] flex items-center gap-1.5"
            >
              <span>Consult On Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service: ServiceItem, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-[#087FE5]/50 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#063B83] text-white text-[10px] font-bold uppercase font-mono shadow">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors font-heading">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#contact-cta"
                      className="text-xs font-bold text-[#063B83] group-hover:text-[#087FE5] flex items-center gap-1"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#contact-cta"
                      className="text-xs text-slate-400 hover:text-slate-600 font-medium"
                    >
                      Enquire
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
            Career Incubation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading">
            Take Your Careers to New Heights with the Leading ERP Solution Provider
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
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
              transition={{ duration: 0.35, delay: i * 0.08 }}
              whileHover={{ y: -6, borderColor: '#087FE5' }}
              className="bg-white rounded-xl p-5 shadow border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#063B83] bg-blue-50 px-2 py-0.5 rounded">
                  {mod.code}
                </span>
                <h3 className="text-sm font-bold text-[#071B49] mt-2 mb-1.5">{mod.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-3 mb-4">{mod.shortDesc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact-cta"
                  className="text-xs font-semibold text-[#087FE5] hover:underline flex items-center gap-1"
                >
                  <span>Request Syllabus</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <span className="text-[11px] text-slate-400">{mod.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          9. MAWAI "BLOGS" SECTION (Executive Tech Insights)
      ========================================================================= */}
      <section id="blogs" className="bg-[#f5f8fc] py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
                Insights & Knowledge
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] mt-2 font-heading">
                Latest From Our Blog
              </h2>
            </div>
            <a
              href="#contact-cta"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#063B83] hover:text-[#087FE5] flex items-center gap-1.5"
            >
              <span>View Articles</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.slice(0, 3).map((blog: BlogItem, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl overflow-hidden shadow border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 w-full overflow-hidden relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white text-[#063B83] text-[10px] font-bold uppercase font-mono shadow">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors line-clamp-2">
                      <a href="#contact-cta">{blog.title}</a>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">{blog.date}</span>
                    <a
                      href="#contact-cta"
                      className="font-bold text-[#063B83] group-hover:text-[#087FE5] flex items-center gap-1"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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
