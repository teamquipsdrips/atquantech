import { useState, useEffect } from 'react';

export default function ProposalModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    description: '',
    name: '',
    company: '',
    email: '',
  });

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({
        projectType: '', budget: '', description: '', name: '', company: '', email: ''
      });
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const projectTypes = [
    { id: 'web', title: 'Web Application', desc: 'Custom enterprise software, portals & dashboards' },
    { id: 'mobile', title: 'Mobile App', desc: 'Native iOS & Android mobile applications' },
    { id: 'ai', title: 'AI Platform', desc: 'Custom AI systems integrated with your operations' },
    { id: 'other', title: 'Other', desc: 'Something else not listed here' }
  ];

  const budgets = [
    'Under ⃁10k',
    '⃁10k - ⃁50k',
    '⃁50k - ⃁100k',
    '⃁100k+'
  ];

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proposal Request Submitted:", formData);
    // Fake success and close
    alert("Request received! We will be in touch shortly.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 transition-opacity duration-300">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative bg-white/95 rounded-[16px] w-full max-w-2xl shadow-[8px_24px_35px_rgba(0,0,0,0.15)] overflow-hidden animate-fade-in-up flex flex-col font-['Inter:Regular',sans-serif]">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
          <div>
            <h2 className="text-[22px] font-['Inter:Bold',sans-serif] text-[#131313] tracking-tight">Request a Proposal</h2>
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4].map(s => (
                <div key={s} className={`h-1.5 w-12 rounded-full transition-colors duration-300 ${s <= step ? 'bg-[#cfa857]' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 z-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8 min-h-[360px]">
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="text-[28px] font-['Inter:Semi_Bold',sans-serif] text-[#131313] mb-6">What are you looking to build?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => { 
                      setFormData(prev => ({ ...prev, projectType: type.title })); 
                      if (type.id !== 'other') {
                        setTimeout(handleNext, 150); 
                      }
                    }}
                    className={`text-left p-6 rounded-[12px] border-2 transition-all hover:-translate-y-1 ${formData.projectType === type.title || (type.id === 'other' && formData.projectType.startsWith('Other')) ? 'border-[#12543c] bg-[#f6fbf9]' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                  >
                    <div className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#131313] mb-1">{type.title}</div>
                    <div className="text-[14px] text-gray-500 leading-snug">{type.desc}</div>
                  </button>
                ))}
              </div>
              
              {formData.projectType.startsWith('Other') && (
                <div className="mt-6 animate-fade-in-up">
                  <label className="block text-[14px] font-semibold text-[#131313] mb-2">Please specify</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      autoFocus
                      placeholder="E.g. Database migration..."
                      value={formData.projectType === 'Other' ? '' : formData.projectType.replace('Other: ', '')}
                      onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value ? `Other: ${e.target.value}` : 'Other' }))}
                      onKeyDown={(e) => { if (e.key === 'Enter' && formData.projectType.length > 5) handleNext(); }}
                      className="flex-1 bg-white border border-gray-200 rounded-[8px] p-3 text-[15px] focus:outline-none focus:border-[#12543c]"
                    />
                    <button
                      onClick={handleNext}
                      disabled={formData.projectType === 'Other' || formData.projectType.length <= 6}
                      className="bg-[#12543c] text-white px-8 py-3 rounded-[8px] font-['Manrope:SemiBold',sans-serif] transition-all hover:bg-[#0e402e] disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-[28px] font-['Inter:Semi_Bold',sans-serif] text-[#131313] mb-6">What is your expected budget?</h3>
              <div className="flex flex-col gap-3">
                {budgets.map(budget => (
                  <button
                    key={budget}
                    onClick={() => { setFormData(prev => ({ ...prev, budget })); setTimeout(handleNext, 150); }}
                    className={`py-4 px-6 text-center rounded-[12px] border-2 transition-all hover:scale-[1.01] ${formData.budget === budget ? 'border-[#12543c] bg-[#12543c] text-white' : 'border-gray-100 bg-white hover:border-gray-200 text-[#131313]'}`}
                  >
                    <span className="font-['Manrope:Medium',sans-serif] text-[18px]">{budget}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-[28px] font-['Inter:Semi_Bold',sans-serif] text-[#131313] mb-2">Tell us a bit about it</h3>
              <p className="text-gray-500 mb-6 text-[15px]">The more details you provide, the better we can prepare for our discussion.</p>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-[14px] font-semibold text-[#131313] mb-2">Project Overview</label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full bg-white border border-gray-200 rounded-[8px] p-4 text-[15px] focus:outline-none focus:border-[#12543c] focus:ring-1 focus:ring-[#12543c]"
                    placeholder="E.g. We are building a platform to help our field teams track resources..."
                  />
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleNext}
                    disabled={!formData.description.trim()}
                    className="bg-gradient-to-b from-[#f3e295] to-[#cfa857] text-[#3a3839] font-['Manrope:SemiBold',sans-serif] px-8 py-3 rounded-[12px] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in-up delay-100">
              <h3 className="text-[28px] font-['Inter:Semi_Bold',sans-serif] text-[#131313] mb-6">Where should we reach you?</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-semibold text-[#131313] mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-white border border-gray-200 rounded-[8px] p-3 text-[15px] focus:outline-none focus:border-[#12543c]"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-semibold text-[#131313] mb-2">Company Name</label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full bg-white border border-gray-200 rounded-[8px] p-3 text-[15px] focus:outline-none focus:border-[#12543c]"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-semibold text-[#131313] mb-2">Work Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white border border-gray-200 rounded-[8px] p-3 text-[15px] focus:outline-none focus:border-[#12543c]"
                    placeholder="jane@acmecorp.com"
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="bg-gradient-to-b from-[#f3e295] to-[#cfa857] text-[#3a3839] font-['Manrope:SemiBold',sans-serif] px-8 py-3 rounded-[12px] hover:scale-[1.02] active:scale-[0.98] shadow-md transition-all"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {step > 1 && (
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-between z-10">
            <button
              onClick={handleBack}
              className="text-gray-500 font-['Inter:Medium',sans-serif] hover:text-black transition-colors flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
