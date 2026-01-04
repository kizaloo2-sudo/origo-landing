import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';
import { AlertCircle, TrendingDown, Target } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <SectionContainer id="problem" className="bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          The <span className="text-gradient-gold">Real Problem</span>
        </h2>
        <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Most companies <span className="text-red-500 font-semibold">lose money</span> because they execute in the <span className="text-[#febe5d] font-semibold">wrong direction</span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-red-500/10 rounded-full border border-red-500/30">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white">Wrong Direction</h3>
            <p className="text-gray-400">Executing strategies without market validation</p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-red-500/10 rounded-full border border-red-500/30">
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white">Wasted Resources</h3>
            <p className="text-gray-400">Time and money spent on ineffective initiatives</p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-red-500/10 rounded-full border border-red-500/30">
              <Target className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white">Missed Opportunities</h3>
            <p className="text-gray-400">Overlooking signals that lead to exponential growth</p>
          </div>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-[#febe5d]/10 border border-[#febe5d]/30 rounded-2xl p-8 max-w-2xl">
          <p className="text-xl text-gray-300 leading-relaxed">
            You don&apos;t need to work <span className="text-white font-bold">harder</span>.
            <br />
            You need to work in the <span className="text-gradient-gold font-bold text-2xl">right direction</span>.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};