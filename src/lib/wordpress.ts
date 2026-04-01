const WP_API = 'https://file.goldcarbon.net/wp-json/wp/v2';

export interface WPProduct {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  acf?: {
    introduction?: string;
    [key: string]: any;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

async function fetchWP(url: string) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Astro' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  } catch (error) {
    console.error('WordPress API Error:', error);
    return [];
  }
}

export async function getProducts(): Promise<WPProduct[]> {
  return fetchWP(`${WP_API}/product?per_page=100&_embed`);
}

export async function getProductBySlug(slug: string): Promise<WPProduct | null> {
  const posts = await fetchWP(`${WP_API}/product?slug=${slug}&_embed`);
  return posts[0] || null;
}
