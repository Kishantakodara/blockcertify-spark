import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProcessSteps from '@/components/ProcessSteps';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSteps />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default Index;
