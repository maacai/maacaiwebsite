import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import './Portfolio.css';

const projects = [
  { title: 'AI Healthcare Platform', category: 'AI', type: 'Healthcare', className: 'portfolio-card--pink', metric: 'AI-powered workflows' },
  { title: 'Enterprise SaaS Dashboard', category: 'SaaS', type: 'Business', className: 'portfolio-card--blue', metric: 'Real-time intelligence' },
  { title: 'Modern Commerce Experience', category: 'Web', type: 'Retail', className: 'portfolio-card--violet', metric: 'Conversion-focused UX' },
  { title: 'Intelligent Mobile Product', category: 'Mobile', type: 'Technology', className: 'portfolio-card--cyan', metric: 'Fast, intuitive journeys' },
];

const filters = ['All','AI','SaaS','Web','Mobile'];

export default function Portfolio() {
  const [filter,setFilter] = useState('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  return <section id="portfolio" className="portfolio-section section-anchor"><div className="container"><Reveal><div className="portfolio-header"><div><p className="section-tag">SELECTED WORK</p><h2 className="section-title">Digital Products Designed to Make an Impact</h2><p className="section-subtitle">A snapshot of the kinds of experiences we build across AI, SaaS, web and mobile.</p></div><div className="portfolio-filters">{filters.map((item)=><button type="button" key={item} className={filter===item?'active':''} onClick={()=>setFilter(item)}>{item}</button>)}</div></div></Reveal><div className="portfolio-grid">{visible.map((project,index)=><Reveal key={project.title} delay={index*80}><article className={`portfolio-card ${project.className}`}><div className="portfolio-visual"><div className="portfolio-window"><div className="portfolio-window__bar"><i/><i/><i/></div><div className="portfolio-window__content"><div className="portfolio-chart"><span/><span/><span/><span/><span/></div><div className="portfolio-lines"><b/><b/><b/><b/></div></div></div><span className="portfolio-card__orb"/></div><div className="portfolio-card__body"><div><span className="portfolio-card__category">{project.category} · {project.type}</span><h3>{project.title}</h3><p>{project.metric}</p></div><a href="#contact" aria-label={`Discuss ${project.title}`}><Icon name="arrowRight" size={17}/></a></div></article></Reveal>)}</div></div></section>;
}
