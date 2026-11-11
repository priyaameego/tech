import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Factory,
  ShoppingBag,
  Fuel,
  Sprout,
  Workflow,
  FlaskConical,
  GraduationCap,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Compass,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const toggleDropdownClick = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const toggleMobileSubmenu = (menuName: string) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === menuName ? null : menuName);
  };

  // Six genuine industry items
  const industriesList = [
    { name: 'Manufacturing', icon: Factory, desc: 'Shop-floor execution, S/4HANA supply chain synchronization' },
    { name: 'Retail & Textile', icon: ShoppingBag, desc: 'Omnichannel inventory & unified merchandise management' },
    { name: 'Oil & Gas', icon: Fuel, desc: 'Upstream-to-downstream asset tracking & plant operations' },
    { name: 'Agro Chemical', icon: Sprout, desc: 'Batch traceability, formulation & regulatory compliance' },
    { name: 'Steel', icon: Workflow, desc: 'Heavy industrial production, metallurgy & continuous rolling' },
    { name: 'Pharma', icon: FlaskConical, desc: 'GMP validation, cold-chain logistics & batch serialization' },
  ];

  // Verified services items
  const servicesList = [
    { title: 'SAP Rollout', desc: 'Standardized multi-location template deployment' },
    { title: 'SAP Custom Solutions', desc: 'Tailored workflow automations & enhancements' },
    { title: 'SAP Support', desc: 'Level 1 to Level 3 SLA-governed support' },
    { title: 'SAP Integration', desc: 'Gate Management, Weighbridge, Bank, E-commerce, HRMS' },
    { title: 'SAP Consulting', desc: 'Business process optimization & digital roadmaps' },
    { title: 'SAP E-Invoice & E-Way Bill', desc: 'Automated real-time NIC portal clearance' },
  ];

  // SAP Training modules
  const trainingList = [
    { category: 'Functional Modules', items: ['SAP FICO (Financial & Cost Management)', 'SAP MM (Materials Management)', 'SAP SD (Sales & Distribution)', 'SAP PP (Production Planning)', 'SAP QM (Quality Management)', 'SAP HCM (Human Capital Management)'] },
    { category: 'Technical Modules', items: ['SAP ABAP on HANA', 'SAP BASIS Administration', 'SAP CPI (Cloud Integration)', 'SAP PI/PO Process Orchestration', 'SAP CIDS Data Services'] }
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#FFFFFF] shadow-md border-b border-[#D2E2D9] font-sans">
      
      {/* Top Luxury Ivory/Sage Utility Strip */}
      <div className="hidden lg:block border-b border-[#D2E2D9] bg-[#F5F3ED] text-xs text-[#252B29]/80 py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#087F5B] font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
              Global Enterprise SAP & IT Consulting
            </span>
            <span className="text-[#D2E2D9]">•</span>
            <span className="flex items-center gap-1.5 text-[#252B29] font-medium hover:text-[#087F5B] transition-colors cursor-default">
              <Phone className="w-3 h-3 text-[#C6A66B]" />
              {COMPANY_INFO.primaryPhone}
            </span>
            <span className="text-[#D2E2D9]">•</span>
            <span className="flex items-center gap-1.5 text-[#252B29] font-medium hover:text-[#087F5B] transition-colors cursor-default">
              <Mail className="w-3 h-3 text-[#C6A66B]" />
              {COMPANY_INFO.primaryEmail}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-[#252B29]/80 cursor-default font-medium">
              <MapPin className="w-3 h-3 text-[#C6A66B]" />
              {COMPANY_INFO.address}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#087F5B]/15 text-[#087F5B] border border-[#087F5B]/30">
              Enterprise Grade SLA
            </span>
          </div>
        </div>
      </div>

      {/* Main Solid Pure White Navbar */}
      <div className="bg-[#FFFFFF] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo on Pure White */}
            <div className="flex items-center space-x-3 cursor-default select-none group py-2">
              <img
                src="/zisantech_luxury_logo.png"
                alt="ZisanTech Enterprise Consulting"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Desktop Navigation Items on Pure White Background - Crisp Dark Graphite Text */}
            <nav className="hidden lg:flex items-center space-x-1 font-semibold text-sm text-[#252B29]">
              
              {/* Home */}
              <div className="px-4 py-2 text-[#087F5B] font-extrabold tracking-wide border-b-2 border-[#087F5B] cursor-default select-none">
                Home
              </div>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdownClick('about')}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors cursor-default select-none ${activeDropdown === 'about' ? 'text-[#087F5B] bg-[#E8F1EC]' : 'text-[#252B29] hover:text-[#087F5B]'}`}
                >
                  <span className="font-semibold">About Us</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#C6A66B] transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#FFFFFF] border border-[#D2E2D9] shadow-2xl p-4 text-[#252B29] animate-fade-in z-50">
                    <div className="text-[11px] font-bold tracking-wider text-[#087F5B] uppercase px-3 py-1.5 border-b border-[#D2E2D9]">
                      Corporate Overview
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="px-3 py-2.5 rounded-xl hover:bg-[#F5F3ED] transition-colors cursor-default">
                        <div className="text-sm font-bold text-[#252B29]">Who We Are</div>
                        <div className="text-xs text-[#252B29]/70 mt-0.5">Premier SAP consulting and intelligent enterprise engineering</div>
                      </div>
                      <div className="px-3 py-2.5 rounded-xl hover:bg-[#F5F3ED] transition-colors cursor-default">
                        <div className="text-sm font-bold text-[#252B29]">Our Core Principles</div>
                        <div className="text-xs text-[#252B29]/70 mt-0.5">Precision architecture, clean-core governance & client longevity</div>
                      </div>
                      <div className="px-3 py-2.5 rounded-xl hover:bg-[#F5F3ED] transition-colors cursor-default">
                        <div className="text-sm font-bold text-[#252B29]">Executive Leadership</div>
                        <div className="text-xs text-[#252B29]/70 mt-0.5">Seasoned SAP architects with 10+ years enterprise tenure</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-[#D2E2D9] px-3 flex items-center justify-between text-xs text-[#C6A66B] font-semibold">
                      <span>Consulting Excellence</span>
                      <ShieldCheck className="w-4 h-4 text-[#087F5B]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Our Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdownClick('services')}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors cursor-default select-none ${activeDropdown === 'services' ? 'text-[#087F5B] bg-[#E8F1EC]' : 'text-[#252B29] hover:text-[#087F5B]'}`}
                >
                  <span className="font-semibold">Our Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#C6A66B] transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full -left-20 mt-2 w-[540px] rounded-2xl bg-[#FFFFFF] border border-[#D2E2D9] shadow-2xl p-5 text-[#252B29] animate-fade-in z-50">
                    <div className="flex items-center justify-between px-3 pb-2.5 border-b border-[#D2E2D9]">
                      <span className="text-[11px] font-bold tracking-wider text-[#087F5B] uppercase">SAP & Enterprise Solutions</span>
                      <span className="text-[10px] font-bold text-[#087F5B] bg-[#087F5B]/10 px-2.5 py-0.5 rounded border border-[#087F5B]/30">Production-Ready</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {servicesList.map((svc, idx) => (
                        <div key={idx} className="p-3 rounded-xl hover:bg-[#F5F3ED] transition-colors cursor-default group">
                          <div className="text-sm font-bold text-[#252B29] group-hover:text-[#087F5B] transition-colors">{svc.title}</div>
                          <div className="text-xs text-[#252B29]/70 mt-1 leading-relaxed">{svc.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('industries')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdownClick('industries')}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors cursor-default select-none ${activeDropdown === 'industries' ? 'text-[#087F5B] bg-[#E8F1EC]' : 'text-[#252B29] hover:text-[#087F5B]'}`}
                >
                  <span className="font-semibold">Industries</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#C6A66B] transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'industries' && (
                  <div className="absolute top-full -left-12 mt-2 w-[480px] rounded-2xl bg-[#FFFFFF] border border-[#D2E2D9] shadow-2xl p-5 text-[#252B29] animate-fade-in z-50">
                    <div className="flex items-center justify-between px-3 pb-2.5 border-b border-[#D2E2D9]">
                      <span className="text-[11px] font-bold tracking-wider text-[#087F5B] uppercase">Six Specialized Sectors</span>
                      <span className="text-[10px] text-[#C6A66B] bg-[#F5F3ED] px-2.5 py-0.5 rounded border border-[#C6A66B]/40 font-bold">Best Practices</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 mt-3">
                      {industriesList.map((ind, idx) => {
                        const IconComp = ind.icon;
                        return (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F5F3ED] transition-colors cursor-default group">
                            <div className="p-2 rounded-lg bg-[#E8F1EC] text-[#087F5B] border border-[#087F5B]/30 group-hover:border-[#C6A66B]/50 transition-colors flex-shrink-0">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-[#252B29] group-hover:text-[#087F5B] transition-colors">{ind.name}</div>
                              <div className="text-[11px] text-[#252B29]/70 mt-0.5 leading-snug">{ind.desc}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* SAP Training Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('training')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdownClick('training')}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors cursor-default select-none ${activeDropdown === 'training' ? 'text-[#087F5B] bg-[#E8F1EC]' : 'text-[#252B29] hover:text-[#087F5B]'}`}
                >
                  <span className="font-semibold">SAP Training</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#C6A66B] transition-transform duration-200 ${activeDropdown === 'training' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'training' && (
                  <div className="absolute top-full right-0 mt-2 w-[520px] rounded-2xl bg-[#FFFFFF] border border-[#D2E2D9] shadow-2xl p-5 text-[#252B29] animate-fade-in z-50">
                    <div className="flex items-center justify-between px-3 pb-2.5 border-b border-[#D2E2D9]">
                      <span className="text-[11px] font-bold tracking-wider text-[#087F5B] uppercase">Enterprise Skill Enablement</span>
                      <span className="text-[10px] text-[#252B29]/70 font-semibold">Functional & Technical</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      {trainingList.map((col, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider px-2 pb-1 border-b border-[#D2E2D9]">
                            {col.category}
                          </div>
                          {col.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="px-2.5 py-1.5 rounded-lg hover:bg-[#F5F3ED] transition-colors cursor-default text-xs text-[#252B29]/85 font-medium">
                              {item}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <div className="px-4 py-2 text-[#252B29] hover:text-[#087F5B] transition-colors cursor-default select-none font-semibold">
                Contact Us
              </div>
            </nav>

            {/* Action Consultation Button on Pure White Navbar */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="relative group cursor-pointer select-none">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#087F5B] via-[#C6A66B] to-[#087F5B] opacity-80 blur-sm group-hover:opacity-100 transition duration-300"></div>
                <button
                  type="button"
                  className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#087F5B] to-[#055B41] border border-[#C6A66B]/50 text-[#FFFFFF] text-sm font-bold tracking-wide shadow-lg flex items-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <span>Get Consultation</span>
                  <Sparkles className="w-4 h-4 text-[#DFCA9C]" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#252B29] hover:text-[#087F5B] bg-[#F5F3ED] border border-[#D2E2D9] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#087F5B]" /> : <Menu className="w-6 h-6 text-[#252B29]" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Pure White) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#D2E2D9] px-6 py-5 text-[#252B29] space-y-4 animate-fade-in shadow-2xl">
          <div className="py-2 text-base font-bold text-[#087F5B] border-b border-[#D2E2D9] cursor-default">
            Home
          </div>

          <div>
            <div
              onClick={() => toggleMobileSubmenu('about')}
              className="flex items-center justify-between py-2 text-base font-bold text-[#252B29] cursor-default"
            >
              <span>About Us</span>
              <ChevronDown className={`w-4 h-4 text-[#C6A66B] transition-transform ${mobileActiveSubmenu === 'about' ? 'rotate-180' : ''}`} />
            </div>
            {mobileActiveSubmenu === 'about' && (
              <div className="pl-4 py-2 space-y-2 text-sm text-[#252B29]/75 border-l border-[#087F5B]/30 font-medium">
                <div className="cursor-default">Who We Are</div>
                <div className="cursor-default">Our Core Principles</div>
                <div className="cursor-default">Executive Leadership</div>
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => toggleMobileSubmenu('services')}
              className="flex items-center justify-between py-2 text-base font-bold text-[#252B29] cursor-default"
            >
              <span>Our Services</span>
              <ChevronDown className={`w-4 h-4 text-[#C6A66B] transition-transform ${mobileActiveSubmenu === 'services' ? 'rotate-180' : ''}`} />
            </div>
            {mobileActiveSubmenu === 'services' && (
              <div className="pl-4 py-2 space-y-2 text-sm text-[#252B29]/75 border-l border-[#087F5B]/30 font-medium">
                {servicesList.map((svc, i) => (
                  <div key={i} className="cursor-default">{svc.title}</div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => toggleMobileSubmenu('industries')}
              className="flex items-center justify-between py-2 text-base font-bold text-[#252B29] cursor-default"
            >
              <span>Industries</span>
              <ChevronDown className={`w-4 h-4 text-[#C6A66B] transition-transform ${mobileActiveSubmenu === 'industries' ? 'rotate-180' : ''}`} />
            </div>
            {mobileActiveSubmenu === 'industries' && (
              <div className="pl-4 py-2 space-y-2 text-sm text-[#252B29]/75 border-l border-[#087F5B]/30 font-medium">
                {industriesList.map((ind, i) => (
                  <div key={i} className="cursor-default">{ind.name}</div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => toggleMobileSubmenu('training')}
              className="flex items-center justify-between py-2 text-base font-bold text-[#252B29] cursor-default"
            >
              <span>SAP Training</span>
              <ChevronDown className={`w-4 h-4 text-[#C6A66B] transition-transform ${mobileActiveSubmenu === 'training' ? 'rotate-180' : ''}`} />
            </div>
            {mobileActiveSubmenu === 'training' && (
              <div className="pl-4 py-2 space-y-2 text-sm text-[#252B29]/75 border-l border-[#087F5B]/30 font-medium">
                <div className="text-xs font-bold text-[#087F5B] uppercase">Functional Modules</div>
                <div className="cursor-default">SAP FICO, MM, SD, PP, QM, HCM</div>
                <div className="text-xs font-bold text-[#087F5B] uppercase pt-1">Technical Modules</div>
                <div className="cursor-default">SAP ABAP, BASIS, CPI, PI/PO</div>
              </div>
            )}
          </div>

          <div className="py-2 text-base font-bold text-[#252B29] cursor-default">
            Contact Us
          </div>

          <div className="pt-3">
            <button
              type="button"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#087F5B] to-[#055B41] border border-[#C6A66B]/60 text-[#FFFFFF] text-center font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] transition-all"
            >
              <span>Get Consultation</span>
              <Sparkles className="w-4 h-4 text-[#DFCA9C]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
