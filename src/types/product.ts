export type ProductId = "salt" | "tea" | "detergent-powder" | "detergent-liquid";

export interface Product {
  id: ProductId;
  name: string;
  size: string;
  price: number;
  /** Route slug for the (future) product detail page */
  slug: string;
  /** Short tagline pulled from the packaging design */
  tagline: string;
}

export const products: Product[] = [
  {
    id: "salt",
    name: "Food Salt",
    size: "1kg",
    price: 50,
    slug: "salt",
    tagline: "Premium refined & iodized",
  },
  {
    id: "tea",
    name: "Tea Powder",
    size: "250g",
    price: 120,
    slug: "tea",
    tagline: "Antioxidant-rich health & vitality blend",
  },
  {
    id: "detergent-powder",
    name: "Detergent Powder",
    size: "100g",
    price: 10,
    slug: "detergent-powder",
    tagline: "Tough on stains, gentle on clothes",
  },
  {
    id: "detergent-liquid",
    name: "Detergent Liquid",
    size: "100ml",
    price: 10,
    slug: "detergent-liquid",
    tagline: "Quick wash formula, effortless clean",
  },
];

/** 
 * Helper: Find a product by its slug. 
 * Useful for dynamic routes like /products/:slug 
 */
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

/** 
 * Helper: Formats price to Indian Rupee format 
 */
export const formatCurrency = (price: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};