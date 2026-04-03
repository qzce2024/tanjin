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

  const imports = [];
  const mappings = [];

  for (const product of products) {
    const imageUrl = product._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    if (imageUrl) {
      const ext = path.extname(new URL(imageUrl).pathname);
      const imagePath = path.join(__dirname, '../src/assets/images/products/wordpress', `${product.slug}${ext}`);

      console.log(`  ⬇️  ${product.slug}${ext}`);
      await downloadImage(imageUrl, imagePath);

      // 生成导入和映射
      const varName = product.slug.replace(/-/g, '_');
      imports.push(`import ${varName} from '../assets/images/products/wordpress/${product.slug}${ext}';`);
      mappings.push(`  '${product.slug}': ${varName},`);
    }

    // 下载内容中的图片并替换所有WordPress链接
    if (product.content?.rendered) {
      let updatedContent = product.content.rendered;
      const imgRegex = /<img[^>]+src="([^"]+)"/g;
      let match;

      while ((match = imgRegex.exec(product.content.rendered)) !== null) {
        const contentImgUrl = match[1];
        if (contentImgUrl.includes('file.goldcarbon.net')) {
          const ext = path.extname(new URL(contentImgUrl).pathname);
          const filename = `${product.slug}-content-${Date.now()}${ext}`;
          const contentImgPath = path.join(__dirname, '../public/images/products', filename);

          console.log(`    📷 ${filename}`);
          await downloadImage(contentImgUrl, contentImgPath);

          updatedContent = updatedContent.replace(contentImgUrl, `/images/products/${filename}`);
        }
      }

      // 移除所有srcset属性（包含WordPress链接）
      updatedContent = updatedContent.replace(/\s+srcset="[^"]*"/g, '');

      product.content.rendered = updatedContent;
    }
  }

  // 生成product-images.ts
  const content = `${imports.join('\n')}\n\nexport const productImages: Record<string, any> = {\n${mappings.join('\n')}\n};\n`;
  const outputPath = path.join(__dirname, '../src/lib/product-images.ts');
  fs.writeFileSync(outputPath, content);

  // 保存产品数据（包含更新后的内容）
  const productsDataPath = path.join(__dirname, '../src/lib/products-data.json');
  fs.writeFileSync(productsDataPath, JSON.stringify(products, null, 2));

  console.log('✅ Products sync complete!');
}

async function syncPosts() {
  console.log('📥 Syncing blog posts from WordPress...');

  const response = await fetch(`${WP_API}/posts?per_page=100&_embed`);
  const posts = await response.json();

  const imports = [];
  const mappings = [];

  for (const post of posts) {
    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    if (imageUrl) {
      const ext = path.extname(new URL(imageUrl).pathname);
      const imagePath = path.join(__dirname, '../src/assets/images/blog/posts', `${post.slug}${ext}`);

      console.log(`  ⬇️  ${post.slug}${ext}`);
      await downloadImage(imageUrl, imagePath);

      const varName = post.slug.replace(/-/g, '_');
      imports.push(`import ${varName} from '../assets/images/blog/posts/${post.slug}${ext}';`);
      mappings.push(`  '${post.slug}': ${varName},`);
    }

    if (post.content?.rendered) {
      let updatedContent = post.content.rendered;
      const imgRegex = /<img[^>]+src="([^"]+)"/g;
      let match;

      while ((match = imgRegex.exec(post.content.rendered)) !== null) {
        const contentImgUrl = match[1];
        if (contentImgUrl.includes('file.goldcarbon.net')) {
          const ext = path.extname(new URL(contentImgUrl).pathname);
          const filename = `${post.slug}-content-${Date.now()}${ext}`;
          const contentImgPath = path.join(__dirname, '../public/images/blog', filename);

          console.log(`    📷 ${filename}`);
          await downloadImage(contentImgUrl, contentImgPath);

          updatedContent = updatedContent.replace(contentImgUrl, `/images/blog/${filename}`);
        }
      }

      updatedContent = updatedContent.replace(/\s+srcset="[^"]*"/g, '');
      post.content.rendered = updatedContent;
    }
  }

  const content = `${imports.join('\n')}\n\nexport const postImages: Record<string, any> = {\n${mappings.join('\n')}\n};\n`;
  const outputPath = path.join(__dirname, '../src/lib/post-images.ts');
  fs.writeFileSync(outputPath, content);

  const postsDataPath = path.join(__dirname, '../src/lib/posts-data.json');
  fs.writeFileSync(postsDataPath, JSON.stringify(posts, null, 2));

  console.log('✅ Posts sync complete!');
}

async function syncCatalogs() {
  console.log('📥 Syncing product catalogs from WordPress...');

  const response = await fetch(`${WP_API}/product-catalogs?per_page=100`);
  const catalogs = await response.json();

  const catalogsDataPath = path.join(__dirname, '../src/lib/product-catalogs-data.json');
  fs.writeFileSync(catalogsDataPath, JSON.stringify(catalogs, null, 2));

  console.log(`✅ Catalogs sync complete! (${catalogs.length} catalogs)`);
}

async function sync() {
  await syncCatalogs();
  await syncProducts();
  await syncPosts();
}

sync().catch(console.error);
