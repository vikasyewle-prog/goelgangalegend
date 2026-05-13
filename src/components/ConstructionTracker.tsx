import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, MapPin, HardHat } from 'lucide-react';

const milestones = [
  { 
    stage: "Land Acquisition & Title Clear", 
    status: "Completed", 
    date: "Q4 2022",
    detail: "100% legally clear land with sanctioned master plan."
  },
  { 
    stage: "Foundation & Plinth", 
    status: "Completed", 
    date: "Q2 2023",
    detail: "Stadium Life Phase 1 foundation successfully completed."
  },
  { 
    stage: "Sports Arena Leveling", 
    status: "Completed", 
    date: "Q4 2023",
    detail: "12.5 acres of sports infrastructure leveling finalized."
  },
  { 
    stage: "Tower Structure (Current)", 
    status: "In Progress", 
    date: "Q2 2024",
    detail: "Slab work for 15th floor underway in Tower A & B."
  },
  { 
    stage: "Finishing & Amenities", 
    status: "Upcoming", 
    date: "Q4 2024",
    detail: "Internal plumbing and sports academy fit-outs."
  },
  { 
    stage: "Possession Handover", 
    status: "Scheduled", 
    date: "Q2 2025",
    detail: "Final inspection and keys handover as per RERA."
  }
];

export default function ConstructionTracker() {
  return (
    <section className="section-light" id="construction">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="label">Proof of Progress</span>
          <h2 className="heading-display heading-lg" style={{ color: 'var(--text-dark)' }}>
            Construction{' '}<span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Milestones</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-dark-muted)', maxWidth: 600, margin: '1rem auto 0' }}>
            We believe in complete transparency. Track the evolution of Pune's premier sports township in real-time.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', left: '20px', top: 0, bottom: 0, 
            width: '2px', background: 'rgba(0,0,0,0.05)' 
          }} />

          <div style={{ display: 'grid', gap: '2.5rem' }}>
            {milestones.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  display: 'flex', gap: '1.5rem', position: 'relative', 
                  paddingLeft: '3rem'
                }}
              >
                {/* Dot */}
                <div style={{ 
                  position: 'absolute', left: '11px', top: '5px',
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: item.status === 'Completed' ? 'var(--accent-green)' : (item.status === 'In Progress' ? 'var(--accent)' : '#fff'),
                  border: item.status === 'Scheduled' ? '2px solid rgba(0,0,0,0.1)' : 'none',
                  zIndex: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {item.status === 'Completed' && <CheckCircle2 size={12} color="#fff" />}
                  {item.status === 'In Progress' && <div className="pulse" style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%' }} />}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>{item.stage}</h3>
                    <div style={{ 
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.3rem 0.6rem', background: 'rgba(0,0,0,0.03)',
                      borderRadius: 'var(--radius-sm)', fontSize: '0.7rem', fontWeight: 700
                    }}>
                      <Calendar size={12} style={{ opacity: 0.5 }} />
                      {item.date}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', lineHeight: 1.5 }}>
                    {item.detail}
                  </p>
                  <div style={{ 
                    marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
                  }}>
                    <span style={{ 
                      fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase',
                      color: item.status === 'Completed' ? 'var(--accent-green)' : (item.status === 'In Progress' ? 'var(--accent)' : 'var(--text-dark-muted)')
                    }}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ 
          marginTop: '4rem', padding: '2rem', borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-cream-deep)', border: '1px solid rgba(0,0,0,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem',
          flexWrap: 'wrap', textAlign: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MapPin size={24} style={{ color: 'var(--accent)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>Visit the Site</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)' }}>Bavdhan, Pune 411021</div>
            </div>
          </div>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openEnquiryModal'))}
            className="btn-dark"
          >
            <HardHat size={16} style={{ marginRight: '0.5rem' }} /> SCHEDULE SITE VISIT
          </button>
        </div>
      </div>
    </section>
  );
}
