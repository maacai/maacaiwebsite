import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import Reveal from '../Reveal';
import './ServiceDetailPage.css';

const services = {
  ai: {
    number: '01',
    eyebrow: 'ARTIFICIAL INTELLIGENCE',
    title: 'Build Intelligent Products That Think, Learn and Scale.',
    description:
      'We design and build practical AI solutions that turn complex data, workflows and user interactions into intelligent digital experiences.',
    color: '#e91e8c',
    icon: 'brain',

    introTitle: 'Turn AI Into a Real Business Advantage.',
    introText:
      'From intelligent assistants to AI-powered products, we help businesses move beyond experimentation and build reliable systems that create measurable value.',

    capabilities: [
      {
        title: 'AI Product Development',
        text:
          'Build AI-first products, intelligent features and experiences around real customer and business needs.',
      },
      {
        title: 'Generative AI',
        text:
          'Integrate modern generative AI capabilities into products, workflows, knowledge systems and customer experiences.',
      },
      {
        title: 'AI Assistants & Copilots',
        text:
          'Create context-aware assistants that help teams and customers find information, make decisions and complete tasks faster.',
      },
      {
        title: 'Machine Learning',
        text:
          'Develop predictive models and machine-learning workflows for classification, forecasting, recommendations and optimization.',
      },
      {
        title: 'AI Automation',
        text:
          'Connect AI with business workflows to reduce repetitive work and improve operational efficiency.',
      },
      {
        title: 'AI Strategy',
        text:
          'Identify practical AI opportunities, prioritize use cases and create a roadmap from prototype to production.',
      },
    ],

    workflow: [
      {
        step: '01',
        title: 'Discover',
        text:
          'Understand the business problem, users, available data and where intelligence can create the most value.',
      },
      {
        step: '02',
        title: 'Design',
        text:
          'Define the AI experience, system architecture, data requirements and success metrics.',
      },
      {
        step: '03',
        title: 'Prototype',
        text:
          'Validate the idea quickly with focused prototypes and measurable experiments.',
      },
      {
        step: '04',
        title: 'Build',
        text:
          'Develop the production-ready AI system and integrate it into the surrounding product or workflow.',
      },
      {
        step: '05',
        title: 'Evaluate',
        text:
          'Test quality, reliability, safety, latency and business performance before launch.',
      },
      {
        step: '06',
        title: 'Scale',
        text:
          'Continuously improve the system using real-world feedback, monitoring and product analytics.',
      },
    ],

    outcomes: [
      'Smarter customer experiences',
      'Reduced operational effort',
      'Faster decision-making',
      'Scalable intelligent products',
    ],
  },

  saas: {
    number: '02',
    eyebrow: 'SAAS DEVELOPMENT',
    title: 'Launch SaaS Products Built for Users, Revenue and Scale.',
    description:
      'We build modern SaaS platforms with strong product foundations, scalable architecture and experiences designed for long-term growth.',
    color: '#2563eb',
    icon: 'cloud',

    introTitle: 'From Product Idea to Scalable SaaS.',
    introText:
      'A successful SaaS product needs more than a polished interface. We combine product thinking, engineering, UX and scalable infrastructure to create platforms ready for real users and real growth.',

    capabilities: [
      {
        title: 'SaaS Product Development',
        text:
          'Build complete subscription-based products from initial concept through production launch.',
      },
      {
        title: 'Multi-Tenant Architecture',
        text:
          'Design secure and scalable foundations that support multiple customers while keeping data properly isolated.',
      },
      {
        title: 'Subscription Systems',
        text:
          'Create flexible plans, billing flows, account management and product experiences around recurring revenue.',
      },
      {
        title: 'SaaS Dashboards',
        text:
          'Build powerful dashboards that turn complex product data into clear and actionable interfaces.',
      },
      {
        title: 'API & Integrations',
        text:
          'Connect your SaaS platform with external services, internal systems and third-party APIs.',
      },
      {
        title: 'Performance & Scaling',
        text:
          'Prepare the product architecture for increasing users, traffic, data and operational complexity.',
      },
    ],

    workflow: [
      {
        step: '01',
        title: 'Product Discovery',
        text:
          'Clarify the target users, problem, product proposition, business model and essential features.',
      },
      {
        step: '02',
        title: 'UX & Architecture',
        text:
          'Create the product structure, user flows and technical architecture needed for a strong foundation.',
      },
      {
        step: '03',
        title: 'MVP Build',
        text:
          'Develop the core experience with the features necessary to validate the product in the market.',
      },
      {
        step: '04',
        title: 'Integrate',
        text:
          'Connect authentication, payments, APIs, analytics and other essential product infrastructure.',
      },
      {
        step: '05',
        title: 'Launch',
        text:
          'Deploy the product, validate real-world behavior and monitor the most important product metrics.',
      },
      {
        step: '06',
        title: 'Scale',
        text:
          'Improve performance, features and infrastructure as customer adoption and business requirements grow.',
      },
    ],

    outcomes: [
      'Faster product launches',
      'Scalable SaaS architecture',
      'Better user activation',
      'Stronger recurring revenue foundations',
    ],
  },

  mobile: {
    number: '03',
    eyebrow: 'MOBILE APPS',
    title: 'Mobile Experiences Designed Around Real User Behavior.',
    description:
      'We create fast, intuitive mobile applications that combine thoughtful UX, reliable engineering and product-focused experiences.',
    color: '#7c3aed',
    icon: 'smartphone',

    introTitle: 'Build Mobile Products People Actually Want to Use.',
    introText:
      'Every mobile interaction matters. We design applications around real user behavior, reducing friction while creating experiences that feel natural, fast and purposeful.',

    capabilities: [
      {
        title: 'iOS Applications',
        text:
          'Build polished mobile experiences optimized for Apple devices and modern user expectations.',
      },
      {
        title: 'Android Applications',
        text:
          'Develop responsive Android applications designed for performance, usability and scale.',
      },
      {
        title: 'Cross-Platform Apps',
        text:
          'Create efficient mobile products that deliver consistent experiences across multiple platforms.',
      },
      {
        title: 'Mobile UX',
        text:
          'Design clear navigation, interactions and user journeys specifically for mobile behavior.',
      },
      {
        title: 'API Integration',
        text:
          'Connect mobile applications with secure APIs, cloud systems and third-party services.',
      },
      {
        title: 'App Optimization',
        text:
          'Improve application performance, reliability, responsiveness and overall user experience.',
      },
    ],

    workflow: [
      {
        step: '01',
        title: 'Understand',
        text:
          'Research users, use cases, competitive products and the core problem the application must solve.',
      },
      {
        step: '02',
        title: 'Map',
        text:
          'Create information architecture, user journeys and interaction flows for the mobile experience.',
      },
      {
        step: '03',
        title: 'Design',
        text:
          'Transform the product strategy into a focused, intuitive and scalable mobile interface.',
      },
      {
        step: '04',
        title: 'Develop',
        text:
          'Build the application with a strong engineering foundation and carefully structured components.',
      },
      {
        step: '05',
        title: 'Test',
        text:
          'Validate usability, performance, compatibility and critical user journeys across devices.',
      },
      {
        step: '06',
        title: 'Launch & Improve',
        text:
          'Release the application and continuously improve it using feedback and product analytics.',
      },
    ],

    outcomes: [
      'Better mobile engagement',
      'Frictionless user journeys',
      'Reliable application performance',
      'Products designed for retention',
    ],
  },

  web: {
    number: '04',
    eyebrow: 'WEB DEVELOPMENT',
    title: 'High-Performance Web Experiences Built to Move Businesses Forward.',
    description:
      'We develop modern websites and web applications that combine strong engineering, thoughtful UX and measurable business performance.',
    color: '#0891b2',
    icon: 'code',

    introTitle: 'A Better Web Experience Starts With Better Engineering.',
    introText:
      'Your website or web application is often the first interaction people have with your business. We build digital experiences that are fast, accessible, scalable and designed around business objectives.',

    capabilities: [
      {
        title: 'Business Websites',
        text:
          'Create professional websites that communicate your brand clearly and convert visitors into opportunities.',
      },
      {
        title: 'Web Applications',
        text:
          'Build complex browser-based products with interactive experiences and scalable application architecture.',
      },
      {
        title: 'Frontend Development',
        text:
          'Develop responsive interfaces with modern component-driven frontend architecture.',
      },
      {
        title: 'Backend Systems',
        text:
          'Build secure APIs, services and backend systems that power reliable digital products.',
      },
      {
        title: 'Performance',
        text:
          'Optimize loading speed, responsiveness, rendering and technical performance across devices.',
      },
      {
        title: 'Web Integrations',
        text:
          'Connect your website or application with CRM, payments, analytics, APIs and business systems.',
      },
    ],

    workflow: [
      {
        step: '01',
        title: 'Discover',
        text:
          'Understand the business goals, target audience, content, functionality and technical requirements.',
      },
      {
        step: '02',
        title: 'Structure',
        text:
          'Create the information architecture, page hierarchy, user flows and technical foundation.',
      },
      {
        step: '03',
        title: 'Design',
        text:
          'Translate the strategy into a polished interface with a consistent and scalable design system.',
      },
      {
        step: '04',
        title: 'Develop',
        text:
          'Build the frontend, backend and integrations with maintainable production-ready code.',
      },
      {
        step: '05',
        title: 'Optimize',
        text:
          'Test responsiveness, accessibility, performance, functionality and critical conversion paths.',
      },
      {
        step: '06',
        title: 'Launch',
        text:
          'Deploy the experience and continue improving it through analytics, feedback and iteration.',
      },
    ],

    outcomes: [
      'Faster digital experiences',
      'Higher-quality user journeys',
      'Better conversion opportunities',
      'Scalable web infrastructure',
    ],
  },

  uiux: {
    number: '05',
    eyebrow: 'UI/UX DESIGN',
    title: 'Design Experiences People Understand, Enjoy and Remember.',
    description:
      'We combine user research, interaction design and visual systems to create digital products that feel intuitive, polished and purposeful.',
    color: '#f59e0b',
    icon: 'palette',

    introTitle: 'Turn Complexity Into Simple, Beautiful Experiences.',
    introText:
      'Great design is not decoration. It is the structure that helps people understand what to do, why it matters and how to accomplish it with less friction.',

    capabilities: [
      {
        title: 'UX Strategy',
        text:
          'Define user journeys, product structures and experience principles around real user and business needs.',
      },
      {
        title: 'User Research',
        text:
          'Understand user behavior, motivations and pain points to make design decisions grounded in evidence.',
      },
      {
        title: 'Wireframing',
        text:
          'Explore layouts and interaction patterns quickly before investing in high-fidelity visual design.',
      },
      {
        title: 'UI Design',
        text:
          'Create polished interfaces with strong hierarchy, typography, spacing and visual consistency.',
      },
      {
        title: 'Design Systems',
        text:
          'Build reusable components and design rules that keep products consistent as they grow.',
      },
      {
        title: 'Prototyping',
        text:
          'Create realistic interactive prototypes that allow teams to validate ideas before development.',
      },
    ],

    workflow: [
      {
        step: '01',
        title: 'Research',
        text:
          'Study users, business objectives, existing experiences and the problems that need to be solved.',
      },
      {
        step: '02',
        title: 'Define',
        text:
          'Translate research into personas, journeys, requirements and clear experience priorities.',
      },
      {
        step: '03',
        title: 'Explore',
        text:
          'Develop multiple interaction and information-architecture directions before selecting the strongest approach.',
      },
      {
        step: '04',
        title: 'Design',
        text:
          'Create the visual language, interfaces, components and responsive experiences.',
      },
      {
        step: '05',
        title: 'Prototype',
        text:
          'Connect screens into realistic flows and validate the most important interactions.',
      },
      {
        step: '06',
        title: 'Refine',
        text:
          'Use feedback, testing and product requirements to continuously improve the experience.',
      },
    ],

    outcomes: [
      'Clearer user journeys',
      'Lower interaction friction',
      'Stronger brand experience',
      'Higher product usability',
    ],
  },

  automation: {
    number: '06',
    eyebrow: 'AUTOMATION',
    title: 'Remove Repetitive Work With Intelligent Business Automation.',
    description:
      'We connect systems, workflows and AI to eliminate repetitive tasks and help teams spend more time on high-value work.',
    color: '#10b981',
    icon: 'settings',

    introTitle: 'Make Your Business Work Smarter.',
    introText:
      'Manual processes create delays, inconsistencies and unnecessary operational costs. We identify repetitive workflows and transform them into connected, automated systems.',

    capabilities: [
      {
        title: 'Workflow Automation',
        text:
          'Automate repetitive operational workflows across teams, systems and business processes.',
      },
      {
        title: 'AI Automation',
        text:
          'Use AI to classify information, generate content, interpret data and support intelligent decisions.',
      },
      {
        title: 'System Integration',
        text:
          'Connect disconnected tools and platforms so information can move between systems automatically.',
      },
      {
        title: 'Lead Automation',
        text:
          'Automate lead capture, enrichment, qualification, routing and follow-up workflows.',
      },
      {
        title: 'Reporting Automation',
        text:
          'Automatically collect, process and distribute important business reports and operational insights.',
      },
      {
        title: 'Process Optimization',
        text:
          'Map existing workflows, identify bottlenecks and redesign processes for greater efficiency.',
      },
    ],

    workflow: [
      {
        step: '01',
        title: 'Map',
        text:
          'Document the current workflow and identify repetitive, manual and error-prone activities.',
      },
      {
        step: '02',
        title: 'Prioritize',
        text:
          'Evaluate opportunities based on business impact, complexity, frequency and automation potential.',
      },
      {
        step: '03',
        title: 'Design',
        text:
          'Define the automated workflow, system triggers, data movement and exception handling.',
      },
      {
        step: '04',
        title: 'Connect',
        text:
          'Integrate the required applications, APIs, databases and intelligent services.',
      },
      {
        step: '05',
        title: 'Test',
        text:
          'Validate the workflow against normal scenarios, edge cases and operational requirements.',
      },
      {
        step: '06',
        title: 'Optimize',
        text:
          'Monitor the automation and improve it as the business process evolves.',
      },
    ],

    outcomes: [
      'Less repetitive manual work',
      'Faster operational processes',
      'Fewer human errors',
      'More productive teams',
    ],
  },

  marketing: {
    number: '07',
    eyebrow: 'DIGITAL MARKETING',
    title: 'Turn Attention Into Demand, Customers and Measurable Growth.',
    description:
      'We combine strategy, creative execution, content and performance analytics to build digital marketing systems focused on business outcomes.',
    color: '#ef4444',
    icon: 'megaphone',

    introTitle: 'Marketing Built Around Measurable Growth.',
    introText:
      'Visibility alone is not enough. We create connected marketing strategies that attract the right audience, build trust and turn attention into meaningful business opportunities.',

    capabilities: [
      {
        title: 'Growth Strategy',
        text:
          'Build a focused digital growth strategy around your market, audience, positioning and business objectives.',
      },
      {
        title: 'Content Strategy',
        text:
          'Develop useful, relevant content systems designed to educate audiences and build long-term demand.',
      },
      {
        title: 'Performance Marketing',
        text:
          'Plan and optimize campaigns around measurable acquisition, conversion and return-on-investment goals.',
      },
      {
        title: 'SEO',
        text:
          'Improve organic visibility through technical optimization, content strategy and search-focused experiences.',
      },
      {
        title: 'Social Media',
        text:
          'Create platform-aware content and campaigns that build audience engagement and brand presence.',
      },
      {
        title: 'Analytics & Optimization',
        text:
          'Measure campaign and funnel performance to identify what is working and where growth can improve.',
      },
    ],

    workflow: [
      {
        step: '01',
        title: 'Research',
        text:
          'Understand the market, competitors, audience, positioning and existing acquisition channels.',
      },
      {
        step: '02',
        title: 'Strategize',
        text:
          'Define channels, messaging, content pillars, campaign goals and measurement frameworks.',
      },
      {
        step: '03',
        title: 'Create',
        text:
          'Develop campaign assets, landing experiences, content and creative concepts.',
      },
      {
        step: '04',
        title: 'Launch',
        text:
          'Deploy campaigns and distribution strategies across the most relevant channels.',
      },
      {
        step: '05',
        title: 'Measure',
        text:
          'Track acquisition, engagement, conversion and other meaningful performance indicators.',
      },
      {
        step: '06',
        title: 'Optimize',
        text:
          'Use performance data to refine campaigns, messaging, targeting and conversion paths.',
      },
    ],

    outcomes: [
      'Stronger digital visibility',
      'More qualified demand',
      'Better campaign efficiency',
      'Data-driven growth decisions',
    ],
  },

  analytics: {
    number: '08',
    eyebrow: 'DATA ANALYTICS',
    title: 'Turn Business Data Into Decisions You Can Act On.',
    description:
      'We transform fragmented business data into clear dashboards, useful insights and decision systems that help teams move with confidence.',
    color: '#14b8a6',
    icon: 'chart',

    introTitle: 'Make Your Data Useful, Not Just Available.',
    introText:
      'Businesses generate enormous amounts of data. The real advantage comes from connecting that data, understanding what it means and turning insights into better decisions.',

    capabilities: [
      {
        title: 'Business Intelligence',
        text:
          'Create reporting systems that give teams a clear view of business performance and important trends.',
      },
      {
        title: 'Interactive Dashboards',
        text:
          'Design intuitive dashboards that surface the metrics and insights different teams need.',
      },
      {
        title: 'Data Integration',
        text:
          'Connect information from multiple systems into a more consistent and useful analytical foundation.',
      },
      {
        title: 'Data Visualization',
        text:
          'Turn complex datasets into clear visual stories that make patterns easier to understand.',
      },
      {
        title: 'Predictive Analytics',
        text:
          'Use historical data and statistical models to identify trends, forecast outcomes and support planning.',
      },
      {
        title: 'KPI Frameworks',
        text:
          'Define meaningful performance indicators and create reporting structures around business objectives.',
      },
    ],

    workflow: [
      {
        step: '01',
        title: 'Discover',
        text:
          'Understand the business questions, decision-making processes and metrics that matter most.',
      },
      {
        step: '02',
        title: 'Connect',
        text:
          'Identify and connect relevant data sources across business systems and operational tools.',
      },
      {
        step: '03',
        title: 'Prepare',
        text:
          'Structure, clean and organize data so it can support reliable analysis and reporting.',
      },
      {
        step: '04',
        title: 'Analyze',
        text:
          'Explore trends, relationships and performance patterns to uncover actionable insights.',
      },
      {
        step: '05',
        title: 'Visualize',
        text:
          'Build dashboards and reports that communicate the right information clearly.',
      },
      {
        step: '06',
        title: 'Improve',
        text:
          'Continuously refine metrics, dashboards and analytical models as business needs evolve.',
      },
    ],

    outcomes: [
      'Faster business decisions',
      'Clearer performance visibility',
      'Better operational insights',
      'Stronger data-driven planning',
    ],
  },
};

function ServiceVisual({ service }) {
  return (
    <div
      className="service-detail-visual"
      style={{
        '--service-color': service.color,
      }}
    >
      <div className="service-detail-visual__glow" />

      <div className="service-detail-dashboard">
        <div className="service-detail-dashboard__top">
          <div>
            <span className="service-detail-dashboard__eyebrow">
              MAAC.AI
            </span>
            <strong>{service.eyebrow}</strong>
          </div>

          <span className="service-detail-dashboard__status">
            <span />
            ACTIVE
          </span>
        </div>

        <div className="service-detail-dashboard__main">
          <div className="service-detail-dashboard__icon">
            <Icon name={service.icon} size={34} />
          </div>

          <div>
            <span>Digital capability</span>
            <strong>Built for growth</strong>
          </div>
        </div>

        <div className="service-detail-dashboard__metrics">
          <div>
            <span>Strategy</span>
            <strong>01</strong>
          </div>

          <div>
            <span>Build</span>
            <strong>02</strong>
          </div>

          <div>
            <span>Scale</span>
            <strong>03</strong>
          </div>
        </div>

        <div className="service-detail-dashboard__chart">
          <div className="service-detail-dashboard__chart-grid">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="service-detail-dashboard__chart-line">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>

      <div className="service-detail-floating-card service-detail-floating-card--one">
        <span className="service-detail-floating-card__dot" />
        <div>
          <strong>Strategy</strong>
          <span>Business focused</span>
        </div>
      </div>

      <div className="service-detail-floating-card service-detail-floating-card--two">
        <Icon name="arrowRight" size={15} />
        <div>
          <strong>Build → Scale</strong>
          <span>One connected process</span>
        </div>
      </div>
    </div>
  );
}

export default function ServiceDetailPage({ serviceKey }) {
  const service = services[serviceKey];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceKey]);

  if (!service) {
    return null;
  }

  return (
    <div
      className="service-detail-page"
      style={{
        '--service-color': service.color,
      }}
    >
      <section className="service-detail-hero">
        <div className="service-detail-hero__grid" />

        <div className="container service-detail-hero__inner">
          <Reveal variant="left">
            <div className="service-detail-hero__content">
              <Link
                to="/#services"
                className="service-detail-back"
              >
                <Icon name="arrowRight" size={15} />
                Back to services
              </Link>

              <div className="service-detail-kicker">
                <span>{service.number}</span>
                <span>{service.eyebrow}</span>
              </div>

              <h1>{service.title}</h1>

              <p className="service-detail-hero__description">
                {service.description}
              </p>

              <div className="service-detail-hero__actions">
                <Link
                  to="/contact"
                  className="service-detail-primary-button"
                >
                  Start a conversation
                  <Icon name="arrowRight" size={16} />
                </Link>

                <a
                  href="#service-capabilities"
                  className="service-detail-secondary-button"
                >
                  Explore capabilities
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <ServiceVisual service={service} />
          </Reveal>
        </div>
      </section>

      <section className="service-detail-intro section-anchor">
        <div className="container">
          <div className="service-detail-intro__grid">
            <Reveal variant="left">
              <div>
                <p className="section-tag">WHY IT MATTERS</p>
                <h2>{service.introTitle}</h2>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="service-detail-intro__copy">
                <p>{service.introText}</p>

                <div
                  className="service-detail-accent-line"
                  style={{
                    background: service.color,
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="service-capabilities"
        className="service-detail-capabilities section-anchor"
      >
        <div className="container">
          <Reveal>
            <div className="service-detail-section-heading">
              <div>
                <p className="section-tag">CAPABILITIES</p>
                <h2>Everything you need to move forward.</h2>
              </div>

              <span className="service-detail-section-number">
                {service.number} / 08
              </span>
            </div>
          </Reveal>

          <div className="service-detail-capabilities-grid">
            {service.capabilities.map((item, index) => (
              <Reveal
                key={item.title}
                variant="up"
                delay={index * 70}
              >
                <article className="service-detail-capability-card">
                  <div
                    className="service-detail-capability-card__number"
                    style={{
                      color: service.color,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <span
                    className="service-detail-capability-card__line"
                    style={{
                      background: service.color,
                    }}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-process section-anchor">
        <div className="container">
          <Reveal>
            <div className="service-detail-section-heading service-detail-section-heading--process">
              <div>
                <p className="section-tag">OUR APPROACH</p>
                <h2>A clear path from idea to impact.</h2>
              </div>

              <p>
                We keep every engagement structured, transparent
                and focused on measurable progress.
              </p>
            </div>
          </Reveal>

          <div className="service-detail-process-list">
            {service.workflow.map((item, index) => (
              <Reveal
                key={item.step}
                variant={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 70}
              >
                <article className="service-detail-process-item">
                  <div
                    className="service-detail-process-item__step"
                    style={{
                      color: service.color,
                    }}
                  >
                    {item.step}
                  </div>

                  <div className="service-detail-process-item__body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <div
                    className="service-detail-process-item__indicator"
                    style={{
                      background: service.color,
                    }}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-outcomes section-anchor">
        <div className="container">
          <div className="service-detail-outcomes__box">
            <Reveal variant="left">
              <div>
                <p className="section-tag">BUSINESS IMPACT</p>
                <h2>Built to create outcomes, not just deliverables.</h2>
                <p className="service-detail-outcomes__intro">
                  Technology only matters when it improves something
                  meaningful for the business and its users.
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="service-detail-outcomes__list">
                {service.outcomes.map((outcome, index) => (
                  <div
                    key={outcome}
                    className="service-detail-outcome"
                  >
                    <span
                      className="service-detail-outcome__number"
                      style={{
                        color: service.color,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span>{outcome}</span>

                    <Icon name="arrowRight" size={15} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container">
          <Reveal>
            <div className="service-detail-cta__box">
              <div className="service-detail-cta__orb" />

              <div className="service-detail-cta__content">
                <p className="section-tag">LET'S BUILD</p>

                <h2>
                  Have a challenge?
                  <br />
                  Let&apos;s turn it into something useful.
                </h2>

                <p>
                  Tell us what you are trying to build, improve or
                  automate. We&apos;ll help you identify the right
                  direction.
                </p>

                <Link
                  to="/contact"
                  className="service-detail-primary-button"
                >
                  Talk to MAAC.AI
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}