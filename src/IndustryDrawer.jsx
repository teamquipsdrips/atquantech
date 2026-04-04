import { useEffect } from 'react';

export default function IndustryDrawer({ isOpen, onClose, industry, onConsultClick }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!industry) return null;

  // Enhance the basic industry data with detailed selling points.
  const getExtendedData = (id) => {
    switch(id) {
      case "01": return {
        tagline: "Handling hyper-scale peaks reliably.",
        details: "During Hajj and Umrah, user volume skyrockets. We build systems ensuring zero downtime, secure crowd-management tracking, and multi-tenant resource booking portals tailored for the Makkah and Madinah ecosystem.",
        features: ["Scale-ready Booking Pipelines", "Real-time Vehicle & Logistics Dashboards", "Compliance & E-Visa integrations"]
      };
      case "02": return {
        tagline: "Flawless hospitality operations.",
        details: "Tourism systems must be beautifully fast and natively scalable. We engineer large-scale CMS systems, booking engines, and analytics dashboards to help hospitality groups track operations across the Kingdom.",
        features: ["Multi-property Management Dashboards", "Customer-facing App Portals", "AI-driven Analytics & Forecasting"]
      };
      case "03": return {
        tagline: "Bank-grade security & enterprise speed.",
        details: "For financial institutions and large corporate operations, security and data integrity are non-negotiable. We build robust back-office workflows, strict role-access tools, and real-time reconciliation systems.",
        features: ["Secure Role-Based Access Control (RBAC)", "High-Fidelity Financial Reporting Dashboards", "Legacy System API Abstraction"]
      };
      case "04": return {
        tagline: "National-scale availability & compliance.",
        details: "Government portals require extreme reliability, local hosting compliance, and robust data protection policies. We design national-scale AI infrastructure and citizen-facing digital services.",
        features: ["NCA Cybersecurity Compliance Ready", "Large-scale Database Architecture", "Intelligent Citizen Self-Service AI"]
      };
      case "05": return {
        tagline: "Keeping the Kingdom moving.",
        details: "Real-time mobility requires split-second operational pipelines. We build geospatial tracking dashboards, complex route-optimization AI models, and fleet management portals for modern transportation.",
        features: ["Geospatial & Telematics Integration", "Predictive Logistics Analytics", "High-Throughput IoT Web APIs"]
      };
      default: return { tagline: "", details: "", features: [] };
    }
  };

  const extData = getExtendedData(industry.id);

  return (
    <div className={`fixed inset-0 z-[60] flex justify-end ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      ></div>

      {/* Drawer Panel */}
      <div className={`relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out pointer-events-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#0e402e] bg-[#12543c] text-white">
          <div>
            <div className="text-[12px] uppercase tracking-widest text-[#f3e295] font-['Inter:Semi_Bold',sans-serif] mb-1">
              Industry Focus
            </div>
            <h2 className="text-[24px] font-['Inter:Bold',sans-serif] leading-tight">
              {industry.title}
            </h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M18 6L6 18M6 6L18 18"></path>
            </svg>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8 font-['Inter:Regular',sans-serif]">
          <h3 className="text-[22px] font-['Inter:Semi_Bold',sans-serif] text-[#131313] mb-4">
            {extData.tagline}
          </h3>
          <p className="text-[16px] text-gray-600 leading-relaxed mb-8">
            {extData.details}
          </p>

          <div className="mb-10">
            <h4 className="text-[14px] uppercase tracking-wider text-gray-400 font-bold mb-4">Core Capabilities</h4>
            <ul className="flex flex-col gap-4">
              {extData.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#f6fbf9] p-1.5 rounded-full text-[#12543c] shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[16px] font-medium text-[#131313]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex justify-end shrink-0">
          <button 
            onClick={() => { onClose(); setTimeout(onConsultClick, 300); }}
            className="w-full bg-gradient-to-b flex items-center justify-center gap-2 from-[#f3e295] to-[#cfa857] text-[#3a3839] font-['Manrope:SemiBold',sans-serif] px-8 py-4 rounded-[12px] hover:scale-[1.02] active:scale-[0.98] shadow-sm transition-all text-[16px]"
          >
            Discuss a Project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
