import aboutFactory from '../assets/images/about/about-factory.png';
import aboutProduction from '../assets/images/about/about-production.png';
import qaLab from '../assets/images/about/qa-lab.png';
import aboutTeam from '../assets/images/about/about-team.png';

export const aboutData = {
  intro: {
    title: 'Who We Are',
    description:
      'Tanjin Carbon is a factory-direct activated carbon manufacturer based in Longyan, Fujian, China. Since 2009, we\'ve supplied premium activated carbon to 500+ clients in 50+ countries.',
    detail:
      'We own and operate our own production lines — no middlemen. You get consistent quality, transparent pricing, and direct communication with the people who make your product.',
    image: aboutFactory,
  },

  tagline:
    'We believe every client deserves factory-direct quality, honest pricing, and a supplier who actually understands their application.',

  sections: [
    {
      title: 'Our Products',
      description:
        'We produce granular, powdered, columnar, and specialty activated carbon from coconut shell, coal, and wood sources. Every product line is manufactured in-house under strict ISO 9001 quality management.',
      image: aboutProduction,
      buttonText: 'View All Products',
      buttonHref: '/#products',
    },
    {
      title: 'Quality & Certifications',
      description:
        'Every batch is tested in our own laboratory and verified by SGS. We hold ISO 9001, NSF/ANSI 61, HALAL, and KOSHER certifications — and every shipment includes a batch-specific Certificate of Analysis.',
      image: qaLab,
      buttonText: 'View Certifications',
      buttonHref: '/certifications',
    },
    {
      title: 'Our Team',
      description:
        'Our team includes experienced engineers, quality inspectors, and a dedicated export department. We provide free technical consultation to help you select the right carbon grade — before and after purchase.',
      image: aboutTeam,
      buttonText: 'Get in Touch',
      buttonHref: '/contact',
    },
  ],

  advantages: [
    {
      icon: 'heroicons:building-office-2',
      title: 'Factory Direct Pricing',
      description:
        'No middlemen. You buy directly from our production lines, saving 5–10% compared to trading companies.',
    },
    {
      icon: 'heroicons:shield-check',
      title: 'Certified Quality',
      description:
        'ISO 9001, NSF/ANSI 61, HALAL, and KOSHER certified. Every batch includes a Certificate of Analysis.',
    },
    {
      icon: 'heroicons:globe-alt',
      title: 'Global Export Experience',
      description:
        '2,000+ shipments to 50+ countries. Full export documentation, FOB and CIF delivery options.',
    },
    {
      icon: 'heroicons:academic-cap',
      title: 'Technical Support',
      description:
        'Our engineers help you select the right carbon grade for your application — free of charge, before and after purchase.',
    },
  ],
};
