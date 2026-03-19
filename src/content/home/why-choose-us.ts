import whyFactory from '../../assets/images/home/why-factory.png';
import whyCertifications from '../../assets/images/home/why-certifications.png';
import whyShipping from '../../assets/images/home/why-shipping.png';
import whyEngineer from '../../assets/images/home/why-engineer.png';

export const whyChooseUsData = [
  {
    icon: 'heroicons:building-office-2',
    title: 'Save 5–10% — Factory Direct',
    description:
      'You buy from our own production lines, not a trading company. No middlemen means lower cost per ton and full control over your order.',
    image: whyFactory,
    highlights: [
      'Own carbonization & activation production lines',
      '10,000+ tons annual capacity',
      'Direct pricing with no middleman markup',
    ],
  },
  {
    icon: 'heroicons:shield-check',
    title: '4 International Certifications',
    description:
      'ISO 9001, NSF/ANSI 61, HALAL, and KOSHER certified. Every batch ships with a Certificate of Analysis — no surprises.',
    image: whyCertifications,
    highlights: [
      'ISO 9001 quality management system',
      'NSF/ANSI 61 for drinking water safety',
      'HALAL & KOSHER certified for food-grade use',
    ],
  },
  {
    icon: 'heroicons:globe-alt',
    title: '2,000+ Shipments to 50+ Countries',
    description:
      'Dedicated export team handling customs docs, phytosanitary certificates, and logistics. FOB and CIF options available.',
    image: whyShipping,
    highlights: [
      'FOB and CIF delivery worldwide',
      'Full export documentation included',
      'Professional packing for bulk shipments',
    ],
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Free Engineer Consultation',
    description:
      'Not sure which grade to choose? Our engineers help you match the right carbon to your water chemistry, process, or emission target — before you spend a dollar.',
    image: whyEngineer,
    highlights: [
      'Application-specific grade recommendations',
      'Free samples (up to 500g) with COA reports',
      'Ongoing technical support after purchase',
    ],
  },
];
