import mainImage from '../../assets/images/applications/gold-recovery/gold-recovery-activated-carbon.png';
import processImage from '../../assets/images/applications/gold-recovery/gold-recovery-process.png';
import coconutShellCilCip from '../../assets/images/applications/gold-recovery/coconut-shell-cil-cip-carbon.png';
import coconutShellGoldRecovery from '../../assets/images/applications/gold-recovery/coconut-shell-gold-recovery-carbon.png';
import ctaBg from '../../assets/images/applications/activated-carbon-inquiry.png';

export const goldRecoveryData = {
  meta: {
    title: 'Gold Recovery Activated Carbon - Tanjin Carbon',
    description:
      'CIL/CIP grade coconut shell activated carbon with high gold loading capacity for mining operations worldwide.',
  },

  hero: {
    title: 'Gold Recovery',
    description:
      'CIL/CIP grade coconut shell activated carbon with high gold loading capacity and low abrasion loss — proven in mining operations across Africa, South America, and Southeast Asia.',
    buttonText: 'Get a Quote',
    bgImage: mainImage,
  },

  mainImage: mainImage,

  applications: {
    title: 'Where Our Carbon Works',
    items: [
      {
        icon: 'heroicons:cube',
        title: 'Carbon-in-Leach (CIL)',
        description: 'Simultaneous leaching and adsorption for efficient gold extraction from freshly milled ore slurry.',
      },
      {
        icon: 'heroicons:arrow-path',
        title: 'Carbon-in-Pulp (CIP)',
        description: 'Counter-current carbon adsorption from cyanide leach pulp in large-scale gold processing circuits.',
      },
      {
        icon: 'heroicons:funnel',
        title: 'Heap Leach (CIC)',
        description: 'Column carbon adsorption for recovering gold from heap leach pregnant solutions.',
      },
    ],
  },

  product: {
    title: 'How Tanjin Carbon Maximizes Your Gold Recovery',
    description:
      'At Tanjin Carbon, we know that carbon performance directly impacts your bottom line. Every percentage point of recovery and every reduction in carbon consumption translates to real profit.',
    highlights: [
      'Ball-pan hardness ≥98% — minimizes carbon attrition and reduces makeup carbon requirements by up to 30%',
      'High gold loading capacity (K-value) — faster adsorption kinetics mean more gold captured per tonne of carbon',
      'Consistent particle size distribution — ensures uniform flow and prevents short-circuiting in adsorption circuits',
      'Excellent thermal stability — maintains activity through 50+ elution and reactivation cycles',
      'Low ash and moisture content — maximizes active surface area for gold adsorption',
      'Proven to improve gold recovery by 10–15% compared to lower-grade carbon alternatives',
    ],
    image: processImage,
  },

  products: {
    title: 'Recommended Products',
    items: [
      {
        name: 'Coconut Shell Activated Carbon',
        description: 'Premium CIL/CIP grade with ball-pan hardness ≥98% and high gold loading capacity. Proven in large-scale gold plants worldwide.',
        info: '6×12 / 8×16 mesh',
        image: coconutShellCilCip,
      },
      {
        name: 'Columnar Activated Carbon',
        description: 'High-strength pellet carbon for column adsorption in heap leach circuits with excellent flow characteristics and low pressure drop.',
        info: '2mm pellet',
        image: coconutShellGoldRecovery,
      },
    ],
  },

  capabilities: {
    title: 'Why Work With Us',
    subtitle: 'From carbon selection to on-site technical support — Tanjin Carbon helps mining operations maximize gold recovery and minimize carbon costs.',
    items: [
      {
        icon: 'heroicons:cube',
        title: 'Ball-Pan Hardness ≥98%',
        description: 'Our carbon withstands the harsh abrasion in CIL/CIP circuits, reducing makeup carbon requirements by up to 30%.',
      },
      {
        icon: 'heroicons:arrow-trending-up',
        title: 'High Gold Loading Capacity',
        description: 'Optimized pore structure delivers fast adsorption kinetics and high K-values for maximum gold recovery.',
      },
      {
        icon: 'heroicons:truck',
        title: 'Bulk Mining Supply',
        description: 'Reliable container and bulk bag supply to remote mining sites worldwide with consistent quality batch to batch.',
      },
      {
        icon: 'heroicons:beaker',
        title: 'Free Sample Testing',
        description: 'Request free samples for plant-scale testing to validate gold loading and elution performance before ordering.',
      },
      {
        icon: 'heroicons:document-check',
        title: 'Batch Traceability',
        description: 'ISO 9001 certified with full COA and batch traceability for every shipment — quality you can verify.',
      },
      {
        icon: 'heroicons:fire',
        title: 'Thermal Stability',
        description: 'Maintains activity through 50+ elution and reactivation cycles, extending carbon life and reducing replacement costs.',
      },
    ],
  },

  cta: {
    title: 'Need Activated Carbon for Gold Recovery?',
    description:
      'Share your ore data and circuit parameters — we will recommend the optimal carbon grade to maximize your gold yield.',
    buttonText: 'Get a Free Quote',
    buttonHref: '#inquiry',
    bgImage: ctaBg,
  },
};
