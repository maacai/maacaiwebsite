import './Process.css';

const steps = [
  { num: '01', title: 'Discover',     desc: 'Understanding your business goals',      above: true  },
  { num: '02', title: 'Research',     desc: 'In-depth analysis & market research',     above: false },
  { num: '03', title: 'Planning',     desc: 'Strategic planning & roadmap',            above: true  },
  { num: '04', title: 'Design',       desc: 'Creative UI/UX design',                  above: false },
  { num: '05', title: 'Development',  desc: 'Agile development & coding',              above: true  },
  { num: '06', title: 'Testing',      desc: 'Quality testing & optimization',          above: false },
  { num: '07', title: 'Launch',       desc: 'Smooth reporting & release',              above: true  },
  { num: '08', title: 'Support',      desc: 'Continuous deployment & maintenance',     above: false },
  { num: '09', title: 'Growth',       desc: 'Scaling your business',                   above: true  },
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="text-center process-section__header">
          <p className="section-tag">OUR PROCESS</p>
          <h2 className="section-title">From Idea To Impact – We Build It All</h2>
        </div>

        <div className="process-track">
          {/* Horizontal connecting line */}
          <div className="process-line" />

          {steps.map((step) => (
            <div key={step.num} className="process-step">
              {/* Content above the line */}
              <div className={`process-step__content ${step.above ? 'process-step__content--above' : 'process-step__content--hidden'}`}>
                <h4 className="process-step__title">{step.title}</h4>
                <p className="process-step__desc">{step.desc}</p>
              </div>

              {/* Circle on the line */}
              <div className="process-step__circle">{step.num}</div>

              {/* Content below the line */}
              <div className={`process-step__content ${!step.above ? 'process-step__content--below' : 'process-step__content--hidden'}`}>
                <h4 className="process-step__title">{step.title}</h4>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
