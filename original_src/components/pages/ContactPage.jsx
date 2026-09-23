import Icon from '../Icon';
import Reveal from '../Reveal';
import './ContactPage.css';

const contactOptions = [
  {
    icon: 'mail',
    title: 'Email Us',
    value: 'support@maacai.com',
    href: 'mailto:support@maacai.com',
    color: '#e91e8c',
  },
  {
    icon: 'phone',
    title: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: '#7c3aed',
  },
  {
    icon: 'mapPin',
    title: 'Our Location',
    value: 'Bangalore, India',
    href: '#location',
    color: '#2563eb',
  },
];

const process = [
  {
    number: '01',
    title: 'Tell Us About It',
    desc: 'Share your idea, challenge or business requirement with our team.',
  },
  {
    number: '02',
    title: 'We Understand',
    desc: 'We discuss goals, users, scope, technology and the right approach.',
  },
  {
    number: '03',
    title: 'Build the Plan',
    desc: 'You receive a clear direction for turning the idea into reality.',
  },
];

const faqs = [
  {
    q: 'What type of projects do you work on?',
    a: 'We work across AI solutions, websites, SaaS platforms, mobile apps, automation, UI/UX and data-driven products.',
  },
  {
    q: 'Can you work with an existing product?',
    a: 'Yes. We can improve, redesign, extend or modernize an existing application or technology stack.',
  },
  {
    q: 'How do we start a project?',
    a: 'Start by sending us your requirements. We will understand the opportunity and discuss the most suitable next step.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Yes. We work with businesses at different stages, from early ideas and MVPs to established digital products.',
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="contact-hero">
        <div className="contact-hero__glow" />

        <div className="container">
          <Reveal>
            <div className="contact-hero__content">

              <p className="section-tag">
                GET IN TOUCH
              </p>

              <h1>
                Let's Build Something
                <span> Meaningful.</span>
              </h1>

              <p>
                Have a business challenge, product idea or
                technology opportunity? Tell us about it.
              </p>

            </div>
          </Reveal>
        </div>
      </section>


      {/* ==================================================
          CONTACT OPTIONS
      ================================================== */}

      <section className="contact-options">
        <div className="container">

          <div className="contact-options__grid">
            {contactOptions.map((option, index) => (
              <Reveal
                key={option.title}
                delay={index * 70}
              >
                <a
                  href={option.href}
                  className="contact-option"
                  style={{
                    '--contact-color': option.color,
                  }}
                >
                  <div className="contact-option__icon">
                    <Icon
                      name={option.icon}
                      size={21}
                    />
                  </div>

                  <div>
                    <span>{option.title}</span>

                    <strong>{option.value}</strong>
                  </div>

                  <Icon
                    name="arrowUpRight"
                    size={14}
                  />
                </a>
              </Reveal>
            ))}
          </div>

        </div>
      </section>


      {/* ==================================================
          FORM
      ================================================== */}

      <section className="contact-form-section">
        <div className="container">

          <div className="contact-form__layout">

            <Reveal>
              <div className="contact-form__intro">

                <p className="section-tag">
                  START A PROJECT
                </p>

                <h2>
                  Tell us what
                  <span> you're building.</span>
                </h2>

                <p>
                  Give us a little context about your project.
                  It doesn't need to be perfect — we'll help
                  shape the next step.
                </p>

                <div className="contact-form__trust">
                  <Icon name="check" size={13} />
                  <span>Confidential conversation</span>
                </div>

                <div className="contact-form__trust">
                  <Icon name="check" size={13} />
                  <span>Clear and practical discussion</span>
                </div>

                <div className="contact-form__trust">
                  <Icon name="check" size={13} />
                  <span>No obligation consultation</span>
                </div>

              </div>
            </Reveal>


            <Reveal delay={100}>
              <form
                className="contact-form"
                onSubmit={(event) =>
                  event.preventDefault()
                }
              >

                <div className="contact-form__row">
                  <label>
                    <span>Your Name</span>

                    <input
                      type="text"
                      placeholder="Enter your name"
                    />
                  </label>

                  <label>
                    <span>Work Email</span>

                    <input
                      type="email"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>


                <div className="contact-form__row">
                  <label>
                    <span>Company</span>

                    <input
                      type="text"
                      placeholder="Company name"
                    />
                  </label>

                  <label>
                    <span>Phone</span>

                    <input
                      type="tel"
                      placeholder="+91"
                    />
                  </label>
                </div>


                <label>
                  <span>What can we help with?</span>

                  <select defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>Artificial Intelligence</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>SaaS Development</option>
                    <option>UI/UX Design</option>
                    <option>Automation</option>
                    <option>Data & Analytics</option>
                    <option>Something Else</option>
                  </select>
                </label>


                <label>
                  <span>Tell us about your project</span>

                  <textarea
                    rows="5"
                    placeholder="Briefly describe your idea, challenge or requirements..."
                  />
                </label>


                <button
                  type="submit"
                  className="btn-primary contact-form__submit"
                >
                  Send Enquiry
                  <Icon
                    name="arrowRight"
                    size={15}
                  />
                </button>

              </form>
            </Reveal>

          </div>

        </div>
      </section>


      {/* ==================================================
          PROCESS
      ================================================== */}

      <section className="contact-process">
        <div className="container">

          <Reveal>
            <div className="contact-section-header text-center">
              <p className="section-tag">
                WHAT HAPPENS NEXT
              </p>

              <h2 className="section-title">
                A Simple Start
              </h2>

              <p className="section-subtitle">
                No unnecessary complexity. Just a clear path
                from conversation to execution.
              </p>
            </div>
          </Reveal>

          <div className="contact-process__grid">
            {process.map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 80}
              >
                <article className="contact-process__item">

                  <span>
                    {item.number}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  {index < process.length - 1 && (
                    <Icon
                      name="arrowRight"
                      size={16}
                    />
                  )}

                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>


      {/* ==================================================
          FAQ
      ================================================== */}

      <section
        id="location"
        className="contact-faq"
      >
        <div className="container">

          <div className="contact-faq__layout">

            <Reveal>
              <div>
                <p className="section-tag">
                  FAQ
                </p>

                <h2>
                  Before we
                  <span> talk.</span>
                </h2>

                <p>
                  A few quick answers to common questions.
                </p>
              </div>
            </Reveal>


            <div className="contact-faq__list">
              {faqs.map((faq, index) => (
                <Reveal
                  key={faq.q}
                  delay={index * 50}
                >
                  <details>
                    <summary>
                      <span>{faq.q}</span>

                      <Icon
                        name="plus"
                        size={15}
                      />
                    </summary>

                    <p>{faq.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="contact-final">
        <div className="container">

          <Reveal>
            <div className="contact-final__card">

              <p className="section-tag">
                READY WHEN YOU ARE
              </p>

              <h2>
                Your next digital idea
                <span> starts with a conversation.</span>
              </h2>

              <a
                href="mailto:support@maacai.com"
                className="btn-primary"
              >
                Email MAAC.AI
                <Icon
                  name="arrowRight"
                  size={15}
                />
              </a>

            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
}