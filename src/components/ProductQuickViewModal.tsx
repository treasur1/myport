import React, { useState } from 'react';
import { X, Check, Star, Sparkles, Shield, ShoppingBag, Shirt, Info } from 'lucide-react';
import { Currency, JerseyProduct, JerseyVersion, CartCustomization } from '../types';
import {
  AVAILABLE_PATCHES,
  CUSTOM_PRINTING_PRICE_NGN,
  CUSTOM_PRINTING_PRICE_USD,
  PLAYER_ISSUE_UPGRADE_NGN,
  PLAYER_ISSUE_UPGRADE_USD,
} from '../data/jerseys';
import { formatCurrency } from '../utils/formatters';

interface ProductQuickViewModalProps {
  product: JerseyProduct | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
  onAddToCartWithCustomization: (
    product: JerseyProduct,
    customization: CartCustomization,
    quantity: number
  ) => void;
  onOpenSizeGuide: () => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  currency,
  isOpen,
  onClose,
  onAddToCartWithCustomization,
  onOpenSizeGuide,
}) => {
  if (!isOpen || !product) return null;

  const defaultVersion: JerseyVersion = product.gender === 'kids' ? 'Kids Full Set' : 'Fan Version';

  const [selectedSize, setSelectedSize] = useState<string>(product.sizesAvailable[1] || product.sizesAvailable[0]);
  const [selectedVersion, setSelectedVersion] = useState<JerseyVersion>(defaultVersion);
  const [hasCustomPrint, setHasCustomPrint] = useState<boolean>(false);
  const [customName, setCustomName] = useState<string>(product.defaultPlayerPrint?.name || '');
  const [customNumber, setCustomNumber] = useState<string>(product.defaultPlayerPrint?.number || '10');
  const [selectedPatch, setSelectedPatch] = useState<string>(AVAILABLE_PATCHES[0].name);
  const [quantity, setQuantity] = useState<number>(1);
  const [previewMode, setPreviewMode] = useState<'front' | 'back'>('front');

  // Calculate live dynamic price
  const basePrice = currency === 'NGN' ? product.priceNgn : product.priceUsd;
  const versionExtra = selectedVersion === 'Player Issue'
    ? (currency === 'NGN' ? PLAYER_ISSUE_UPGRADE_NGN : PLAYER_ISSUE_UPGRADE_USD)
    : 0;
  const printExtra = (hasCustomPrint && customName.trim().length > 0)
    ? (currency === 'NGN' ? CUSTOM_PRINTING_PRICE_NGN : CUSTOM_PRINTING_PRICE_USD)
    : 0;

  const activePatchObj = AVAILABLE_PATCHES.find((p) => p.name === selectedPatch);
  const patchExtra = activePatchObj
    ? (currency === 'NGN' ? activePatchObj.priceNgn : activePatchObj.priceUsd)
    : 0;

  const unitPrice = basePrice + versionExtra + printExtra + patchExtra;
  const totalPrice = unitPrice * quantity;

  const handleApplyPreset = (name: string, num: string) => {
    setHasCustomPrint(true);
    setCustomName(name);
    setCustomNumber(num);
    setPreviewMode('back');
  };

  const handleAddToCart = () => {
    const customization: CartCustomization = {
      version: selectedVersion,
      size: selectedSize,
      hasCustomPrint: hasCustomPrint && customName.trim().length > 0,
      customName: hasCustomPrint ? customName.trim().toUpperCase() : '',
      customNumber: hasCustomPrint ? customNumber.trim() : '',
      patch: selectedPatch,
    };

    onAddToCartWithCustomization(product, customization, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-700 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Visual Showcase & Live Jersey Back Preview */}
          <div className="md:col-span-5 bg-zinc-950 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800">
            
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={() => setPreviewMode('front')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  previewMode === 'front'
                    ? 'bg-lime-400 text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                Front View
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode('back')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  previewMode === 'back'
                    ? 'bg-lime-400 text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Back Print Preview</span>
              </button>
            </div>

            {/* Visual Screen */}
            <div className="relative h-72 sm:h-96 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
              {previewMode === 'front' ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Interactive Jersey Back Customizer Canvas Mockup */
                <div className="w-full h-full bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 p-6 flex flex-col items-center justify-center relative select-none">
                  {/* Subtle athletic pattern lines */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a3e635_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Jersey Collar curve */}
                  <div className="w-32 h-6 border-b-2 border-zinc-700 rounded-b-full mb-4" />

                  {/* Printed Name in Authentic Kit Font */}
                  <div className="font-athletic text-2xl sm:text-3xl font-black text-lime-400 tracking-[0.25em] uppercase text-center drop-shadow-md z-10">
                    {hasCustomPrint && customName.trim() ? customName.toUpperCase() : 'YOUR NAME'}
                  </div>

                  {/* Printed Number */}
                  <div className="font-athletic text-7xl sm:text-8xl font-black text-white tracking-tight text-center my-1 drop-shadow-2xl z-10">
                    {hasCustomPrint && customNumber.trim() ? customNumber : '10'}
                  </div>

                  {/* Selected Patch & Authenticity detail */}
                  <div className="mt-2 text-center z-10">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest bg-zinc-900/90 px-3 py-1 rounded-full border border-zinc-800">
                      {selectedPatch !== 'No Sleeve Patch' ? selectedPatch : 'OFFICIAL MATCH FABRIC'}
                    </span>
                  </div>

                  {/* Watermark */}
                  <span className="absolute bottom-2 font-athletic text-zinc-700 text-xs font-bold tracking-widest">
                    FLUXX FC AUTHENTIC PRINT
                  </span>
                </div>
              )}
            </div>

            {/* Quick Guarantees */}
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-around text-xs text-zinc-400 text-center">
              <div>
                <span className="block font-bold text-white">100% Breathable</span>
                <span className="text-[10px] text-zinc-500">Dri-FIT Technology</span>
              </div>
              <div className="h-6 w-px bg-zinc-800" />
              <div>
                <span className="block font-bold text-white">Heat-Pressed</span>
                <span className="text-[10px] text-zinc-500">Vinyl Custom Print</span>
              </div>
            </div>

          </div>

          {/* Right Column: Customization Controls & Add To Cart */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 text-left">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs text-zinc-400 font-semibold">
                <span className="text-lime-400 font-bold uppercase">{product.clubOrCountry}</span>
                <span>•</span>
                <span>{product.season}</span>
                <span>•</span>
                <span className="capitalize">{product.gender}</span>
              </div>

              <h2 className="font-athletic text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {product.name}
              </h2>

              {/* Price & Rating */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-white font-display">
                    {formatCurrency(unitPrice, currency)}
                  </span>
                  {(versionExtra > 0 || printExtra > 0 || patchExtra > 0) && (
                    <span className="text-xs text-lime-400 font-semibold">
                      (Includes selected customizations)
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-zinc-800/60 px-2.5 py-1 rounded-full border border-zinc-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-bold text-white">{product.rating}</span>
                  <span className="text-zinc-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Version Option Selector */}
            {product.gender !== 'kids' && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  Select Jersey Version:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedVersion('Fan Version')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedVersion === 'Fan Version'
                        ? 'bg-lime-400/10 border-lime-400 text-white shadow-sm'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Fan Version</span>
                      {selectedVersion === 'Fan Version' && <Check className="w-3.5 h-3.5 text-lime-400" />}
                    </div>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">Standard fit, embroidered badges</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedVersion('Player Issue')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedVersion === 'Player Issue'
                        ? 'bg-lime-400/10 border-lime-400 text-white shadow-sm'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Authentic Player Issue</span>
                      <span className="text-[10px] font-black text-lime-400">
                        +{formatCurrency(currency === 'NGN' ? PLAYER_ISSUE_UPGRADE_NGN : PLAYER_ISSUE_UPGRADE_USD, currency)}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">Athletic slim cut, heat-pressed crest</span>
                  </button>
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  Select Size ({selectedSize}):
                </label>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="text-xs text-lime-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Size Chart</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.sizesAvailable.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedSize === size
                        ? 'bg-lime-400 text-black shadow-md font-black scale-105'
                        : 'bg-zinc-950 border border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Print Section (Live Name & Number) */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shirt className="w-4 h-4 text-lime-400" />
                  <span className="text-xs font-bold text-white">Custom Player Name & Number Print</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setHasCustomPrint(!hasCustomPrint);
                    if (!hasCustomPrint) setPreviewMode('back');
                  }}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase transition-all ${
                    hasCustomPrint
                      ? 'bg-lime-400 text-black'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {hasCustomPrint ? '✓ Print Active (+ ' + formatCurrency(currency === 'NGN' ? CUSTOM_PRINTING_PRICE_NGN : CUSTOM_PRINTING_PRICE_USD, currency) + ')' : '+ Add Print'}
                </button>
              </div>

              {hasCustomPrint && (
                <div className="space-y-3 pt-2">
                  {/* Preset Stars */}
                  {product.popularPrints && product.popularPrints.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase">Quick Star Presets:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.popularPrints.map((preset) => (
                          <button
                            key={preset.name}
                            type="button"
                            onClick={() => handleApplyPreset(preset.name, preset.number)}
                            className="px-2 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[11px] text-zinc-200 font-bold hover:border-lime-400"
                          >
                            {preset.name} #{preset.number}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Custom Inputs */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                      <label className="block text-[10px] text-zinc-400 font-semibold mb-1">NAME ON BACK</label>
                      <input
                        type="text"
                        maxLength={14}
                        placeholder="e.g. MBAPPÉ or YOUR NAME"
                        value={customName}
                        onChange={(e) => {
                          setCustomName(e.target.value);
                          setPreviewMode('back');
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-athletic font-bold uppercase text-sm tracking-wider focus:outline-none focus:border-lime-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-zinc-400 font-semibold mb-1">NUMBER</label>
                      <input
                        type="text"
                        maxLength={2}
                        placeholder="10"
                        value={customNumber}
                        onChange={(e) => {
                          setCustomNumber(e.target.value.replace(/[^0-9]/g, ''));
                          setPreviewMode('back');
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-athletic font-black text-sm text-center focus:outline-none focus:border-lime-400"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sleeve Patches Option */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                Official Sleeve Patch:
              </label>
              <select
                value={selectedPatch}
                onChange={(e) => setSelectedPatch(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-lime-400"
              >
                {AVAILABLE_PATCHES.map((patch) => {
                  const extra = currency === 'NGN' ? patch.priceNgn : patch.priceUsd;
                  return (
                    <option key={patch.id} value={patch.name}>
                      {patch.name} {extra > 0 ? `(+${formatCurrency(extra, currency)})` : ''}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Quantity and Final Add To Cart */}
            <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
              
              {/* Quantity Counter */}
              <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl p-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-zinc-900 text-white font-bold flex items-center justify-center hover:bg-zinc-800"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-bold text-white font-display">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-zinc-900 text-white font-bold flex items-center justify-center hover:bg-zinc-800"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Submit Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 hover:from-lime-300 hover:to-emerald-300 text-black font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 active:scale-[0.99] transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add {quantity} to Cart • {formatCurrency(totalPrice, currency)}</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
