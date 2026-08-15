import React, { useState } from 'react';
import { ShoppingBag, Search, Shield, X, MessageCircle, Menu } from 'lucide-react';
import { Currency, GenderCategory } from '../types';
import { WHATSAPP_NUMBER } from '../data/jerseys';

interface NavbarProps {
  currency: Currency;
  onToggleCurrency: (currency: Currency) => void;
  cartCount: number;
  onOpenCart: () => void;
  selectedGender: GenderCategory;
  onSelectGender: (gender: GenderCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenSizeGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onToggleCurrency,
  cartCount,
  onOpenCart,
  selectedGender,
  onSelectGender,
  searchQuery,
  onSearchChange,
  onOpenSizeGuide,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories: { id: GenderCategory; label: string }[] = [
    { id: 'all', label: 'All Kits' },
    { id: 'mens', label: "Men's" },
    { id: 'womens', label: "Women's" },
    { id: 'kids', label: "Kids / Sets" },
    { id: 'unisex', label: "Unisex & Retro" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      {/* Top Ticker / Notice Bar */}
      <div className="bg-gradient-to-r from-zinc-900 via-lime-950/40 to-zinc-900 border-b border-zinc-800/50 py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 text-zinc-300 mx-auto sm:mx-0">
            <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="font-semibold text-white">⚡ NEW 24/25 KITS & RETRO CLASSICS IN STOCK</span>
            <span className="hidden md:inline text-zinc-400">• Free player name & number custom print option</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-zinc-400">
            <button
              onClick={onOpenSizeGuide}
              className="hover:text-lime-400 transition-colors underline decoration-dotted"
            >
              Size Chart Guide
            </button>
            <span>•</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20FLUXX%20FC,%20I%20have%20an%20inquiry%20about%20your%20jerseys.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +234 901 501 0957</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Crest & Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                onSelectGender('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-500 p-[1.5px] shadow-lg shadow-lime-500/20 group-hover:shadow-lime-500/40 transition-all">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-lime-400 fill-lime-400/20" />
                </div>
              </div>
              <div>
                <span className="font-athletic text-2xl sm:text-3xl font-black tracking-wider text-white flex items-center gap-1.5 leading-none">
                  FLUXX <span className="text-lime-400">FC</span>
                </span>
                <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-bold block">
                  Quality Match & Fan Kits
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Categories */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800">
            {categories.map((cat) => {
              const active = selectedGender === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectGender(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    active
                      ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Currency Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Search Input on Desktop */}
            <div className="hidden sm:flex items-center relative">
              <input
                type="text"
                placeholder="Search team, player, retro..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-48 lg:w-64 pl-9 pr-8 py-2 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 text-zinc-500 hover:text-zinc-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="sm:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Currency Switcher Toggle */}
            <div className="flex items-center bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
              <button
                onClick={() => onToggleCurrency('NGN')}
                className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all ${
                  currency === 'NGN'
                    ? 'bg-lime-400 text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Switch to Nigerian Naira (₦)"
              >
                ₦ NGN
              </button>
              <button
                onClick={() => onToggleCurrency('USD')}
                className={`px-2.5 py-1 rounded-lg text-xs font-extrabold transition-all ${
                  currency === 'USD'
                    ? 'bg-lime-400 text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Switch to US Dollars ($)"
              >
                $ USD
              </button>
            </div>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              id="open-cart-button"
              className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-lime-400/20 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-athletic text-base tracking-wider">CART</span>
              <span className="w-5 h-5 rounded-full bg-black text-lime-400 text-[11px] font-black flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="sm:hidden pb-3 pt-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jerseys (e.g. Madrid, Saka, 1994...)"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                autoFocus
                className="w-full pl-9 pr-8 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-3 text-zinc-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-800 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => {
                const active = selectedGender === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectGender(cat.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left transition-all ${
                      active
                        ? 'bg-lime-400 text-black font-extrabold'
                        : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-zinc-400">
              <button
                onClick={() => {
                  onOpenSizeGuide();
                  setIsMobileMenuOpen(false);
                }}
                className="text-lime-400 underline font-semibold"
              >
                Size Guide Chart
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-semibold"
              >
                WhatsApp DM: 2349015010957
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
