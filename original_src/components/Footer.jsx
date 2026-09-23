import Icon from './Icon';
import './Footer.css';

const footerLinks = {
  Company: [
    ['About Us', '/about'],
    ['Blog', '/blog'],
    ['Contact', '/contact'],
  ],

  Services: [
    ['AI Development', '/#services'],
    ['Web Development', '/#services'],
    ['Mobile Apps', '/#services'],
    ['SaaS Solutions', '/#services'],
    ['UI/UX Design', '/#services'],
  ],
};


export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer__top">

          {/* ==================================================
              BRAND
          ================================================== */}

          <div className="footer__brand">

            <a
              href="/"
              className="footer__logo"
              aria-label="MAAC.AI home"
            >
              <span className="logo-mark">
                <span />
              </span>

              <span>maacai</span>
            </a>

            <p className="footer__tagline">
              Building Intelligent Digital Solutions for the
              Future. Empowering businesses with AI-powered
              innovation.
            </p>


            <div className="footer__contact-list">

              <a href="mailto:support@maacai.com">
                <Icon name="mail" size={14} />
                support@maacai.com
              </a>

              <a href="tel:+919876543210">
                <Icon name="phone" size={14} />
                +91 98765 43210
              </a>

              <span>
                <Icon name="mapPin" size={14} />
                Bangalore, India
              </span>

            </div>


            <div className="footer__socials">

              <a
                href="#contact"
                className="footer__social"
                aria-label="LinkedIn"
              >
                <Icon
                  name="linkedin"
                  size={15}
                />
              </a>

              <a
                href="#contact"
                className="footer__social"
                aria-label="X"
              >
                <Icon
                  name="twitter"
                  size={14}
                />
              </a>

              <a
                href="#contact"
                className="footer__social"
                aria-label="YouTube"
              >
                <Icon
                  name="youtube"
                  size={15}
                />
              </a>

            </div>

          </div>


          {/* ==================================================
              LINK COLUMNS
          ================================================== */}

          {Object.entries(footerLinks).map(
            ([category, links]) => (
              <div
                key={category}
                className="footer__col"
              >

                <h4>{category}</h4>

                <ul>

                  {links.map(([label, href]) => (
                    <li key={label}>

                      <a href={href}>
                        {label}

                        <Icon
                          name="arrowRight"
                          size={11}
                        />
                      </a>

                    </li>
                  ))}

                </ul>

              </div>
            ),
          )}


          {/* ==================================================
              PROJECT CTA
          ================================================== */}

          <div className="footer__col footer__col--contact">

            <h4>Start a Project</h4>

            <p>
              Have an idea? Let's turn it into a digital
              product.
            </p>

            <a
              href="/contact"
              className="footer__project-link"
            >
              Book a consultation

              <Icon
                name="arrowRight"
                size={13}
              />
            </a>

          </div>

        </div>


        {/* ==================================================
            FOOTER BOTTOM
        ================================================== */}

        <div className="footer__bottom">

          <p>
            © 2026 MAAC.AI Private Limited.
            All rights reserved.
          </p>

          <div>

            <a href="/contact">
              Privacy Policy
            </a>

            <a href="/contact">
              Terms of Service
            </a>

            <a href="/contact">
              Cookie Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}