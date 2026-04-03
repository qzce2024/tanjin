import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env
const envPath = path.join(__dirname, '../.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, ...vals] = line.trim().split('=');
  if (key) env[key] = vals.join('=');
});

const WP_API = env.WORDPRESS_API_URL || 'https://file.goldcarbon.net/wp-json/wp/v2';
const WP_USER = env.WP_USER;
const WP_APP_PASSWORD = env.WP_APP_PASSWORD;

if (!WP_USER || !WP_APP_PASSWORD) {
  console.error('❌ Missing WP_USER or WP_APP_PASSWORD in .env');
  process.exit(1);
}

const auth = 'Basic ' + Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString('base64');

// coconut catalog id = 3
const COCONUT_CATALOG_ID = 3;

const coconutProducts = [
  {
    slug: 'coconut-shell-granular-activated-carbon',
    title: 'Coconut Shell Granular Activated Carbon',
    introduction: 'High-hardness granular activated carbon made from premium coconut shells. Features a highly developed microporous structure with exceptional adsorption performance for drinking water treatment, gold recovery, and industrial purification applications.',
    content: `
<h2>Product Overview</h2>

<p>Coconut shell granular activated carbon is manufactured from premium-quality coconut shells through high-temperature carbonization and steam activation. It features a highly developed microporous structure, exceptional mechanical hardness (>95%), and superior adsorption capacity, making it the preferred choice for critical liquid and gas phase purification applications.</p>

<h2>Technical Specifications</h2>

<figure class="wp-block-table"><table class="has-fixed-layout"><tbody>
<tr><td><strong>Parameter</strong></td><td><strong>Value</strong></td></tr>
<tr><td>Iodine Number</td><td>900–1200 mg/g</td></tr>
<tr><td>Particle Size</td><td>4×8, 6×12, 8×16, 8×30, 12×40 mesh</td></tr>
<tr><td>Moisture</td><td>≤5%</td></tr>
<tr><td>Ash Content</td><td>≤5%</td></tr>
<tr><td>Hardness</td><td>≥95%</td></tr>
<tr><td>Bulk Density</td><td>0.45–0.55 g/cm³</td></tr>
<tr><td>pH</td><td>6–8 (neutral)</td></tr>
<tr><td>CTC (Carbon Tetrachloride)</td><td>≥55%</td></tr>
</tbody></table></figure>

<h2>Key Advantages</h2>

<ul>
<li><strong>Microporous structure</strong> — High proportion of micropores (<2 nm) for efficient adsorption of small organic molecules, chlorine, and trace contaminants</li>
<li><strong>Exceptional hardness</strong> — >95% hardness rating ensures minimal attrition loss during backwashing and regeneration cycles</li>
<li><strong>Low ash content</strong> — <5% ash minimizes leachable impurities, critical for drinking water and food-grade applications</li>
<li><strong>Renewable raw material</strong> — Sourced from sustainable coconut shell waste, supporting eco-friendly production</li>
<li><strong>High regeneration potential</strong> — Can be thermally reactivated multiple times, reducing long-term operational cost</li>
</ul>

<h2>Applications</h2>

<ul>
<li>Drinking water treatment and municipal water purification</li>
<li>Industrial wastewater polishing and COD/BOD reduction</li>
<li>Gold recovery (CIP/CIL/CIC processes)</li>
<li>Air and gas purification, VOC removal</li>
<li>Food and beverage decolorization and deodorization</li>
<li>Pharmaceutical and chemical process purification</li>
<li>Aquarium and fish pond filtration</li>
</ul>

<h2>Packaging & Storage</h2>

<p>Standard packaging: 25 kg PP woven bags, 500 kg jumbo bags, or as per customer requirement.<br>
Storage: Store in a cool, dry, and well-ventilated area. Avoid direct sunlight and moisture exposure. Keep away from strong oxidizers.<br>
Shelf life: 2 years when stored properly in sealed original packaging.</p>
`
  },
  {
    slug: 'coconut-shell-powdered-activated-carbon',
    title: 'Coconut Shell Powdered Activated Carbon',
    introduction: 'Ultra-fine powdered activated carbon derived from coconut shells with rapid adsorption kinetics. Ideal for batch dosing in water treatment, decolorization, and purification processes requiring fast contact time.',
    content: `
<h2>Product Overview</h2>

<p>Coconut shell powdered activated carbon (PAC) is produced by grinding high-quality coconut shell granular carbon into fine powder form. With particle sizes predominantly below 200 mesh (75 μm), it provides a significantly larger external surface area and faster adsorption kinetics compared to granular forms, making it highly effective for batch-dosing applications.</p>

<h2>Technical Specifications</h2>

<figure class="wp-block-table"><table class="has-fixed-layout"><tbody>
<tr><td><strong>Parameter</strong></td><td><strong>Value</strong></td></tr>
<tr><td>Iodine Number</td><td>900–1100 mg/g</td></tr>
<tr><td>Particle Size</td><td>≥90% passing 200 mesh (75 μm)</td></tr>
<tr><td>Moisture</td><td>≤10%</td></tr>
<tr><td>Ash Content</td><td>≤5%</td></tr>
<tr><td>Methylene Blue</td><td>≥120 mg/g</td></tr>
<tr><td>pH</td><td>6–8</td></tr>
<tr><td>Bulk Density</td><td>0.35–0.45 g/cm³</td></tr>
</tbody></table></figure>

<h2>Key Advantages</h2>

<ul>
<li><strong>Rapid adsorption</strong> — Fine particle size enables fast contact and adsorption within minutes for time-sensitive applications</li>
<li><strong>High purity</strong> — Low ash and heavy metal content meet stringent food-grade and pharmaceutical-grade requirements</li>
<li><strong>Versatile dosing</strong> — Can be slurry-dosed directly into process streams, tanks, or batch reactors</li>
<li><strong>Cost-effective treatment</strong> — Single-use application eliminates regeneration costs for intermittent or seasonal treatment needs</li>
</ul>

<h2>Applications</h2>

<ul>
<li>Emergency water treatment and taste/odor control</li>
<li>Industrial wastewater polishing and final effluent treatment</li>
<li>Sugar syrup decolorization and food processing</li>
<li>Pharmaceutical API purification and intermediate processing</li>
<li>Wine, juice, and beverage clarification</li>
<li>Chemical process decolorization</li>
</ul>

<h2>Packaging & Storage</h2>

<p>Standard packaging: 25 kg multi-layer paper bags with PE liner, 500 kg jumbo bags.<br>
Storage: Store in a dry, cool, well-ventilated warehouse. Prevent moisture absorption to maintain adsorption performance.<br>
Shelf life: 2 years in sealed original packaging.</p>
`
  },
  {
    slug: 'coconut-shell-pellet-activated-carbon',
    title: 'Coconut Shell Pellet Activated Carbon',
    introduction: 'Extruded pellet activated carbon from coconut shell material with uniform cylindrical shape, low dust generation, and excellent gas-phase adsorption performance. Designed for air purification, solvent recovery, and continuous-flow gas treatment systems.',
    content: `
<h2>Product Overview</h2>

<p>Coconut shell pellet activated carbon is produced by extruding fine coconut shell carbon powder with a food-grade binder into uniform cylindrical pellets, followed by high-temperature activation. The uniform shape provides consistent airflow distribution, low pressure drop, and minimal dust generation in fixed-bed gas-phase adsorption systems.</p>

<h2>Technical Specifications</h2>

<figure class="wp-block-table"><table class="has-fixed-layout"><tbody>
<tr><td><strong>Parameter</strong></td><td><strong>Value</strong></td></tr>
<tr><td>Iodine Number</td><td>800–1000 mg/g</td></tr>
<tr><td>Pellet Diameter</td><td>1.5 mm, 2.0 mm, 3.0 mm, 4.0 mm</td></tr>
<tr><td>CTC Activity</td><td>≥60%</td></tr>
<tr><td>Moisture</td><td>≤5%</td></tr>
<tr><td>Ash Content</td><td>≤8%</td></tr>
<tr><td>Hardness</td><td>≥95%</td></tr>
<tr><td>Bulk Density</td><td>0.45–0.55 g/cm³</td></tr>
</tbody></table></figure>

<h2>Key Advantages</h2>

<ul>
<li><strong>Uniform pellet shape</strong> — Consistent airflow and low pressure drop across fixed-bed adsorbers, improving system efficiency</li>
<li><strong>Low dust generation</strong> — Minimal fines during handling and operation, reducing downstream filter maintenance</li>
<li><strong>High CTC activity</strong> — Excellent performance for capturing volatile organic compounds (VOCs) and solvent vapors</li>
<li><strong>Superior mechanical strength</strong> — Withstands vibration and mechanical stress in industrial installations</li>
<li><strong>Multiple diameter options</strong> — Available in various pellet sizes to match specific equipment and airflow requirements</li>
</ul>

<h2>Applications</h2>

<ul>
<li>Indoor air purification and HVAC systems</li>
<li>Industrial gas treatment and odor control</li>
<li>Solvent recovery in printing and coating operations</li>
<li>Catalytic support and catalyst carrier</li>
<li>Respiratory protection filters and gas masks</li>
<li>Biogas and natural gas purification (H₂S removal)</li>
</ul>

<h2>Packaging & Storage</h2>

<p>Standard packaging: 25 kg PP woven bags, 500 kg jumbo bags, or carton boxes for small orders.<br>
Storage: Store in a dry, ventilated area away from sources of ignition and strong oxidizers.<br>
Shelf life: 3 years in sealed original packaging.</p>
`
  },
  {
    slug: 'coconut-shell-activated-carbon-for-gold-recovery',
    title: 'Gold Recovery Activated Carbon',
    introduction: 'Specialized coconut shell activated carbon engineered for gold adsorption in CIP, CIL, and CIC processes. Features high gold loading capacity, fast adsorption kinetics, superior hardness, and excellent elution performance for maximum gold recovery efficiency.',
    content: `
<h2>Product Overview</h2>

<p>Our gold recovery activated carbon is specifically engineered from carefully selected coconut shells for use in Carbon-in-Pulp (CIP), Carbon-in-Leach (CIL), and Carbon-in-Column (CIC) gold extraction processes. Through controlled activation, it achieves optimal pore size distribution for maximum gold-cyanide complex adsorption while maintaining the exceptional mechanical hardness required to withstand aggressive mining environments.</p>

<h2>Technical Specifications</h2>

<figure class="wp-block-table"><table class="has-fixed-layout"><tbody>
<tr><td><strong>Parameter</strong></td><td><strong>Value</strong></td></tr>
<tr><td>Iodine Number</td><td>1000–1200 mg/g</td></tr>
<tr><td>Particle Size</td><td>6×12, 6×16 mesh (standard)</td></tr>
<tr><td>Gold Adsorption Rate (K value)</td><td>≥70 mg Au/g carbon/hr</td></tr>
<tr><td>Gold Loading Capacity (R value)</td><td>≥25 mg Au/g carbon</td></tr>
<tr><td>Hardness</td><td>≥97%</td></tr>
<tr><td>Ash Content</td><td>≤3%</td></tr>
<tr><td>Moisture</td><td>≤5%</td></tr>
<tr><td>Ball-Pan Hardness</td><td>≥98%</td></tr>
<tr><td>Apparent Density</td><td>0.48–0.54 g/cm³</td></tr>
</tbody></table></figure>

<h2>Key Advantages</h2>

<ul>
<li><strong>High K value</strong> — Fast gold adsorption kinetics reduce required contact time and circuit inventory</li>
<li><strong>Superior R value</strong> — High gold loading capacity maximizes recovery per cycle and reduces carbon consumption</li>
<li><strong>Ultra-high hardness</strong> — >97% hardness minimizes carbon loss from attrition in agitated tanks and pumping systems</li>
<li><strong>Low ash content</strong> — <3% ash reduces interference with gold elution and ensures cleaner final product</li>
<li><strong>Excellent elution performance</strong> — Consistent gold stripping efficiency across multiple reactivation cycles</li>
</ul>

<h2>Applications</h2>

<ul>
<li>Carbon-in-Pulp (CIP) gold recovery circuits</li>
<li>Carbon-in-Leach (CIL) gold extraction</li>
<li>Carbon-in-Column (CIC) heap leach recovery</li>
<li>Silver recovery from cyanide solutions</li>
<li>Precious metal refining and hydrometallurgical processes</li>
</ul>

<h2>Packaging & Storage</h2>

<p>Standard packaging: 25 kg PP woven bags (inner PE liner), 1000 kg bulk bags.<br>
Storage: Store dry, away from moisture and contaminants. Pre-wet before use per standard mining practice.<br>
Shelf life: 3 years in sealed original packaging.</p>
`
  },
  {
    slug: 'silver-impregnated-activated-carbon',
    title: 'Silver Impregnated Activated Carbon',
    introduction: 'Coconut shell activated carbon impregnated with silver ions for enhanced bacteriostatic properties. Prevents bacterial growth within the carbon bed while maintaining excellent adsorption performance, ideal for point-of-use drinking water systems and medical-grade water purification.',
    content: `
<h2>Product Overview</h2>

<p>Silver impregnated activated carbon combines the superior adsorption performance of coconut shell activated carbon with the bacteriostatic properties of silver. Through a controlled impregnation process, silver ions are uniformly deposited onto the carbon surface, preventing bacterial colonization and biofilm formation within the filter media — a critical requirement for point-of-use drinking water systems and healthcare applications.</p>

<h2>Technical Specifications</h2>

<figure class="wp-block-table"><table class="has-fixed-layout"><tbody>
<tr><td><strong>Parameter</strong></td><td><strong>Value</strong></td></tr>
<tr><td>Iodine Number</td><td>900–1050 mg/g</td></tr>
<tr><td>Particle Size</td><td>8×30, 12×40, 20×50 mesh</td></tr>
<tr><td>Silver Content</td><td>0.03%–0.10% (customizable)</td></tr>
<tr><td>Moisture</td><td>≤5%</td></tr>
<tr><td>Ash Content</td><td>≤5%</td></tr>
<tr><td>Hardness</td><td>≥95%</td></tr>
<tr><td>pH</td><td>6–8</td></tr>
<tr><td>Silver Leaching</td><td>≤50 μg/L (meets WHO standard)</td></tr>
</tbody></table></figure>

<h2>Key Advantages</h2>

<ul>
<li><strong>Bacteriostatic performance</strong> — Silver ions inhibit bacterial growth, preventing biofilm formation within the carbon bed</li>
<li><strong>Safe silver levels</strong> — Silver leaching well below WHO drinking water guidelines (100 μg/L), ensuring safe treated water</li>
<li><strong>Dual-function media</strong> — Simultaneously removes chlorine, organics, taste, and odor while preventing microbial contamination</li>
<li><strong>Extended service life</strong> — Anti-bacterial properties maintain filter hygiene, extending replacement intervals</li>
<li><strong>Customizable silver content</strong> — Silver loading can be adjusted based on application requirements and regulatory standards</li>
</ul>

<h2>Applications</h2>

<ul>
<li>Point-of-use (POU) and point-of-entry (POE) drinking water filters</li>
<li>Water coolers, dispensers, and refrigerator filters</li>
<li>Medical and healthcare water purification systems</li>
<li>Swimming pool and spa water treatment</li>
<li>Emergency and portable water purification units</li>
<li>Food and beverage processing water</li>
</ul>

<h2>Certifications & Standards</h2>

<p>Available with NSF/ANSI 42 and 61 compliance testing. Silver content and leaching levels comply with WHO, EPA, and EU drinking water standards. COA and MSDS provided with every shipment.</p>

<h2>Packaging & Storage</h2>

<p>Standard packaging: 25 kg fiber drums or PP bags with inner PE liner, 500 kg bulk bags.<br>
Storage: Store in a cool, dry, dark place. Avoid contact with strong reducing agents.<br>
Shelf life: 2 years in sealed original packaging.</p>
`
  }
];

async function uploadImage(imagePath, productTitle) {
  const ext = path.extname(imagePath);
  const filename = path.basename(imagePath);
  const mimeTypes = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };
  const mimeType = mimeTypes[ext] || 'image/png';

  const imageBuffer = fs.readFileSync(imagePath);

  const res = await fetch(`${WP_API}/media`, {
    method: 'POST',
    headers: {
      'Authorization': auth,
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Type': mimeType,
    },
    body: imageBuffer,
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`  ❌ Image upload failed for ${filename}: ${err}`);
    return null;
  }

  const media = await res.json();
  console.log(`  📷 Uploaded ${filename} -> media id: ${media.id}`);
  return media.id;
}

async function createProduct(product, imageMap) {
  // Check if product already exists
  const checkRes = await fetch(`${WP_API}/product?slug=${product.slug}&_fields=id,slug`, {
    headers: { 'Authorization': auth }
  });
  const existing = await checkRes.json();

  if (existing.length > 0) {
    console.log(`  ⏩ Product "${product.title}" already exists (id: ${existing[0].id}), skipping...`);
    return existing[0].id;
  }

  // Find matching local image for featured image
  const imageKey = product.slug;
  const imagePath = imageMap[imageKey];
  let featuredMediaId = 0;

  if (imagePath && fs.existsSync(imagePath)) {
    featuredMediaId = await uploadImage(imagePath, product.title);
  }

  const body = {
    title: product.title,
    slug: product.slug,
    content: product.content.trim(),
    status: 'publish',
    'product-catalogs': [COCONUT_CATALOG_ID],
  };

  if (product.introduction) {
    body.acf = { introduction: product.introduction };
  }

  if (featuredMediaId) {
    body.featured_media = featuredMediaId;
  }

  const res = await fetch(`${WP_API}/product`, {
    method: 'POST',
    headers: {
      'Authorization': auth,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`  ❌ Failed to create "${product.title}": ${err}`);
    return null;
  }

  const created = await res.json();
  console.log(`  ✅ Created "${product.title}" (id: ${created.id}, slug: ${created.slug})`);
  return created.id;
}

async function main() {
  console.log('🥥 Creating Coconut Shell Activated Carbon products...\n');

  // Map product slugs to local image paths
  const imagesDir = path.join(__dirname, '../src/assets/images/products');
  const imageMap = {
    'coconut-shell-granular-activated-carbon': path.join(imagesDir, 'coconut-shell-granular-activated-carbon-supplier.png'),
    'coconut-shell-powdered-activated-carbon': path.join(imagesDir, 'coconut-shell-powdered-activated-carbon-supplier.png'),
    'coconut-shell-pellet-activated-carbon': path.join(imagesDir, 'coconut-shell-pellet-activated-carbon-supplier.png'),
    'coconut-shell-activated-carbon-for-gold-recovery': path.join(imagesDir, 'coconut-shell-gold-recovery-activated-carbon-supplier.png'),
    'silver-impregnated-activated-carbon': path.join(imagesDir, 'silver-impregnated-activated-carbon-supplier.png'),
  };

  for (const product of coconutProducts) {
    console.log(`\n📦 Processing: ${product.title}`);
    await createProduct(product, imageMap);
  }

  console.log('\n🎉 All coconut shell products created! Now run:');
  console.log('   npm run sync  (or node scripts/sync-wordpress.js)');
  console.log('   to sync data to local JSON files.');
}

main().catch(console.error);
