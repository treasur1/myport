import React, { useState } from 'react';
import { ShoppingBag, Star, Sparkles, Check, Eye } from 'lucide-react';
import { Currency, JerseyProduct, JerseyVersion } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ProductCardProps {
  product: JerseyProduct;
  currency: Currency;
  onQuickAdd: (product: JerseyProduct, size: string, version: JerseyVersion) => void;
  onOpenQuickView: (product: JerseyProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onQuickAdd,
  onOpenQuickView,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizesAvailable[1] || product.sizesAvailable[0]);
  const [isAdded, setIsAdded] = useState(false);

  const price = currency === 'NGN' ? product.priceNgn : product.priceUsd;
  const originalPrice = currency === 'NGN' ? product.originalPriceNgn : product.originalPriceUsd;

  const handleQuickAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultVersion: JerseyVersion = product.gender === 'kids' ? 'Kids Full Set' : 'Fan Version';
    onQuickAdd(product, selectedSize, defaultVersion);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const getGenderBadge = () => {
    switch (product.gender) {
      case 'mens':
        return { label: "MEN'S", bg: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
      case 'womens':
        return { label: "WOMEN'S FIT", bg: 'bg-pink-500/20 text-pink-300 border-pink-500/30' };
      case 'kids':
        return { label: 'KIDS SET (TOP+SHORTS)', bg: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
      case 'unisex':
        return { label: 'UNISEX / RETRO', bg: 'bg-purple-500/20 text-purple-300 border-purple-500/30' };
    }
  };

  const genderBadge = getGenderBadge();

  return (
    <div
      onClick={() => onOpenQuickView(product)}
      className="group rounded-2xl sm:rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-lime-500/10 cursor-pointer"
    >
      <div>
        {/* Image Container with Hover zoom and badges */}
        <div className="relative h-60 sm:h-72 w-full bg-zinc-950 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent opacity-80" />

          {/* Top Left Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase border backdrop-blur-md ${genderBadge.bg}`}>
              {genderBadge.label}
            </span>

            {product.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-lime-400 text-black shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Top Right Quick View Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenQuickView(product);
            }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            title="Quick view & Customize"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Bottom Player Print suggestion overlay */}
          {product.defaultPlayerPrint && (
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300 bg-zinc-950/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 font-medium">Customizable:</span>
              <span className="font-athletic font-bold text-lime-300">
                {product.defaultPlayerPrint.name} #{product.defaultPlayerPrint.number}
              </span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-4 sm:p-5 space-y-3 text-left">
          {/* League & Season */}
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span className="font-semibold text-zinc-400">{product.league} • {product.season}</span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold text-xs text-white">{product.rating}</span>
              <span className="text-zinc-500 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-athletic text-lg sm:text-xl font-bold text-white tracking-wide leading-tight group-hover:text-lime-400 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Price Row */}
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-white font-display">
              {formatCurrency(price, currency)}
            </span>
            {originalPrice && (
              <span className="text-xs text-zinc-500 line-through">
                {formatCurrency(originalPrice, currency)}
              </span>
            )}
          </div>

          {/* Size Pills Selector */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[10px] font-bold text-zinc-400 uppercase">
              <span>Select Size:</span>
              <span className="text-lime-400 font-normal lowercase">fits true to size</span>
            </div>

            <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
              {product.sizesAvailable.slice(0, 5).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                    selectedSize === size
                      ? 'bg-lime-400 text-black shadow-sm font-black'
                      : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 border border-zinc-700'
                  }`}
                >
                  {size}
                </button>
              ))}
              {product.sizesAvailable.length > 5 && (
                <span className="px-1.5 py-1 text-[10px] text-zinc-500 self-center">
                  +{product.sizesAvailable.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={() => onOpenQuickView(product)}
          className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-lime-400" />
          <span>Customize</span>
        </button>

        <button
          type="button"
          onClick={handleQuickAddToCart}
          className={`py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow-md ${
            isAdded
              ? 'bg-emerald-500 text-black'
              : 'bg-lime-400 hover:bg-lime-300 text-black shadow-lime-400/20'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
