import heroBg from '../../assets/images/home/coconut-shell-carbon.png';
import shipment1 from '../../assets/images/about/shipment-1.png';
import aboutProduction from '../../assets/images/about/about-production.png';
import qaLab from '../../assets/images/about/qa-lab.png';
import qaWarehouse from '../../assets/images/about/qa-warehouse.png';
import aboutTeam from '../../assets/images/about/about-team.png';
import ctaBg from '../../assets/images/applications/activated-carbon-inquiry.png';

export const coconutShellData = {
  meta: {
    title: 'Coconut Shell Activated Carbon - Tanjin Carbon',
    description:
      'Premium coconut shell activated carbon with high hardness, microporous structure, and superior adsorption. Ideal for water treatment, gold recovery, air purification, and food-grade applications.',
  },

  hero: {
    title: 'Coconut Shell Activated Carbon Supplier',
    description:
      'Factory-direct coconut shell activated carbon from one of China\'s leading manufacturers — reliable supply, certified quality, and competitive pricing for global buyers.',
    buttonText: 'Get a Quote',
    bgImage: heroBg,
    tag: 'Trusted Manufacturer & Exporter',
    highlights: [
      'Own production base with 10,000+ MT annual capacity',
      'NSF 61, ISO 9001, HALAL, KOSHER certified',
      'Exported to 50+ countries across 6 continents',
      'Competitive factory-direct pricing with flexible MOQ',
    ],
    stats: [
      { value: '15+', label: 'Years in Business' },
      { value: '10,000+', label: 'MT Annual Capacity' },
      { value: '50+', label: 'Countries Served' },
      { value: '500+', label: 'Global Clients' },
    ],
  },

  trustLogos: [
    { icon: 'heroicons:shield-check', label: 'NSF/ANSI 61' },
    { icon: 'heroicons:document-check', label: 'ISO 9001' },
    { icon: 'heroicons:check-badge', label: 'HALAL' },
    { icon: 'heroicons:check-badge', label: 'KOSHER' },
    { icon: 'heroicons:beaker', label: 'SGS Tested' },
  ],

  productTypes: {
    title: 'Product Forms Available',
    subtitle: 'We offer coconut shell activated carbon in multiple physical forms to match your specific process and application requirements.',
    items: [
      {
        icon: 'heroicons:cube',
        tab: 'Granular',
        title: 'Coconut Shell Granular Activated Carbon',
        description: 'The most widely used form of coconut shell carbon. Its high hardness and microporous structure make it ideal for fixed-bed adsorbers across water, air, and mining industries.',
        image: heroBg,
        applications: [
          'Drinking water purification',
          'Gold recovery (CIP/CIL)',
          'Air & gas purification',
          'RO membrane dechlorination',
          'Groundwater remediation',
          'Wastewater treatment',
          'Aquarium filtration',
        ],
      },
      {
        icon: 'heroicons:sparkles',
        tab: 'Powdered',
        title: 'Coconut Shell Powdered Activated Carbon',
        description: 'Ultra-fine powder for rapid adsorption in batch dosing and single-pass applications. Delivers fast contact time and high removal efficiency.',
        image: heroBg,
        applications: [
          'Municipal wastewater dosing',
          'Sugar decolorization',
          'Edible oil refining',
          'Pharmaceutical purification',
          'Beverage clarification',
        ],
      },
      {
        icon: 'heroicons:bars-3',
        tab: 'Pelletized',
        title: 'Coconut Shell Pelletized Activated Carbon',
        description: 'Extruded cylindrical pellets with low pressure drop and excellent mechanical strength. Optimized for gas-phase adsorption and continuous flow systems.',
        image: heroBg,
        applications: [
          'VOC emission control',
          'H₂S removal',
          'Solvent recovery',
          'Odor control',
        ],
      },
      {
        icon: 'heroicons:beaker',
        tab: 'Acid-Washed',
        title: 'Coconut Shell Acid-Washed Activated Carbon',
        description: 'HCl-washed to minimize ash, soluble metals, and pH — meeting the strictest purity standards for food, pharmaceutical, and high-purity water applications.',
        image: heroBg,
        applications: [
          'Food-grade decolorization',
          'Pharmaceutical (USP/EP)',
          'Ultra-pure water production',
          'Fine chemical purification',
          'Bottled water treatment',
          'Cosmetic processing',
        ],
      },
    ],
  },

  applications: {
    title: 'Application Areas',
    items: [
      { icon: 'heroicons:funnel', title: 'Water Treatment', subtitle: 'Drinking water & wastewater', href: '/applications/water-treatment' },
      { icon: 'heroicons:circle-stack', title: 'Gold Recovery', subtitle: 'CIP/CIL mining operations', href: '/applications/gold-recovery' },
      { icon: 'heroicons:cloud', title: 'Air Purification', subtitle: 'VOC & odor removal', href: '/applications/air-purification' },
      { icon: 'heroicons:beaker', title: 'Pharmaceutical', subtitle: 'API purification & decolor', href: '/applications/pharmaceutical' },
      { icon: 'heroicons:cake', title: 'Food & Beverage', subtitle: 'Sugar, oil & beverage refining', href: '/applications/food-beverage' },
      { icon: 'heroicons:shield-check', title: 'RO Pre-Filtration', subtitle: 'Membrane dechlorination', href: '/applications/water-treatment' },
    ],
  },

  models: {
    title: 'Product Specifications',
    subtitle: 'Our most popular coconut shell activated carbon grades',
    items: [
      {
        grade: 'TC-CS-830',
        mesh: '8×30',
        iodine: '≥1050 mg/g',
        hardness: '≥95%',
        ash: '≤5%',
        application: 'Drinking water filtration',
      },
      {
        grade: 'TC-CS-612',
        mesh: '6×12',
        iodine: '≥1100 mg/g',
        hardness: '≥97%',
        ash: '≤5%',
        application: 'Gold recovery (CIP/CIL)',
      },
      {
        grade: 'TC-CS-1240',
        mesh: '12×40',
        iodine: '≥1000 mg/g',
        hardness: '≥95%',
        ash: '≤5%',
        application: 'Air & gas purification',
      },
      {
        grade: 'TC-CS-2050',
        mesh: '20×50',
        iodine: '≥1050 mg/g',
        hardness: '≥96%',
        ash: '≤4%',
        application: 'RO pre-filtration',
      },
      {
        grade: 'TC-CS-AW',
        mesh: '8×30',
        iodine: '≥1000 mg/g',
        hardness: '≥93%',
        ash: '≤3%',
        application: 'Food & beverage grade',
      },
      {
        grade: 'TC-CS-PH',
        mesh: '12×40',
        iodine: '≥1050 mg/g',
        hardness: '≥95%',
        ash: '≤3%',
        application: 'Pharmaceutical (USP)',
      },
      {
        grade: 'TC-CS-PAC',
        mesh: '200 mesh',
        iodine: '≥900 mg/g',
        hardness: '—',
        ash: '≤5%',
        application: 'Powdered dosing / decolor',
      },
    ],
  },

  whatWeOffer: {
    title: 'What We Offer',
    subtitle: 'Complete coconut shell activated carbon solutions tailored to your industry needs.',
    items: [
      { icon: 'heroicons:cube', title: 'Multiple Product Forms', description: 'GAC, PAC, pelletized, and acid-washed — all from coconut shell raw material.' },
      { icon: 'heroicons:adjustments-horizontal', title: 'Custom Specifications', description: 'Tailored iodine value, mesh size, ash content, and impregnation to your requirements.' },
      { icon: 'heroicons:document-check', title: 'Full Documentation', description: 'COA, MSDS, and third-party test reports included with every shipment.' },
      { icon: 'heroicons:beaker', title: 'Free Samples', description: '1–2 kg samples with technical data for your lab or pilot testing.' },
      { icon: 'heroicons:truck', title: 'Global Shipping', description: 'FOB, CIF, DDP terms. 25 kg bags to 1 MT jumbo bags, shipped worldwide.' },
      { icon: 'heroicons:tag', title: 'OEM & Private Label', description: 'Custom packaging, branding, and labeling available for distributors.' },
    ],
  },

  whyChooseUs: {
    title: 'Why Choose Our Coconut Shell Carbon',
    items: [
      { icon: 'heroicons:fire', title: 'Premium Raw Material', description: 'Only mature, high-density coconut shells from tropical regions for consistent micropore development.' },
      { icon: 'heroicons:sparkles', title: 'Microporous Structure', description: 'Superior adsorption of small molecules — chlorine, THMs, gold cyanide, and VOCs.' },
      { icon: 'heroicons:shield-check', title: 'Highest Hardness', description: '≥95% hardness means minimal abrasion loss and longer service life in your system.' },
      { icon: 'heroicons:beaker', title: 'Low Ash Content', description: '<5% ash with acid-washed grades down to <3% — ideal for food and pharma use.' },
      { icon: 'heroicons:arrow-path', title: 'Renewable & Sustainable', description: 'Made from coconut shells, an agricultural byproduct — a naturally renewable resource.' },
      { icon: 'heroicons:chart-bar', title: 'High Iodine Value', description: '800–1200+ mg/g iodine value delivering excellent adsorption capacity across applications.' },
    ],
  },

  factoryShowcase: {
    title: 'Our Factory',
    subtitle: 'See where your activated carbon is made — from raw material to finished product.',
    images: [
      { src: aboutProduction, alt: 'Production line', caption: 'Rotary kiln activation line' },
      { src: qaLab, alt: 'Quality lab', caption: 'In-house testing laboratory' },
      { src: qaWarehouse, alt: 'Warehouse', caption: 'Finished product warehouse' },
      { src: shipment1, alt: 'Container loading', caption: 'Container loading & export' },
    ],
    highlights: [
      '10,000+ MT annual production capacity',
      'Multiple rotary kilns & activation furnaces',
      'In-house lab: iodine, hardness, ash, pH, moisture testing',
      'NSF/ANSI 61, ISO 9001, HALAL, KOSHER certified',
    ],
  },

  orderProcess: {
    title: 'How to Order',
    subtitle: 'From inquiry to delivery — a simple, transparent process.',
    steps: [
      { step: '01', title: 'Inquiry', description: 'Tell us your application, target specs, and quantity.' },
      { step: '02', title: 'Recommendation', description: 'Our engineers recommend the optimal grade and provide a quote.' },
      { step: '03', title: 'Sample Testing', description: 'Receive free samples for your lab or pilot evaluation.' },
      { step: '04', title: 'Order & Production', description: 'Confirm order, we begin production with your specs.' },
      { step: '05', title: 'Delivery', description: 'Quality inspected, documented, and shipped to your door.' },
    ],
  },

  faq: [
    {
      question: 'What is the difference between coconut shell and coal-based activated carbon?',
      answer: 'Coconut shell carbon has a predominantly microporous structure, higher hardness (≥95%), and lower ash content (<5%), making it ideal for applications requiring fine molecule adsorption like drinking water, gold recovery, and pharmaceutical processing. Coal-based carbon has more mesopores and macropores, better suited for decolorization and large molecule removal.',
    },
    {
      question: 'What is the minimum order quantity (MOQ)?',
      answer: 'Our standard MOQ is 1 metric ton, but we are flexible for trial orders or new customers. Contact us to discuss your specific needs.',
    },
    {
      question: 'Can you customize the iodine value, mesh size, or other specifications?',
      answer: 'Yes. We manufacture in-house and can adjust iodine value, mesh size, ash content, pH, and other parameters to match your process requirements. Custom impregnation is also available.',
    },
    {
      question: 'How long is the lead time?',
      answer: 'Standard products are typically ready within 7–15 days after deposit confirmation. Custom orders may take 15–25 days depending on specifications and quantity.',
    },
    {
      question: 'Do you provide free samples?',
      answer: 'Yes, we offer free samples (typically 1–2 kg) for lab or pilot testing. Each sample comes with a Certificate of Analysis (COA).',
    },
    {
      question: 'What certifications do your products have?',
      answer: 'Our coconut shell activated carbon is certified NSF/ANSI 61, ISO 9001, HALAL, and KOSHER. Every shipment includes a COA and MSDS.',
    },
    {
      question: 'What packaging options are available?',
      answer: '25 kg PP woven bags (palletized), 500 kg super sacks, and 1 MT jumbo bags. Custom packaging and private labeling are available on request.',
    },
  ],

  cta: {
    title: 'Need Coconut Shell Activated Carbon?',
    description:
      'Tell us your application, target specs, and quantity — we will recommend the optimal grade and provide a competitive quote.',
    buttonText: 'Get a Free Quote',
    buttonHref: '#inquiry',
    bgImage: ctaBg,
  },
};
