import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Upload, 
  FileSpreadsheet, 
  Mail, 
  Shield, 
  Send, 
  BarChart3,
  ChevronRight,
  Check
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Upload Certificate',
    description: 'Drag & drop your certificate template (PDF, PNG, JPG)',
    icon: Upload,
    color: 'text-blue-400'
  },
  {
    id: 2,
    title: 'Add Recipients',
    description: 'Upload Excel/CSV with recipient data (Name, Email, etc.)',
    icon: FileSpreadsheet,
    color: 'text-green-400'
  },
  {
    id: 3,
    title: 'Customize Email',
    description: 'Personalize email templates with merge fields',
    icon: Mail,
    color: 'text-purple-400'
  },
  {
    id: 4,
    title: 'Blockchain Setup',
    description: 'Generate secure certificate hashes and verification links',
    icon: Shield,
    color: 'text-orange-400'
  },
  {
    id: 5,
    title: 'Distribute',
    description: 'Send certificates with real-time progress tracking',
    icon: Send,
    color: 'text-pink-400'
  },
  {
    id: 6,
    title: 'Analytics',
    description: 'Monitor delivery status and engagement metrics',
    icon: BarChart3,
    color: 'text-cyan-400'
  }
];

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple <span className="gradient-text">6-Step Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From upload to delivery, our streamlined process makes certificate distribution effortless
          </p>
        </div>
        
        {/* Interactive step timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isCompleted = activeStep > step.id;
              
              return (
                <Card 
                  key={step.id}
                  className={`p-6 cursor-pointer transition-all duration-300 glass-card hover:scale-105 ${
                    isActive ? 'ring-2 ring-primary shadow-glow' : ''
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`
                      flex items-center justify-center w-12 h-12 rounded-full 
                      ${isCompleted ? 'bg-gradient-success' : isActive ? 'bg-primary' : 'bg-glass'}
                      transition-all duration-300
                    `}>
                      {isCompleted ? (
                        <Check className="h-6 w-6 text-white" />
                      ) : (
                        <Icon className={`h-6 w-6 ${isActive ? 'text-white' : step.color}`} />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                    
                    <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                      isActive ? 'text-primary rotate-90' : 'text-muted-foreground'
                    }`} />
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Visual preview area */}
          <div className="relative">
            <Card className="glass-card p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-6 animate-fade-in">
                {(() => {
                  const activeStepData = steps.find(s => s.id === activeStep);
                  const Icon = activeStepData?.icon || Upload;
                  
                  return (
                    <>
                      <div className="mx-auto w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center animate-pulse-glow">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{activeStepData?.title}</h3>
                        <p className="text-muted-foreground">{activeStepData?.description}</p>
                      </div>
                      <Button variant="hero" size="lg">
                        Start {activeStepData?.title}
                      </Button>
                    </>
                  );
                })()}
              </div>
            </Card>
            
            {/* Progress indicator */}
            <div className="absolute -bottom-4 left-0 right-0">
              <div className="bg-glass/20 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-hero transition-all duration-500 ease-out"
                  style={{ width: `${(activeStep / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-20">
          <Button variant="hero" size="lg" className="text-xl px-12 py-6">
            Start Your Free Trial
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;