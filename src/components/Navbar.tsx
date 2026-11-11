import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  GraduationCap,
  Factory,
  ShoppingBag,
  Fuel,
  Sprout,
  Workflow,
  FlaskConical,
  Award
} from 'lucide-react';
import { SERVICES, TRAINING_MODULES, INDUSTRIES, COMPANY_INFO } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const industryIcons: Record<string, React.ReactNode> = {
    'manufacturing': <Factory className="w-4 h-4 text-[#063B83]" />,
    'retail-textile': <ShoppingBag className="w-4 h-4 text-[#087FE5]" />,
    'oil-gas': <Fuel className="w-4 h-4 text-[#063B83]" />,
    'agro-chemical': <Sprout className="w-4 h-4 text-[#087FE5]" />,
    'steel': <Workflow className="w-4 h-4 text-[#063B83]" />,
    'pharma': <FlaskConical className="w-4 h-4 text-[#087FE5]" />
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md font-sans">
      {/* 1. TOP MICRO-BAR: Identical to Mawai Top Bar (Email, Address, Social Icons) */}
      <div className="bg-[#f5f8fc] border-b border-slate-200 text-xs text-slate-600 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#063B83] transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#087FE5]" />
              <span>{COMPANY_INFO.primaryEmail}</span>
            </a>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-[#087FE5]" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <span className="text-slate-300">|</span>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#063B83] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#087FE5]" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={COMPANY_INFO.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-white border border-slate-200 hover:bg-[#087FE5] hover:text-white hover:border-[#087FE5] flex items-center justify-center text-slate-600 font-bold text-[11px] transition-all"
              aria-label="LinkedIn"
            >
              in
            </a>
            <Link
              to="/contact"
              className="px-3 py-1 bg-[#063B83] hover:bg-[#087FE5] text-white text-[11px] font-semibold rounded transition-colors"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER: Mawai Structure (Brand Logo on Left, Navigation in Center, SAP Gold Partner Badge on Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Left: ZisanTech Official Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/zisantech_logo.png"
            alt="ZisanTech Solutions"
            className="h-10 sm:h-12 w-auto object-contain"
            onError={(e) => {
              const target = e.target as HTMLElement;
              target.style.display = 'none';
            }}
          />
          <div className="hidden sm:block border-l border-slate-200 pl-3">
            <p className="text-sm font-extrabold text-[#071B49] leading-tight tracking-tight uppercase">ZisanTech</p>
            <p className="text-[10px] font-semibold text-[#087FE5] tracking-wider uppercase">SAP Consulting</p>
          </div>
        </Link>

        {/* Center: Desktop Navigation Bar with Smooth Dropdowns */}
        <nav className="hidden lg:flex items-center space-x-1 font-sans">
          <Link
            to="/"
            className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
              location.pathname === '/' ? 'text-[#063B83] font-bold border-b-2 border-[#063B83]' : 'text-slate-700 hover:text-[#063B83]'
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`px-3.5 py-2 text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors ${
                location.pathname.startsWith('/services') ? 'text-[#063B83] font-bold border-b-2 border-[#063B83]' : 'text-slate-700 hover:text-[#063B83]'
              }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute left-0 mt-1 w-[680px] bg-white border border-slate-200 rounded-lg shadow-2xl p-6 grid grid-cols-2 gap-6 animate-fade-in z-50">
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                    <Cpu className="w-4 h-4 text-[#063B83]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B83]">SAP Services</h4>
                  </div>
                  <ul className="space-y-1">
                    {SERVICES.filter(s => s.category === 'SAP SERVICES').map((s) => (
                      <li key={s.id}>
                        <Link
                          to={s.url}
                          className="block p-2 rounded hover:bg-[#f5f8fc] transition-colors group"
                        >
                          <p className="text-xs font-semibold text-slate-800 group-hover:text-[#087FE5] transition-colors">{s.title}</p>
                          <p className="text-[11px] text-slate-500 line-clamp-1">{s.shortDesc}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                    <Layers className="w-4 h-4 text-[#087FE5]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#087FE5]">Other IT Services</h4>
                  </div>
                  <ul className="space-y-1">
                    {SERVICES.filter(s => s.category === 'Other Services').map((s) => (
                      <li key={s.id}>
                        <Link
                          to={s.url}
                          className="block p-2 rounded hover:bg-[#f5f8fc] transition-colors group"
                        >
                          <p className="text-xs font-semibold text-slate-800 group-hover:text-[#087FE5] transition-colors">{s.title}</p>
                          <p className="text-[11px] text-slate-500 line-clamp-1">{s.shortDesc}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 rounded bg-[#f5f8fc] border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#071B49]">Need Custom Consulting?</p>
                      <p className="text-[10px] text-slate-500">Certified SAP architects available</p>
                    </div>
                    <Link to="/contact" className="px-3 py-1 bg-[#063B83] text-white rounded text-xs font-semibold hover:bg-[#087FE5] transition-colors">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Training Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('training')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`px-3.5 py-2 text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors ${
                location.pathname.startsWith('/trainingprogrammes') ? 'text-[#063B83] font-bold border-b-2 border-[#063B83]' : 'text-slate-700 hover:text-[#063B83]'
              }`}
            >
              Training
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'training' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'training' && (
              <div className="absolute left-0 mt-1 w-[720px] bg-white border border-slate-200 rounded-lg shadow-2xl p-6 grid grid-cols-2 gap-6 animate-fade-in z-50">
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                    <GraduationCap className="w-4 h-4 text-[#063B83]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B83]">Functional Modules</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-[280px] overflow-y-auto pr-1">
                    {TRAINING_MODULES.filter(t => t.type === 'functional').map((t) => (
                      <Link
                        key={t.id}
                        to={t.url}
                        className="p-1.5 rounded hover:bg-[#f5f8fc] text-xs group block"
                      >
                        <span className="font-bold text-[#087FE5] block text-[10px]">{t.code}</span>
                        <span className="text-slate-700 group-hover:text-[#063B83] font-medium truncate block">{t.title.split(' (')[0]}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                    <Cpu className="w-4 h-4 text-[#087FE5]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#087FE5]">Technical Modules</h4>
                  </div>
                  <ul className="space-y-1">
                    {TRAINING_MODULES.filter(t => t.type === 'technical').map((t) => (
                      <li key={t.id}>
                        <Link
                          to={t.url}
                          className="block p-1.5 rounded hover:bg-[#f5f8fc] text-xs group"
                        >
                          <span className="font-bold text-[#063B83] mr-1.5 text-[10px]">{t.code}</span>
                          <span className="text-slate-700 group-hover:text-[#087FE5] font-medium">{t.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 rounded bg-[#f5f8fc] border border-slate-200">
                    <p className="text-xs font-bold text-[#063B83]">100% Placement & Live Sandbox</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Hands-on real enterprise scenarios</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown (Requirement: "We Serve Industries") */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`px-3.5 py-2 text-sm font-semibold tracking-wide flex items-center gap-1 transition-colors ${
                location.pathname.startsWith('/industries') ? 'text-[#063B83] font-bold border-b-2 border-[#063B83]' : 'text-slate-700 hover:text-[#063B83]'
              }`}
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute left-0 mt-1 w-[620px] bg-white border border-slate-200 rounded-lg shadow-2xl p-5 animate-fade-in z-50">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#063B83]">Industries We Serve</span>
                  <Link to="/industries" className="text-xs text-[#087FE5] font-semibold hover:underline">
                    View All →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {INDUSTRIES.map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries/${ind.id}`}
                      className="flex items-center gap-2.5 p-2 rounded hover:bg-[#f5f8fc] group transition-colors"
                    >
                      <div className="p-1.5 rounded bg-slate-100 group-hover:bg-blue-50 transition-colors">
                        {industryIcons[ind.id]}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 group-hover:text-[#063B83]">{ind.name}</p>
                        <p className="text-[10px] text-slate-500 line-clamp-1">{ind.tagline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
              location.pathname === '/about' ? 'text-[#063B83] font-bold border-b-2 border-[#063B83]' : 'text-slate-700 hover:text-[#063B83]'
            }`}
          >
            Company
          </Link>

          <Link
            to="/blog"
            className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
              location.pathname.startsWith('/blog') ? 'text-[#063B83] font-bold border-b-2 border-[#063B83]' : 'text-slate-700 hover:text-[#063B83]'
            }`}
          >
            Blogs
          </Link>

          <Link
            to="/contact"
            className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors ${
              location.pathname === '/contact' ? 'text-[#063B83] font-bold border-b-2 border-[#063B83]' : 'text-slate-700 hover:text-[#063B83]'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right: SAP Partner Badge (Mawai's Signature Header Badge) */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded shadow-sm hover:shadow transition-shadow">
            <img
              src="/SAPlogo.webp"
              alt="SAP Gold Partner"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded text-slate-700 hover:text-[#063B83] hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <Link to="/" className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">
            Home
          </Link>
          <Link to="/about" className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">
            Company (About Us)
          </Link>
          <Link to="/services1/SAP SERVICES/1" className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">
            SAP Services
          </Link>
          <Link to="/industries" className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">
            Industries We Serve
          </Link>
          <Link to="/trainingprogrammes/Functional Modules/1" className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">
            SAP Training
          </Link>
          <Link to="/blog" className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">
            Blogs
          </Link>
          <Link to="/contact" className="block py-2 text-sm font-semibold text-slate-800 border-b border-slate-100">
            Contact Us
          </Link>
          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full block text-center py-2.5 bg-[#063B83] text-white font-bold rounded text-xs hover:bg-[#087FE5]"
            >
              Get a Free Demo / Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
