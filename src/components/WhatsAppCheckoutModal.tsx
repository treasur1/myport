import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle, ArrowRight, ShieldCheck, MapPin, User, Phone, FileText } from 'lucide-react';
import { CartItem, Currency, CustomerOrderDetails } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_FORMATTED } from '../data/jerseys';
import { buildWhatsAppOrderMessage, formatCurrency, getWhatsAppRedirectUrl } from '../utils/formatters';

interface WhatsAppCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onClearCartAfterOrder?: () => void;
}

export const WhatsAppCheckoutModal: React.FC<WhatsAppCheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onClearCartAfterOrder,
}) => {
  if (!isOpen || items.length === 0) return null;

  const [customer, setCustomer] = useState<CustomerOrderDetails>({
    fullName: '',
    phone: '',
    deliveryCity: 'Lagos',
    deliveryAddress: '',
    additionalNotes: '',
    paymentPreference: 'Bank Transfer',
  });

  const [showPreviewText, setShowPreviewText] = useState(false);

  const totalNgn = items.reduce((sum, item) => sum + item.totalNgn, 0);
  const totalUsd = items.reduce((sum, item) => sum + item.totalUsd, 0);
  const totalAmount = currency === 'NGN' ? totalNgn : totalUsd;

  const previewMessage = buildWhatsAppOrderMessage(items, customer, currency, totalAmount);

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppRedirectUrl(items, customer, currency, totalAmount);
    window.open(url, '_blank');
    if (onClearCartAfterOrder) {
      onClearCartAfterOrder();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-athletic text-2xl font-black text-white uppercase tracking-wide">
                CONFIRM ORDER & PROCEED TO WHATSAPP
              </h2>
              <p className="text-xs text-zinc-400">
                Direct order dispatch to <strong className="text-emerald-400">{WHATSAPP_FORMATTED}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <form onSubmit={handleLaunchWhatsApp} className="p-6 sm:p-8 space-y-6 text-left max-h-[80vh] overflow-y-auto">
          
          {/* Order Summary Pill Box */}
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-zinc-400 block">Kits in your order:</span>
              <span className="font-athletic text-lg font-bold text-white">
                {items.length} {items.length === 1 ? 'Jersey Design' : 'Jersey Designs'} ({items.reduce((s, i) => s + i.quantity, 0)} items total)
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-zinc-400 block">Total Amount:</span>
              <span className="font-display text-xl font-black text-lime-400">
                {formatCurrency(totalAmount, currency)}
              </span>
            </div>
          </div>

          {/* Customer Inputs */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-lime-400" />
              <span>Customer & Delivery Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tunde Adeleke"
                  value={customer.fullName}
                  onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-lime-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 08012345678"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-lime-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">Delivery City / State *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lekki, Lagos or Abuja, FCT"
                  value={customer.deliveryCity}
                  onChange={(e) => setCustomer({ ...customer, deliveryCity: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-lime-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">Payment Preference</label>
                <select
                  value={customer.paymentPreference}
                  onChange={(e) => setCustomer({ ...customer, paymentPreference: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-lime-400"
                >
                  <option value="Bank Transfer">Direct Bank Transfer (Instant)</option>
                  <option value="WhatsApp Direct Inquiry">Confirm with Agent on WhatsApp</option>
                  <option value="Cash on Delivery (Lagos only)">Pay on Delivery (Lagos State only)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1">Exact Street Address for Courier</label>
              <input
                type="text"
                placeholder="House number, Street name, Landmark"
                value={customer.deliveryAddress}
                onChange={(e) => setCustomer({ ...customer, deliveryAddress: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-lime-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1">Extra Notes or Custom Request (Optional)</label>
              <textarea
                rows={2}
                placeholder="e.g. Please wrap as a birthday gift, or deliver before weekend"
                value={customer.additionalNotes}
                onChange={(e) => setCustomer({ ...customer, additionalNotes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-lime-400 resize-none"
              />
            </div>
          </div>

          {/* Toggle WhatsApp Message Preview */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowPreviewText(!showPreviewText)}
              className="text-xs text-lime-400 hover:underline font-semibold flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{showPreviewText ? 'Hide WhatsApp Text Message' : 'Preview Compiled WhatsApp Message'}</span>
            </button>

            {showPreviewText && (
              <div className="mt-2 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-[11px] text-zinc-300 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                {previewMessage}
              </div>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <button
              type="submit"
              id="send-order-whatsapp-final-btn"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-400 hover:from-emerald-400 hover:to-lime-300 text-black font-black text-base flex items-center justify-center gap-2.5 shadow-2xl shadow-emerald-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <MessageCircle className="w-6 h-6 fill-black" />
              <span>Open WhatsApp & Send Order ({WHATSAPP_FORMATTED})</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Secure WhatsApp Ordering • Prompt Agent Response</span>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
