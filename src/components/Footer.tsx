import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Award,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1F1D] text-[#E8F1EC] font-sans border-t border-[#C6A66B]/30 relative overflow-hidden">
      {/* Subtle luxury ambient emerald and gold lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#087F5B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C6A66B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Luxury Contact Strip */}
      <div className="bg-[#252B29]/90 py-7 border-b border-[#C6A66B]/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone contact */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#087F5B] to-[#044230] border border-[#C6A66B]/40 text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#087F5B]/20">
                <Phone className="w-5 h-5 text-[#DFCA9C]" />
              </div>
              <div>
                <p className="text-[11px] text-[#C6A66B] uppercase tracking-wider font-semibold">Speak with an SAP Director</p>
                <div className="text-sm font-bold text-[#FFFFFF] cursor-default">{COMPANY_INFO.primaryPhone}</div>
              </div>
            </div>

            {/* Email contact */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#087F5B] to-[#044230] border border-[#C6A66B]/40 text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#087F5B]/20">
                <Mail className="w-5 h-5 text-[#DFCA9C]" />
              </div>
              <div>
                <p className="text-[11px] text-[#C6A66B] uppercase tracking-wider font-semibold">Official Advisory Enquiry</p>
                <div className="text-sm font-bold text-[#FFFFFF] cursor-default">{COMPANY_INFO.primaryEmail}</div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#087F5B] to-[#044230] border border-[#C6A66B]/40 text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#087F5B]/20">
                <MapPin className="w-5 h-5 text-[#DFCA9C]" />
              </div>
              <div>
                <p className="text-[11px] text-[#C6A66B] uppercase tracking-wider font-semibold">Headquarters & Advisory Center</p>
                <p className="text-xs text-[#FFFFFF] font-medium">{COMPANY_INFO.address}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Luxury Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Brand & Introduction Column (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3 cursor-default select-none">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#087F5B] to-[#044230] border border-[#C6A66B]/50 shadow-lg shadow-[#087F5B]/20">
                <span className="text-[#DFCA9C] font-serif font-extrabold text-xl">Z</span>
                <span className="text-[#FFFFFF] font-sans text-xs ml-0.5 font-bold">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-[#FFFFFF] font-heading">
                  Zisan<span className="text-[#C6A66B]">Tech</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C6A66B] font-medium">
                  Enterprise SAP Consulting
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E8F1EC]/75 leading-relaxed pr-4">
              ZisanTech delivers intelligent SAP solutions and modern enterprise technology services to help businesses transform operations, modernize business processes, and achieve long-term commercial success.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-[#C6A66B]/30 text-[11px] font-medium text-[#DFCA9C] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#087F5B]" />
                10+ Years Advisory Experience
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-[#087F5B]/40 text-[11px] font-medium text-[#E8F1EC] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B]" />
                24/7 SLA Support
              </div>
            </div>
          </div>

          {/* Visual Navigation Labels (Span 4) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                Enterprise Solutions
              </h4>
              <ul className="space-y-2.5 text-xs text-[#E8F1EC]/70">
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">SAP S/4HANA Migration</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">Clean-Core Architecture</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">SAP Cloud Integration (CPI)</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">Statutory E-Invoicing</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">SAP AMS & SLA Operations</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">Workflow & Custom BTP</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                Industries We Serve
              </h4>
              <ul className="space-y-2.5 text-xs text-[#E8F1EC]/70">
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">Manufacturing</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">Retail & Textile</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">Oil & Gas</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">Agro Chemical</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">Steel</li>
                <li className="cursor-default hover:text-[#FFFFFF] transition-colors">Pharma</li>
              </ul>
            </div>
          </div>

          {/* Premium Map Image Card (Span 4) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden border border-[#C6A66B]/30 bg-[#252B29] shadow-xl relative group">
              <div className="p-3.5 border-b border-white/10 flex items-center justify-between bg-black/20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#087F5B] animate-pulse"></div>
                  <span className="text-xs font-semibold text-[#FFFFFF] tracking-wide">Global Delivery Center</span>
                </div>
                <span className="text-[11px] text-[#C6A66B] font-mono">New Delhi, India</span>
              </div>

              {/* Verified High-Precision Stylized Map Graphic */}
              <div className="relative h-44 w-full overflow-hidden bg-[#151917]">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="ZisanTech Strategic Consulting Center Map"
                  className="w-full h-full object-cover opacity-60 filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1D] via-[#1A1F1D]/40 to-transparent" />
                
                {/* Pin indicator with luxury gold/emerald glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-[#087F5B]/30 animate-ping absolute -inset-1" />
                    <div className="relative w-7 h-7 rounded-full bg-gradient-to-br from-[#087F5B] to-[#044230] border-2 border-[#C6A66B] shadow-xl flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5 text-[#DFCA9C]" />
                    </div>
                  </div>
                  <div className="mt-1 px-2.5 py-0.5 rounded-md bg-[#252B29]/90 border border-[#C6A66B]/40 text-[10px] font-semibold text-[#FFFFFF] tracking-wider uppercase shadow-lg">
                    ZisanTech HQ
                  </div>
                </div>
              </div>

              <div className="p-3 text-[11px] text-[#E8F1EC]/70 flex items-center justify-between">
                <span>{COMPANY_INFO.address}</span>
                <span className="text-[#087F5B] font-medium flex items-center gap-1">
                  Active Hub
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8F1EC]/60 gap-4">
          <div>
            © {new Date().getFullYear()} ZisanTech Solutions. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-[#E8F1EC]/50">
            <span className="cursor-default hover:text-[#C6A66B] transition-colors">Enterprise Privacy Standards</span>
            <span>•</span>
            <span className="cursor-default hover:text-[#C6A66B] transition-colors">Information Security Governance</span>
            <span>•</span>
            <span className="cursor-default hover:text-[#C6A66B] transition-colors">Terms of Consulting</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
