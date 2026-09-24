export const services = [
  { 
    id: 'artificial-intelligence',
    icon: '🤖', 
    title: 'Artificial Intelligence', 
    desc: 'Custom AI solutions for real-world impact.',
    tagline: 'Empower your business with cognitive solutions.',
    shortName: 'AI',
    color: '#3858ff',
    heroGradient: 'linear-gradient(135deg, #0f1d5e 0%, #3858ff 100%)',
    floatingTop: 'AI Powered',
    floatingBottom: 'Secure',
    overviewTitle: 'Building systems that think, learn, and adapt.',
    overviewText: 'Artificial Intelligence is no longer just a buzzword—it is a critical driver for competitive advantage. We build bespoke AI models that integrate seamlessly into your workflows, turning raw data into predictive insights and automating complex decision-making processes.',
    metrics: [
      ['40%', 'Efficiency Gain', 'Average increase in operational efficiency across all client implementations.'],
      ['99%', 'Model Accuracy', 'Consistent precision in our custom predictive and classification models.'],
      ['24/7', 'Autonomous Ops', 'Systems that run, learn, and optimize without continuous human oversight.']
    ],
    capabilities: [
      { title: 'Machine Learning Models', text: 'Custom algorithms trained on your data to predict outcomes and optimize operations.' },
      { title: 'Natural Language Processing', text: 'Intelligent chatbots, text analysis, and voice recognition systems.' },
      { title: 'Computer Vision', text: 'Image and video analysis for automated quality control and security.' },
      { title: 'Generative AI', text: 'Content creation, design assistance, and automated coding tools.' }
    ],
    workflow: [
      ['01', 'Data Discovery', 'We analyze your existing data infrastructure and identify high-leverage AI opportunities.'],
      ['02', 'Model Training', 'Our data scientists build and train custom models using your historical data.'],
      ['03', 'Integration', 'We seamlessly embed the AI capabilities into your existing software ecosystem.'],
      ['04', 'Continuous Learning', 'The models are monitored and continuously fine-tuned to improve accuracy over time.']
    ],
    outcomes: [
      'Drastic reduction in manual data entry and processing errors.',
      'Hyper-personalized customer experiences driven by predictive algorithms.',
      'Uncovering hidden revenue opportunities through deep data analysis.'
    ]
  },
  { 
    id: 'saas-development',
    icon: '☁', 
    title: 'SaaS Development', 
    desc: 'Scalable and secure SaaS platforms.',
    tagline: 'Build the next generation of cloud software.',
    shortName: 'SaaS',
    color: '#3b82f6',
    heroGradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    floatingTop: 'Cloud Native',
    floatingBottom: 'Scalable',
    overviewTitle: 'Architecting platforms that scale effortlessly.',
    overviewText: 'Building a successful Software-as-a-Service requires more than just good code. It requires a resilient architecture, secure multi-tenant data handling, and a frictionless user experience. We build robust SaaS platforms designed to handle millions of requests without breaking a sweat.',
    metrics: [
      ['99.9%', 'Uptime SLA', 'Enterprise-grade reliability and high-availability infrastructure.'],
      ['10x', 'Faster Time-to-Market', 'Rapid deployment pipelines using cutting-edge frameworks.'],
      ['100%', 'Scalable', 'Cloud-native architecture that grows with your user base.']
    ],
    capabilities: [
      { title: 'Multi-tenant Architecture', text: 'Secure and isolated data management for thousands of simultaneous users.' },
      { title: 'Subscription Management', text: 'Integrated billing, tiering, and payment gateway solutions.' },
      { title: 'API Development', text: 'Robust RESTful and GraphQL APIs for third-party integrations.' },
      { title: 'Admin Dashboards', text: 'Comprehensive analytics and user management interfaces.' }
    ],
    workflow: [
      ['01', 'Architecture Design', 'Mapping out the cloud infrastructure and database schemas for scalability.'],
      ['02', 'Core Engineering', 'Building the backend logic, API gateways, and multi-tenant security rules.'],
      ['03', 'Frontend Development', 'Creating intuitive, lightning-fast interfaces for your end-users.'],
      ['04', 'Deployment & Scaling', 'Launching the platform on scalable cloud providers with automated CI/CD.']
    ],
    outcomes: [
      'A highly secure, compliant platform ready for enterprise clients.',
      'Frictionless onboarding and subscription management flows.',
      'Zero-downtime deployments and automated scaling.'
    ]
  },
  { 
    id: 'mobile-apps',
    icon: '📱', 
    title: 'Mobile Apps', 
    desc: 'iOS & Android apps with seamless experiences.',
    tagline: 'Your business, in their pockets.',
    shortName: 'Mobile',
    color: '#8b5cf6',
    heroGradient: 'linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)',
    floatingTop: 'iOS & Android',
    floatingBottom: 'Fast UX',
    overviewTitle: 'Crafting native experiences that users love.',
    overviewText: 'In a mobile-first world, your app needs to be fast, intuitive, and flawlessly integrated with the device ecosystem. Whether it is a high-performance native iOS app or a cross-platform React Native solution, we build mobile experiences that drive engagement and retention.',
    metrics: [
      ['4.8★', 'Average App Rating', 'Consistently high ratings across the App Store and Google Play.'],
      ['50M+', 'User Downloads', 'Apps built by our team have been downloaded by millions worldwide.'],
      ['2x', 'Platform Reach', 'Reach both iOS and Android users simultaneously with cross-platform builds.']
    ],
    capabilities: [
      { title: 'Native iOS Development', text: 'High-performance Swift applications for the Apple ecosystem.' },
      { title: 'Native Android Development', text: 'Robust Kotlin applications for the diverse Android market.' },
      { title: 'Cross-Platform Apps', text: 'React Native and Flutter solutions for faster dual-platform launches.' },
      { title: 'App Store Optimization', text: 'Strategies to maximize visibility and organic downloads.' }
    ],
    workflow: [
      ['01', 'UX Strategy', 'Defining user journeys and wireframing intuitive mobile interfaces.'],
      ['02', 'UI Design', 'Applying your brand guidelines to create stunning, pixel-perfect screens.'],
      ['03', 'Development', 'Writing clean, optimized code with seamless API integrations.'],
      ['04', 'App Store Launch', 'Handling the rigorous submission and review processes for Apple and Google.']
    ],
    outcomes: [
      'A beautiful, fluid application that feels at home on the device.',
      'High user retention rates driven by intuitive UX.',
      'Seamless integration with native device features (Camera, GPS, Push).'
    ]
  },
  { 
    id: 'web-development',
    icon: '</>', 
    title: 'Web Development', 
    desc: 'Modern, high-performance web applications.',
    tagline: 'Fast, secure, and built to scale.',
    shortName: 'Web',
    color: '#10b981',
    heroGradient: 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)',
    floatingTop: 'Responsive',
    floatingBottom: 'Modern Tech',
    overviewTitle: 'Engineering the modern web.',
    overviewText: 'A modern web application must be lightning fast, SEO optimized, and highly interactive. We utilize the latest frameworks like React and Next.js combined with robust backend technologies to deliver web solutions that outperform the competition.',
    metrics: [
      ['< 1s', 'Page Load Time', 'Optimized asset delivery ensuring sub-second interactions.'],
      ['100', 'Lighthouse Score', 'Perfect scores in Performance, Accessibility, and SEO.'],
      ['Zero', 'Security Breaches', 'Bulletproof architecture with modern authentication flows.']
    ],
    capabilities: [
      { title: 'Frontend Engineering', text: 'React, Vue, and Next.js for blazing fast user interfaces.' },
      { title: 'Backend Systems', text: 'Node.js, Python, and Go for robust server-side logic.' },
      { title: 'Database Design', text: 'Optimized SQL and NoSQL architectures for complex data.' },
      { title: 'Progressive Web Apps', text: 'App-like experiences directly within the browser.' }
    ],
    workflow: [
      ['01', 'Technical Scoping', 'Choosing the optimal stack (MERN, JAMstack) for your specific requirements.'],
      ['02', 'Backend & APIs', 'Constructing the data layer and secure endpoints.'],
      ['03', 'Frontend Integration', 'Connecting the UI to the backend with robust state management.'],
      ['04', 'QA & Launch', 'Rigorous cross-browser testing and performance auditing before go-live.']
    ],
    outcomes: [
      'A highly responsive, SEO-friendly web presence.',
      'Flawless performance across all devices and network speeds.',
      'A secure, easily maintainable codebase.'
    ]
  },
  { 
    id: 'ui-ux-design',
    icon: '🎨', 
    title: 'UI/UX Design', 
    desc: 'Beautiful and user-centric digital experiences.',
    tagline: 'Design that converts and captivates.',
    shortName: 'Design',
    color: '#f43f5e',
    heroGradient: 'linear-gradient(135deg, #831843 0%, #f43f5e 100%)',
    floatingTop: 'User-Centric',
    floatingBottom: 'Pixel Perfect',
    overviewTitle: 'Where aesthetics meet absolute functionality.',
    overviewText: 'Great design is invisible. It guides the user effortlessly toward their goal while leaving a lasting brand impression. Our UI/UX process is deeply rooted in user psychology, ensuring every pixel serves a distinct purpose in the user journey.',
    metrics: [
      ['30%', 'Conversion Increase', 'Average boost in conversion rates after a UX overhaul.'],
      ['5x', 'Faster Dev', 'Comprehensive design systems drastically speed up engineering time.'],
      ['WCAG', 'AA Compliance', 'Ensuring your digital products are accessible to everyone.']
    ],
    capabilities: [
      { title: 'User Research', text: 'In-depth interviews and persona creation to understand your audience.' },
      { title: 'Wireframing', text: 'Low-fidelity layouts to quickly iterate on user flows.' },
      { title: 'Prototyping', text: 'Interactive Figma models for stakeholder testing before coding.' },
      { title: 'Visual Design', text: 'Creating cohesive, beautiful, and accessible design systems.' }
    ],
    workflow: [
      ['01', 'Discovery', 'Understanding your business goals, target audience, and brand voice.'],
      ['02', 'Wireframing & UX', 'Mapping out the user journey and structural layout of the product.'],
      ['03', 'UI & Prototyping', 'Applying colors, typography, and micro-interactions in high fidelity.'],
      ['04', 'Developer Handoff', 'Providing pixel-perfect assets and component guidelines for the engineering team.']
    ],
    outcomes: [
      'A stunning, modern interface that builds brand trust immediately.',
      'Reduced user friction resulting in higher engagement.',
      'A scalable design system for future feature additions.'
    ]
  },
  { 
    id: 'automation',
    icon: '⚙', 
    title: 'Automation', 
    desc: 'Streamline processes and boost productivity.',
    tagline: 'Work smarter, not harder.',
    shortName: 'Automation',
    color: '#d946ef',
    heroGradient: 'linear-gradient(135deg, #701a75 0%, #d946ef 100%)',
    floatingTop: 'Efficient',
    floatingBottom: 'Time Saving',
    overviewTitle: 'Eliminating the mundane, accelerating the complex.',
    overviewText: 'If a task is repetitive, it should be automated. We build custom automation pipelines that connect your disparate software tools, moving data seamlessly and triggering actions without human intervention, saving your team thousands of hours.',
    metrics: [
      ['20hrs', 'Saved Weekly', 'Average time saved per employee after implementing core automations.'],
      ['0%', 'Human Error Rate', 'Eliminating copy-paste mistakes and data entry flaws.'],
      ['3x', 'Output Increase', 'Dramatically increasing operational throughput without hiring more staff.']
    ],
    capabilities: [
      { title: 'Robotic Process Automation', text: 'Software bots to handle repetitive, rule-based tasks.' },
      { title: 'Workflow Automation', text: 'Connecting disjointed systems with Zapier, Make, or custom scripts.' },
      { title: 'Data Entry Automation', text: 'OCR and AI tools to digitize and process documents instantly.' },
      { title: 'Custom Scripts', text: 'Python and Node.js utilities for bespoke operational needs.' }
    ],
    workflow: [
      ['01', 'Process Audit', 'Identifying bottlenecks and highly repetitive tasks in your current operations.'],
      ['02', 'Logic Mapping', 'Designing the if/then workflows and data transfer protocols.'],
      ['03', 'Implementation', 'Building the scripts and integrating third-party APIs.'],
      ['04', 'Monitoring', 'Setting up fail-safes and alerts to ensure the automations run smoothly 24/7.']
    ],
    outcomes: [
      'Drastically reduced operational costs.',
      'Employees freed to focus on high-value, creative work.',
      'Instantaneous data synchronization across all your business tools.'
    ]
  },
  { 
    id: 'cloud-solutions',
    icon: '☁', 
    title: 'Cloud Solutions', 
    desc: 'Reliable, scalable and secure infrastructure.',
    tagline: 'Future-proof your IT infrastructure.',
    shortName: 'Cloud',
    color: '#0ea5e9',
    heroGradient: 'linear-gradient(135deg, #075985 0%, #0ea5e9 100%)',
    floatingTop: 'High Uptime',
    floatingBottom: 'Scalable',
    overviewTitle: 'Building the backbone of modern enterprise.',
    overviewText: 'A resilient cloud infrastructure is the foundation of any scalable digital business. We help organizations migrate to, optimize, and manage their cloud environments on AWS, Azure, and GCP, ensuring high availability and robust security.',
    metrics: [
      ['99.99%', 'Uptime SLA', 'Achieving near-perfect availability through redundant architectures.'],
      ['40%', 'Cost Reduction', 'Average savings achieved through resource optimization and right-sizing.'],
      ['24/7', 'Active Monitoring', 'Continuous oversight to prevent issues before they impact users.']
    ],
    capabilities: [
      { title: 'Cloud Migration', text: 'Seamlessly move legacy on-premise systems to modern cloud providers.' },
      { title: 'DevOps & CI/CD', text: 'Automated deployment pipelines for faster, safer software releases.' },
      { title: 'Serverless Architecture', text: 'Pay-per-use computing that scales automatically to millions of requests.' },
      { title: 'Infrastructure as Code', text: 'Terraform and Ansible for reproducible, version-controlled environments.' }
    ],
    workflow: [
      ['01', 'Infrastructure Audit', 'Evaluating your current setup for security, cost, and performance.'],
      ['02', 'Architecture Design', 'Planning a highly-available, scalable, and secure cloud topology.'],
      ['03', 'Migration & Provisioning', 'Moving data and applications with zero or minimal downtime.'],
      ['04', 'Optimization', 'Implementing cost-saving measures and automated scaling rules.']
    ],
    outcomes: [
      'A resilient infrastructure capable of handling massive traffic spikes.',
      'Significantly reduced IT overhead and maintenance costs.',
      'Faster release cycles for your development teams.'
    ]
  },
  { 
    id: 'data-analytics',
    icon: '📊', 
    title: 'Data Analytics', 
    desc: 'Turn data into meaningful insights.',
    tagline: 'Make decisions backed by numbers, not guesses.',
    shortName: 'Data',
    color: '#22c55e',
    heroGradient: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)',
    floatingTop: 'Data Driven',
    floatingBottom: 'Insights',
    overviewTitle: 'Unlocking the hidden value in your data.',
    overviewText: 'Data is only as valuable as the insights you can extract from it. We build robust data pipelines and intuitive dashboards that transform siloed, messy data into actionable business intelligence, empowering your team to make informed decisions.',
    metrics: [
      ['360°', 'Business Visibility', 'Consolidating all organizational data into a single source of truth.'],
      ['50M+', 'Rows Processed', 'Highly optimized pipelines capable of handling massive daily data loads.'],
      ['Real-time', 'Decision Making', 'Streaming analytics for up-to-the-minute operational awareness.']
    ],
    capabilities: [
      { title: 'Data Warehousing', text: 'Centralized Snowflake or BigQuery setups for scalable storage.' },
      { title: 'Business Intelligence', text: 'Interactive PowerBI and Tableau dashboards for executives.' },
      { title: 'Predictive Modeling', text: 'Statistical models to forecast sales, churn, and inventory needs.' },
      { title: 'Data Cleaning', text: 'Automated pipelines to ensure data accuracy and integrity.' }
    ],
    workflow: [
      ['01', 'Data Mapping', 'Identifying all data sources and mapping out the ingestion strategy.'],
      ['02', 'ETL Pipeline Build', 'Creating the Extraction, Transformation, and Loading mechanisms.'],
      ['03', 'Warehouse Setup', 'Structuring the centralized database for rapid querying.'],
      ['04', 'Visualization', 'Building interactive dashboards tailored to different stakeholders.']
    ],
    outcomes: [
      'Elimination of manual reporting and spreadsheet errors.',
      'Clear visibility into KPIs across all departments.',
      'Predictive insights that allow proactive rather than reactive management.'
    ]
  },
  { 
    id: 'digital-marketing',
    icon: '🎯', 
    title: 'Digital Marketing', 
    desc: 'Grow your brand with result-driven strategies.',
    tagline: 'Connect with the right audience at the right time.',
    shortName: 'Marketing',
    color: '#f97316',
    heroGradient: 'linear-gradient(135deg, #7c2d12 0%, #f97316 100%)',
    floatingTop: 'High ROI',
    floatingBottom: 'Targeted',
    overviewTitle: 'Engineering growth through data-driven marketing.',
    overviewText: 'We do not just run ads; we build comprehensive growth engines. By combining technical SEO, highly-targeted paid media, and conversion-optimized funnels, we ensure your brand captures attention and converts it into revenue.',
    metrics: [
      ['3x', 'Average ROAS', 'Tripling the return on ad spend through meticulous targeting.'],
      ['200%', 'Traffic Growth', 'Significant increases in high-intent organic traffic.'],
      ['Data-driven', 'Optimization', 'Every campaign decision is backed by rigorous A/B testing.']
    ],
    capabilities: [
      { title: 'Search Engine Optimization', text: 'Technical and content SEO to dominate Google search results.' },
      { title: 'Pay-Per-Click Advertising', text: 'High-ROI campaigns across Google Ads, Meta, and LinkedIn.' },
      { title: 'Content Marketing', text: 'High-quality blogs, whitepapers, and videos that build authority.' },
      { title: 'Conversion Rate Optimization', text: 'A/B testing landing pages to maximize ad spend efficiency.' }
    ],
    workflow: [
      ['01', 'Market Research', 'Analyzing competitors and identifying high-value keyword opportunities.'],
      ['02', 'Strategy Formulation', 'Developing a multi-channel approach tailored to your budget and goals.'],
      ['03', 'Execution', 'Launching campaigns, optimizing on-page SEO, and producing content.'],
      ['04', 'Iteration', 'Continuously analyzing performance data to refine targeting and lower CPA.']
    ],
    outcomes: [
      'A predictable, scalable pipeline of qualified leads.',
      'Dominant search engine presence for your core services.',
      'Lower customer acquisition costs over time.'
    ]
  },
  { 
    id: 'branding',
    icon: '✨', 
    title: 'Branding', 
    desc: 'Build a strong and memorable brand identity.',
    tagline: 'Stand out in a crowded market.',
    shortName: 'Branding',
    color: '#a855f7',
    heroGradient: 'linear-gradient(135deg, #581c87 0%, #a855f7 100%)',
    floatingTop: 'Creative',
    floatingBottom: 'Memorable',
    overviewTitle: 'Defining the soul of your business.',
    overviewText: 'A brand is much more than a logo; it is the gut feeling a customer has about your company. We help organizations distill their core values into a cohesive visual identity and voice that resonates deeply with their target audience.',
    metrics: [
      ['100%', 'Original Concepts', 'Bespoke design systems tailored entirely to your unique positioning.'],
      ['Cohesive', 'Visual Language', 'Seamless brand application across digital, print, and physical mediums.'],
      ['Lasting', 'Market Impression', 'Creating iconic identities that stand the test of time.']
    ],
    capabilities: [
      { title: 'Brand Strategy', text: 'Defining your core positioning, mission, and unique value proposition.' },
      { title: 'Logo & Identity Design', text: 'Memorable logos, color palettes, and typography systems.' },
      { title: 'Brand Guidelines', text: 'Comprehensive rulebooks ensuring consistency across all channels.' },
      { title: 'Copywriting & Voice', text: 'Developing a unique tone of voice for all communications.' }
    ],
    workflow: [
      ['01', 'Brand Workshop', 'Collaborative sessions to uncover your true brand archetype and goals.'],
      ['02', 'Concept Generation', 'Exploring multiple visual directions and messaging angles.'],
      ['03', 'Refinement', 'Polishing the chosen concept into a robust, versatile identity system.'],
      ['04', 'Rollout', 'Delivering comprehensive guidelines and assets for immediate deployment.']
    ],
    outcomes: [
      'A highly professional, trustworthy image that commands premium pricing.',
      'Internal alignment on company mission and voice.',
      'Instant recognition in a crowded marketplace.'
    ]
  },
  { 
    id: 'it-consulting',
    icon: '💡', 
    title: 'IT Consulting', 
    desc: 'Expert guidance for digital transformation.',
    tagline: 'Navigate the complex technology landscape with confidence.',
    shortName: 'Consulting',
    color: '#6366f1',
    heroGradient: 'linear-gradient(135deg, #312e81 0%, #6366f1 100%)',
    floatingTop: 'Strategic',
    floatingBottom: 'Expertise',
    overviewTitle: 'Strategic technology leadership for the future.',
    overviewText: 'Making the wrong technology choice can cost years and millions of dollars. Our seasoned architects and strategists provide unbiased, expert guidance to ensure your digital transformation initiatives are aligned with your business objectives and built on solid foundations.',
    metrics: [
      ['Strategic', 'Long-term Planning', 'Roadmaps designed for 5-10 years of sustainable technological growth.'],
      ['Unbiased', 'Vendor Neutral', 'We recommend the best tools for you, not the ones that pay us commissions.'],
      ['ROI', 'Focused Initiatives', 'Ensuring every tech investment directly impacts the bottom line.']
    ],
    capabilities: [
      { title: 'Digital Transformation', text: 'Comprehensive roadmaps to modernize your entire business operations.' },
      { title: 'Technology Audits', text: 'Deep-dive analysis of your current stack to identify bottlenecks.' },
      { title: 'Architecture Review', text: 'Ensuring your systems are built to scale securely.' },
      { title: 'Change Management', text: 'Helping your team adapt to new tools and processes smoothly.' }
    ],
    workflow: [
      ['01', 'Current State Analysis', 'Deep diving into your existing infrastructure, codebases, and processes.'],
      ['02', 'Gap Identification', 'Pinpointing the technological hurdles preventing business growth.'],
      ['03', 'Strategic Roadmap', 'Drafting a phased, actionable plan to reach the desired future state.'],
      ['04', 'Implementation Oversight', 'Acting as fractional CTOs to ensure vendors and teams execute perfectly.']
    ],
    outcomes: [
      'Clarity and confidence in major technology investments.',
      'Avoidance of costly architectural missteps.',
      'A modernized tech stack that attracts top engineering talent.'
    ]
  },
  { 
    id: 'cybersecurity',
    icon: '🛡', 
    title: 'Cybersecurity', 
    desc: 'Protect what matters with advanced security.',
    tagline: 'Enterprise-grade protection against modern threats.',
    shortName: 'Security',
    color: '#ef4444',
    heroGradient: 'linear-gradient(135deg, #450a0a 0%, #ef4444 100%)',
    floatingTop: 'Protected',
    floatingBottom: 'Encrypted',
    overviewTitle: 'Securing your digital perimeter proactively.',
    overviewText: 'In an era of relentless cyber threats, reactive security is not enough. We implement proactive, defense-in-depth strategies that safeguard your sensitive data, ensure regulatory compliance, and protect your brand reputation from devastating breaches.',
    metrics: [
      ['Zero', 'Day Threat Protection', 'Advanced heuristics to catch vulnerabilities before they are exploited.'],
      ['24/7', 'Active Monitoring', 'Continuous SOC operations to detect and neutralize anomalies.'],
      ['100%', 'Compliance Ready', 'Ensuring your systems meet strict industry regulatory standards.']
    ],
    capabilities: [
      { title: 'Vulnerability Assessments', text: 'Proactive scanning to find and fix security holes before hackers do.' },
      { title: 'Penetration Testing', text: 'Ethical hacking to stress-test your applications and network.' },
      { title: 'Compliance Consulting', text: 'Achieving and maintaining ISO 27001, SOC2, and GDPR standards.' },
      { title: 'Incident Response', text: 'Rapid-action protocols for when a breach occurs.' }
    ],
    workflow: [
      ['01', 'Threat Assessment', 'Simulating attacks and scanning for vulnerabilities in your current systems.'],
      ['02', 'Security Architecture', 'Designing a zero-trust network and implementing robust access controls.'],
      ['03', 'Hardening', 'Patching vulnerabilities and deploying advanced endpoint protection.'],
      ['04', 'Continuous Auditing', 'Regular penetration tests and compliance reviews to maintain posture.']
    ],
    outcomes: [
      'Peace of mind knowing your critical data is mathematically secure.',
      'Frictionless ability to pass enterprise vendor security reviews.',
      'A workforce trained to identify and neutralize social engineering attempts.'
    ]
  }
];
