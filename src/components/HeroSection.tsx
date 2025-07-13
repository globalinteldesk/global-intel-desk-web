import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Shield, Globe2 } from 'lucide-react';

export const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const fullTitle = 'Global Intel Desk';

  useEffect(() => {
    if (titleIndex < fullTitle.length) {
      const timeout = setTimeout(() => {
        setCurrentTitle(fullTitle.slice(0, titleIndex + 1));
        setTitleIndex(titleIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [titleIndex, fullTitle]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-primary opacity-60 animate-float" />
        <div className="absolute top-40 right-32 w-2 h-2 rounded-full bg-accent opacity-80 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 rounded-full bg-secondary opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-5 h-5 rounded-full bg-primary opacity-50 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Animated Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="gradient-text block">
                {currentTitle}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Advanced intelligence gathering and real-time global analysis platform
              for strategic decision making
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: Shield, text: 'Secure Intelligence' },
              { icon: Globe2, text: 'Global Coverage' },
              { icon: TrendingUp, text: 'Real-time Analytics' }
            ].map((feature, index) => (
              <div
                key={feature.text}
                className="flex items-center space-x-2 glass px-4 py-2 rounded-full"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="btn-glass gradient-primary text-primary-foreground px-8 py-4 text-lg font-semibold group animate-pulse-glow"
            >
              Access Intelligence Hub
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-glass px-8 py-4 text-lg font-semibold group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-muted/20">
            {[
              { number: '24/7', label: 'Global Monitoring' },
              { number: '195+', label: 'Countries Covered' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '<1s', label: 'Response Time' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="intel-card text-center"
                style={{ animationDelay: `${(index + 1) * 300}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};