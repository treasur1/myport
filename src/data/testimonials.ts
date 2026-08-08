import { Testimonial, Service } from '../types';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Temitope Adebayo',
    role: 'Course Creator & Medical Educator',
    company: 'HealthPreneur Hub',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Treasure transformed how I launch digital products. Her Sales Funnel course on Selar gave me the blueprint to cross ₦5 Million in under 3 weeks. Her strategies are practical, ethical, and insanely effective.',
    rating: 5,
    verifiedSelarBuyer: true,
    type: 'Course Student',
    metricsHighlight: '₦5.2M Revenue in 3 Weeks'
  },
  {
    id: '2',
    name: 'Kelvin Okafor',
    role: 'Founder & CEO',
    company: 'UrbanKicks E-com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Working with Treasure as our media buyer was the best decision we made in 2025. She scaled our Meta Ads spend while maintaining a 4.5x ROAS. She understands customer psychology better than anyone I know.',
    rating: 5,
    verifiedSelarBuyer: false,
    type: 'Consulting Client',
    metricsHighlight: '4.5x Consistent ROAS'
  },
  {
    id: '3',
    name: 'Blessing Nwosu',
    role: 'Founder & Beauty Brand Owner',
    company: 'GlowSkin Organics',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Treasure set up our Selar storefront and email drip campaign. Our cart abandonment dropped instantly. Plus her "Meta Ads Scaling" course on Selar is a goldmine for any business owner!',
    rating: 5,
    verifiedSelarBuyer: true,
    type: 'Course Student',
    metricsHighlight: 'Cart Abandonment Down 52%'
  },
  {
    id: '4',
    name: 'Marcus Vance',
    role: 'Marketing Director',
    company: 'Apex SaaS Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content: 'Treasure audited our growth funnel and restructured our ad copy. Our cost per lead dropped from $22 to $7 within 14 days. Exceptional digital marketing consultant.',
    rating: 5,
    verifiedSelarBuyer: false,
    type: 'Consulting Client',
    metricsHighlight: '68% CPL Reduction'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'funnel-architecture',
    iconName: 'Workflow',
    title: 'Sales Funnel Architecture & CRO',
    shortDesc: 'Custom high-ticket landing pages, VSLs, and automated checkout funnels designed to maximize conversion rates.',
    fullDesc: 'Complete end-to-end funnel design and build. From lead magnet opt-ins to Selar order bumps, automated email drips, and post-purchase upsells.',
    deliverables: [
      'Custom high-converting landing page copywriting & design',
      'Selar product listing & currency setup',
      'Automated email nurture & SMS recovery sequences',
      'Conversion Rate Optimization (CRO) A/B testing'
    ],
    idealFor: 'Info-product creators, SaaS companies, and high-ticket service providers.',
    popular: true
  },
  {
    id: 'paid-media-scaling',
    iconName: 'TrendingUp',
    title: 'Meta & Google Ads Management',
    shortDesc: 'Data-backed media buying on Meta (Facebook/Instagram), TikTok, and Google Ads with aggressive ROAS targets.',
    fullDesc: 'Done-for-you paid ad campaign management. We handle audience research, ad creative scripting, pixel tracking, and daily media buying optimization.',
    deliverables: [
      'Comprehensive customer persona & competitor breakdown',
      '10+ high-converting ad creative scripts (UGC & static)',
      'Meta Conversions API & GA4 server-side tracking',
      'Bi-weekly performance dashboard & scaling reports'
    ],
    idealFor: 'E-commerce brands, high-ticket coaching programs, and mobile apps.'
  },
  {
    id: 'selar-monetization',
    iconName: 'ShoppingBag',
    title: 'Selar Store Setup & Product Launch Strategy',
    shortDesc: 'Turn your knowledge or digital products into a automated revenue machine hosted on Selar.co.',
    fullDesc: 'Complete setup of your Selar storefront, multi-currency pricing strategy, affiliate management system, and launch campaign blueprint.',
    deliverables: [
      'Selar store profile styling & graphics setup',
      'Multi-currency pricing strategy (NGN, USD, GHS, KES, GBP)',
      'Affiliate portal setup & recruiting guidelines',
      '14-day product launch campaign blueprint & countdown emails'
    ],
    idealFor: 'Authors, educators, coaches, and digital product creators looking to sell on Selar.',
    popular: true
  },
  {
    id: 'growth-consulting',
    iconName: 'Target',
    title: '1-on-1 Growth Audit & Strategy Coaching',
    shortDesc: 'In-depth diagnostic audit of your existing marketing funnel, ad account, and growth bottlenecks.',
    fullDesc: '90-minute deep-dive strategy session with Treasure Ewelike to identify drop-off points in your marketing and build a custom 90-day execution roadmap.',
    deliverables: [
      '90-minute live video consultation',
      'Funnel & Ad Account teardown PDF report',
      'Custom 90-day growth roadmap',
      'Direct WhatsApp access for 14 days post-call'
    ],
    idealFor: 'Founders and marketers who want clear direction before spending ad budget.'
  }
];
