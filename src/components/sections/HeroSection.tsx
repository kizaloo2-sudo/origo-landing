'use client';

import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <SectionContainer className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#febe5d]/10 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10 text-center space-y-8 max-w-5xl">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#febe5d]/10 border border-[#febe5d]/30 rounded-full px-6 py-2">
            <Sparkles className="w-4 h-4 text-[#febe5d]" />
            <span className="text-[#febe5d] text-sm font-medium">Market Signal Consultancy</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="text-gradient-gold">10-100X</span>
          <br />
          <span className="text-white">Your Revenue</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
          with same or <span className="text-[#febe5d] font-semibold">less efforts</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-500 font-light">
          <span className="hover:text-[#febe5d] transition-colors cursor-default">Insight</span>
          <span className="text-[#febe5d]">•</span>
          <span className="hover:text-[#febe5d] transition-colors cursor-default">Instinct</span>
          <span className="text-[#febe5d]">•</span>
          <span className="hover:text-[#febe5d] transition-colors cursor-default">Instant</span>
        </div>

        <div className="pt-8">
          <Button size="lg" className="group">
            Reserve Your Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-gradient-gold">10-100X</div>
            <div className="text-sm text-gray-500 mt-2">Revenue Growth</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient-gold">1,000M+</div>
            <div className="text-sm text-gray-500 mt-2">THB in 2025</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient-gold">3</div>
            <div className="text-sm text-gray-500 mt-2">Core Pillars</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};