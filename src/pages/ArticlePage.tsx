import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const articlesData: Record<string, any> = {
  'bavdhan-real-estate-investment-2026': {
    title: 'Is Bavdhan the Best Real Estate Investment in Pune for 2026?',
    description: 'An in-depth analysis of Bavdhan\'s infrastructure growth, metro connectivity, and why sports townships are driving massive ROI.',
    author: 'Goel Ganga Research Team',
    date: 'May 14, 2026',
    readTime: '4 min read',
    category: 'Market Analysis',
    image: '/hero-aerial.png',
    content: `
      <p class="lead">Pune's real estate landscape is shifting rapidly. While traditional hubs like Hinjewadi and Kothrud have reached saturation, Bavdhan has emerged as the premier destination for high-net-worth individuals and savvy investors.</p>
      
      <h2>The Infrastructure Multiplier Effect</h2>
      <p>The completion of the Chandni Chowk multi-level flyover has permanently altered Bavdhan's accessibility. Commute times to Hinjewadi IT Park and Kothrud have been slashed by up to 40%. Historically, in Pune's real estate market, infrastructure milestones trigger a <strong>15-20% price appreciation</strong> within the following 24 months.</p>
      
      <blockquote>"Bavdhan is no longer an emerging market; it is an established luxury corridor."</blockquote>
      
      <h2>Why Sports Townships Command a Premium</h2>
      <p>Post-pandemic, the demand for integrated living has skyrocketed. However, buyers are looking beyond standard clubhouses. Developments that integrate professional sports infrastructure—like <a href="/sports-township-pune">sports townships</a>—command a significant rental and capital premium.</p>
      <p>Facilities like the Michael Phelps Swimming Academy and MS Dhoni's Tagda Raho center don't just offer convenience; they create a powerful "moat" around the property's value, shielding it from market fluctuations.</p>
      
      <h2>The 3 BHK Demand Surge</h2>
      <p>Data indicates a massive shift toward larger configurations. The <a href="/3bhk-flats-bavdhan">3 BHK segment</a> is seeing the highest absorption rate in Bavdhan, driven by IT executives looking for hybrid work environments and families seeking long-term legacy homes.</p>

      <h2>Conclusion: Timing the Market</h2>
      <p>Entering the Bavdhan market now, particularly in a branded, integrated township like Goel Ganga Legend County, positions investors perfectly ahead of the upcoming Metro line completion. The window for maximum ROI is currently open.</p>
    `
  }
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? articlesData[slug] : null;

  useEffect(() => {
    if (slug && !article) {
      navigate('/not-found', { replace: true });
    }
  }, [slug, article, navigate]);

  if (!article) return null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": [
      "https://goelgangalegend.com" + article.image
    ],
    "datePublished": new Date().toISOString(),
    "author": [{
        "@type": "Organization",
        "name": article.author,
        "url": "https://goelgangalegend.com"
    }]
  };

  return (
    <>
      <SEO 
        title={`${article.title} | Legend County Insights`}
        description={article.description}
        canonical={`/insights/${slug}`}
        image={article.image}
      />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <article className="pt-32 pb-24 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.88rem', color: 'var(--text-white-muted)' }}>
            <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <ArrowLeft size={14} /> Home
            </button>
            <ChevronRight size={14} opacity={0.5} />
            <span>Insights</span>
            <ChevronRight size={14} opacity={0.5} />
            <span style={{ color: 'var(--accent)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>{article.title}</span>
          </div>

          {/* Header */}
          <header style={{ marginBottom: '3rem' }}>
            <span className="label" style={{ marginBottom: '1rem', display: 'inline-block' }}>{article.category}</span>
            <h1 className="heading-display heading-lg" style={{ marginBottom: '1.5rem', lineHeight: 1.2 }}>
              {article.title}
            </h1>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-white-muted)', fontSize: '0.9rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem' }}>GG</div>
                <span>{article.author}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={14} /> {article.date}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={14} /> {article.readTime}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              width: '100%', 
              aspectRatio: '16/9', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden',
              marginBottom: '3rem',
              border: '1px solid var(--border-light)'
            }}
          >
            <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>

          {/* Article Content */}
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Inline Styles for Article */}
          <style>{`
            .article-content {
              color: var(--text-white);
              font-size: 1.1rem;
              line-height: 1.8;
            }
            .article-content h2 {
              font-family: var(--font-serif);
              font-size: 2rem;
              margin-top: 3rem;
              margin-bottom: 1.5rem;
              color: #fff;
            }
            .article-content p {
              margin-bottom: 1.5rem;
              color: var(--text-white-muted);
            }
            .article-content .lead {
              font-size: 1.25rem;
              color: #fff;
              font-weight: 500;
              margin-bottom: 2.5rem;
            }
            .article-content blockquote {
              border-left: 4px solid var(--accent);
              padding-left: 1.5rem;
              margin: 2.5rem 0;
              font-family: var(--font-serif);
              font-size: 1.5rem;
              font-style: italic;
              color: var(--accent);
            }
            .article-content a {
              color: var(--accent);
              text-decoration: none;
              border-bottom: 1px dashed var(--accent);
              transition: all 0.3s;
            }
            .article-content a:hover {
              color: #fff;
              border-bottom-style: solid;
            }
          `}</style>

          {/* Conversion Footer */}
          <div style={{
            marginTop: '4rem',
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border-accent)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Ready to Invest in Bavdhan?</h3>
            <p style={{ color: 'var(--text-white-muted)', marginBottom: '2rem' }}>Discover Goel Ganga Legend County. Luxury 3 & 3.5 BHK flats starting ₹1.77 Cr*.</p>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnquiryModal'))} className="btn-primary" style={{ margin: '0 auto', display: 'flex' }}>
              Request Investment Deck
            </button>
          </div>

        </div>
      </article>
    </>
  );
}
