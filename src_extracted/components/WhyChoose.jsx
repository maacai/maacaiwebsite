import './WhyChoose.css';

const reasons = [
  { icon: '💡', title: 'Innovation', desc: 'Cutting-edge solutions', color: '#e91e8c' },
  { icon: '🔒', title: 'Security', desc: 'Enterprise-grade protection', color: '#2563eb' },
  { icon: '📈', title: 'Scalability', desc: 'Built to grow with you', color: '#7c3aed' },
  { icon: '💸', title: 'Affordable', desc: 'Value-driven pricing', color: '#f59e0b' },
  { icon: '🖥️', title: 'Modern Tech', desc: 'Latest cutting-edge technologies', color: '#10b981' },
  { icon: '⚡', title: 'Fast Delivery', desc: 'On-time, every time', color: '#ef4444' },
  { icon: '🌍', title: 'Global Support', desc: 'Available worldwide', color: '#0891b2' },
  { icon: '👨‍💼', title: 'Expert Team', desc: 'Experts in every domain', color: '#6366f1' },
  { icon: '🏆', title: 'Experienced Team', desc: 'Trusted and proven results', color: '#f97316' },
];

export default function WhyChoose() {
  return (
    <section id="about" className="why-choose">
      <div className="container">
        <div className="text-center why-choose__header">
          <p className="section-tag">WHY CHOOSE MAAC.AI</p>
          <h2 className="section-title">Driving Innovation With Excellence</h2>
        </div>
        <div className="why-choose__grid">
          {reasons.map((r) => (
            <div key={r.title} className="why-card" style={{ '--card-color': r.color }}>
              <div className="why-card__icon" style={{ background: `${r.color}15` }}>
                {r.icon}
              </div>
              <h4 className="why-card__title">{r.title}</h4>
              <p className="why-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
