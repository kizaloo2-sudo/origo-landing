import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Brain, Zap, TrendingUp } from 'lucide-react';

export const MethodologySection = () => {
  return (
    <SectionContainer id="methodology" className="bg-black">
      <div className="text-center mb-20">
        <Badge className="mb-6">Our Methodology</Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gradient-gold">3 Pillars</span> of Growth
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The proven framework that transforms businesses from ordinary to extraordinary
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl font-bold text-[#febe5d]/5 leading-none">
            01
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-[#febe5d]/10 rounded-xl border border-[#febe5d]/30">
                <Brain className="w-8 h-8 text-[#febe5d]" />
              </div>
              <span className="text-[#febe5d] text-sm font-medium uppercase tracking-wider">
                Insight
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Market Signals</h3>
              <p className="text-gray-400 leading-relaxed">
                Decode hidden patterns in market behavior. Identify opportunities before your competitors even know they exist.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#febe5d]" />
                Data-driven insights
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#febe5d]" />
                Predictive analytics
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#febe5d]" />
                Competitive intelligence
              </li>
            </ul>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl font-bold text-[#febe5d]/5 leading-none">
            02
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-[#febe5d]/10 rounded-xl border border-[#febe5d]/30">
                <TrendingUp className="w-8 h-8 text-[#febe5d]" />
              </div>
              <span className="text-[#febe5d] text-sm font-medium uppercase tracking-wider">
                Instinct
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Capital Efficiency</h3>
              <p className="text-gray-400 leading-relaxed">
                Maximize ROI on every baht spent. Deploy resources where they create the most impact.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#febe5d]" />
                Resource optimization
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#febe5d]" />
                ROI maximization
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#febe5d]" />
                Strategic allocation
              </li>
            </ul>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl font-bold text-[#febe5d]/5 leading-none">
            03
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-[#febe5d]/10 rounded-xl border border-[#febe5d]/30">
                <Zap className="w-8 h-8 text-[#febe5d]" />
              </div>
              <span className="text-[#febe5d] text-sm font-medium uppercase tracking-wider">
                Instant
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Strategic Decision</h3>
              <p className="text-gray-400 leading-relaxed">
                Act fast with confidence. Make decisions backed by data and validated by market signals.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#febe5d]" />
                Rapid execution
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#febe5d]" />
                Risk mitigation
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#febe5d]" />
                Scalable frameworks
              </li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Results Banner - แก้ให้ดีบนมือถือ */}
      <div className="mt-20 text-center">
        <Card className="bg-gradient-to-r from-[#febe5d]/10 via-[#febe5d]/5 to-[#febe5d]/10 border-[#febe5d]/30">
          <div className="py-6 sm:py-8 md:py-10 px-4">
            <p className="text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">
              Projected Results
            </p>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-gold mb-2 sm:mb-4 leading-tight">
              <span className="block sm:inline">1,000</span>{' '}
              <span className="block sm:inline">Million THB</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Total Growth in 2025
            </p>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
};