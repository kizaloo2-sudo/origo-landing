'use client';

import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <SectionContainer className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8 sm:py-12">
      <div className="absolute inset-0 bg-gradient-radial from-[#febe5d]/10 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10 text-center space-y-5 sm:space-y-6 md:space-y-7 max-w-5xl w-full">
        {/* Badge */}
        <div className="flex justify-center mb-3 sm:mb-4 md:mb-5">
          <div className="inline-flex items-center gap-2 bg-[#febe5d]/10 border border-[#febe5d]/30 rounded-full px-4 py-2 md:px-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#febe5d]" />
            <span className="text-[#febe5d] text-xs md:text-sm font-medium">
              Market Signal Consultancy
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-bold leading-tight px-4">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-gold">
            10-100X
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mt-2 md:mt-3">
            Your Revenue
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4 pt-2">
          with same or <span className="text-[#febe5d] font-semibold">less efforts</span>
        </p>

        {/* Theme */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-base md:text-lg text-gray-500 font-light px-4 pt-2">
          <span className="hover:text-[#febe5d] transition-colors cursor-default">Insight</span>
          <span className="text-[#febe5d]">•</span>
          <span className="hover:text-[#febe5d] transition-colors cursor-default">Instinct</span>
          <span className="text-[#febe5d]">•</span>
          <span className="hover:text-[#febe5d] transition-colors cursor-default">Instant</span>
        </div>

        {/* CTA Button */}
        <div className="pt-4 sm:pt-5 md:pt-6">
          <Button size="lg" className="group w-full sm:w-auto">
            Reserve Your Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};