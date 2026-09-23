import { Link } from 'react-router-dom';
import Icon from './Icon';
import Reveal from './Reveal';
import './Services.css';

const services = [
  {
    icon: 'brain',
    label: 'Artificial Intelligence',
    desc: 'Intelligent models, copilots and AI-powered products.',
    color: '#e91e8c',
    path: '/services/artificial-intelligence',
  },
  {
    icon: 'cloud',
    label: 'SaaS Development',
    desc: 'Scalable subscription platforms built for growth.',
    color: '#2563eb',
    path: '/services/saas-development',
  },
  {
    icon: 'smartphone',
    label: 'Mobile Apps',
    desc: 'Fast, intuitive mobile experiences for modern users.',
    color: '#7c3aed',
    path: '/services/mobile-apps',
  },
  {
    icon: 'code',
    label: 'Web Development',
    desc: 'High-performance web platforms and applications.',
    color: '#0891b2',
    path: '/services/web-development',
  },
  {
    icon: 'palette',
    label: 'UI/UX Design',
    desc: 'Conversion-focused interfaces with thoughtful UX.',
    color: '#f59e0b',
    path: '/services/ui-ux-design',
  },
  {
    icon: 'settings',
    label: 'Automation',
    desc: 'Remove repetitive work with intelligent workflows.',
    color: '#10b981',
    path: '/services/automation',
  },
  {
    icon: 'megaphone',
    label: 'Digital Marketing',
    desc: 'Data-led campaigns that turn attention into demand.',
    color: '#ef4444',
    path: '/services/digital-marketing',
  },
  {
    icon: 'chart',
    label: 'Data Analytics',
    desc: 'Actionable dashboards and insights from your data.',
    color: '#14b8a6',
    path: '/services/data-analytics',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="services-section section-anchor"
    >
      <div className="container">

        {/* Header */}
        <Reveal>
          <div className="text-center services-section__header">
            <p className="section-tag">WHAT WE DO</p>

            <h2 className="section-title">
              Transforming Ideas into Intelligent Solutions
            </h2>

            <p className="section-subtitle">
              From strategy to launch, we combine technology,
              design and AI to build digital products that solve
              real business problems.
            </p>
          </div>
        </Reveal>

        {/* Services */}
        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal
              key={service.label}
              delay={index * 55}
            >
              <Link
                to={service.path}
                className="service-card interactive-card"
                style={{
                  '--accent-color': service.color,
                  '--spot-x': '50%',
                  '--spot-y': '50%',
                }}
                onMouseMove={(event) => {
                  const rect =
                    event.currentTarget.getBoundingClientRect();

                  event.currentTarget.style.setProperty(
                    '--spot-x',
                    `${event.clientX - rect.left}px`,
                  );

                  event.currentTarget.style.setProperty(
                    '--spot-y',
                    `${event.clientY - rect.top}px`,
                  );
                }}
              >
                <div className="service-card__top">
                  <div
                    className="service-card__icon"
                    style={{
                      background: `${service.color}14`,
                      color: service.color,
                    }}
                  >
                    <Icon
                      name={service.icon}
                      size={25}
                    />
                  </div>

                  <span className="service-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="service-card__label">
                  {service.label}
                </h3>

                <p className="service-card__desc">
                  {service.desc}
                </p>

                <span className="service-card__link">
                  Explore
                  <Icon
                    name="arrowRight"
                    size={14}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}