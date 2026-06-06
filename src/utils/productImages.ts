import { Product } from '@types/index';

/** Pexels CDN — reliable, free to hotlink */
export const pexels = (id: number, w = 400, h = 500) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

/** Always-loads placeholder with product label */
export const placeholder = (label: string, w = 400, h = 500) => {
  const text = encodeURIComponent(label.replace(/[^\w\s]/g, '').slice(0, 18) || 'Product');
  return `https://placehold.co/${w}x${h}/ec4899/ffffff?text=${text}`;
};

export const HERO_IMAGE = pexels(1926769, 800, 600);

export const FALLBACK_IMAGE = placeholder('Styla');

export const CATEGORY_FALLBACK_IMAGES: Record<Product['category'], string> = {
  Clothes: pexels(994523, 400, 500),
  Footwear: pexels(2529148, 400, 500),
  Beauty: pexels(253326, 400, 500),
};

export const getProductImageSources = (product: Product): string[] => {
  const sources = [product.image, ...(product.images ?? [])];
  sources.push(CATEGORY_FALLBACK_IMAGES[product.category]);
  sources.push(placeholder(product.name));
  return [...new Set(sources)];
};

export const getImageSources = (primary: string, label: string, category?: Product['category']): string[] => {
  const sources = [primary];
  if (category) sources.push(CATEGORY_FALLBACK_IMAGES[category]);
  sources.push(placeholder(label), FALLBACK_IMAGE);
  return [...new Set(sources)];
};
