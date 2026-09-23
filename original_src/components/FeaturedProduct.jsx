import Icon from './Icon';
import Reveal from './Reveal';
import './FeaturedProduct.css';

const futureProducts = [
  { icon: 'users', label: 'AI CRM' }, { icon: 'users', label: 'AI HRMS' }, { icon: 'settings', label: 'AI ERP' }, { icon: 'sparkles', label: 'AI Chatbot' }, { icon: 'brain', label: 'AI Knowledge Base' }, { icon: 'headphones', label: 'AI Customer Support' }, { icon: 'award', label: 'AI Recruiter' }, { icon: 'zap', label: 'AI Sales Assistant' }, { icon: 'chart', label: 'AI Accounting' }, { icon: 'heart', label: 'AI Healthcare Assistant' },
];

export default function FeaturedProduct() {
  return (
    <section id="products" className="featured-section section-anchor">
      <div className="container featured-section__inner">
        <Reveal variant="left"><article className="featured-product">
          <div className="featured-product__copy"><p className="featured-tag">FEATURED PRODUCT</p><h2 className="featured-product__name">Mine Healer</h2><p className="featured-product__sub">Mental Wellness Platform</p><p className="featured-product__desc">A safe and supportive space that helps individuals improve mental well-being through expert guidance, community support, and AI-driven insights.</p><a href="#contact" className="btn-primary featured-product__btn">Learn More <Icon name="arrowRight" size={15}/></a></div>
          <div className="featured-product__mockup"><div className="phone-mockup"><div className="phone-notch"/><div className="phone-mockup__screen"><div className="phone-mockup__header"><span>Mine Healer</span><span className="phone-status"><i/><i/><i/></span></div><div className="phone-mockup__chat"><div className="chat-bubble chat-bubble--ai">How are you feeling today?</div><div className="chat-bubble chat-bubble--user">I&apos;m feeling anxious lately...</div><div className="chat-bubble chat-bubble--ai">I understand. Let&apos;s talk to a professional.</div><div className="typing"><i/><i/><i/></div></div><div className="phone-mockup__footer"><div className="phone-mockup__input">Talk to a Professional <Icon name="arrowRight" size={10}/></div></div></div></div><div className="phone-float phone-float--one"><Icon name="heart" size={14}/></div><div className="phone-float phone-float--two"><Icon name="shield" size={14}/></div></div>
        </article></Reveal>

        <Reveal variant="right"><article className="future-products"><div className="future-products__header"><div><p className="featured-tag">FUTURE PRODUCTS</p><h3>Intelligent products, ready to scale.</h3></div><span className="future-products__badge">10+ concepts</span></div><div className="future-products__grid">{futureProducts.map((p,index)=><div key={p.label} className="future-product-item"><span className="future-product-item__icon"><Icon name={p.icon} size={16}/></span><span className="future-product-item__label">{p.label}</span><Icon name="arrowRight" size={12} className="future-product-item__arrow"/></div>)}</div><a href="#contact" className="view-all-link">View all products <Icon name="arrowRight" size={14}/></a></article></Reveal>
      </div>
    </section>
  );
}
