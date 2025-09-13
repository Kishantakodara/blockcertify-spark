import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Shield, Mail, BarChart3 } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main hero content */}
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Distribute Certificates with{' '}
            <span className="gradient-text">Blockchain Trust</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Send verified certificates to thousands of recipients with automated email distribution, 
            blockchain verification, and comprehensive analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Started Free
              <Upload className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-scale-in">
          <div className="glass-card p-8 group hover:scale-105 transition-all duration-300">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
            <h3 className="text-xl font-semibold mb-2">Blockchain Verified</h3>
            <p className="text-muted-foreground">Immutable certificate records with public verification links</p>
          </div>
          
          <div className="glass-card p-8 group hover:scale-105 transition-all duration-300">
            <Mail className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
            <h3 className="text-xl font-semibold mb-2">Automated Distribution</h3>
            <p className="text-muted-foreground">Personalized emails sent to thousands with smart rate limiting</p>
          </div>
          
          <div className="glass-card p-8 group hover:scale-105 transition-all duration-300">
            <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-primary-glow transition-colors" />
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-muted-foreground">Track delivery status, engagement, and verification metrics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;