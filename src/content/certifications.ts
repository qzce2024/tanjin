import qaRawMaterial from '../assets/images/certifications/qa-raw-material.png';
import qaProduction from '../assets/images/certifications/qa-production.png';
import qaLab from '../assets/images/certifications/qa-lab.png';
import qaPacking from '../assets/images/certifications/qa-packing.png';
import gallery1 from '../assets/images/certifications/gallery-1.png';
import gallery2 from '../assets/images/certifications/gallery-2.png';
import gallery3 from '../assets/images/certifications/gallery-3.png';
import gallery4 from '../assets/images/certifications/gallery-4.png';
import gallery5 from '../assets/images/certifications/gallery-5.png';
import gallery6 from '../assets/images/certifications/gallery-6.png';
import gallery7 from '../assets/images/certifications/gallery-7.png';
import gallery8 from '../assets/images/certifications/gallery-8.png';

export const certificationsData = {
  certificates: [
    { name: 'ISO 9001:2015', scope: 'Quality Management' },
    { name: 'NSF/ANSI 61', scope: 'Drinking Water Safety' },
    { name: 'HALAL', scope: 'Food Grade Certified' },
    { name: 'KOSHER', scope: 'Food Grade Certified' },
  ],

  qualityStory: {
    title: 'How We Guarantee Quality',
    subtitle:
      'From raw material to your warehouse — every step is controlled, tested, and documented',
  },

  steps: [
    {
      step: '01',
      title: 'Raw Material Selection',
      description:
        'Quality starts at the source. We select premium coconut shell, coal, and wood raw materials from verified suppliers. Every incoming batch is inspected and tested before entering production.',
      image: qaRawMaterial,
      points: [
        'Verified supplier network with long-term partnerships',
        'Incoming material inspection for every batch',
        'Traceability from source to finished product',
      ],
    },
    {
      step: '02',
      title: 'Controlled Production',
      description:
        'Our facility operates under ISO 9001 quality management with standardized carbonization and activation processes. Temperature, time, and atmosphere are precisely controlled at every stage.',
      image: qaProduction,
      points: [
        '20,000+ sqm modern production facility',
        '10,000+ tons annual production capacity',
        '24/7 automated process monitoring',
      ],
    },
    {
      step: '03',
      title: 'Lab Testing & Verification',
      description:
        'Every batch undergoes comprehensive testing in our own laboratory. For additional assurance, we partner with SGS for independent third-party verification.',
      image: qaLab,
      points: [
        'In-house lab testing for every batch',
        'SGS third-party independent verification',
        'Batch-specific COA reports included',
      ],
    },
    {
      step: '04',
      title: 'Packing & Shipping',
      description:
        'Products are packed in moisture-proof bags with proper labeling. Our export team handles customs, phytosanitary certificates, and logistics for worry-free delivery.',
      image: qaPacking,
      points: [
        '25kg PP woven bags or 500kg jumbo bags',
        'Batch number and COA on every bag',
        'FOB and CIF delivery worldwide',
      ],
    },
  ],

  gallery: [
    { image: gallery1, alt: 'Production line' },
    { image: gallery2, alt: 'Warehouse' },
    { image: gallery3, alt: 'Carbonization furnace' },
    { image: gallery4, alt: 'Packaging area' },
    { image: gallery5, alt: 'Factory exterior' },
    { image: gallery6, alt: 'Quality lab' },
    { image: gallery7, alt: 'Loading dock' },
    { image: gallery8, alt: 'Raw materials' },
  ],
};
