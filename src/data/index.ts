import type { Service, Project, TeamMember, FAQ, ProcessStep, Engagement, TechCategory } from '../types'

export const services: Service[] = [
  {
    id: 'software-development',
    number: '01',
    title: 'Software Development',
    description: 'Modern software and web application development for businesses, startups and digital products.',
    items: [
      'Web application development',
      'Frontend development',
      'Backend development',
      'Full-stack development',
      'REST API development',
      'Database integration',
      'Third-party API integration',
      'Feature development',
      'Existing application improvements',
      'Bug fixing',
      'Maintenance',
    ],
    technologies: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
    ctaText: 'Explore Development',
    ctaLink: '/contact',
    color: {
      bg: 'from-blue-50 to-indigo-50',
      icon: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700 border-blue-200',
      border: 'border-blue-200 hover:border-blue-400',
      accent: '#3b82f6',
    },
    icon: 'Code2',
  },
  {
    id: 'mobile-development',
    number: '02',
    title: 'Mobile App Development',
    description: 'User-friendly mobile application solutions designed around your product requirements.',
    items: [
      'Mobile application development',
      'Cross-platform solutions',
      'Mobile UI implementation',
      'API integration',
      'Feature development',
      'Application maintenance',
    ],
    technologies: ['React Native', 'JavaScript', 'TypeScript'],
    ctaText: 'Discuss Your App',
    ctaLink: '/contact',
    color: {
      bg: 'from-pink-50 to-rose-50',
      icon: 'text-pink-600',
      badge: 'bg-pink-100 text-pink-700 border-pink-200',
      border: 'border-pink-200 hover:border-pink-400',
      accent: '#ec4899',
    },
    icon: 'Smartphone',
  },
  {
    id: 'website-solutions',
    number: '03',
    title: 'Website & Business Solutions',
    description: 'Professional websites and digital experiences that help businesses establish a strong online presence.',
    items: [
      'Business websites',
      'Portfolio websites',
      'Landing pages',
      'Responsive websites',
      'Website redesign',
      'UI implementation',
      'Website maintenance',
      'Performance improvements',
      'Feature updates',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    ctaText: 'Build Your Website',
    ctaLink: '/contact',
    color: {
      bg: 'from-emerald-50 to-teal-50',
      icon: 'text-emerald-600',
      badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      border: 'border-emerald-200 hover:border-emerald-400',
      accent: '#10b981',
    },
    icon: 'Globe',
  },
  {
    id: 'testing-qa',
    number: '04',
    title: 'Software Testing & QA',
    description: 'Testing and quality assurance support to help applications work reliably across different environments.',
    items: [
      'Functional testing',
      'Regression testing',
      'Web application testing',
      'API testing',
      'Cross-browser testing',
      'Cross-device testing',
      'Test case creation',
      'Bug reporting',
      'UAT support',
    ],
    tools: ['Postman', 'Playwright', 'Selenium'],
    ctaText: 'Discuss QA Requirements',
    ctaLink: '/contact',
    color: {
      bg: 'from-amber-50 to-yellow-50',
      icon: 'text-amber-600',
      badge: 'bg-amber-100 text-amber-700 border-amber-200',
      border: 'border-amber-200 hover:border-amber-400',
      accent: '#f59e0b',
    },
    icon: 'ShieldCheck',
  },
  {
    id: 'ui-ux-design',
    number: '05',
    title: 'UI/UX & Digital Design',
    description: 'Clean, responsive and user-friendly interfaces for websites and applications.',
    items: [
      'Website UI',
      'Web application UI',
      'Mobile UI',
      'Responsive design',
      'Figma implementation',
      'UI improvements',
      'Usability improvements',
      'Design-to-code implementation',
    ],
    tools: ['Figma'],
    ctaText: 'Discuss Design',
    ctaLink: '/contact',
    color: {
      bg: 'from-violet-50 to-purple-50',
      icon: 'text-violet-600',
      badge: 'bg-violet-100 text-violet-700 border-violet-200',
      border: 'border-violet-200 hover:border-violet-400',
      accent: '#7c3aed',
    },
    icon: 'Palette',
  },
  {
    id: 'other-services',
    number: '06',
    title: 'Other Digital Services',
    description: 'Flexible technology support for businesses with existing applications or specific technical requirements.',
    items: [
      'Requirement analysis',
      'API integration',
      'Existing application improvements',
      'Software documentation',
      'Project support',
      'Maintenance',
      'Bug fixing',
      'Technical consultation',
      'End-to-end development support',
    ],
    ctaText: 'Discuss Your Requirement',
    ctaLink: '/contact',
    color: {
      bg: 'from-cyan-50 to-sky-50',
      icon: 'text-cyan-600',
      badge: 'bg-cyan-100 text-cyan-700 border-cyan-200',
      border: 'border-cyan-200 hover:border-cyan-400',
      accent: '#06b6d4',
    },
    icon: 'Layers',
  },
]

export const projects: Project[] = [
  {
    id: 'mindtrack',
    title: 'MindTrack',
    category: 'Full-Stack Web Application',
    description: 'An employee wellness and analytics platform with employee, manager and HR experiences, dashboards, mood tracking and data visualization.',
    technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    status: 'Completed',
    featured: true,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'MERN Application',
    description: 'A modern e-commerce application with product listings, shopping cart, checkout functionality and backend APIs.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    status: 'Completed',
    featured: true,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    category: 'Business Dashboard',
    description: 'An interactive analytics dashboard with reusable UI components, charts and responsive layouts.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Recharts'],
    status: 'Completed',
    featured: true,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: 'member-01',
    name: 'TEAM MEMBER 01',
    role: 'Full-Stack Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'JavaScript', 'REST APIs', 'PostgreSQL', 'MongoDB'],
    description: 'Focused on building scalable web applications, APIs and modern user interfaces.',
    placeholder: 'TM01',
  },
  {
    id: 'member-02',
    name: 'TEAM MEMBER 02',
    role: 'Full-Stack / UI Developer',
    skills: ['React', 'JavaScript', 'UI/UX', 'Responsive Design', 'API Integration', 'Testing'],
    description: 'Focused on creating responsive interfaces, implementing features and delivering polished digital experiences.',
    placeholder: 'TM02',
  },
]

export const faqs: FAQ[] = [
  {
    question: 'What type of projects do you work on?',
    answer: 'We work on websites, web applications, dashboards, APIs, UI implementation, application improvements, testing and other digital development requirements.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer: 'Yes. We can work on small requirements as well as complete projects depending on the scope.',
  },
  {
    question: 'Can you work with an existing application?',
    answer: 'Yes. We can work on existing applications for feature development, bug fixing, improvements, integrations and maintenance.',
  },
  {
    question: 'Can you build both frontend and backend?',
    answer: 'Yes. Our development services can cover both frontend and backend requirements.',
  },
  {
    question: 'Do you provide maintenance?',
    answer: 'Yes. We can provide ongoing support, bug fixing, feature updates and application improvements.',
  },
  {
    question: 'How do we start a project?',
    answer: 'Send us your requirement through the contact form or contact us directly. We will review the requirement and discuss the next steps.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand your business, users and requirements.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We define the features, technology and development approach.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We create the interface and user experience based on the project requirements.',
  },
  {
    number: '04',
    title: 'Develop & Test',
    description: 'We build, integrate and test the solution.',
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'We deploy the product and continue supporting improvements and maintenance.',
  },
]

export const engagements: Engagement[] = [
  {
    number: '01',
    title: 'Individual Tasks',
    description: 'For bug fixes, UI changes, API integrations, small features and specific technical requirements.',
  },
  {
    number: '02',
    title: 'Module Development',
    description: 'For developing specific features or modules within an existing application.',
  },
  {
    number: '03',
    title: 'Complete Projects',
    description: 'For businesses looking for end-to-end website or application development.',
  },
]

export const technologies: TechCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Figma'],
  },
  {
    category: 'Visualization',
    items: ['Recharts'],
  },
  {
    category: 'Deployment',
    items: ['Vercel', 'Render', 'Cloud Platforms'],
  },
]

export const whyUsCards = [
  {
    icon: 'MessageSquare',
    title: 'Clear Communication',
    description: 'We keep requirements, progress and decisions clear throughout the project.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: 'Settings2',
    title: 'Flexible Engagement',
    description: 'We can work on individual tasks, modules or complete projects.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: 'Cpu',
    title: 'Modern Technology',
    description: 'We use modern and maintainable technologies suited to the project.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: 'HeartHandshake',
    title: 'Ongoing Support',
    description: 'We can continue supporting improvements, fixes and maintenance after launch.',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
  },
]
