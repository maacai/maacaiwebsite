import './FeaturedProduct.css';

const futureProducts = [
  { icon: '🤝', label: 'AI CRM' },
  { icon: '👥', label: 'AI HRMS' },
  { icon: '📦', label: 'AI ERP' },
  { icon: '💬', label: 'AI Chatbot' },
  { icon: '📚', label: 'AI Knowledge Base' },
  { icon: '🎧', label: 'AI Customer Support' },
  { icon: '🌟', label: 'AI Recruiter' },
  { icon: '💼', label: 'AI Sales Assistant' },
  { icon: '📊', label: 'AI Accounting' },
  { icon: '🏥', label: 'AI Healthcare Assistant' },
];

export default function FeaturedProduct() {
  return (
    <section className="featured-section">
      <div className="container featured-section__inner">
        {/* Featured Product */}
        <div className="featured-product">
          <p className="featured-tag">FEATURED PRODUCT</p>
          <h3 className="featured-product__name">Mine Healer</h3>
          <p className="featured-product__sub">Mental Wellness Platform</p>
          <p className="featured-product__desc">
            A safe and supportive space that helps individuals improve mental well-being through expert guidance,
            community support, and AI-driven insights.
          </p>
          <a href="#" className="btn-primary featured-product__btn">Learn More →</a>

          <div className="featured-product__mockup">
            <div className="phone-mockup">
              <div className="phone-mockup__screen">
                <div className="phone-mockup__header">Mine Healer</div>
                <div className="phone-mockup__chat">
                  <div className="chat-bubble chat-bubble--ai">
                    How are you feeling today? 😊
                  </div>
                  <div className="chat-bubble chat-bubble--user">
                    I&apos;m feeling anxious lately...
                  </div>
                  <div className="chat-bubble chat-bubble--ai">
                    I understand. Let&apos;s talk to a Professional.
                  </div>
                </div>
                <div className="phone-mockup__footer">
                  <div className="phone-mockup__input">Talk to a Professional →</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Products */}
        <div className="future-products">
          <p className="featured-tag">FUTURE PRODUCTS</p>
          <div className="future-products__grid">
            {futureProducts.map((p) => (
              <div key={p.label} className="future-product-item">
                <span className="future-product-item__icon">{p.icon}</span>
                <span className="future-product-item__label">{p.label}</span>
              </div>
            ))}
          </div>
          <a href="#" className="view-all-link">View All Products →</a>
        </div>
      </div>
    </section>
  );
}
