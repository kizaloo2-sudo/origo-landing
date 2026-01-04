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

      {/* Video Container - ขนาดเดียวกับ Results Card */}
      <div className="max-w-4xl mx-auto px-4">
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
      </div>
    </SectionContainer>
  );
};