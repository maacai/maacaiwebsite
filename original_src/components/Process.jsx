import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understanding your business goals',
  },
  {
    num: '02',
    title: 'Research',
    desc: 'In-depth analysis & market research',
  },
  {
    num: '03',
    title: 'Planning',
    desc: 'Strategic planning & roadmap',
  },
  {
    num: '04',
    title: 'Design',
    desc: 'Creative UI/UX design',
  },
  {
    num: '05',
    title: 'Development',
    desc: 'Agile development & coding',
  },
  {
    num: '06',
    title: 'Testing',
    desc: 'Quality testing & optimization',
  },
  {
    num: '07',
    title: 'Launch',
    desc: 'Smooth deployment & release',
  },
  {
    num: '08',
    title: 'Support',
    desc: 'Continuous support & maintenance',
  },
  {
    num: '09',
    title: 'Growth',
    desc: 'Scaling your business',
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    let ticking = false;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setProgress(0);
        ticking = false;
        return;
      }

      /*
       * When the section reaches the top of the viewport:
       *
       * 0%   = first step
       * 100% = last step
       *
       * Because the whole section is taller than the viewport,
       * the sticky process stays visible while the page scrolls.
       */
      const current = Math.min(
        Math.max(-rect.top / scrollableDistance, 0),
        1,
      );

      setProgress(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    const handleResize = () => {
      updateProgress();
    };

    updateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /*
   * 0 → 8
   *
   * Each step occupies an equal portion of the scroll progress.
   *
   * Example:
   * 0%   = 01
   * 12.5% = 02
   * 25%  = 03
   * ...
   * 100% = 09
   */
  const rawStep = progress * (steps.length - 1);
  const activeStep = Math.round(rawStep);

  const lineProgress =
    steps.length > 1
      ? (rawStep / (steps.length - 1)) * 100
      : 0;

  return (
    <section
      ref={sectionRef}
      className="process-section"
      style={{
        '--process-count': steps.length,
      }}
    >
      <div className="process-sticky">
        <div className="container">
          <Reveal>
            <div className="text-center process-section__header">
              <p className="section-tag">OUR PROCESS</p>

              <h2 className="section-title">
                From Idea To Impact — We Build It All
              </h2>

              <p className="section-subtitle">
                A clear, collaborative workflow keeps strategy, design and
                engineering moving toward the same outcome.
              </p>
            </div>
          </Reveal>

          <div className="process-track">
            <div className="process-line" aria-hidden="true">
              <span
                style={{
                  width: `${lineProgress}%`,
                }}
              />
            </div>

            <div className="process-progress-label">
              <span>
                {String(activeStep + 1).padStart(2, '0')}
              </span>
              <span className="process-progress-label__divider">/</span>
              <span>{String(steps.length).padStart(2, '0')}</span>
            </div>

            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              /*
               * Smooth per-step interpolation.
               *
               * This gives the active step a subtle scale/opacity
               * transition instead of making it simply switch on/off.
               */
              const distance = Math.abs(rawStep - index);
              const emphasis = Math.max(0, 1 - distance);

              return (
                <div
                  key={step.num}
                  className={[
                    'process-step',
                    isActive ? 'process-step--active' : '',
                    isCompleted ? 'process-step--completed' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{
                    '--step-emphasis': emphasis,
                  }}
                >
                  <div className="process-step__content">
                    <span className="process-step__eyebrow">
                      STEP {step.num}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.desc}</p>
                  </div>

                  <div className="process-step__circle">
                    <span className="process-step__circle-inner">
                      {isCompleted ? (
                        <Icon name="check" size={15} />
                      ) : (
                        step.num
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="process-scroll-hint" aria-hidden="true">
            <span className="process-scroll-hint__mouse">
              <span />
            </span>

            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}