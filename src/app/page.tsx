import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { PackagesSection } from '@/components/sections/PackagesSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <VideoSection />
      <MethodologySection />
      <PackagesSection />
      <ContactSection />
    </main>
  );
}