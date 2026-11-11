import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Play
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
      title: 'ZisanTech Solutions',
      headingMain: 'Best SAP ERP Consultancy In India',
      description: 'For over a decade, ZisanTech has been a trusted provider of ERP solutions and a recognized RISE with SAP S/4HANA Cloud Implementation Partner.',
      bgImage: '/slide1_bg.webp',
      badge: 'RISE with SAP S/4HANA',
      btnText: 'Get a free demo',
      btnLink: '/contact'
    },
    {
      title: 'Solutions for your businesses',
      headingMain: 'Unlock the Power of SAP S/4HANA with ZisanTech',
      description: 'Your Trusted Partner for Cloud, On-Premise, and Hybrid Solutions, empowering your enterprise to achieve operational excellence and real-time visibility.',
      bgImage: '/slide2_bg.webp',
      badge: 'Operational Excellence',
      btnText: 'Explore SAP Solutions',
      btnLink: '/services1/SAP SERVICES/1'
    },
    {
      title: 'Ideal for All Business Sizes',
      headingMain: 'Empower Your Business with Customizable SAP Solutions',
      description: 'Elevate your enterprise and SME operations to the next level with our innovative SAP add-ons, GST E-Invoice integrations, and 24/7 SLA support.',
      bgImage: '/slide3_bg.webp',
      badge: 'Customizable ERP',
      btnText: 'Discover Services',
      btnLink: '/services'
    }
  ];

  // Auto-slide every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-[#063B83] selection:text-white">
      {/* =========================================================================
          1. PREMIUM HERO REVOLUTION SLIDER BANNER (Mawai Reference Standard)
      ========================================================================= */}
      <section className="relative w-full h-[600px] sm:h-[660px] lg:h-[720px] overflow-hidden bg-slate-950">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Grayscale Enterprise Collaboration Visual with HUD Icons */}
            <img
              src={slide.bgImage}
              alt={slide.headingMain}
              className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75 scale-105 transition-transform duration-[7000ms]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80';
              }}
            />

            {/* Premium Gradient Overlay with Soft Royal Blue Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(8,127,229,0.22)_0%,transparent_65%)]"></div>

            {/* Slide Text Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-20">
              <div className="max-w-3xl text-left space-y-6 animate-fade-in">
                {/* Subtitle Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#08B9E8] animate-ping"></span>
                  <span className="text-xs font-bold tracking-widest text-[#08B9E8] uppercase font-mono">
                    {slide.title}
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight font-heading">
                  {slide.headingMain}
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl font-normal">
                  {slide.description}
                </p>

                {/* Action CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    to={slide.btnLink}
                    className="px-8 py-4 bg-[#063B83] hover:bg-[#087FE5] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded shadow-xl transition-all flex items-center gap-2 group hover:-translate-y-0.5"
                  >
                    <span>{slide.btnText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <Link
                    to="/about"
                    className="px-6 py-4 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded backdrop-blur-md border border-white/25 transition-all hover:-translate-y-0.5"
                  >
                    About ZisanTech
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Arrow Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#063B83] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#063B83] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all rounded-full ${
                i === currentSlide ? 'w-8 bg-[#087FE5]' : 'w-2.5 bg-white/40 hover:bg-white'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          2. MAWAI 3-FEATURE BENEFIT BAR (Overlapping Cards)
      ========================================================================= */}
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-lg shadow-xl border-t-4 border-[#063B83] space-y-3 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#063B83] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Swift ERP Implementation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Minimize downtime with our seasoned consulting team, ensuring a fast and seamless SAP S/4HANA Cloud rollout.
            </p>
          </div>

          <div className="bg-white p-7 rounded-lg shadow-xl border-t-4 border-[#087FE5] space-y-3 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#087FE5] flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Real-time Analytics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gain a decisive operational edge with instant data insights from SAP, driving enterprise efficiency and executive visibility.
            </p>
          </div>

          <div className="bg-white p-7 rounded-lg shadow-xl border-t-4 border-[#063B83] space-y-3 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#063B83] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Affordable Scalability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enjoy the scalability and flexibility of SAP Cloud offerings, adapting seamlessly to your corporate growth without friction.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MAWAI "ABOUT SECTION" (Digitize Your Business Processes)
      ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
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
              <div className="p-4 rounded-lg bg-[#f5f8fc] border-l-4 border-[#063B83] space-y-1.5">
                <h4 className="text-sm font-bold text-[#071B49]">Affordable ERP Solution</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tailored implementations engineered for enterprise agility and mid-market growth.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#f5f8fc] border-l-4 border-[#087FE5] space-y-1.5">
                <h4 className="text-sm font-bold text-[#071B49]">Customized ERP Add-ons</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  GST E-Invoicing, E-Way Bill, and proprietary workflow automation for Indian compliance.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#063B83] hover:bg-[#087FE5] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="ZisanTech SAP Consulting"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#071B49]">Certified SAP Consultants</p>
                  <p className="text-[11px] text-slate-500">24/7 SLA Hyper-care Support</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#063B83] text-white flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. MAWAI "WHY CHOOSE US" SECTION (Full-width Navy Blue)
      ========================================================================= */}
      <section className="bg-[#071B49] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
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
                    <div className="w-5 h-5 rounded-full bg-[#087FE5] text-white flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#087FE5] hover:bg-[#063B83] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-lg"
                >
                  <span>Connect With An Architect</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Video / Visual Banner */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 relative">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise IT Team"
                  className="w-full h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-[#063B83]/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-[#063B83] flex items-center justify-center shadow-2xl pl-1 hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. MAWAI FUN FACTS / METRICS STRIP
      ========================================================================= */}
      <section className="bg-[#f5f8fc] py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl sm:text-5xl font-extrabold text-[#063B83] font-heading">
                {COMPANY_INFO.experienceYears}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">Years of Trust</p>
            </div>

            <div className="space-y-2">
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087FE5] font-heading">
                {COMPANY_INFO.clientsCount}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">Happy Clients</p>
            </div>

            <div className="space-y-2">
              <p className="text-4xl sm:text-5xl font-extrabold text-[#063B83] font-heading">
                {COMPANY_INFO.consultantsCount}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">SAP Consultants</p>
            </div>

            <div className="space-y-2">
              <p className="text-4xl sm:text-5xl font-extrabold text-[#087FE5] font-heading">
                {COMPANY_INFO.studentsTrained}
              </p>
              <p className="text-xs uppercase tracking-wider text-slate-600 font-bold">Trained Professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. MAWAI "INDUSTRIES WE SERVE" SECTION
      ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading">
            Digitize your industry performance with our top SAP ERP Solution
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your industry-specific customized SAP ERP solutions for all business sizes, ensuring statutory compliance. We optimize processes, integrate best practices, and drive operational success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind: IndustryItem) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.id}`}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-72 flex flex-col justify-end p-6 border border-slate-200"
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
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. MAWAI "SERVICES & SOLUTIONS" CARDS SECTION
      ========================================================================= */}
      <section className="bg-[#f5f8fc] py-24 border-t border-slate-200">
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
            <Link
              to="/services1/SAP SERVICES/1"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#063B83] hover:text-[#087FE5] flex items-center gap-1.5"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service: ServiceItem) => (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#063B83] text-white text-[10px] font-bold uppercase font-mono">
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
                    <Link
                      to={service.url}
                      className="text-xs font-bold text-[#063B83] group-hover:text-[#087FE5] flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="text-xs text-slate-400 hover:text-slate-600"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. MAWAI "CAREERS / TRAINING" SECTION (Take Your Careers to New Heights)
      ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#087FE5]">
            Career Incubation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] font-heading">
            Take Your Careers to New Heights with the Leading ERP Solution Provider
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Upskill with real enterprise projects, 24/7 dedicated server sandboxes, and structured curriculum designed by veteran SAP consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_MODULES.slice(0, 8).map((mod: TrainingItem) => (
            <div
              key={mod.id}
              className="bg-white rounded-lg p-5 shadow border border-slate-200 hover:border-[#087FE5] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#063B83] bg-blue-50 px-2 py-0.5 rounded">
                  {mod.code}
                </span>
                <h3 className="text-sm font-bold text-[#071B49] mt-2 mb-1.5">{mod.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-3 mb-4">{mod.shortDesc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={mod.url}
                  className="text-xs font-semibold text-[#087FE5] hover:underline flex items-center gap-1"
                >
                  <span>Syllabus</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[11px] text-slate-400">{mod.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          9. MAWAI "BLOGS" SECTION
      ========================================================================= */}
      <section className="bg-[#f5f8fc] py-24 border-t border-slate-200">
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
            <Link
              to="/blog"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#063B83] hover:text-[#087FE5] flex items-center gap-1.5"
            >
              <span>View All Blogs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.slice(0, 3).map((blog: BlogItem) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden shadow border border-slate-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 w-full overflow-hidden relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white text-[#063B83] text-[10px] font-bold uppercase font-mono">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold text-[#071B49] group-hover:text-[#087FE5] transition-colors line-clamp-2">
                      <Link to={blog.url}>{blog.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">{blog.date}</span>
                    <Link
                      to={blog.url}
                      className="font-bold text-[#063B83] group-hover:text-[#087FE5] flex items-center gap-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. MAWAI CALL TO ACTION SECTION (Navy Blue Banner)
      ========================================================================= */}
      <section className="bg-[#071B49] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Need Expert SAP ERP Consulting for Your Business?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our senior SAP S/4HANA architects to evaluate your ERP roadmap, cloud migration strategy, and statutory tax integrations.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#087FE5] hover:bg-white hover:text-[#071B49] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-xl"
            >
              Get a Free Demo / Consultation
            </Link>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 transition-all"
            >
              Call: {COMPANY_INFO.primaryPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
