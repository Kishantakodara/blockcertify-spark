import React from 'react';
import { Card } from '@/components/ui/card';

const stats = [
  {
    number: '500K+',
    label: 'Certificates Distributed',
    description: 'Across 50+ countries'
  },
  {
    number: '99.9%',
    label: 'Delivery Success Rate',
    description: 'With smart retry logic'
  },
  {
    number: '< 2 min',
    label: 'Average Setup Time',
    description: 'From upload to send'
  },
  {
    number: '100%',
    label: 'Blockchain Verified',
    description: 'Tamper-proof records'
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Organizations Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of institutions using our platform for secure certificate distribution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300 hover:shadow-glow"
            >
              <div className="space-y-4">
                <div className="text-4xl md:text-5xl font-bold gradient-text animate-scale-in">
                  {stat.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>
        
        {/* Featured clients section */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Trusted by leading institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['University', 'TechCorp', 'Institute', 'Academy', 'College'].map((name, index) => (
              <div 
                key={index}
                className="px-6 py-3 glass-card text-sm font-medium hover:opacity-100 transition-opacity"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;