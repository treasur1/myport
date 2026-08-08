import React from 'react';

interface SelarLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
}

export const SelarLogo: React.FC<SelarLogoProps> = ({
  className = '',
  size = 28,
  showText = true,
  variant = 'color'
}) => {
  return (
    <div className={`inline-flex items-center gap-2 font-bold tracking-tight ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 via-amber-500 to-orange-400 p-[1.5px] shadow-sm shadow-orange-500/20"
        style={{ width: size, height: size }}
      >
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#050505]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-3/5 w-3/5 text-orange-400"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M8 6h10v10" />
            <path d="M6 14v4h4" />
          </svg>
        </div>
      </div>
      {showText && (
        <span className={`text-lg font-black tracking-tight ${
          variant === 'light' ? 'text-white' : variant === 'dark' ? 'text-zinc-900' : 'text-zinc-100'
        }`}>
          selar<span className="text-orange-400">.co</span>
        </span>
      )}
    </div>
  );
};
