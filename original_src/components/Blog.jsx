import Icon from './Icon';
import Reveal from './Reveal';
import './Blog.css';

const posts = [
  { tag:'AI & Innovation', title:'How AI is reshaping modern digital products', time:'6 min read', tone:'pink' },
  { tag:'Product Strategy', title:'Designing SaaS experiences people actually enjoy', time:'5 min read', tone:'blue' },
  { tag:'Automation', title:'Where intelligent automation creates the most value', time:'7 min read', tone:'violet' },
];

export default function Blog(){
  return <section id="blog" className="blog-section section-anchor"><div className="container"><Reveal><div className="blog-header"><div><p className="section-tag">FROM THE BLOG</p><h2 className="section-title">Ideas, Insights & Digital Thinking</h2><p className="section-subtitle">A lightweight editorial section ready for your real articles, case studies and company updates.</p></div><a href="#contact" className="blog-header__link">Discuss an idea <Icon name="arrowRight" size={14}/></a></div></Reveal><div className="blog-grid">{posts.map((post,index)=><Reveal key={post.title} delay={index*80}><article className={`blog-card blog-card--${post.tone}`}><div className="blog-card__visual"><span>MAAC.AI</span><Icon name="sparkles" size={26}/><div className="blog-card__lines"><i/><i/><i/></div></div><div className="blog-card__body"><span className="blog-card__tag">{post.tag}</span><h3>{post.title}</h3><div className="blog-card__meta"><span>{post.time}</span><a href="#contact" aria-label={`Read ${post.title}`}><Icon name="arrowUp" size={14}/></a></div></div></article></Reveal>)}</div></div></section>;
}
