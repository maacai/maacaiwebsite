import './Industries.css';

const industries = [
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🎓', label: 'Education' },
  { icon: '💰', label: 'Finance' },
  { icon: '🛒', label: 'Retail' },
  { icon: '🏠', label: 'Real Estate' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🚚', label: 'Logistics' },
  { icon: '🏛️', label: 'Government' },
  { icon: '🍽️', label: 'Hospitality' },
  { icon: '🚗', label: 'Automotive' },
  { icon: '🏗️', label: 'Construction' },
  { icon: '⚖️', label: 'Legal' },
  { icon: '✈️', label: 'Travel' },
  { icon: '🌾', label: 'Agriculture' },
];

export default function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="text-center industries-section__header">
          <p className="section-tag">INDUSTRIES WE EMPOWER</p>
          <h2 className="section-title">We Serve a Wide Range of Industries</h2>
        </div>
        <div className="industries-grid">
          {industries.map((ind) => (
            <div key={ind.label} className="industry-chip">
              <span className="industry-chip__icon">{ind.icon}</span>
              <span className="industry-chip__label">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
