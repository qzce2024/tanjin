import mainImage from '../../assets/images/applications/air-purification/air-purification-activated-carbon.png';
import processImage from '../../assets/images/applications/air-purification/air-purification-process.png';
import impregnatedColumnar from '../../assets/images/applications/air-purification/impregnated-columnar-activated-carbon.png';
import columnarAc from '../../assets/images/applications/air-purification/columnar-activated-carbon.png';
import coconutShellGac from '../../assets/images/applications/air-purification/coconut-shell-granular-activated-carbon.png';
import coalBasedGac from '../../assets/images/applications/air-purification/coal-based-granular-activated-carbon.png';
import honeycombAc from '../../assets/images/applications/air-purification/honeycomb-activated-carbon.png';
import pelletizedAc from '../../assets/images/applications/air-purification/pelletized-activated-carbon.png';
import ctaBg from '../../assets/images/applications/activated-carbon-inquiry.png';

export const airPurificationData = {
  meta: {
    title: 'Air Purification Activated Carbon - Tanjin Carbon',
    description:
      'Granular, columnar, and impregnated activated carbon for VOC removal, H₂S treatment, odor control, and industrial air purification.',
  },

  hero: {
    title: 'Air Purification',
    description:
      'Granular, columnar, and impregnated activated carbon for VOC removal, H₂S treatment, ammonia control, and industrial odor elimination — 90%+ removal efficiency.',
    buttonText: 'Get a Quote',
    bgImage: mainImage,
  },

  mainImage: mainImage,

  applications: {
    title: 'Where Our Carbon Works',
    items: [
      {
        icon: 'heroicons:building-office',
        title: 'Industrial VOC Control',
        description: 'Capture volatile organic compounds from paint booths, printing facilities, and chemical manufacturing exhaust.',
      },
      {
        icon: 'heroicons:fire',
        title: 'H₂S & Odor Removal',
        description: 'Eliminate hydrogen sulfide and foul odors from wastewater treatment plants, landfills, and composting facilities.',
      },
      {
        icon: 'heroicons:cpu-chip',
        title: 'Semiconductor & Cleanroom',
        description: 'Ultra-clean air filtration for semiconductor fabs and cleanroom environments requiring ppb-level purity.',
      },
      {
        icon: 'heroicons:home-modern',
        title: 'HVAC & Indoor Air Quality',
        description: 'Commercial and residential HVAC carbon filters for removing formaldehyde, benzene, and indoor pollutants.',
      },
      {
        icon: 'heroicons:beaker',
        title: 'Solvent Recovery',
        description: 'Recover valuable solvents from industrial exhaust streams through activated carbon adsorption-desorption cycles.',
      },
      {
        icon: 'heroicons:shield-check',
        title: 'Flue Gas Treatment',
        description: 'Mercury and dioxin capture from waste incineration and power plant flue gas to meet emission standards.',
      },
      {
        icon: 'heroicons:truck',
        title: 'Vehicle Emission Control',
        description: 'Canister carbon for automotive evaporative emission control systems meeting EPA and Euro standards.',
      },
      {
        icon: 'heroicons:funnel',
        title: 'Gas Mask & Respirator',
        description: 'Military and industrial-grade impregnated carbon for personal protective equipment against toxic gases.',
      },
      {
        icon: 'heroicons:sparkles',
        title: 'Food Processing Ventilation',
        description: 'Remove cooking fumes, grease particles, and odors from commercial kitchen and food processing exhaust.',
      },
    ],
  },

  product: {
    title: 'How Tanjin Carbon Solves Your Air Challenges',
    description:
      'At Tanjin Carbon, we engineer activated carbon solutions for the full spectrum of air purification needs — from high-volume industrial exhaust to precision cleanroom filtration.',
    highlights: [
      'Assess your air stream composition — pollutant types, concentrations, temperature, humidity, and flow rate',
      'Select the optimal carbon form — granular, pellet, or impregnated — based on your system design and target pollutants',
      'Offer custom impregnation (KOH, NaOH, KI, H₃PO₄) for targeted removal of specific gases like H₂S, NH₃, or mercury',
      'Provide free samples and adsorption testing data to validate performance before full deployment',
      'Support system integration with guidance on bed depth, contact time, and pressure drop optimization',
      'Schedule carbon replacement cycles based on breakthrough monitoring to maintain consistent air quality',
    ],
    image: processImage,
  },

  products: {
    title: 'Recommended Products',
    items: [
      {
        name: 'Coconut Shell Pellet Carbon',
        description: 'High-hardness pellets for fixed-bed VOC adsorption systems with low pressure drop and long service life.',
        info: '3mm / 4mm pellet',
        image: pelletizedAc,
      },
      {
        name: 'Coal-Based Columnar Carbon',
        description: 'Cost-effective columnar carbon for large-volume industrial air treatment and solvent recovery applications.',
        info: '4mm / 6mm columnar',
        image: columnarAc,
      },
      {
        name: 'KOH Impregnated Carbon',
        description: 'Chemically enhanced for targeted H₂S and acidic gas removal in wastewater plants and biogas systems.',
        info: 'KOH impregnated',
        image: impregnatedColumnar,
      },
      {
        name: 'Coconut Shell GAC for HVAC',
        description: 'Low-dust granular carbon for commercial HVAC filter panels removing indoor air pollutants and odors.',
        info: '4×8 / 6×12 mesh',
        image: coconutShellGac,
      },
      {
        name: 'High-CTC Activated Carbon',
        description: 'Optimized for solvent recovery with high carbon tetrachloride activity and excellent desorption performance.',
        info: 'CTC ≥60%',
        image: coalBasedGac,
      },
      {
        name: 'Mercury Removal Carbon',
        description: 'Sulfur-impregnated carbon for mercury and heavy metal vapor capture from flue gas and industrial emissions.',
        info: 'S-impregnated',
        image: honeycombAc,
      },
    ],
  },

  capabilities: {
    title: 'Why Work With Us',
    subtitle: 'From pollutant analysis to ongoing performance monitoring — Tanjin Carbon supports your air purification project at every stage.',
    items: [
      {
        icon: 'heroicons:clipboard-document-check',
        title: 'Air Stream Analysis',
        description: 'We analyze your exhaust composition and recommend the optimal carbon type, impregnation, and bed configuration.',
      },
      {
        icon: 'heroicons:adjustments-horizontal',
        title: 'Custom Impregnation',
        description: 'KOH, NaOH, KI, sulfur, or phosphoric acid — we tailor impregnation chemistry to your specific target pollutants.',
      },
      {
        icon: 'heroicons:truck',
        title: 'Flexible Supply & Packaging',
        description: '25kg bags to 1-ton jumbo bags, with stable monthly production capacity for both trial and long-term orders.',
      },
      {
        icon: 'heroicons:beaker',
        title: 'Free Sample Testing',
        description: 'Request free samples with adsorption test data to validate performance before committing to a full order.',
      },
      {
        icon: 'heroicons:document-check',
        title: 'Certifications & Compliance',
        description: 'ISO 9001, SGS tested — our products meet international standards for industrial and environmental applications.',
      },
      {
        icon: 'heroicons:wrench-screwdriver',
        title: 'Ongoing Technical Support',
        description: 'From system design to breakthrough monitoring and carbon replacement scheduling — we are with you long-term.',
      },
    ],
  },

  cta: {
    title: 'Need Activated Carbon for Air Purification?',
    description:
      'Tell us your air stream parameters and treatment goals — we will recommend the optimal carbon type and system configuration.',
    buttonText: 'Get a Free Quote',
    buttonHref: '#inquiry',
    bgImage: ctaBg,
  },
};
