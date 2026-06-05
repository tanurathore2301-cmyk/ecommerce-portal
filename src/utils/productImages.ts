import { Product } from '@types/index';

export const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial,sans-serif' font-size='22'%3EImage unavailable%3C/text%3E%3C/svg%3E";

/** Generic fallbacks only used when a product image fails — not shared with any product primary image */
export const CATEGORY_FALLBACK_IMAGES: Record<Product['category'], string> = {
  Clothes: FALLBACK_IMAGE,
  Footwear: FALLBACK_IMAGE,
  Beauty: FALLBACK_IMAGE,
};

export const getProductImageSources = (product: Product): string[] => {
  const sources = [product.image, ...(product.images ?? [])];
  sources.push(CATEGORY_FALLBACK_IMAGES[product.category], FALLBACK_IMAGE);
  return [...new Set(sources)];
};
