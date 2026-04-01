import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WP_API = 'https://file.goldcarbon.net/wp-json/wp/v2';

async function downloadImage(url, filepath) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, Buffer.from(buffer));
}

async function syncProducts() {
  console.log('📥 Syncing products from WordPress...');

  const response = await fetch(`${WP_API}/product?per_page=100&_embed`);
  const products = await response.json();

  for (const product of products) {
    const imageUrl = product._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    if (imageUrl) {
      const ext = path.extname(new URL(imageUrl).pathname);
      const imagePath = path.join(__dirname, '../src/assets/images/products/wordpress', `${product.slug}${ext}`);

      console.log(`  ⬇️  ${product.slug}${ext}`);
      await downloadImage(imageUrl, imagePath);
    }
  }

  console.log('✅ Sync complete!');
}

syncProducts().catch(console.error);
