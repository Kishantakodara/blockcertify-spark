import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="glass-card p-12 text-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
          <div className="space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center animate-pulse-glow">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <Zap className="absolute -top-2 -right-2 h-6 w-6 text-primary animate-bounce" />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to <span className="gradient-text">Get Started?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join thousands of organizations already using our platform to distribute 
                verified certificates with blockchain security and automated email delivery.
              </p>
            </div>
            
            {/* Features list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                <p className="text-sm font-medium">Free Trial</p>
                <p className="text-xs text-muted-foreground">No credit card required</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                <p className="text-sm font-medium">Setup in Minutes</p>
                <p className="text-xs text-muted-foreground">Upload and send instantly</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                <p className="text-sm font-medium">24/7 Support</p>
                <p className="text-xs text-muted-foreground">We're here to help</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              ✨ Start with 100 free certificates • Upgrade anytime
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;