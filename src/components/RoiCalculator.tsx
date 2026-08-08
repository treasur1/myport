import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, TrendingUp, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onBookCall: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onBookCall }) => {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  
  // NGN Defaults
  const [adSpend, setAdSpend] = useState<number>(150000);
  const [cpc, setCpc] = useState<number>(75);
  const [convRate, setConvRate] = useState<number>(6.5);
  const [productPrice, setProductPrice] = useState<number>(25000);

  // Switch currency helper
  const handleCurrencySwitch = (curr: 'NGN' | 'USD') => {
    setCurrency(curr);
    if (curr === 'USD') {
      setAdSpend(300);
      setCpc(0.80);
      setProductPrice(35);
    } else {
      setAdSpend(150000);
      setCpc(75);
      setProductPrice(25000);
    }
  };

  // Calculations
  const clicks = Math.round(adSpend / (cpc || 1));
  const estimatedSales = Math.round((clicks * convRate) / 100);
  const projectedRevenue = estimatedSales * productPrice;
  const netProfit = projectedRevenue - adSpend;
  const roas = adSpend > 0 ? (projectedRevenue / adSpend).toFixed(2) : '0';

  const formatMoney = (amount: number) => {
    return currency === 'NGN'
      ? `₦${amount.toLocaleString()}`
      : `$${amount.toLocaleString()}`;
  };

  return (
    <section id="roi-calculator" className="py-20 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-4">
            <Calculator className="w-4 h-4 text-orange-400" />
            <span>Interactive Funnel & Campaign Tool</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Sales Funnel <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">ROI Estimator</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Test your campaign assumptions. See how slight tweaks in landing page conversion rates and offer price dramatically boost your campaign revenue on Selar and Meta.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-10 shadow-2xl">
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-white">Select Campaign Currency</span>
            </div>
            
            <div className="flex items-center p-1 rounded-xl bg-[#050505] border border-zinc-800">
              <button
                onClick={() => handleCurrencySwitch('NGN')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'NGN'
                    ? 'bg-orange-500 text-zinc-950 shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                NGN (₦)
              </button>
              <button
                onClick={() => handleCurrencySwitch('USD')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currency === 'USD'
                    ? 'bg-orange-500 text-zinc-950 shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Monthly Ad Spend */}
              <div>
                <div className="flex justify-between text-xs font-bold text-zinc-300 mb-2">
                  <span>Monthly Ad Spend</span>
                  <span className="text-orange-400">{formatMoney(adSpend)}</span>
                </div>
                <input
                  type="range"
                  min={currency === 'NGN' ? 20000 : 50}
                  max={currency === 'NGN' ? 2000000 : 5000}
                  step={currency === 'NGN' ? 10000 : 25}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-[#050505] rounded-lg appearance-none cursor-pointer accent-orange-400"
                />
              </div>

              {/* Cost Per Click */}
              <div>
                <div className="flex justify-between text-xs font-bold text-zinc-300 mb-2">
                  <span>Est. Cost Per Click (CPC)</span>
                  <span className="text-amber-400">{formatMoney(cpc)}</span>
                </div>
                <input
                  type="range"
                  min={currency === 'NGN' ? 20 : 0.10}
                  max={currency === 'NGN' ? 300 : 3.00}
                  step={currency === 'NGN' ? 5 : 0.05}
                  value={cpc}
                  onChange={(e) => setCpc(Number(e.target.value))}
                  className="w-full h-2 bg-[#050505] rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* Landing Page Conversion % */}
              <div>
                <div className="flex justify-between text-xs font-bold text-zinc-300 mb-2">
                  <span>Funnel Conversion Rate</span>
                  <span className="text-orange-400">{convRate}%</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={20}
                  step={0.5}
                  value={convRate}
                  onChange={(e) => setConvRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#050505] rounded-lg appearance-none cursor-pointer accent-orange-400"
                />
              </div>

              {/* Product Price */}
              <div>
                <div className="flex justify-between text-xs font-bold text-zinc-300 mb-2">
                  <span>Product / Course Price</span>
                  <span className="text-amber-400">{formatMoney(productPrice)}</span>
                </div>
                <input
                  type="range"
                  min={currency === 'NGN' ? 5000 : 10}
                  max={currency === 'NGN' ? 150000 : 300}
                  step={currency === 'NGN' ? 2500 : 5}
                  value={productPrice}
                  onChange={(e) => setProductPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#050505] rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

            </div>

            {/* Results Display Panel */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#050505] border border-zinc-800 text-left space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Projected Outcomes</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  {roas}x ROAS
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">Estimated Ad Clicks:</span>
                  <span className="text-white font-mono font-bold">{clicks.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">Projected Sales Units:</span>
                  <span className="text-orange-400 font-mono font-bold">{estimatedSales.toLocaleString()} sales</span>
                </div>

                <div className="flex justify-between text-xs pt-2 border-t border-zinc-800/80">
                  <span className="text-zinc-400">Gross Projected Revenue:</span>
                  <span className="text-white font-bold text-base">{formatMoney(projectedRevenue)}</span>
                </div>

                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-center">
                  <span className="text-[10px] text-orange-300 font-bold uppercase tracking-wider block">Estimated Net Profit</span>
                  <span className="text-2xl font-black text-orange-400 block mt-0.5">
                    {formatMoney(netProfit)}
                  </span>
                </div>
              </div>

              <button
                onClick={onBookCall}
                id="calculator-book-call-btn"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-all mt-4"
              >
                <span>Achieve This Funnel ROI</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
