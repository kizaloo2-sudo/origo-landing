import React from 'react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Video, Mail, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <SectionContainer id="contact" className="bg-black">
      <div className="text-center mb-16">
        <Badge className="mb-6">Get in Touch</Badge>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Ready to <span className="text-gradient-gold">10X</span> Your Business?
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Let&apos;s discuss how Origo can transform your business trajectory
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        <Card className="border-[#febe5d]/50">
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-[#febe5d]/10 rounded-2xl border border-[#febe5d]/30">
              <Calendar className="w-8 h-8 text-[#febe5d]" />
            </div>
            <h3 className="text-2xl font-bold text-white">Book a Strategy Call</h3>
            <p className="text-gray-400">Schedule a 30-minute consultation with our team</p>
            <Button variant="primary" className="w-full mt-4">
              Reserve Your Slot
            </Button>
          </div>
        </Card>

        <Card>
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-[#febe5d]/10 rounded-2xl border border-[#febe5d]/30">
              <Video className="w-8 h-8 text-[#febe5d]" />
            </div>
            <h3 className="text-2xl font-bold text-white">Join Our Conference</h3>
            <p className="text-gray-400">Attend our quarterly market insights conference</p>
            <Button variant="outline" className="w-full mt-4">
              Register Now
            </Button>
          </div>
        </Card>
      </div>

      <Card className="max-w-4xl mx-auto bg-gradient-to-br from-[#febe5d]/5 to-transparent border-[#febe5d]/30">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">Or Contact Us Directly</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:contact@origo.co" className="flex items-center gap-2 text-gray-400 hover:text-[#febe5d] transition-colors">
              <Mail className="w-5 h-5" />
              <span>contact@origo.co</span>
            </a>
            <a href="tel:+66123456789" className="flex items-center gap-2 text-gray-400 hover:text-[#febe5d] transition-colors">
              <Phone className="w-5 h-5" />
              <span>+66 (0) 12 345 6789</span>
            </a>
          </div>
        </div>
      </Card>

      <div className="mt-20 pt-8 border-t border-gray-900 text-center text-gray-600">
        <p className="mb-4">
          <span className="text-gradient-gold font-bold text-lg">Origo</span> - Market Signal Consultancy
        </p>
        <p className="text-sm">© 2025 Origo. All rights reserved.</p>
      </div>
    </SectionContainer>
  );
};