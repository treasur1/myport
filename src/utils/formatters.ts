import { CartItem, Currency, CustomerOrderDetails } from '../types';
import { WHATSAPP_NUMBER } from '../data/jerseys';

export const formatCurrency = (amount: number, currency: Currency): string => {
  if (currency === 'NGN') {
    return `₦${amount.toLocaleString('en-NG', { maximumFractionDigits: 0 })}`;
  }
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const generateCartItemId = (
  productId: string,
  size: string,
  version: string,
  customName: string,
  customNumber: string,
  patch: string
): string => {
  const cleanName = customName.trim().toUpperCase();
  const cleanNumber = customNumber.trim();
  return `${productId}_${size}_${version}_${cleanName}_${cleanNumber}_${patch}`.replace(/\s+/g, '_');
};

export const buildWhatsAppOrderMessage = (
  items: CartItem[],
  customer: CustomerOrderDetails,
  currency: Currency,
  totalPrice: number
): string => {
  const lineDivider = '━━━━━━━━━━━━━━━━━━━━━━━';
  
  const itemsText = items
    .map((item, index) => {
      const p = item.product;
      const c = item.customization;
      const printDetail = c.hasCustomPrint && c.customName
        ? `\n   • Print: *${c.customName} #${c.customNumber || '00'}*`
        : '\n   • Print: *Standard / Blank*';
      
      const patchDetail = c.patch && c.patch !== 'No Sleeve Patch'
        ? `\n   • Sleeve Patch: *${c.patch}*`
        : '';

      const priceEach = formatCurrency(
        currency === 'NGN' ? item.priceNgnPerUnit : item.priceUsdPerUnit,
        currency
      );
      const subtotal = formatCurrency(
        currency === 'NGN' ? item.totalNgn : item.totalUsd,
        currency
      );

      return `${index + 1}. *${p.name}* (${p.gender.toUpperCase()} - ${c.version})
   • Size: *${c.size}*${printDetail}${patchDetail}
   • Qty: *${item.quantity}* × ${priceEach} = *${subtotal}*`;
    })
    .join('\n\n');

  const customerText = `👤 *Customer Name:* ${customer.fullName || 'Valued Customer'}
📞 *Phone / WhatsApp:* ${customer.phone || 'N/A'}
📍 *Delivery City & State:* ${customer.deliveryCity || 'N/A'}
🏠 *Delivery Address:* ${customer.deliveryAddress || 'N/A'}
💳 *Payment Mode:* ${customer.paymentPreference}
${customer.additionalNotes ? `💬 *Special Instructions:* ${customer.additionalNotes}\n` : ''}`;

  const message = `⚽ *FLUXX FC — NEW JERSEY ORDER* ⚽
${lineDivider}
*CUSTOMER & DELIVERY DETAILS:*
${customerText}
${lineDivider}
🛍️ *ORDERED ITEMS (${items.reduce((acc, i) => acc + i.quantity, 0)} items):*

${itemsText}

${lineDivider}
💰 *TOTAL AMOUNT:* *${formatCurrency(totalPrice, currency)}*
${currency === 'USD' ? '*(International USD Order)*' : '*(Nigerian Naira Order)*'}
${lineDivider}
🚚 *NEXT STEP:* Please confirm item stock, delivery estimate & payment account details. Thank you!`;

  return message;
};

export const getWhatsAppRedirectUrl = (
  items: CartItem[],
  customer: CustomerOrderDetails,
  currency: Currency,
  totalPrice: number
): string => {
  const message = buildWhatsAppOrderMessage(items, customer, currency, totalPrice);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
