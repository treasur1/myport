import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { CartItem, Currency } from '../types';
import { formatCurrency } from '../utils/formatters';
import { WHATSAPP_NUMBER } from '../data/jerseys';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onToggleCurrency: (currency: Currency) => void;
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onProceedToWhatsAppCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onToggleCurrency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToWhatsAppCheckout,
}) => {
  if (!isOpen) return null;

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmountNgn = items.reduce((sum, item) => sum + item.totalNgn, 0);
  const totalAmountUsd = items.reduce((sum, item) => sum + item.totalUsd, 0);
  const displayTotal = currency === 'NGN' ? totalAmountNgn : totalAmountUsd;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-900 border-l border-zinc-800 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-athletic text-xl font-black text-white uppercase tracking-wide">
                  YOUR SHOPPING CART
                </h2>
                <p className="text-xs text-zinc-400">
                  {totalItemsCount} {totalItemsCount === 1 ? 'kit' : 'kits'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Currency Toggle inside cart */}
              <div className="flex items-center bg-zinc-900 border border-zinc-800 p-0.5 rounded-lg text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => onToggleCurrency('NGN')}
                  className={`px-2 py-0.5 rounded ${currency === 'NGN' ? 'bg-lime-400 text-black' : 'text-zinc-400'}`}
                >
                  ₦ NGN
                </button>
                <button
                  type="button"
                  onClick={() => onToggleCurrency('USD')}
                  className={`px-2 py-0.5 rounded ${currency === 'USD' ? 'bg-lime-400 text-black' : 'text-zinc-400'}`}
                >
                  $ USD
                </button>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Your Cart is Empty</h3>
                  <p className="text-xs text-zinc-400 max-w-xs">
                    Explore our latest 24/25 football kits, retro legends, and kids sets to add jerseys to your cart.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-lime-400 text-black font-bold text-xs"
                >
                  Browse Jerseys
                </button>
              </div>
            ) : (
              items.map((item) => {
                const p = item.product;
                const c = item.customization;
                const pricePerUnit = currency === 'NGN' ? item.priceNgnPerUnit : item.priceUsdPerUnit;
                const itemTotal = currency === 'NGN' ? item.totalNgn : item.totalUsd;

                return (
                  <div
                    key={item.cartItemId}
                    className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 relative group"
                  >
                    <div className="flex items-start gap-3">
                      {/* Product Thumbnail */}
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-16 h-20 rounded-xl object-cover bg-zinc-900 border border-zinc-800 shrink-0"
                      />

                      {/* Item Details */}
                      <div className="flex-1 min-w-0 text-left space-y-1">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="text-xs font-extrabold text-white leading-snug truncate">
                            {p.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.cartItemId)}
                            className="text-zinc-500 hover:text-red-400 p-1 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Specs & Customization Badges */}
                        <div className="flex flex-wrap gap-1 text-[10px] text-zinc-400 font-medium">
                          <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-lime-300 font-bold">
                            Size: {c.size}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                            {c.version}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 capitalize">
                            {p.gender}
                          </span>
                        </div>

                        {/* Custom Print info if present */}
                        {c.hasCustomPrint && c.customName && (
                          <div className="flex items-center gap-1 text-[10px] text-lime-400 font-bold bg-lime-400/10 px-2 py-0.5 rounded border border-lime-500/20">
                            <Sparkles className="w-3 h-3" />
                            <span>Print: {c.customName} #{c.customNumber || '00'}</span>
                          </div>
                        )}

                        {/* Patch info if present */}
                        {c.patch && c.patch !== 'No Sleeve Patch' && (
                          <div className="text-[10px] text-zinc-400 italic">
                            Patch: {c.patch}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom row: Quantity changer & line total */}
                    <div className="pt-2 border-t border-zinc-900 flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          className="w-6 h-6 rounded text-xs font-bold text-zinc-400 hover:text-white flex items-center justify-center hover:bg-zinc-800"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-black text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          className="w-6 h-6 rounded text-xs font-bold text-zinc-400 hover:text-white flex items-center justify-center hover:bg-zinc-800"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price breakdown */}
                      <div className="text-right">
                        <div className="text-[10px] text-zinc-500">
                          {item.quantity} × {formatCurrency(pricePerUnit, currency)}
                        </div>
                        <div className="text-sm font-black text-white font-display">
                          {formatCurrency(itemTotal, currency)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {items.length > 0 && (
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-[11px] text-zinc-500 hover:text-red-400 underline font-medium"
                >
                  Clear all items from cart
                </button>
              </div>
            )}
          </div>

          {/* Footer with Total and WhatsApp Checkout Button */}
          {items.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-zinc-950 space-y-4">
              
              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Subtotal ({totalItemsCount} kits)</span>
                  <span className="text-white font-bold">{formatCurrency(displayTotal, currency)}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Nationwide & Global Dispatch</span>
                  <span className="text-lime-400 font-bold">Calculated on WhatsApp</span>
                </div>
                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-base">
                  <span className="font-bold text-white">Total Amount</span>
                  <span className="font-black text-lime-400 font-display text-xl">
                    {formatCurrency(displayTotal, currency)}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={onProceedToWhatsAppCheckout}
                  id="confirm-cart-whatsapp-btn"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400 hover:from-emerald-400 hover:to-lime-300 text-black font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 active:scale-[0.99] transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Confirm Cart & Order on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-zinc-400">
                  Redirects to official WhatsApp DM (<strong className="text-white">+{WHATSAPP_NUMBER}</strong>) with your full kit list ready.
                </p>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
