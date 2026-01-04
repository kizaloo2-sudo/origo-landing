import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Badge } from '@/components/ui/Badge';
import { Play } from 'lucide-react';

export const VideoSection = () => {
  const videoId = 'Yn9q_eOEuNI'; // เปลี่ยนเป็น Video ID ของคุณ

  return (
    <SectionContainer className="bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="text-center mb-8 md:mb-12 px-4">
        <Badge className="mb-4 md:mb-6">
          <Play className="w-4 h-4 mr-2" />
          Watch Our Story
        </Badge>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
          See <span className="text-gradient-gold">Origo</span> in Action
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Discover how we help businesses achieve exponential growth
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Video Container with Gold Border */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden border-2 md:border-4 border-[#febe5d] shadow-[0_0_30px_rgba(254,190,93,0.4)] hover:shadow-[0_0_50px_rgba(254,190,93,0.6)] transition-all duration-300">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Origo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Stats - ปรับให้ responsive */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 md:mt-8 max-w-3xl mx-auto">
          <div className="text-center p-3 md:p-4 bg-[#febe5d]/5 rounded-lg md:rounded-xl border border-[#febe5d]/20">
            <div className="text-xl md:text-2xl font-bold text-[#febe5d]">10-100X</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">Growth Potential</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-[#febe5d]/5 rounded-lg md:rounded-xl border border-[#febe5d]/20">
            <div className="text-xl md:text-2xl font-bold text-[#febe5d]">3 Steps</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">Simple Process</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-[#febe5d]/5 rounded-lg md:rounded-xl border border-[#febe5d]/20">
            <div className="text-xl md:text-2xl font-bold text-[#febe5d]">24/7</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">Support Ready</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};