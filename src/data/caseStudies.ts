import { CaseStudy } from '../types';

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'fashion-ecom-scaling',
    title: 'Scaling Luxury Fashion Brand from ₦1.5M to ₦18.4M Monthly Revenue in 90 Days',
    clientName: 'Aura Couture Africa',
    clientRole: 'CEO & Founder',
    clientIndustry: 'Fashion & E-commerce',
    category: 'E-commerce',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    heroMetric: '₦18.4M',
    heroMetricLabel: 'Monthly Revenue Achieved (from ₦1.5M)',
    secondaryMetrics: [
      { label: 'Return on Ad Spend (ROAS)', value: '4.8x' },
      { label: 'New Customer Acquisition', value: '3,840' },
      { label: 'Average Order Value (AOV)', value: '₦42,500' }
    ],
    summary: 'Aura Couture had high quality ready-to-wear fashion pieces but struggled with irregular sales and high customer acquisition costs. Treasure built a high-converting shop funnel, overhauled creative ad testing on Instagram/TikTok, and automated post-purchase email workflows.',
    challenge: 'Unpredictable monthly sales, reliance on manual Instagram DMs to close sales, cart abandonment rate exceeding 78%, and lack of tracking pixels.',
    solution: 'Designed an automated Shopify storefront funnel, implemented Meta Conversions API, ran dynamic creative testing focusing on UGC fit videos, and configured Mailchimp abandoned cart recovery sequences.',
    results: [
      'Grew revenue by 1,126% within 3 months of campaign launch',
      'Reduced cost per acquisition (CPA) from ₦11,200 down to ₦3,450',
      'Recovered ₦3.2M in abandoned carts using 3-step automated email drips',
      'Scaled daily ad budget from ₦20k to ₦180k profitably'
    ],
    funnelSteps: [
      { step: 'Awareness / Ad Click', description: 'Meta & TikTok UGC Try-On Haul Ads', conversionRate: '3.8% CTR' },
      { step: 'Landing Page Visit', description: 'Fast-Loading Mobile Optimized Lookbook', conversionRate: '42% Add-to-Cart' },
      { step: 'Cart & Checkout', description: '1-Click Checkout with Free Shipping Threshold', conversionRate: '28% Conversion' },
      { step: 'Post-Purchase Bump', description: 'Matching Accessories Upsell', conversionRate: '18% Take Rate' }
    ],
    timeline: '90 Days (Q3 Campaign)',
    toolsUsed: ['Meta Ads Manager', 'Shopify', 'Klaviyo', 'TikTok Ads', 'Google Analytics 4']
  },
  {
    id: 'selar-masterclass-launch',
    title: '₦12.8M Tech Masterclass Digital Product Launch on Selar in 72 Hours',
    clientName: 'CodeCraft Institute',
    clientRole: 'Lead Instructor',
    clientIndustry: 'EdTech & Digital Products',
    category: 'Info-Products',
    thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
    heroMetric: '₦12.8M',
    heroMetricLabel: 'Revenue Generated in 72 Hours on Selar',
    secondaryMetrics: [
      { label: 'Course Units Sold', value: '852' },
      { label: 'Selar Checkout Conversion', value: '64.2%' },
      { label: 'Affiliate Revenue Driven', value: '₦2.4M' }
    ],
    summary: 'Execution of an aggressive pre-launch and live launch campaign for a premium coding masterclass sold exclusively on Selar.co with multi-currency checkout enabled.',
    challenge: 'Low audience trust for high-ticket online courses, previous launch generated under ₦1M due to poor hype sequence and lack of urgency.',
    solution: 'Deployed a 14-day WhatsApp and Email pre-launch nurture sequence, conducted a live strategy webinar, implemented Selar order bumps, and recruited a network of 45 top tech affiliates on Selar.',
    results: [
      'Generated 852 course enrollments priced at ₦15,000 early bird',
      'Achieved #1 top trending product on Selar marketplace during launch week',
      'Order bump add-on (Project Source Code) generated extra ₦1.8M pure profit',
      'Collected over 300 five-star reviews on Selar store profile'
    ],
    funnelSteps: [
      { step: 'Organic Lead Magnet', description: 'Free PDF Blueprint + WhatsApp Automation', conversionRate: '68% Opt-in' },
      { step: 'Live Masterclass Webinar', description: 'Demonstrating Value & Live Q&A', conversionRate: '45% Attendance' },
      { step: 'Selar Sales Page', description: 'Social Proof Heavy Landing Page on Selar', conversionRate: '64.2% Buy' },
      { step: 'Selar Order Bump', description: 'Source Code Templates Add-on', conversionRate: '34% Take Rate' }
    ],
    timeline: '14 Days Pre-launch + 3 Days Cart Open',
    toolsUsed: ['Selar.co Platform', 'WhatsApp Business API', 'ConvertKit', 'Zoom', 'Canva Pro']
  },
  {
    id: 'b2b-saas-lead-generation',
    title: 'Scaling B2B FinTech Lead Generation & Cutting Cost Per Qualified Lead by 64%',
    clientName: 'PayPulse Africa',
    clientRole: 'Head of Growth',
    clientIndustry: 'FinTech / SaaS',
    category: 'Lead Generation',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    heroMetric: '1,420+',
    heroMetricLabel: 'Qualified Enterprise Leads Generated',
    secondaryMetrics: [
      { label: 'Cost Per Lead (CPL)', value: '$6.40 (down from $18)' },
      { label: 'Pipeline Opportunity Value', value: '$240,000+' },
      { label: 'Demo Booking Rate', value: '18.5%' }
    ],
    summary: 'PayPulse needed high-volume business lead acquisitions for their corporate payout API. Treasure restructured their LinkedIn and Google Search ad funnel to target CFOs, Finance Directors, and Tech Founders.',
    challenge: 'High CPL on generic ads, low lead quality with unverified contact details, long sales cycles.',
    solution: 'Created an interactive "Enterprise Payment Savings Calculator" lead magnet, optimized Google Search campaigns for exact intent keywords, and built automated Calendly booking funnels.',
    results: [
      'Generated 1,420 verified corporate business leads in 60 days',
      'Cut cost per acquisition per booked demo by 64%',
      'Closed $85,000 in new annual recurring software contracts within Q2'
    ],
    funnelSteps: [
      { step: 'Intent Ad', description: 'Google Search & LinkedIn InMail Ads', conversionRate: '8.4% CTR' },
      { step: 'Interactive Tool', description: 'B2B Fee Calculator Landing Page', conversionRate: '38% Tool Use' },
      { step: 'Lead Capture', description: 'Work Email + Company Size Form', conversionRate: '22% Form Submit' },
      { step: 'Instant Booking', description: 'Calendly Integration on Thank You Page', conversionRate: '18.5% Booked' }
    ],
    timeline: '60 Days Execution',
    toolsUsed: ['Google Search Ads', 'LinkedIn Campaign Manager', 'Typeform', 'HubSpot CRM']
  }
];
