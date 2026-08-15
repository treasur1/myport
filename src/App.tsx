import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppCheckoutModal } from './components/WhatsAppCheckoutModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { WhyChooseFluxx } from './components/WhyChooseFluxx';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';

import {
  Currency,
  GenderCategory,
  KitCategory,
  JerseyProduct,
  JerseyVersion,
  CartItem,
  CartCustomization,
} from './types';
import {
  JERSEYS_DATA,
  WHATSAPP_NUMBER,
  WHATSAPP_FORMATTED,
  CUSTOM_PRINTING_PRICE_NGN,
  CUSTOM_PRINTING_PRICE_USD,
  PLAYER_ISSUE_UPGRADE_NGN,
  PLAYER_ISSUE_UPGRADE_USD,
  AVAILABLE_PATCHES,
} from './data/jerseys';
import { generateCartItemId, formatCurrency } from './utils/formatters';
import { Filter, SlidersHorizontal, ShoppingBag, Sparkles, MessageCircle, X, Check } from 'lucide-react';

export default function App() {

  // 1. Currency State (persisted in localStorage)
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('fluxx_currency');
    return (saved === 'USD' || saved === 'NGN') ? saved : 'NGN';
  });

  useEffect(() => {
    localStorage.setItem('fluxx_currency', currency);
  }, [currency]);

  // 2. Cart State (persisted in localStorage)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('fluxx_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('fluxx_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart', e);
    }
  }, [cartItems]);

  // 3. Filter & Search State
  const [selectedGender, setSelectedGender] = useState<GenderCategory>('all');
  const [selectedCategory, setSelectedCategory] = useState<KitCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  // 4. Modal & Drawer States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<JerseyProduct | null>(null);

  // 5. Toast Notification
  const [toastMessage, setToastMessage] = useState<{ title: string; subtitle: string } | null>(null);

  const catalogRef = useRef<HTMLDivElement>(null);

  const scrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to add item to cart
  const handleAddToCartWithCustomization = (
    product: JerseyProduct,
    customization: CartCustomization,
    quantity: number
  ) => {
    // Calculate unit prices for NGN and USD
    const baseNgn = product.priceNgn;
    const baseUsd = product.priceUsd;

    const versionNgn = customization.version === 'Player Issue' ? PLAYER_ISSUE_UPGRADE_NGN : 0;
    const versionUsd = customization.version === 'Player Issue' ? PLAYER_ISSUE_UPGRADE_USD : 0;

    const printNgn = customization.hasCustomPrint ? CUSTOM_PRINTING_PRICE_NGN : 0;
    const printUsd = customization.hasCustomPrint ? CUSTOM_PRINTING_PRICE_USD : 0;

    const patchObj = AVAILABLE_PATCHES.find((p) => p.name === customization.patch);
    const patchNgn = patchObj ? patchObj.priceNgn : 0;
    const patchUsd = patchObj ? patchObj.priceUsd : 0;

    const unitPriceNgn = baseNgn + versionNgn + printNgn + patchNgn;
    const unitPriceUsd = baseUsd + versionUsd + printUsd + patchUsd;

    const cartItemId = generateCartItemId(
      product.id,
      customization.size,
      customization.version,
      customization.customName,
      customization.customNumber,
      customization.patch
    );

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalNgn: updated[existingIndex].priceNgnPerUnit * newQty,
          totalUsd: updated[existingIndex].priceUsdPerUnit * newQty,
        };
        return updated;
      } else {
        const newItem: CartItem = {
          cartItemId,
          product,
          customization,
          quantity,
          priceNgnPerUnit: unitPriceNgn,
          priceUsdPerUnit: unitPriceUsd,
          totalNgn: unitPriceNgn * quantity,
          totalUsd: unitPriceUsd * quantity,
        };
        return [...prev, newItem];
      }
    });

    // Show toast
    setToastMessage({
      title: `${product.name} Added!`,
      subtitle: `Size ${customization.size} • ${customization.version}${customization.hasCustomPrint ? ` • Print: ${customization.customName}` : ''}`,
    });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Quick Add handler (uses standard default options)
  const handleQuickAdd = (product: JerseyProduct, size: string, version: JerseyVersion) => {
    const customization: CartCustomization = {
      version,
      size,
      hasCustomPrint: false,
      customName: '',
      customNumber: '',
      patch: 'No Sleeve Patch',
    };
    handleAddToCartWithCustomization(product, customization, 1);
  };

  // Cart operations
  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartItemId === cartItemId) {
          return {
            ...item,
            quantity: newQuantity,
            totalNgn: item.priceNgnPerUnit * newQuantity,
            totalUsd: item.priceUsdPerUnit * newQuantity,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleProceedToWhatsApp = () => {
    setIsCartOpen(false);
    setIsWhatsAppModalOpen(true);
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return JERSEYS_DATA.filter((jersey) => {
      // Gender filter
      if (selectedGender !== 'all' && jersey.gender !== selectedGender) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'All' && jersey.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = jersey.name.toLowerCase().includes(q);
        const matchesClub = jersey.clubOrCountry.toLowerCase().includes(q);
        const matchesLeague = jersey.league.toLowerCase().includes(q);
        const matchesDescription = jersey.description.toLowerCase().includes(q);
        const matchesPlayer = jersey.popularPrints?.some((p) => p.name.toLowerCase().includes(q));
        if (!matchesName && !matchesClub && !matchesLeague && !matchesDescription && !matchesPlayer) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        const pA = currency === 'NGN' ? a.priceNgn : a.priceUsd;
        const pB = currency === 'NGN' ? b.priceNgn : b.priceUsd;
        return pA - pB;
      }
      if (sortBy === 'price-high') {
        const pA = currency === 'NGN' ? a.priceNgn : a.priceUsd;
        const pB = currency === 'NGN' ? b.priceNgn : b.priceUsd;
        return pB - pA;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0; // featured default
    });
  }, [selectedGender, selectedCategory, searchQuery, sortBy, currency]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans">
      
      {/* 1. Global Navigation */}
      <Navbar
        currency={currency}
        onToggleCurrency={setCurrency}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        selectedGender={selectedGender}
        onSelectGender={(g) => {
          setSelectedGender(g);
          scrollToCatalog();
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* 2. Hero Showcase */}
      <HeroBanner
        currency={currency}
        onSelectCategory={(g) => {
          setSelectedGender(g);
        }}
        onScrollToCatalog={scrollToCatalog}
      />

      {/* 3. Main Catalog Section */}
      <main ref={catalogRef} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        
        {/* Filter Bar Header */}
        <div className="space-y-4">
          
          {/* Main Title Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left border-b border-zinc-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-lime-400 mb-1 tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL FLUXX FC STORE CATALOG</span>
              </div>
              <h2 className="font-athletic text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {selectedGender === 'all' && 'ALL FOOTBALL JERSEYS & KITS'}
                {selectedGender === 'mens' && "MEN'S CLUB & NATIONAL TEAM KITS"}
                {selectedGender === 'womens' && "WOMEN'S FIT TAILORED JERSEYS"}
                {selectedGender === 'kids' && 'KIDS FULL KITS (JERSEY + SHORTS)'}
                {selectedGender === 'unisex' && 'UNISEX & ICONIC RETRO CLASSICS'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Showing {filteredProducts.length} premium kits • Prices displayed in <strong className="text-white">{currency === 'NGN' ? '₦ Nigerian Naira (NGN)' : '$ US Dollars (USD)'}</strong>
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-start md:self-end">
              <span className="text-xs font-bold text-zinc-400 whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-bold focus:outline-none focus:border-lime-400"
              >
                <option value="featured">Featured / Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated (5★)</option>
              </select>
            </div>
          </div>

          {/* Category Tabs and Gender Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Gender Filters */}
            <div className="flex items-center overflow-x-auto pb-1 sm:pb-0 gap-1.5 scrollbar-none">
              {(
                [
                  { id: 'all', label: 'All Gender Kits' },
                  { id: 'mens', label: "Men's" },
                  { id: 'womens', label: "Women's Fit" },
                  { id: 'kids', label: "Kids Sets" },
                  { id: 'unisex', label: "Retro & Unisex" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedGender(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedGender === tab.id
                      ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sub-Category Pills (Club, National, Retro, Special) */}
            <div className="flex items-center overflow-x-auto pb-1 sm:pb-0 gap-1.5 text-xs">
              {(['All', 'Club', 'National Team', 'Retro', 'Special Edition'] as KitCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-zinc-800 text-lime-400 border border-lime-500/40'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 rounded-3xl bg-zinc-950 border border-zinc-800 p-8">
            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">No Football Kits Match Your Filter</h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                Try searching for a different club, player name, or clearing active filters.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedGender('all');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-lime-400 text-black font-bold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onQuickAdd={handleQuickAdd}
                onOpenQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        )}

      </main>

      {/* 4. Value Propositions Section */}
      <WhyChooseFluxx />

      {/* 5. Customer Reviews Section */}
      <ReviewsSection />

      {/* 6. Footer */}
      <Footer
        currency={currency}
        onToggleCurrency={setCurrency}
        onSelectCategory={(g) => {
          setSelectedGender(g);
          scrollToCatalog();
        }}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* 7. Quick View & Customizer Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        currency={currency}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCartWithCustomization={handleAddToCartWithCustomization}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* 8. Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        currency={currency}
        onToggleCurrency={setCurrency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToWhatsAppCheckout={handleProceedToWhatsApp}
      />

      {/* 9. WhatsApp Checkout Confirmation Modal */}
      <WhatsAppCheckoutModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        items={cartItems}
        currency={currency}
        onClearCartAfterOrder={() => {
          // Keep items or optionally retain cart
        }}
      />

      {/* 10. Size Guide Chart Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* 11. Floating Quick Action WhatsApp & Cart Bar for Mobile */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Direct WhatsApp Floating Icon */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20FLUXX%20FC,%20I%20want%20to%20inquire%20about%20football%20jerseys.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all"
          title="Chat with FLUXX FC on WhatsApp (2349015010957)"
        >
          <MessageCircle className="w-6 h-6 fill-black text-black" />
        </a>

        {/* Floating Cart Trigger if items present */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs shadow-2xl shadow-lime-400/40 hover:scale-105 active:scale-95 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-athletic text-sm">{totalCartCount} KITS</span>
          </button>
        )}
      </div>

      {/* 12. Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-2xl bg-zinc-900 border border-lime-400/60 shadow-2xl flex items-center gap-3 animate-fade-in">
          <div className="w-8 h-8 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div className="text-left">
            <h4 className="text-xs font-bold text-white leading-tight">{toastMessage.title}</h4>
            <p className="text-[11px] text-zinc-400">{toastMessage.subtitle}</p>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 px-3 py-1.5 rounded-lg bg-lime-400 text-black font-black text-xs hover:bg-lime-300 transition-colors"
          >
            View Cart
          </button>
        </div>
      )}

    </div>
  );
}
