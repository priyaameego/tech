import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, TRAINING_MODULES } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    interestType: 'sap-consulting',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-navy-950 text-white py-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
              Direct Advisory Channel
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
              Contact ZisanTech Solutions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Connect directly with our enterprise SAP solution architects and workforce training advisory team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Verified Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info and Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-950">Enterprise Head Office</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you require an immediate SAP system health audit, GST E-Invoice API bridge deployment, or structured corporate training cohorts, our specialists are ready to assist.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters</h4>
                  <p className="text-sm font-semibold text-navy-950 mt-0.5">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Phone className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Support</h4>
                  <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="text-sm font-semibold text-navy-950 mt-0.5 block hover:text-blue-700">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Mail className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Inquiries</h4>
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-sm font-semibold text-navy-950 mt-0.5 block hover:text-blue-700">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Hours</h4>
                  <p className="text-sm font-semibold text-navy-950 mt-0.5">Mon - Sat: 9:00 AM – 7:00 PM IST</p>
                  <p className="text-xs text-slate-500 mt-0.5">24/7 SLA Hyper-Care for contracted clients</p>
                </div>
              </div>
            </div>

            {/* Business Location Map Preview Box */}
            <div className="rounded-2xl bg-navy-950 p-6 text-white border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-teal-400">Verified Location Map</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Verified Office</span>
              </div>
              <div className="h-44 w-full rounded-xl bg-slate-800/90 border border-white/10 relative overflow-hidden flex items-center justify-center text-center p-4">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]"></div>
                <div className="relative z-10 space-y-1">
                  <MapPin className="w-8 h-8 text-teal-400 mx-auto animate-bounce" />
                  <p className="text-sm font-bold text-white">ZisanTech Solutions India</p>
                  <p className="text-xs text-slate-300">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div id="contact-us-form" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950">Thank You For Reaching Out</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Your enterprise inquiry has been delivered directly to our senior solutions desk. A specialist will review your requirements and respond within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-blue-700 text-white font-semibold text-xs hover:bg-blue-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-950">Schedule Consultation / Send Inquiry</h3>
                    <p className="text-xs text-slate-500 mt-1">Please provide your organization details for a prompt technical review.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Company / Enterprise Pvt Ltd"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Area of Interest
                    </label>
                    <select
                      value={formData.interestType}
                      onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm bg-white"
                    >
                      <option value="sap-rollout">SAP Rollout & Clean Core Implementation</option>
                      <option value="sap-support">SAP 24/7 SLA Support & Optimization</option>
                      <option value="sap-integration">SAP CPI / Integration & E-Invoice Bridge</option>
                      <option value="sap-training">Corporate / Individual SAP Training Program</option>
                      <option value="custom-erp">Custom CRM / ERP & App Development</option>
                      <option value="other">General Advisory & Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Requirements & Timeline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your systems landscape, module requirements, or training objectives..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-teal-600 hover:from-blue-600 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-blue-900/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Enterprise Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Your data is treated with confidentiality. We do not sell or distribute contact records.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

