import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Check, Star, Sparkles } from 'lucide-react';

export const PackagesSection = () => {
  return (
    <SectionContainer id="packages" className="bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="text-center mb-16">
        <Badge className="mb-6">Investment Packages</Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Choose Your <span className="text-gradient-gold">Growth Path</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Tailored solutions designed to scale with your ambitions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Market Signal Direction</h3>
              <p className="text-gray-400 text-sm">
                Perfect for businesses ready to align with market opportunities
              </p>
            </div>

            <div className="py-4 border-y border-gray-800">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gradient-gold">250,000</span>
                <span className="text-gray-500">THB</span>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Market signal analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Strategic direction roadmap</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Quarterly review sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">3-month engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Email support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Basic reporting</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full group" size="lg">
              Get Started
              <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </Card>

        <Card className="relative border-[#febe5d] shadow-[0_0_40px_rgba(254,190,93,0.3)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge variant="gold" className="gap-1">
              <Star className="w-3 h-3 fill-current" />
              Most Popular
            </Badge>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise Signal Architecture</h3>
              <p className="text-gray-400 text-sm">
                Complete transformation for organizations seeking exponential growth
              </p>
            </div>

            <div className="py-4 border-y border-gray-800">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gradient-gold">600,000+</span>
                <span className="text-gray-500">THB</span>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Full market signal architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Capital efficiency optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Strategic decision framework</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Dedicated consultant team</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Priority 24/7 support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Custom integration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Monthly strategy sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#febe5d]/10 rounded-full">
                  <Check className="w-4 h-4 text-[#febe5d]" />
                </div>
                <span className="text-gray-300">Real-time dashboard access</span>
              </li>
            </ul>

            <Button variant="primary" className="w-full group" size="lg">
              Book Consultation
              <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-4">Not sure which package fits your needs?</p>
        <Button variant="secondary" size="lg">
          Schedule a Free Discovery Call
        </Button>
      </div>
    </SectionContainer>
  );
};