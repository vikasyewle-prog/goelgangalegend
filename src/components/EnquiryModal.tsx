import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { vaultSave, getUtmParams, dispatchLead } from './ConversionEngine';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '3 BHK' });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openEnquiryModal', handleOpen);
    return () => window.removeEventListener('openEnquiryModal', handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const utmParams = getUtmParams();
    const leadData = {
      ...formData,
      ...utmParams,
      page: window.location.pathname,
      source: 'Modal'
    };
    
    vaultSave(leadData);
    dispatchLead(leadData);

    // Email Mirror Fallback
    const mailSubject = encodeURIComponent(`Modal Enquiry — ${formData.name}`);
    const mailBody = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterest: ${formData.interest}`);
    const mailLink = document.createElement('a');
    mailLink.href = `mailto:propsmartrealty@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    mailLink.style.display = 'none';
    document.body.appendChild(mailLink);
    // Silent trigger for redundancy (Browser may block popup but vault/dispatch are primary)
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', interest: '3 BHK' });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10001, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{ position: 'absolute', inset: 0, background: 'rgba(9, 9, 11, 0.9)', backdropFilter: 'blur(12px)' }}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              background: '#fff',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              color: 'var(--text-dark)'
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--text-dark-muted)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 10 }}
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <div style={{ padding: '3rem' }}>
                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                  <BrandLogo style={{ height: '40px', width: 'auto', marginBottom: '1.5rem', margin: '0 auto' }} />
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>Secure Your Legacy</h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', marginTop: '0.5rem' }}>Experience Pune's premier sports township.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: '#f8f8f8', fontSize: '1rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: '#f8f8f8', fontSize: '1rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Interest</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: '#f8f8f8', fontSize: '1rem' }}
                      >
                        <option>3 BHK</option>
                        <option>3.5 BHK</option>
                        <option>Investment</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '1rem', marginTop: '1rem' }}
                  >
                    SEND ENQUIRY <Send size={18} style={{ marginLeft: '0.75rem' }} />
                  </button>
                </form>


              </div>
            ) : (
              <div style={{ padding: '4rem 3rem', textAlign: 'center' }}>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{ width: 80, height: 80, background: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: '#fff' }}
                >
                  <CheckCircle2 size={48} />
                </motion.div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>Enquiry Received!</h2>
                <p style={{ color: 'var(--text-dark-muted)', lineHeight: 1.6 }}>Our relationship manager will reach out to you within 24 hours with the digital brochure and floor plans.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
