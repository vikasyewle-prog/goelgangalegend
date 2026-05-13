import { motion, type Variants } from 'framer-motion';
import { Trophy, Dumbbell, Waves, Goal, TreePine, Users, Bike, Heart, Gem } from 'lucide-react';

const amenities = [
  {
    icon: <Waves size={28} />,
    title: 'Michael Phelps Swimming Academy',
    desc: 'World-class aquatics with professional coaching and Olympic-grade infrastructure.',
    tag: 'Aquatics',
  },
  {
    icon: <Dumbbell size={28} />,
    title: 'Tagda Raho by MS Dhoni',
    desc: 'Revolutionary functional fitness and strength training ecosystem by MS Dhoni.',
    tag: 'Fitness',
  },
  {
    icon: <Goal size={28} />,
    title: 'South United Football Academy',
    desc: 'International-grade football turf with professional youth development programs.',
    tag: 'Football',
  },
  {
    icon: <Trophy size={28} />,
    title: 'Ileseum Sports Club',
    desc: 'Premium multi-sport management with state-of-the-art court infrastructure.',
    tag: 'Sports Club',
  },
  {
    icon: <Bike size={28} />,
    title: 'Cycling & Jogging Tracks',
    desc: 'Dedicated cycling paths and cushioned jogging trails winding through green landscapes.',
    tag: 'Active Living',
  },
  {
    icon: <TreePine size={28} />,
    title: 'Lush Green Landscapes',
    desc: 'Beautifully curated gardens, meditation zones, and open-air community spaces.',
    tag: 'Nature',
  },
  {
    icon: <Users size={28} />,
    title: 'Grand Clubhouse',
    desc: 'Sophisticated community hub with indoor games, party halls, and co-working spaces.',
    tag: 'Lifestyle',
  },
  {
    icon: <Heart size={28} />,
    title: "Kids' Play Zones",
    desc: 'Safe, vibrant outdoor and indoor play areas designed for children of all ages.',
    tag: 'Family',
  },
  {
    icon: <Gem size={28} />,
    title: '12.5 Acre Sports Arena',
    desc: "Pune's largest dedicated sports zone within a residential township.",
    tag: 'Infrastructure',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
};

export default function Amenities() {
  return (
    <section id="amenities" className="section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background orbs */}
      <div className="orb orb-gold" style={{
        width: 800, height: 800,
        top: '-20%', left: '-20%',
        position: 'absolute',
      }} />
      <div className="orb orb-blue" style={{
        width: 600, height: 600,
        bottom: '-10%', right: '-10%',
        position: 'absolute',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label"
            style={{ display: 'block', marginBottom: '1rem' }}
          >
            World-Class Amenities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-display heading-lg"
          >
            The Stadium{' '}
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Lifestyle</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="body-lg"
            style={{
              color: 'var(--text-white-muted)',
              maxWidth: 600,
              margin: '1.25rem auto 0',
            }}
          >
            International-grade sports academies and lifestyle amenities integrated into your everyday life.
          </motion.p>
        </div>

        {/* Amenities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.25rem',
        }}>
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid var(--border-light)',
                cursor: 'default',
                transition: 'all 0.4s var(--ease-out)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(201, 150, 59, 0.25)';
                el.style.background = 'rgba(255, 255, 255, 0.04)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--border-light)';
                el.style.background = 'rgba(255, 255, 255, 0.025)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Tag */}
              <span style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                opacity: 0.5,
              }}>
                {item.tag}
              </span>

              {/* Icon */}
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 'var(--radius-md)',
                background: 'var(--accent-glow)',
                border: '1px solid var(--border-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
              }}>
                {item.icon}
              </div>

              {/* Text */}
              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '0.65rem',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.88rem',
                lineHeight: 1.6,
                color: 'var(--text-white-muted)',
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: 'clamp(3rem, 5vw, 5rem)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, rgba(201,150,59,0.1), rgba(201,150,59,0.03))',
            border: '1px solid var(--border-accent)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: '0.5rem',
            }}>
              Experience the Stadium Life
            </h3>
            <p style={{ color: 'var(--text-white-muted)', fontSize: '0.95rem' }}>
              Download the complete amenities brochure with academy details.
            </p>
          </div>
          <a href="#contact" className="btn-primary">
            Download Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
