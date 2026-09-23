import Icon from './Icon';
import Reveal from './Reveal';
import './TrustedBy.css';

const clients = [
  { icon: 'sparkles', label: 'Future Clients' },
  { icon: 'sprout', label: 'Startups' },
  { icon: 'building', label: 'Businesses' },
  { icon: 'landmark', label: 'Enterprises' },
  { icon: 'users', label: 'Agencies' },
];

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <div className="container">
        <Reveal><p className="trusted-by__label">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p></Reveal>
        <div className="trusted-by__clients">
          {clients.map((client, index) => <Reveal key={client.label} delay={index * 70}><div className="trusted-by__client"><div className="trusted-by__client-icon"><Icon name={client.icon} size={17}/></div><span>{client.label}</span><Icon name="arrowRight" size={13} className="trusted-by__arrow"/></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}
