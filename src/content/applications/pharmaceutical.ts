import mainImage from '../../assets/images/applications/pharmaceutical/pharmaceutical-activated-carbon.png';
import processImage from '../../assets/images/applications/pharmaceutical/pharmaceutical-carbon-process.png';
import woodPowdered from '../../assets/images/applications/pharmaceutical/wood-based-powdered-activated-carbon.png';
import coconutShellGac from '../../assets/images/applications/pharmaceutical/coconut-shell-granular-activated-carbon.png';
import acidWashedAc from '../../assets/images/applications/pharmaceutical/acid-washed-activated-carbon.png';
import bituminousGac from '../../assets/images/applications/pharmaceutical/bituminous-coal-granular-activated-carbon.png';
import ctaBg from '../../assets/images/applications/activated-carbon-inquiry.png';

export const pharmaceuticalData = {
  meta: {
    title: 'Pharmaceutical Activated Carbon - Tanjin Carbon',
    description:
      'USP/EP compliant activated carbon for API purification, injection water treatment, vitamin decolorization, and GMP pharmaceutical manufacturing.',
  },

  hero: {
    title: 'Pharmaceutical',
    description:
      'USP/EP compliant activated carbon for API purification, injection water treatment, vitamin decolorization, and pharmaceutical intermediate processing — manufactured under strict GMP standards.',
    buttonText: 'Get a Quote',
    bgImage: mainImage,
  },

  mainImage: mainImage,

  applications: {
    title: 'Where Our Carbon Works',
    items: [
      {
        icon: 'heroicons:beaker',
        title: 'API Purification',
        description: 'Remove color, pyrogens, and organic impurities from active pharmaceutical ingredients during synthesis and purification stages.',
      },
      {
        icon: 'heroicons:sparkles',
        title: 'Injection Water Treatment',
        description: 'Produce ultra-pure water for injection (WFI) by removing TOC, endotoxins, and trace organics from pharmaceutical-grade water systems.',
      },
      {
        icon: 'heroicons:sun',
        title: 'Vitamin Decolorization',
        description: 'Decolorize vitamin C, B12, and other vitamin solutions to achieve pharmacopoeia color standards without affecting potency.',
      },
      {
        icon: 'heroicons:funnel',
        title: 'Antibiotic Processing',
        description: 'Purify and decolorize antibiotic fermentation broths including penicillin, cephalosporin, and tetracycline intermediates.',
      },
      {
        icon: 'heroicons:shield-check',
        title: 'Herbal & Plant Extracts',
        description: 'Remove tannins, pigments, and unwanted compounds from botanical extracts while preserving active ingredients.',
      },
      {
        icon: 'heroicons:cube',
        title: 'Pharmaceutical Intermediates',
        description: 'Decolorize and purify chemical intermediates used in drug synthesis to meet purity specifications.',
      },
      {
        icon: 'heroicons:arrow-path',
        title: 'Solvent Recovery',
        description: 'Recover and purify organic solvents used in pharmaceutical manufacturing through activated carbon adsorption.',
      },
      {
        icon: 'heroicons:building-office-2',
        title: 'Cleanroom Air Filtration',
        description: 'Remove VOCs and trace organic vapors from cleanroom air supply systems in GMP manufacturing facilities.',
      },
      {
        icon: 'heroicons:globe-americas',
        title: 'Blood Plasma Processing',
        description: 'Adsorb toxins, pyrogens, and color bodies from blood-derived products in plasma fractionation processes.',
      },
    ],
  },

  product: {
    title: 'How Tanjin Carbon Serves the Pharmaceutical Industry',
    description:
      'Pharmaceutical applications demand the highest purity and strictest quality control. Our activated carbon products are manufactured in dedicated production lines with full batch traceability, ensuring consistent quality for GMP-regulated environments.',
    highlights: [
      'USP/EP/BP pharmacopoeia compliant with full documentation and validation support',
      'Ash content ≤3%, heavy metals ≤10 ppm, iron ≤100 ppm — well below regulatory limits',
      'Acid-washed and steam-activated to minimize leachables and ensure neutral pH',
      'Dedicated production lines to prevent cross-contamination with industrial-grade products',
      'Full batch traceability with COA, MSDS, and DMF documentation for every shipment',
      'Available in both PAC and GAC forms for batch processing and continuous-flow systems',
    ],
    image: processImage,
  },

  products: {
    title: 'Recommended Products',
    items: [
      {
        name: 'Wood-Based Powdered Activated Carbon',
        description: 'High decolorization capacity for API purification, vitamin processing, and antibiotic decolorization in batch systems.',
        info: '200 mesh · Methylene blue ≥12 ml/g · USP compliant',
        image: woodPowdered,
      },
      {
        name: 'Coconut Shell Granular Activated Carbon',
        description: 'Ultra-pure GAC for pharmaceutical water systems, WFI production, and continuous-flow purification processes.',
        info: '8×30 / 12×40 mesh · Iodine ≥1050 mg/g',
        image: coconutShellGac,
      },
      {
        name: 'Acid-Washed Activated Carbon',
        description: 'Premium-grade carbon with minimal ash and heavy metals for the most demanding pharmaceutical applications.',
        info: '200 mesh · Ash ≤3% · pH neutral · EP compliant',
        image: acidWashedAc,
      },
      {
        name: 'Bituminous Coal Granular Activated Carbon',
        description: 'Cost-effective GAC for solvent recovery, cleanroom air filtration, and large-volume pharmaceutical water treatment.',
        info: '8×30 mesh · Iodine ≥900 mg/g',
        image: bituminousGac,
      },
    ],
  },

  capabilities: {
    title: 'Why Work With Us',
    subtitle: 'From product qualification to regulatory documentation — Tanjin Carbon supports pharmaceutical manufacturers with pure, traceable, and compliant activated carbon solutions.',
    items: [
      {
        icon: 'heroicons:shield-check',
        title: 'Pharmacopoeia Compliant',
        description: 'Our pharmaceutical-grade carbon meets USP, EP, and BP standards with full validation documentation for regulatory submissions.',
      },
      {
        icon: 'heroicons:clipboard-document-check',
        title: 'GMP Quality System',
        description: 'Manufactured under ISO 9001 with dedicated production lines, in-process controls, and full batch traceability for GMP compliance.',
      },
      {
        icon: 'heroicons:document-check',
        title: 'Complete Documentation',
        description: 'COA, MSDS, DMF, TSE/BSE statements, and regulatory compliance certificates provided with every shipment.',
      },
      {
        icon: 'heroicons:beaker',
        title: 'Free Sample Testing',
        description: 'Request free samples to validate decolorization and purification performance in your actual production conditions.',
      },
      {
        icon: 'heroicons:truck',
        title: 'Pharmaceutical Packaging',
        description: 'Multi-layer sealed packaging to prevent contamination, available in 10kg, 25kg, and custom sizes for cleanroom environments.',
      },
      {
        icon: 'heroicons:adjustments-horizontal',
        title: 'Custom Specifications',
        description: 'Tailored mesh size, ash content, pH, and heavy metal levels to match your specific pharmacopoeia and process requirements.',
      },
    ],
  },

  cta: {
    title: 'Need Activated Carbon for Pharmaceutical Applications?',
    description:
      'Tell us your purification requirements and regulatory standards — we will recommend the optimal pharmaceutical-grade carbon solution.',
    buttonText: 'Get a Free Quote',
    buttonHref: '#inquiry',
    bgImage: ctaBg,
  },
};
