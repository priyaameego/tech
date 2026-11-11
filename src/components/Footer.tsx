import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, TRAINING_MODULES, INDUSTRIES } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071B49] text-slate-300 font-sans border-t border-slate-700">
      {/* 1. MAWAI TOP FOOTER CONTACT STRIP */}
      <div className="bg-[#040F2B] py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#087FE5] text-white flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Have any questions? Call us</p>
              <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-sm font-bold text-white hover:text-[#087FE5]">
                {COMPANY_INFO.primaryPhone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#087FE5] text-white flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Write an email</p>
              <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-sm font-bold text-white hover:text-[#087FE5]">
                {COMPANY_INFO.primaryEmail}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#087FE5] text-white flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Visit our office</p>
              <p className="text-xs text-white font-medium">{COMPANY_INFO.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN 4-COLUMN FOOTER: Identical to Mawai Footers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About ZisanTech */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/zisantech_logo.png"
                alt="ZisanTech Solutions"
                className="h-9 w-auto bg-white p-1 rounded object-contain"
              />
              <span className="text-xl font-extrabold text-white font-heading">ZisanTech</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              ZisanTech Solutions is a premier technology and ERP consulting practice specializing in SAP S/4HANA Cloud implementations, custom ERP development, and career-focused professional training.
            </p>

            <div className="pt-2">
              <img
                src="/SAPlogo.webp"
                alt="SAP Partner"
                className="h-10 w-auto bg-white p-1 rounded object-contain"
              />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#087FE5] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-white transition-colors">About ZisanTech</Link></li>
              <li><Link to="/career" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/services1/SAP SERVICES/1" className="hover:text-white transition-colors">SAP S/4HANA Services</Link></li>
              <li><Link to="/trainingprogrammes/Functional Modules/1" className="hover:text-white transition-colors">SAP Training Programs</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries We Serve</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blogs & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Industries We Serve (Mawai List) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#087FE5] pb-2 inline-block">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <Link to={`/industries/${ind.id}`} className="hover:text-white transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Map & Address */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-[#087FE5] pb-2 inline-block">
              Our Location
            </h4>
            <p className="text-xs text-slate-300">{COMPANY_INFO.address}</p>

            <div className="h-28 w-full rounded bg-[#063B83] border border-slate-700 relative overflow-hidden flex items-center justify-center text-center p-3">
              <div className="space-y-1">
                <MapPin className="w-6 h-6 text-[#087FE5] mx-auto animate-bounce" />
                <p className="text-xs font-bold text-white">ZisanTech Solutions Hub</p>
                <p className="text-[10px] text-slate-300">New Delhi CBD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT BAR */}
      <div className="bg-[#030b20] py-4 border-t border-slate-800 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} ZisanTech Solutions. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-white">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white">Terms of Use</Link>
            <Link to="/contact" className="hover:text-white">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
