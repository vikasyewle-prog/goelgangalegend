import { motion } from 'framer-motion';
import { MapPin, Train, Road, Building2 } from 'lucide-react';

const projects = [
  {
    year: '2023',
    title: 'Chandni Chowk Flyover',
    desc: 'Completion of the multi-level flyover, slashing travel time to Kothrud and Baner by 70%.',
    icon: <Road size={20} />,
    status: 'Completed'
  },
  {
    year: '2025',
    title: 'Metro Line 3 Connectivity',
    desc: 'Direct access to the Hinjewadi-Shivajinagar Metro corridor, connecting Bavdhan to the IT hub.',
    icon: <Train size={20} />,
    status: 'In Progress'
  },
  {
    year: '2026',
    title: 'High-Street Retail Hub',
    desc: 'Launch of 50,000+ sq.ft. of premium retail and dining spaces adjacent to Legend County.',
    icon: <Building2 size={20} />,
    status: 'Planned'
  },
  {
    year: '2027',
    title: 'Pune Ring Road',
    desc: 'Strategic proximity to the upcoming Ring Road, enabling rapid transit to Pune Airport and Mumbai Highway.',
    icon: <MapPin size={20} />,
    status: 'Vision'
  }
];

export default function InfrastructureTracker() {
  return (
    <section className="section-light" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="label" style={{ color: 'var(--accent-dark)' }}>Growth Trajectory</span>
          <h2 className="heading-display heading-md" style={{ color: 'var(--text-dark)' }}>Infrastructure <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Timeline</span></h2>
        </div>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'rgba(0,0,0,0.05)',
            transform: 'translateX(-50%)',
          }} className="hide-mobile" />

          <div style={{ display: 'grid', gap: '3rem' }}>
            {projects.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  width: '100%',
                  position: 'relative'
                }}
              >
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: item.status === 'Completed' ? 'var(--accent)' : '#fff',
                  border: `4px solid ${item.status === 'Completed' ? 'var(--accent-dark)' : 'var(--border-dark)'}`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2
                }} className="hide-mobile" />

                <div style={{
                  width: '45%',
                  padding: '2rem',
                  background: '#fff',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: 'var(--shadow-md)',
                  textAlign: i % 2 === 0 ? 'right' : 'left'
                }} className="full-width-mobile">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--accent)' }}>{item.year}</span>
                    <div style={{ padding: '0.4rem', borderRadius: '50%', background: 'rgba(201,150,59,0.1)', color: 'var(--accent)' }}>
                      {item.icon}
                    </div>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                  <div style={{ 
                    marginTop: '1rem', 
                    fontSize: '0.65rem', 
                    fontWeight: 800, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    color: item.status === 'Completed' ? '#10b981' : 'var(--accent)'
                  }}>
                    {item.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
