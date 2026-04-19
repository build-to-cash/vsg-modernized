import Link from 'next/link';

import { ReactNode } from 'react';

interface HeroProps {
  title: ReactNode;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink = '/',
  secondaryCtaText,
  secondaryCtaLink = '/events',
}: HeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center px-4 md:px-12 overflow-hidden bg-[#131313]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/80 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=80)' }}
        />
      </div>
      
      <div className="relative z-20 max-w-4xl">
        {subtitle && (
          <span className="text-[#E9C349] text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
            {subtitle}
          </span>
        )}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#e5e2e1] leading-[0.95] mb-4 md:mb-8 tracking-tight font-serif">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-[#dbc0bd] max-w-xl mb-10 leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex flex-wrap gap-4">
          {ctaText && (
            <Link
              href={ctaLink}
              className="px-8 py-4 bg-[#E9C349] text-[#3c2f00] font-bold text-sm rounded-md transition-all hover:scale-105 active:scale-95"
            >
              {ctaText}
            </Link>
          )}
          {secondaryCtaText && (
            <Link
              href={secondaryCtaLink}
              className="px-8 py-4 bg-[#1c1b1b]/50 text-[#e5e2e1] font-bold text-sm rounded-md transition-all hover:bg-[#2a2a2a]"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}