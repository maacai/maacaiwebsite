import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import './Industries.css';

const industries = [
  { icon: 'heart', label: 'Healthcare', text: 'Patient platforms, wellness products, automation and intelligent support.', color: '#e91e8c' },
  { icon: 'graduation', label: 'Education', text: 'Learning platforms, student workflows and digital classrooms.', color: '#7c3aed' },
  { icon: 'finance', label: 'Finance', text: 'Secure financial products, analytics and process automation.', color: '#2563eb' },
  { icon: 'cart', label: 'Retail', text: 'Commerce experiences, customer journeys and intelligent operations.', color: '#f59e0b' },
  { icon: 'home', label: 'Real Estate', text: 'Property discovery, lead management and business automation.', color: '#10b981' },
  { icon: 'factory', label: 'Manufacturing', text: 'Operational dashboards, automation and connected workflows.', color: '#0891b2' },
  { icon: 'truck', label: 'Logistics', text: 'Tracking, fleet workflows and data-driven logistics systems.', color: '#6366f1' },
  { icon: 'building', label: 'Government', text: 'Citizen services, workflow modernization and secure platforms.', color: '#ef4444' },
  { icon: 'utensils', label: 'Hospitality', text: 'Guest experiences, reservations and operational intelligence.', color: '#f97316' },
  { icon: 'car', label: 'Automotive', text: 'Digital retail, service journeys and connected experiences.', color: '#14b8a6' },
  { icon: 'hardhat', label: 'Construction', text: 'Project visibility, collaboration and field productivity tools.', color: '#eab308' },
  { icon: 'scale', label: 'Legal', text: 'Document workflows, knowledge systems and client portals.', color: '#8b5cf6' },
  { icon: 'plane', label: 'Travel', text: 'Booking journeys, personalized discovery and travel operations.', color: '#0ea5e9' },
  { icon: 'sprout', label: 'Agriculture', text: 'Smart operations, data visibility and farm management tools.', color: '#22c55e' },
];

export default function Industries() {
  const [selected, setSelected] = useState(0);
  const current = industries[selected];
  return (
    <section id="industries" className="industries-section section-anchor">
      <div className="container">
        <Reveal><div className="text-center industries-section__header"><p className="section-tag">INDUSTRIES WE EMPOWER</p><h2 className="section-title">Technology Built Around Your Industry</h2><p className="section-subtitle">We adapt the product, workflow and technology stack to the realities of each business domain.</p></div></Reveal>
        <div className="industries-layout">
          <div className="industries-grid">{industries.map((industry,index)=><button type="button" key={industry.label} className={`industry-chip ${selected===index?'industry-chip--active':''}`} style={{'--industry-color':industry.color}} onClick={()=>setSelected(index)}><span className="industry-chip__icon"><Icon name={industry.icon} size={18}/></span><span className="industry-chip__label">{industry.label}</span><Icon name="arrowRight" size={13} className="industry-chip__arrow"/></button>)}</div>
          <Reveal variant="right"><div className="industry-detail" style={{ '--industry-color': current.color }}><div className="industry-detail__glow"/><div className="industry-detail__icon"><Icon name={current.icon} size={31}/></div><span className="industry-detail__eyebrow">SELECTED INDUSTRY</span><h3>{current.label}</h3><p>{current.text}</p><a href="#contact" className="industry-detail__link">Build for {current.label} <Icon name="arrowRight" size={15}/></a><div className="industry-detail__bars"><span/><span/><span/><span/><span/></div></div></Reveal>
        </div>
      </div>
    </section>
  );
}
