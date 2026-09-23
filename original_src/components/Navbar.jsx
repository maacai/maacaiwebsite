import { useEffect, useState } from 'react';
import Icon from './Icon';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'About Us', href: '/about', id: 'about' },
  { label: 'Services', href: '/#services', id: 'services' },
  { label: 'Products', href: '/#products', id: 'products' },
  { label: 'Industries', href: '/#industries', id: 'industries' },
  { label: 'Portfolio', href: '/#portfolio', id: 'portfolio' },
  { label: 'Blog', href: '/blog', id: 'blog' },
  { label: 'Contact Us', href: '/contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  /*
   * ----------------------------------------------------------
   * SCROLL STATE
   * ----------------------------------------------------------
   *
   * The navbar is intentionally NEVER hidden while scrolling.
   *
   * This prevents the up/down "fluctuation" caused by the
   * previous hide/show scroll-direction logic.
   *
   * At the top:
   *   solid white navbar
   *
   * After scrolling:
   *   slightly transparent glass navbar
   */
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const y = window.scrollY;

      setScrolled(y > 18);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /*
   * ----------------------------------------------------------
   * ACTIVE SECTION
   * ----------------------------------------------------------
   *
   * Detects which major page section is currently visible.
   */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        if (visibleEntries.length) {
          setActive(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0.01, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /*
   * ----------------------------------------------------------
   * MOBILE MENU
   * ----------------------------------------------------------
   *
   * Close menu when user clicks a navigation link.
   */
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  /*
   * Close mobile menu when pressing Escape.
   */
  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  /*
   * Prevent background page scrolling while the mobile menu
   * is open.
   */
  useEffect(() => {
    if (!menuOpen || window.innerWidth > 1100) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className={[
        'navbar',
        scrolled ? 'navbar--scrolled' : '',
        menuOpen ? 'navbar--menu-open' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="navbar__inner container">
        {/* --------------------------------------------------
            LOGO
        -------------------------------------------------- */}

        <a
          href="/"
          className="navbar__logo"
          aria-label="MAAC.AI home"
        >
          <span className="logo-mark" aria-hidden="true">
            <span />
          </span>

          <span className="logo-text">maacai</span>
        </a>

        {/* --------------------------------------------------
            DESKTOP / MOBILE NAVIGATION
        -------------------------------------------------- */}

        <ul
          className={[
            'navbar__links',
            menuOpen ? 'navbar__links--open' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {navLinks.map((link) => {
            const isActive = active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={[
                    'navbar__link',
                    isActive ? 'navbar__link--active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={
                    isActive ? 'page' : undefined
                  }
                  onClick={handleNavClick}
                >
                  <span>{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* --------------------------------------------------
            ACTIONS
        -------------------------------------------------- */}

        <div className="navbar__actions">
          <a
            href="#contact"
            className="btn-primary navbar__cta"
            onClick={handleNavClick}
          >
            <span>Book Free Consultation</span>
            <Icon name="arrowRight" size={15} />
          </a>

          <button
            type="button"
            className={[
              'navbar__hamburger',
              menuOpen ? 'open' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={
              menuOpen ? 'Close menu' : 'Open menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}