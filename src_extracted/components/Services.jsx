import './Services.css';

const services = [
  { icon: '🤖', label: 'Artificial Intelligence', color: '#e91e8c' },
  { icon: '☁️', label: 'SaaS Development', color: '#2563eb' },
  { icon: '📱', label: 'Mobile Apps', color: '#7c3aed' },
  { icon: '🌐', label: 'Web Development', color: '#0891b2' },
  { icon: '🎨', label: 'UI/UX Design', color: '#f59e0b' },
  { icon: '⚙️', label: 'Automation', color: '#10b981' },
  { icon: '☁️', label: 'Cloud Solutions', color: '#6366f1' },
  { icon: '📊', label: 'Digital Marketing', color: '#ef4444' },
  { icon: '✨', label: 'Branding', color: '#f97316' },
  { icon: '📈', label: 'Data Analytics', color: '#14b8a6' },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center services-section__header">
          <p className="section-tag">WHAT WE DO</p>
          <h2 className="section-title">Transforming Ideas into Intelligent Solutions</h2>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.label} className="service-card" style={{ '--accent-color': s.color }}>
              <div className="service-card__icon" style={{ background: `${s.color}18` }}>
                <span>{s.icon}</span>
              </div>
              <p className="service-card__label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
