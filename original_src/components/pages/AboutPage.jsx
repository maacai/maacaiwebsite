import Icon from "../Icon";
import Reveal from "../Reveal";
import './AboutPage.css';

const values = [
  {
    icon: 'brain',
    title: 'Think Intelligent',
    desc: 'We use AI and modern technology to create smarter solutions for real business challenges.',
    color: '#e91e8c',
  },
  {
    icon: 'users',
    title: 'Build Together',
    desc: 'We work closely with our clients, turning ideas, feedback and expertise into better products.',
    color: '#7c3aed',
  },
  {
    icon: 'chart',
    title: 'Create Impact',
    desc: 'Every product should have a measurable purpose — from efficiency and growth to better experiences.',
    color: '#2563eb',
  },
  {
    icon: 'sparkles',
    title: 'Keep Evolving',
    desc: 'Technology changes quickly. We continuously learn, experiment and improve how we build.',
    color: '#0891b2',
  },
];

const capabilities = [
  'Artificial Intelligence',
  'Web & SaaS Development',
  'Mobile Applications',
  'UI/UX Design',
  'Business Automation',
  'Data & Analytics',
];

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="about-hero">
        <div className="about-hero__glow about-hero__glow--one" />
        <div className="about-hero__glow about-hero__glow--two" />

        <div className="container">
          <Reveal>
            <div className="about-hero__content text-center">
              <p className="section-tag">ABOUT MAAC.AI</p>

              <h1>
                Building Technology
                <span> With Intelligence.</span>
              </h1>

              <p className="about-hero__subtitle">
                We are a technology and digital product company
                focused on building intelligent, scalable and
                meaningful digital solutions for modern businesses.
              </p>

              <div className="about-hero__actions">
                <a href="/contact" className="btn-primary">
                  Start a Conversation
                  <Icon name="arrowRight" size={15} />
                </a>

                <a href="#story" className="about-hero__secondary">
                  Discover Our Story
                  <Icon name="arrowDown" size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ==================================================
          STORY
      ================================================== */}

      <section id="story" className="about-story">
        <div className="container">
          <div className="about-story__grid">

            <Reveal>
              <div className="about-story__visual">
                <div className="about-story__visual-card">
                  <span className="about-story__visual-label">
                    MAAC.AI
                  </span>

                  <div className="about-story__orb">
                    <div className="about-story__orb-core">
                      AI
                    </div>
                  </div>

                  <div className="about-story__mini-card">
                    <span>IDEA</span>
                    <Icon name="arrowRight" size={12} />
                    <span>IMPACT</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="about-story__content">
                <p className="section-tag">OUR STORY</p>

                <h2>
                  Technology should solve
                  <span> meaningful problems.</span>
                </h2>

                <p>
                  MAAC.AI was built around a simple belief:
                  technology becomes valuable when it creates
                  real-world impact.
                </p>

                <p>
                  From intelligent applications and websites to
                  automation, analytics and digital products, we
                  bring strategy, engineering, design and AI
                  together under one roof.
                </p>

                <p>
                  Our approach is intentionally practical. We
                  understand the problem first, define the right
                  solution and then build technology that can
                  evolve with the business.
                </p>

                <div className="about-story__capabilities">
                  {capabilities.map((item) => (
                    <span key={item}>
                      <Icon name="check" size={12} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* ==================================================
          MISSION
      ================================================== */}

      <section className="about-mission">
        <div className="container">
          <Reveal>
            <div className="about-mission__card">

              <div className="about-mission__label">
                <span>OUR MISSION</span>
              </div>

              <div className="about-mission__content">
                <h2>
                  Make advanced technology
                  <span> useful, accessible and impactful.</span>
                </h2>

                <p>
                  We want businesses to use technology not simply
                  because it is new, but because it creates a
                  meaningful advantage.
                </p>
              </div>

              <div className="about-mission__mark">
                <Icon name="arrowUpRight" size={30} />
              </div>

            </div>
          </Reveal>
        </div>
      </section>


      {/* ==================================================
          VALUES
      ================================================== */}

      <section className="about-values">
        <div className="container">

          <Reveal>
            <div className="about-section-header text-center">
              <p className="section-tag">WHAT DRIVES US</p>

              <h2 className="section-title">
                Built Around Better Thinking
              </h2>

              <p className="section-subtitle">
                The principles behind how we think, collaborate
                and build.
              </p>
            </div>
          </Reveal>

          <div className="about-values__grid">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article
                  className="about-value-card"
                  style={{
                    '--value-color': value.color,
                  }}
                >
                  <div className="about-value-card__icon">
                    <Icon
                      name={value.icon}
                      size={23}
                    />
                  </div>

                  <span className="about-value-card__number">
                    0{index + 1}
                  </span>

                  <h3>{value.title}</h3>

                  <p>{value.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>


      {/* ==================================================
          CTA
      ================================================== */}

      <section className="about-cta">
        <div className="container">
          <Reveal>
            <div className="about-cta__card">

              <div>
                <p className="section-tag">
                  LET'S BUILD
                </p>

                <h2>
                  Have an idea worth
                  <span> building?</span>
                </h2>

                <p>
                  Tell us what you are trying to achieve.
                  We'll help you find the right technology path.
                </p>
              </div>

              <a
                href="/contact"
                className="btn-primary"
              >
                Talk to Our Team
                <Icon name="arrowRight" size={15} />
              </a>

            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}