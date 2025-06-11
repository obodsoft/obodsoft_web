// Centralized Content Management System for ObodSoft
// Expertise-Driven Partnership Strategy Implementation

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  partnershipBenefits: string[];
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
  };
  journey: {
    title: string;
    description: string;
    highlights: string[];
  };
  approach: {
    title: string;
    description: string;
    principles: Array<{
      title: string;
      description: string;
    }>;
  };
  promise: {
    title: string;
    description: string;
    commitments: string[];
  };
}

export interface ContactContent {
  hero: {
    title: string;
    subtitle: string;
  };
  consultation: {
    title: string;
    description: string;
  };
  form: {
    title: string;
    description: string;
  };
  response: {
    title: string;
    description: string;
  };
}

export interface CTAContent {
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
}

// Homepage Content
export const heroContent: HeroContent = {
  title: 'Your Technology Partner for Web & Mobile Excellence',
  subtitle:
    'Experienced developers from industry leaders, dedicated to your success',
  description:
    'Transform your digital vision with our expertise-driven approach. We combine proven experience from companies like Alma Media, Bazaarvoice, and Groupon with a partnership philosophy that puts your success first.',
  primaryButton: {
    text: 'Start Your Project',
    href: '#contact',
  },
  secondaryButton: {
    text: 'Our Services',
    href: '#services',
  },
};

// Services Content
export const servicesContent: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Application',
    description:
      'Modern, scalable web applications built with cutting-edge technologies and industry best practices learned from enterprise environments.',
    icon: 'fas fa-laptop-code',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AWS',
    ],
    partnershipBenefits: [
      'Collaborative planning and iterative development',
      'Transparent communication throughout the project',
      'Quality assurance with enterprise-grade testing',
      'Ongoing support and maintenance partnership',
    ],
  },
  {
    id: 'mobile-development',
    title: 'Native Mobile Apps',
    description:
      'Beautiful, performant iOS and Android applications that deliver exceptional user experiences and drive business growth.',
    icon: 'fas fa-mobile-alt',
    technologies: [
      'React Native',
      'Swift',
      'Kotlin',
      'Flutter',
      'Firebase',
      'App Store Optimization',
    ],
    partnershipBenefits: [
      'Cross-platform efficiency with native performance',
      'User-centric design and development approach',
      'App store optimization and launch support',
      'Post-launch analytics and improvement partnership',
    ],
  },
  {
    id: 'technical-consultation',
    title: 'Technical Consultation',
    description:
      'Strategic technology guidance to help you make informed decisions about your digital roadmap and architecture.',
    icon: 'fas fa-lightbulb',
    technologies: [
      'Architecture Design',
      'Technology Stack Selection',
      'Performance Optimization',
      'Security Audits',
    ],
    partnershipBenefits: [
      'Unbiased technical recommendations',
      'Long-term strategic planning support',
      'Risk assessment and mitigation strategies',
      'Ongoing technology advisory partnership',
    ],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud & DevOps Solutions',
    description:
      'Scalable cloud infrastructure and DevOps practices that ensure your applications perform reliably at any scale.',
    icon: 'fas fa-cloud',
    technologies: [
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Monitoring',
      'Security',
    ],
    partnershipBenefits: [
      'Scalable infrastructure from day one',
      'Automated deployment and monitoring',
      'Cost optimization and security best practices',
      '24/7 infrastructure support partnership',
    ],
  },
];

// About Content
export const aboutContent: AboutContent = {
  hero: {
    title: 'Meet Your Technology Partners',
    subtitle:
      'Experience meets innovation in a partnership dedicated to your success',
  },
  journey: {
    title: 'Our Journey',
    description:
      'ObodSoft was founded by experienced developers who have contributed to successful projects at industry-leading companies including Alma Media, Bazaarvoice, and Groupon. Our diverse backgrounds in enterprise software, consumer applications, and scalable platforms have shaped our understanding of what it takes to build exceptional digital products.',
    highlights: [
      'Enterprise-grade development experience from Fortune 500 companies',
      'Consumer application expertise with millions of users',
      'Scalable platform architecture and performance optimization',
      'Cross-industry knowledge spanning media, e-commerce, and technology',
    ],
  },
  approach: {
    title: 'Our Partnership Approach',
    description:
      "We believe the best software is built through collaboration, not isolation. Our approach combines technical excellence with transparent communication, ensuring you're not just getting a product, but gaining a technology partner.",
    principles: [
      {
        title: 'Collaborative Planning',
        description:
          'We work closely with you to understand your business goals and translate them into technical solutions that drive real value.',
      },
      {
        title: 'Transparent Communication',
        description:
          "Regular updates, clear documentation, and open dialogue ensure you're always informed about your project's progress.",
      },
      {
        title: 'Quality-First Development',
        description:
          'Every line of code is written with maintainability, scalability, and performance in mind, backed by comprehensive testing.',
      },
      {
        title: 'Long-term Partnership',
        description:
          "We're committed to your success beyond launch, providing ongoing support, optimization, and strategic guidance.",
      },
    ],
  },
  promise: {
    title: 'Our Promise to You',
    description:
      "When you work with ObodSoft, you're not just hiring developers – you're gaining technology partners who are invested in your success. We bring the expertise of industry leaders with the dedication of a boutique agency.",
    commitments: [
      'Deliver exceptional quality that exceeds expectations',
      'Maintain transparent communication throughout every project',
      'Provide ongoing support and partnership beyond launch',
      'Stay at the forefront of technology to future-proof your investment',
    ],
  },
};

// Contact Content
export const contactContent: ContactContent = {
  hero: {
    title: "Let's Start Your Partnership",
    subtitle:
      "Ready to transform your digital vision? We're here to help you succeed.",
  },
  consultation: {
    title: 'Partnership Consultation',
    description:
      "Every great partnership starts with understanding. Let's discuss your goals, challenges, and how we can work together to achieve exceptional results.",
  },
  form: {
    title: 'Tell Us About Your Project',
    description:
      'Share your vision with us. The more we know about your goals and challenges, the better we can tailor our partnership to your needs.',
  },
  response: {
    title: 'What Happens Next?',
    description:
      "We'll review your project details and respond within 24 hours with initial thoughts and next steps. If it's a good fit, we'll schedule a consultation to dive deeper into your goals and discuss how we can partner for success.",
  },
};

// CTA Content
export const ctaContent: CTAContent = {
  title: 'Ready to Build Something Exceptional?',
  description:
    "Let's discuss how our expertise-driven partnership approach can help you achieve your digital goals. From concept to launch and beyond, we're here to ensure your success.",
  button: {
    text: 'Start Your Project',
    href: '/contact',
  },
};

// SEO and Metadata
export const metadata = {
  home: {
    title: 'ObodSoft - Your Technology Partner for Web & Mobile Excellence',
    description:
      'Expert web and mobile app development with a partnership approach. Our experienced team from industry leaders delivers innovative solutions that drive your business success.',
    keywords:
      'web development, mobile app development, technology consulting, React, Next.js, iOS, Android, technical partnership',
  },
  about: {
    title: 'About ObodSoft - Experienced Technology Partners',
    description:
      'Meet the experienced developers behind ObodSoft. With backgrounds from Alma Media, Bazaarvoice, and Groupon, we bring enterprise expertise to every partnership.',
    keywords:
      'about ObodSoft, technology team, experienced developers, software development company, tech partnership',
  },
  services: {
    title: 'Our Services - Web & Mobile App Development | ObodSoft',
    description:
      'Comprehensive web and mobile app development services with a partnership approach. From consultation to deployment, we deliver exceptional digital solutions.',
    keywords:
      'web development services, mobile app development, technical consultation, cloud solutions, React development, iOS development, Android development',
  },
  contact: {
    title: 'Contact ObodSoft - Start Your Technology Partnership',
    description:
      "Ready to transform your digital vision? Contact ObodSoft for a partnership consultation. Let's discuss your project and how we can help you succeed.",
    keywords:
      'contact ObodSoft, project consultation, technology partnership, web development quote, mobile app consultation',
  },
};

// Navigation and Site Structure
export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'Mobile Apps', href: '/services#mobile-development' },
      { name: 'Consultation', href: '/services#technical-consultation' },
      { name: 'Cloud Solutions', href: '/services#cloud-solutions' },
    ],
  },
};

// Company Information
export const companyInfo = {
  name: 'ObodSoft',
  tagline: 'Your Technology Partner for Web & Mobile Excellence',
  description:
    'Expert web and mobile app development with a partnership approach',
  email: 'hello@obodsoft.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Innovation Drive',
    city: 'Tech City',
    state: 'CA',
    zip: '90210',
    country: 'USA',
  },
  social: {
    linkedin: 'https://linkedin.com/company/obodsoft',
    twitter: 'https://twitter.com/obodsoft',
    github: 'https://github.com/obodsoft',
  },
};
