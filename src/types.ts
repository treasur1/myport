export type Currency = 'NGN' | 'USD';

export type GenderCategory = 'all' | 'mens' | 'womens' | 'kids' | 'unisex';

export type KitCategory = 'All' | 'Club' | 'National Team' | 'Retro' | 'Special Edition';

export type KitType = 'Home' | 'Away' | 'Third' | 'Special' | 'Retro' | 'Goalkeeper';

export type JerseyVersion = 'Fan Version' | 'Player Issue' | 'Retro Match' | 'Kids Full Set';

export interface JerseyProduct {
  id: string;
  name: string;
  clubOrCountry: string;
  league: string; // e.g. "Premier League", "La Liga", "Serie A", "International", "Retro Legends"
  season: string; // e.g. "2024/25", "1998/99"
  gender: 'mens' | 'womens' | 'kids' | 'unisex';
  category: 'Club' | 'National Team' | 'Retro' | 'Special Edition';
  kitType: KitType;
  primaryColor: string;
  priceNgn: number;
  priceUsd: number;
  originalPriceNgn?: number;
  originalPriceUsd?: number;
  badge?: 'Bestseller' | 'New Drop' | 'Limited Stock' | 'Player Issue' | 'Retro Gold' | 'Trending';
  image: string;
  alternateImages?: string[];
  description: string;
  features: string[];
  sizesAvailable: string[];
  defaultPlayerPrint?: {
    name: string;
    number: string;
  };
  popularPrints?: Array<{ name: string; number: string }>;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isPopular?: boolean;
  isNewArrival?: boolean;
}

export interface CartCustomization {
  version: JerseyVersion;
  size: string;
  hasCustomPrint: boolean;
  customName: string;
  customNumber: string;
  patch: string; // e.g. "UCL Starball + 15", "Premier League Gold Champions", "None"
}

export interface CartItem {
  cartItemId: string; // Unique hash/id for exact combination
  product: JerseyProduct;
  customization: CartCustomization;
  quantity: number;
  priceNgnPerUnit: number;
  priceUsdPerUnit: number;
  totalNgn: number;
  totalUsd: number;
}

export interface CustomerOrderDetails {
  fullName: string;
  phone: string;
  deliveryCity: string;
  deliveryAddress: string;
  additionalNotes?: string;
  paymentPreference: 'Bank Transfer' | 'WhatsApp Direct Inquiry' | 'Cash on Delivery (Lagos only)';
}

export interface FilterOptions {
  search: string;
  gender: GenderCategory;
  category: KitCategory;
  league: string;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
  onlyInStock: boolean;
}
