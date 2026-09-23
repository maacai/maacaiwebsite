import Icon from './Icon';
import Reveal from './Reveal';
import './WhyChoose.css';

const reasons = [
  { icon: 'lightbulb', title: 'Innovation', desc: 'Cutting-edge solutions', color: '#e91e8c' },
  { icon: 'shield', title: 'Security', desc: 'Enterprise-grade protection', color: '#2563eb' },
  { icon: 'chart', title: 'Scalability', desc: 'Built to grow with you', color: '#7c3aed' },
  { icon: 'zap', title: 'Affordable', desc: 'Value-driven pricing', color: '#f59e0b' },
  { icon: 'sparkles', title: 'Modern Tech', desc: 'Latest technologies', color: '#10b981' },
  { icon: 'zap', title: 'Fast Delivery', desc: 'On-time, every time', color: '#ef4444' },
  { icon: 'globe', title: 'Global Support', desc: 'Available worldwide', color: '#0891b2' },
  { icon: 'users', title: 'Expert Team', desc: 'Experts in every domain', color: '#6366f1' },
  { icon: 'award', title: 'Experience', desc: 'Trusted and proven', color: '#f97316' },
];

export default function WhyChoose() {
  return <section id="about" className="why-choose section-anchor"><div className="container"><Reveal><div className="text-center why-choose__header"><p className="section-tag">WHY CHOOSE MAAC.AI</p><h2 className="section-title">Driving Innovation With Excellence</h2><p className="section-subtitle">A practical blend of technology, design and delivery discipline — built around the outcomes your business actually needs.</p></div></Reveal><div className="why-choose__grid">{reasons.map((reason,index)=><Reveal key={reason.title} delay={index*55}><article className="why-card" style={{'--card-color':reason.color}}><div className="why-card__top"><div className="why-card__icon" style={{background:`${reason.color}12`,color:reason.color}}><Icon name={reason.icon} size={22}/></div><span>0{index+1}</span></div><h3 className="why-card__title">{reason.title}</h3><p className="why-card__desc">{reason.desc}</p></article></Reveal>)}</div></div></section>;
}
