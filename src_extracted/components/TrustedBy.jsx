import './TrustedBy.css';

const clients = [
  { icon: '🚀', label: 'Future Clients' },
  { icon: '🌱', label: 'Startups' },
  { icon: '🏢', label: 'Businesses' },
  { icon: '🏛️', label: 'Enterprises' },
  { icon: '🤝', label: 'Agencies' },
];

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <div className="container">
        <p className="trusted-by__label">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p>
        <div className="trusted-by__clients">
          {clients.map((c) => (
            <div key={c.label} className="trusted-by__client">
              <div className="trusted-by__client-icon">{c.icon}</div>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
