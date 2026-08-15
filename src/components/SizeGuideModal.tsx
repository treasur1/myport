import React, { useState } from 'react';
import { X, Ruler, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'mens' | 'womens' | 'kids'>('mens');
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-athletic text-2xl font-black text-white uppercase tracking-wide">
                JERSEY SIZE & FIT GUIDE
              </h2>
              <p className="text-xs text-zinc-400">
                Accurate chest & length measurements for all jerseys
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

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          
          {/* Top Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Gender Tabs */}
            <div className="flex items-center bg-zinc-950 p-1 rounded-xl border border-zinc-800">
              <button
                onClick={() => setActiveTab('mens')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'mens' ? 'bg-lime-400 text-black shadow-sm' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Men's / Unisex
              </button>
              <button
                onClick={() => setActiveTab('womens')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'womens' ? 'bg-lime-400 text-black shadow-sm' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Women's Fit
              </button>
              <button
                onClick={() => setActiveTab('kids')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'kids' ? 'bg-lime-400 text-black shadow-sm' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Kids Sets
              </button>
            </div>

            {/* Unit Toggle */}
            <div className="flex items-center self-end sm:self-center bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs font-bold">
              <button
                onClick={() => setUnit('inches')}
                className={`px-3 py-1 rounded-lg ${unit === 'inches' ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}
              >
                Inches (in)
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 rounded-lg ${unit === 'cm' ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>

          {/* Measurement Tables */}
          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950">
            {activeTab === 'mens' && (
              <table className="w-full text-xs text-left">
                <thead className="bg-zinc-900 text-zinc-400 font-bold border-b border-zinc-800 uppercase text-[10px]">
                  <tr>
                    <th className="p-3.5">Size</th>
                    <th className="p-3.5">Chest Width</th>
                    <th className="p-3.5">Body Length</th>
                    <th className="p-3.5">Recommended Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80 text-zinc-300 font-medium">
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Small (S)</td>
                    <td className="p-3.5">{unit === 'inches' ? '36 - 38 in' : '92 - 97 cm'}</td>
                    <td className="p-3.5">{unit === 'inches' ? '28 in' : '71 cm'}</td>
                    <td className="p-3.5">55 - 68 kg</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Medium (M)</td>
                    <td className="p-3.5">{unit === 'inches' ? '39 - 41 in' : '98 - 104 cm'}</td>
                    <td className="p-3.5">{unit === 'inches' ? '29 in' : '74 cm'}</td>
                    <td className="p-3.5">68 - 78 kg</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Large (L)</td>
                    <td className="p-3.5">{unit === 'inches' ? '42 - 44 in' : '105 - 112 cm'}</td>
                    <td className="p-3.5">{unit === 'inches' ? '30 in' : '76 cm'}</td>
                    <td className="p-3.5">78 - 88 kg</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">X-Large (XL)</td>
                    <td className="p-3.5">{unit === 'inches' ? '45 - 47 in' : '113 - 120 cm'}</td>
                    <td className="p-3.5">{unit === 'inches' ? '31 in' : '79 cm'}</td>
                    <td className="p-3.5">88 - 98 kg</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">XX-Large (XXL)</td>
                    <td className="p-3.5">{unit === 'inches' ? '48 - 50 in' : '121 - 128 cm'}</td>
                    <td className="p-3.5">{unit === 'inches' ? '32 in' : '81 cm'}</td>
                    <td className="p-3.5">98 - 110 kg</td>
                  </tr>
                </tbody>
              </table>
            )}

            {activeTab === 'womens' && (
              <table className="w-full text-xs text-left">
                <thead className="bg-zinc-900 text-zinc-400 font-bold border-b border-zinc-800 uppercase text-[10px]">
                  <tr>
                    <th className="p-3.5">Size</th>
                    <th className="p-3.5">Bust Width</th>
                    <th className="p-3.5">Waist Fit</th>
                    <th className="p-3.5">UK / US Dress Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80 text-zinc-300 font-medium">
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">X-Small (XS)</td>
                    <td className="p-3.5">{unit === 'inches' ? '30 - 32 in' : '76 - 81 cm'}</td>
                    <td className="p-3.5">{unit === 'inches' ? '24 - 26 in' : '61 - 66 cm'}</td>
                    <td className="p-3.5">UK 6 / US 2</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Small (S)</td>
                    <td className="p-3.5">{unit === 'inches' ? '33 - 35 in' : '84 - 89 cm'}</td>
                    <td className="p-3.5">{unit === 'inches' ? '27 - 29 in' : '68 - 73 cm'}</td>
                    <td className="p-3.5">UK 8 - 10 / US 4 - 6</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Medium (M)</td>
                    <td className="p-3.5">{unit === 'inches' ? '36 - 38 in' : '91 - 96 cm'}</td>
                    <td className="p-3.5">{unit === 'inches' ? '30 - 32 in' : '76 - 81 cm'}</td>
                    <td className="p-3.5">UK 12 / US 8</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Large (L)</td>
                    <td className="p-3.5">{unit === 'inches' ? '39 - 41 in' : '99 - 104 cm'}</td>
                    <td className="p-3.5">{unit === 'inches' ? '33 - 35 in' : '84 - 89 cm'}</td>
                    <td className="p-3.5">UK 14 / US 10</td>
                  </tr>
                </tbody>
              </table>
            )}

            {activeTab === 'kids' && (
              <table className="w-full text-xs text-left">
                <thead className="bg-zinc-900 text-zinc-400 font-bold border-b border-zinc-800 uppercase text-[10px]">
                  <tr>
                    <th className="p-3.5">Kids Size Code</th>
                    <th className="p-3.5">Target Age</th>
                    <th className="p-3.5">Child Height</th>
                    <th className="p-3.5">Set Inclusions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80 text-zinc-300 font-medium">
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Size 18</td>
                    <td className="p-3.5">4 - 5 Years</td>
                    <td className="p-3.5">105 - 115 cm</td>
                    <td className="p-3.5">Jersey Top + Shorts</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Size 20</td>
                    <td className="p-3.5">6 - 7 Years</td>
                    <td className="p-3.5">115 - 125 cm</td>
                    <td className="p-3.5">Jersey Top + Shorts</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Size 22</td>
                    <td className="p-3.5">8 - 9 Years</td>
                    <td className="p-3.5">125 - 135 cm</td>
                    <td className="p-3.5">Jersey Top + Shorts</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Size 24</td>
                    <td className="p-3.5">10 - 11 Years</td>
                    <td className="p-3.5">135 - 145 cm</td>
                    <td className="p-3.5">Jersey Top + Shorts</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-lime-400">Size 26</td>
                    <td className="p-3.5">12 - 13 Years</td>
                    <td className="p-3.5">145 - 155 cm</td>
                    <td className="p-3.5">Jersey Top + Shorts</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          {/* Pro Fit Tip */}
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start gap-3 text-xs text-zinc-300">
            <Check className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-bold">Fan Version vs. Player Issue Tip:</strong>
              Fan Version jerseys offer a comfortable, relaxed everyday fit. If ordering <span className="text-lime-400 font-bold">Player Issue (Authentic Slim Fit)</span>, we recommend choosing one size up if you prefer a looser feel.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
