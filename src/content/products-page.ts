import coconutShellCarbon from '../assets/images/home/coconut-shell-carbon.png';
import coalBasedCarbon from '../assets/images/home/coal-based-carbon.png';
import woodBasedCarbon from '../assets/images/home/wood-based-carbon.png';

export const productsHero = {
  title: 'Activated Carbon Products',
  subtitle: 'From raw material to finished product, every grade is manufactured in our own facility — quality controlled, competitively priced, and ready to ship worldwide.',
  highlights: [
    '20,000+ tons annual production',
    'Factory-direct competitive pricing',
    'ISO 9001 & NSF 61 certified',
    'Custom specifications available',
  ],
};

export const productsTrustItems = [
  { icon: 'heroicons:cube-transparent', label: 'Coconut · Wood · Coal' },
  { icon: 'heroicons:squares-2x2', label: 'Granular · Powder · Pellet' },
  { icon: 'heroicons:shield-check', label: 'ISO 9001 · NSF 61' },
  { icon: 'heroicons:globe-alt', label: '50+ Countries' },
  { icon: 'heroicons:building-office-2', label: '20,000+ Tons/Year' },
];

export const materialCards = [
  {
    id: 'coconut-shell',
    title: 'Coconut Shell Activated Carbon',
    image: coconutShellCarbon,
    description: 'Premium microporous carbon with the highest hardness. Ideal for drinking water, gold recovery, and high-purity applications.',
    specs: [
      'Iodine: 800–1200+ mg/g',
      'Hardness: > 95%',
      'Ash: < 5%',
    ],
  },
  {
    id: 'wood-based',
    title: 'Wood-Based Activated Carbon',
    image: woodBasedCarbon,
    description: 'Mesoporous carbon with outstanding decolorization. The top choice for food-grade, pharmaceutical, and chemical purification.',
    specs: [
      'MB value: 150–220 mg/g',
      'Ash: < 5%',
      'Heavy metals: < 10 ppm',
    ],
  },
  {
    id: 'coal-based',
    title: 'Coal-Based Activated Carbon',
    image: coalBasedCarbon,
    description: 'Cost-effective carbon with balanced pore structure. Best price-to-performance ratio for large-scale industrial use.',
    specs: [
      'Iodine: 600–1100 mg/g',
      'CTC: 50–80%',
      'Hardness: > 90%',
    ],
  },
];

export const formItems = [
  { title: 'Granular (GAC)', icon: 'heroicons:cube', description: '0.5–4 mm for fixed-bed adsorption columns' },
  { title: 'Powdered (PAC)', icon: 'heroicons:sparkles', description: '< 0.15 mm for batch dosing & decolorization' },
  { title: 'Extruded Pellet', icon: 'heroicons:bars-3', description: '1.5–8 mm cylinders for gas-phase treatment' },
{ title: 'Acid / Water Washed', icon: 'heroicons:funnel', description: 'Low ash & pH for food-grade and pharma use' },
  { title: 'Impregnated', icon: 'heroicons:beaker', description: 'KI, KOH, silver, sulfur for targeted removal' },
];

import goldRecoveryImg from '../assets/images/applications/gold-recovery/gold-recovery-activated-carbon.png';
import waterTreatmentImg from '../assets/images/applications/water-treatment/water-treatment-activated-carbon.png';
import airPurificationImg from '../assets/images/applications/air-purification/air-purification-activated-carbon.png';
import foodBeverageImg from '../assets/images/applications/food-beverage/food-beverage-activated-carbon.png';
import pharmaceuticalImg from '../assets/images/applications/pharmaceutical/pharmaceutical-activated-carbon.png';
import chemicalIndustrialImg from '../assets/images/applications/chemical-industrial/chemical-industrial-activated-carbon.png';

export const featuredProducts = [
  {
    model: 'TJCG-612',
    name: 'Gold Recovery Carbon',
    image: goldRecoveryImg,
    description: 'Coconut shell 6×12 mesh granular carbon with high hardness (>97%) for CIP/CIL gold extraction',
  },
  {
    model: 'TJCG-830',
    name: 'Water Treatment Carbon',
    image: waterTreatmentImg,
    description: 'Coconut shell 8×30 mesh granular carbon for drinking water and municipal water purification',
  },
  {
    model: 'TJCE-40',
    name: 'Air Purification Carbon',
    image: airPurificationImg,
    description: 'Coal-based 4mm extruded pellet carbon for VOC adsorption and solvent recovery',
  },
  {
    model: 'TJWP-200',
    name: 'Food & Beverage Carbon',
    image: foodBeverageImg,
    description: 'Wood-based 200 mesh powdered carbon for sugar decolorization and beverage purification',
  },
  {
    model: 'TJWP-325',
    name: 'Pharmaceutical Carbon',
    image: pharmaceuticalImg,
    description: 'Wood-based 325 mesh acid-washed powdered carbon for pharmaceutical and API purification',
  },
  {
    model: 'TJLG-830',
    name: 'Chemical & Industrial Carbon',
    image: chemicalIndustrialImg,
    description: 'Coal-based 8×30 mesh granular carbon for chemical process purification and catalyst support',
  },
];

export const orderSteps = [
  { step: '01', title: 'Inquiry', description: 'Tell us your application, specs, and quantity' },
  { step: '02', title: 'Recommendation', description: 'Our engineers match the right grade for you' },
  { step: '03', title: 'Quotation', description: 'Receive pricing with detailed product specs' },
  { step: '04', title: 'Production', description: 'Manufacturing with in-process quality checks' },
  { step: '05', title: 'Delivery', description: 'Inspection, packing, and global shipping' },
];

export const productFaq = [
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'Our standard MOQ is 1 ton (1,000 kg) for most products. For sample orders, we can provide 1–5 kg for testing purposes at no charge.',
  },
  {
    question: 'Can you customize specifications?',
    answer: 'Yes. We offer custom particle sizes, iodine values, impregnation types, and packaging. Share your requirements and our engineers will develop a tailored solution.',
  },
  {
    question: 'What certifications do your products carry?',
    answer: 'Our products are ISO 9001:2015 certified, NSF/ANSI 61 approved for drinking water, and available with Halal and Kosher certification upon request.',
  },
  {
    question: 'What are the typical lead times?',
    answer: 'Standard products ship within 7–15 business days. Custom specifications may require 15–25 business days depending on complexity.',
  },
  {
    question: 'Do you provide COA (Certificate of Analysis)?',
    answer: 'Yes. Every shipment includes a detailed COA with test results for iodine value, moisture, ash content, particle size distribution, and other relevant parameters.',
  },
];
