import Icon from '../Icon';
import Reveal from '../Reveal';
import './BlogPage.css';

const featuredPost = {
  category: 'ARTIFICIAL INTELLIGENCE',
  title: 'How AI Is Changing the Way Modern Businesses Build',
  excerpt:
    'From intelligent automation to AI-powered products, businesses are moving from experimentation to practical implementation.',
  date: 'September 02, 2026',
  read: '8 min read',
};

const posts = [
  {
    category: 'AI & TECHNOLOGY',
    title: 'Building Practical AI Solutions for Business',
    excerpt:
      'Where AI creates genuine business value and where it becomes unnecessary complexity.',
    date: 'Aug 28, 2026',
    color: '#e91e8c',
  },
  {
    category: 'PRODUCT',
    title: 'From Idea to Digital Product: A Better Workflow',
    excerpt:
      'A structured approach to turning an early concept into a scalable digital product.',
    date: 'Aug 21, 2026',
    color: '#7c3aed',
  },
  {
    category: 'DESIGN',
    title: 'Why Good UX Is More Than Beautiful Interfaces',
    excerpt:
      'The relationship between usability, trust, conversion and thoughtful product design.',
    date: 'Aug 14, 2026',
    color: '#2563eb',
  },
  {
    category: 'AUTOMATION',
    title: 'Where Business Automation Creates the Biggest Impact',
    excerpt:
      'Identifying repetitive workflows that are strong candidates for intelligent automation.',
    date: 'Aug 07, 2026',
    color: '#10b981',
  },
  {
    category: 'DATA',
    title: 'Turning Business Data Into Better Decisions',
    excerpt:
      'How dashboards and analytics can move teams from reporting to actionable intelligence.',
    date: 'Jul 31, 2026',
    color: '#0891b2',
  },
  {
    category: 'ENGINEERING',
    title: 'Designing Digital Products That Can Scale',
    excerpt:
      'The technical and product decisions that matter before growth starts putting pressure on a system.',
    date: 'Jul 24, 2026',
    color: '#f59e0b',
  },
];

const topics = [
  'Artificial Intelligence',
  'Digital Products',
  'Web Development',
  'UI/UX Design',
  'Automation',
  'Data & Analytics',
];

export default function BlogPage() {
  return (
    <div className="blog-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="blog-hero">
        <div className="container">

          <Reveal>
            <div className="blog-hero__content">
              <p className="section-tag">
                MAAC.AI INSIGHTS
              </p>

              <h1>
                Ideas, Technology
                <span> &amp; Digital Thinking.</span>
              </h1>

              <p>
                Practical insights about AI, digital products,
                technology, design and the future of business.
              </p>
            </div>
          </Reveal>

        </div>
      </section>


      {/* ==================================================
          FEATURED ARTICLE
      ================================================== */}

      <section className="blog-featured">
        <div className="container">

          <Reveal>
            <article className="blog-featured__card">

              <div className="blog-featured__visual">
                <div className="blog-featured__visual-grid" />

                <div className="blog-featured__visual-center">
                  <span>AI</span>
                  <small>INTELLIGENCE</small>
                </div>

                <span className="blog-featured__badge">
                  FEATURED
                </span>
              </div>

              <div className="blog-featured__content">
                <span className="blog-post__category">
                  {featuredPost.category}
                </span>

                <h2>{featuredPost.title}</h2>

                <p>{featuredPost.excerpt}</p>

                <div className="blog-post__meta">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.read}</span>
                </div>

                <a href="#article" className="blog-read-link">
                  Read Article
                  <Icon name="arrowRight" size={14} />
                </a>
              </div>

            </article>
          </Reveal>

        </div>
      </section>


      {/* ==================================================
          TOPICS
      ================================================== */}

      <section className="blog-topics">
        <div className="container">

          <Reveal>
            <div className="blog-section-header">
              <div>
                <p className="section-tag">EXPLORE TOPICS</p>

                <h2 className="section-title">
                  What Are You Curious About?
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="blog-topics__grid">
            {topics.map((topic, index) => (
              <Reveal
                key={topic}
                delay={index * 45}
              >
                <a
                  href={`#${topic
                    .toLowerCase()
                    .replaceAll(' ', '-')}`}
                  className="blog-topic"
                >
                  <span>0{index + 1}</span>

                  <strong>{topic}</strong>

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
          ARTICLES
      ================================================== */}

      <section id="article" className="blog-articles">
        <div className="container">

          <Reveal>
            <div className="blog-section-header">
              <div>
                <p className="section-tag">LATEST ARTICLES</p>

                <h2 className="section-title">
                  Fresh Thinking From MAAC.AI
                </h2>
              </div>

              <p className="blog-section-header__description">
                Perspectives from our work across technology,
                design, AI and digital product development.
              </p>
            </div>
          </Reveal>

          <div className="blog-articles__grid">
            {posts.map((post, index) => (
              <Reveal
                key={post.title}
                delay={index * 50}
              >
                <article
                  className="blog-post"
                  style={{
                    '--post-color': post.color,
                  }}
                >
                  <div className="blog-post__visual">
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="blog-post__visual-orb" />
                  </div>

                  <div className="blog-post__body">
                    <span className="blog-post__category">
                      {post.category}
                    </span>

                    <h3>{post.title}</h3>

                    <p>{post.excerpt}</p>

                    <div className="blog-post__bottom">
                      <span>{post.date}</span>

                      <a href="#article">
                        <Icon
                          name="arrowUpRight"
                          size={14}
                        />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>


      {/* ==================================================
          NEWSLETTER CTA
      ================================================== */}

      <section className="blog-newsletter">
        <div className="container">

          <Reveal>
            <div className="blog-newsletter__card">

              <div>
                <p className="section-tag">
                  STAY IN THE LOOP
                </p>

                <h2>
                  Get useful technology
                  <span> insights.</span>
                </h2>

                <p>
                  Practical ideas about AI, products, design
                  and digital growth — without the noise.
                </p>
              </div>

              <form
                className="blog-newsletter__form"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                />

                <button type="submit">
                  Subscribe
                  <Icon
                    name="arrowRight"
                    size={14}
                  />
                </button>
              </form>

            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
}