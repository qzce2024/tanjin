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
      { name: 'Products', href: '#features' },
      { name: 'Applications', href: '#applications' },
      { name: 'Why Us', href: '#why-us' },
      { name: 'Process', href: '#how-it-works' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Request Quote',
      href: '#inquiry',
    },
  },

  hero: {
    headline: 'Premium Activated Carbon',
    subheadline: 'For Global Industries',
    description:
      'Factory-direct activated carbon solutions for water treatment, air purification, gold recovery, and industrial applications. Trusted by clients in 50+ countries.',
    cta: {
      primary: {
        text: 'Request a Quote',
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
    title: 'How to Order',
    subtitle:
      'Simple 5-step procurement process from inquiry to global delivery',
  },

  testimonials: {
    title: 'Trusted by Global Clients',
    subtitle:
      'Hear from our partners across water treatment, mining, and industrial sectors',
    companyLogos: [],
  },

  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Common questions about our activated carbon products and procurement process',
  },

  contact: {
    title: 'Request a Quote',
    subtitle:
      'Tell us about your activated carbon requirements. Our technical team will respond within 24 hours with product recommendations and pricing.',
    benefits: [
      'Free samples available',
      'Technical consultation included',
      'Flexible payment terms',
      'Global shipping to 50+ countries',
    ],
    email: 'info@goldcarbon.net',
    phone: '+86 177 1980 1166',
    form: {
      cta: 'Send Inquiry',
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
          label: 'Company Name',
          placeholder: 'Your Company Ltd.',
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
          { name: 'Granular Activated Carbon', href: '#features' },
          { name: 'Powdered Activated Carbon', href: '#features' },
          { name: 'Coconut Shell Carbon', href: '#features' },
          { name: 'Coal-Based Carbon', href: '#features' },
          { name: 'Custom Specifications', href: '#features' },
        ],
      },
      {
        title: 'Applications',
        links: [
          { name: 'Water Treatment', href: '#applications' },
          { name: 'Air Purification', href: '#applications' },
          { name: 'Gold Recovery', href: '#applications' },
          { name: 'Food & Beverage', href: '#applications' },
          { name: 'Pharmaceutical', href: '#applications' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', href: '#' },
          { name: 'Why Choose Us', href: '#why-us' },
          { name: 'Certifications', href: '#' },
          { name: 'Contact', href: '#contact' },
          { name: 'Request Quote', href: '#contact' },
        ],
      },
    ],
    social: [{ name: 'LinkedIn', href: '#', icon: 'linkedin' }],
    copyright: `${new Date().getFullYear()} Tanjin Carbon. All rights reserved.`,
  },
};
