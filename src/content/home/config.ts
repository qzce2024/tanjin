export const homeConfig = {
  site: {
    name: 'Tanjin Carbon',
    title: 'Tanjin Carbon - Premium Activated Carbon Manufacturer & Supplier',
    description:
      'Leading activated carbon manufacturer with 15+ years experience. Supplying granular, powdered, columnar, coconut shell, coal-based and wood-based activated carbon to 50+ countries.',
    keywords:
      'activated carbon, activated charcoal, granular activated carbon, powdered activated carbon, coconut shell activated carbon, coal based activated carbon, water treatment carbon, air purification carbon, gold recovery carbon',
    email: 'info@goldcarbon.net',
    ogTitle: 'Tanjin Carbon - Premium Activated Carbon for Global Industries',
    ogDescription:
      'Factory-direct activated carbon supplier. ISO 9001 certified. Serving water treatment, air purification, gold recovery and more.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Tanjin Carbon - Activated Carbon Manufacturer',
    twitterDescription:
      'Premium activated carbon for global industries. 15+ years, 50+ countries.',
  },

  navigation: {
    links: [
      { name: 'Products', href: '/products' },
      {
        name: 'Applications',
        href: '/applications',
        children: [
          { name: 'Water Treatment', href: '/applications/water-treatment' },
          { name: 'Air Purification', href: '/applications/air-purification' },
          { name: 'Gold Recovery', href: '/applications/gold-recovery' },
          { name: 'Food & Beverage', href: '/applications/food-beverage' },
          { name: 'Pharmaceutical', href: '/applications/pharmaceutical' },
          { name: 'Chemical & Industrial', href: '/applications/chemical-industrial' },
          { name: 'Environmental', href: '/applications/environmental' },
          { name: 'Energy & Gas', href: '/applications/energy-gas' },
        ],
      },
      { name: 'About', href: '/about' },
      { name: 'Certifications', href: '/certifications' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    cta: {
      text: 'Get Free Samples',
      href: '#inquiry',
    },
  },

  hero: {
    headline: 'Factory-Direct Activated Carbon',
    subheadline: 'Save 5–10% Without the Middleman',
    description:
      'ISO 9001 certified manufacturer shipping to 50+ countries. From coconut shell GAC to custom-spec impregnated carbon — get the exact grade you need with free samples and full COA reports.',
    trustLine: 'Trusted by 500+ companies across water treatment, mining, food processing & more',
    cta: {
      primary: {
        text: 'Get Free Samples & Pricing',
        href: '#inquiry',
      },
      secondary: {
        text: 'View Products',
        href: '#features',
      },
    },
    stats: [
      { value: '15+', label: 'Years Experience' },
      { value: '50+', label: 'Countries Served' },
      { value: '10K+', label: 'Tons Annual Capacity' },
    ],
  },

  features: {
    title: 'Our Products',
    subtitle:
      'Comprehensive range of activated carbon products for diverse industrial applications',
    items: [
      { icon: 'granular', title: 'Granular Activated Carbon' },
      { icon: 'powdered', title: 'Powdered Activated Carbon' },
      { icon: 'columnar', title: 'Columnar Activated Carbon' },
      { icon: 'coconut', title: 'Coconut Shell Carbon' },
      { icon: 'coal', title: 'Coal-Based Carbon' },
      { icon: 'wood', title: 'Wood-Based Carbon' },
      { icon: 'impregnated', title: 'Impregnated Carbon' },
      { icon: 'acid', title: 'Acid-Washed Carbon' },
      { icon: 'custom', title: 'Custom Specifications' },
    ],
  },

  howItWorks: {
    title: 'From Inquiry to Delivery in 4 Steps',
    subtitle:
      'A straightforward process from first contact to global delivery',
  },

  testimonials: {
    title: 'Real Results from Real Partners',
    subtitle:
      'See how manufacturers, water plants, and mining operations improved performance with our carbon',
    companyLogos: [],
  },

  faq: {
    title: 'Common Questions Before You Order',
    subtitle:
      'Quick answers to help you move forward with confidence',
  },

  contact: {
    title: 'Get Your Custom Quote in 24 Hours',
    subtitle:
      'Tell us what you need — application, specs, quantity. We\'ll get back to you within 24 hours.',
    benefits: [
      'Free samples (up to 500g) shipped in 3 days',
      'Engineer-led product consultation included',
      'Flexible payment: T/T, L/C, Trade Assurance',
      'FOB / CIF shipping worldwide',
    ],
    email: 'info@goldcarbon.net',
    phone: '+86 177 1980 1166',
    form: {
      cta: 'Get My Custom Quote',
      fields: {
        name: {
          label: 'Contact Name',
          placeholder: 'Your full name',
          required: true,
        },
        email: {
          label: 'Email Address',
          placeholder: 'your@company.com',
          required: true,
        },
        company: {
          label: 'Phone / WhatsApp',
          placeholder: '+1 234 567 8900',
          required: false,
        },
        message: {
          label: 'Requirements',
          placeholder:
            'Please describe your activated carbon needs: product type, specifications, quantity, application...',
          required: false,
        },
      },
    },
  },

  footer: {
    tagline:
      'Premium activated carbon manufacturer and supplier. Serving global industries with quality products since 2009.',
    columns: [
      {
        title: 'Products',
        links: [
          { name: 'Granular Activated Carbon', href: '/products' },
          { name: 'Powdered Activated Carbon', href: '/products' },
          { name: 'Coconut Shell Carbon', href: '/products' },
          { name: 'Coal-Based Carbon', href: '/products' },
          { name: 'Custom Specifications', href: '/products' },
        ],
      },
      {
        title: 'Applications',
        links: [
          { name: 'Water Treatment', href: '/applications/water-treatment' },
          { name: 'Air Purification', href: '/applications/air-purification' },
          { name: 'Gold Recovery', href: '/applications/gold-recovery' },
          { name: 'Food & Beverage', href: '/applications/food-beverage' },
          { name: 'Pharmaceutical', href: '/applications/pharmaceutical' },
          { name: 'Chemical & Industrial', href: '/applications/chemical-industrial' },
          { name: 'Environmental', href: '/applications/environmental' },
          { name: 'Energy & Gas', href: '/applications/energy-gas' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', href: '/about' },
          { name: 'Certifications', href: '/certifications' },
          { name: 'Contact', href: '/contact' },
          { name: 'FAQ', href: '/faq' },
        ],
      },
    ],
    social: [{ name: 'LinkedIn', href: '#', icon: 'linkedin' }],
    copyright: `${new Date().getFullYear()} Tanjin Carbon. All rights reserved.`,
  },
};
