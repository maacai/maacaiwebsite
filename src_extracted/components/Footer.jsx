import './Footer.css';

const footerLinks = {
  Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Press'],
  Services: ['AI Development', 'Web Development', 'Mobile Apps', 'SaaS Solutions', 'UI/UX Design'],
  Products: ['Mine Healer', 'AI CRM', 'AI HRMS', 'AI Chatbot', 'AI ERP'],
  Contact: ['support@maacai.com', '+91 98765 43210', 'Bangalore, India'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">maacai</span>
            <p className="footer__tagline">
              Building Intelligent Digital Solutions for the Future. Empowering businesses with AI-powered innovation.
            </p>
            <div className="footer__socials">
              {['𝕏', 'in', 'f', '▶'].map((s, i) => (
                <a key={i} href="#" className="footer__social">{s}</a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat} className="footer__col">
              <h4 className="footer__col-title">{cat}</h4>
              <ul className="footer__col-links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__col-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2025 MAAC.AI Private Limited. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
