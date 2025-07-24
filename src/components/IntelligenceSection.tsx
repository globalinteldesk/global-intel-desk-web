import { useEffect, useRef, useState } from 'react';
import { 
  Shield, 
  Globe, 
  Activity, 
  FileText, 
  Bell, 
  TrendingUp, 
  Users, 
  Map, 
  Database,
  Zap,
  Eye,
  Lock
} from 'lucide-react';

const intelligenceCards = [
  {
    icon: Shield,
    title: 'Threat Intelligence',
    description: 'Global event monitoring highlighting risks to business continuity, operations, and regional stability.',
    features: ['Advanced Analytics', 'Pattern Recognition', '24/7 Monitoring'],
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Globe,
    title: 'Geopolitical Analysis',
    description: 'Tracking power shifts, conflict updates, and leadership narratives shaping global dynamics.',
    features: ['Regional Expertise', 'Trend Forecasting', 'Impact Assessment'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Activity,
    title: 'Market Intelligence',
    description: 'Financial markets monitoring with predictive insights and risk analysis.',
    features: ['Market Trends', 'Risk Metrics', 'Predictive Models'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Database,
    title: 'Data Fusion',
    description: 'Advanced data correlation from multiple intelligence sources worldwide.',
    features: ['Multi-source Integration', 'AI Processing', 'Quality Assurance'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Eye,
    title: 'OSINT Collection',
    description: 'Curated insights from public sources on advisories, protests, and real-time events.',
    features: ['Social Media Analysis', 'Web Monitoring', 'Content Verification'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Lock,
    title: 'Live Global Feed',
    description: 'Instant updates on conflicts, calamities, and major developments impacting mobility and operations.',
    features: ['Military-grade Encryption', 'Secure Channels', 'Access Control'],
    color: 'from-slate-500 to-gray-500'
  }
];

export const IntelligenceSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.intel-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="intelligence" className="pt-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text">
            Intelligence Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive intelligence solutions powered by advanced AI and global data networks
          </p>
        </div>

        {/* Intelligence Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {intelligenceCards.map((card, index) => (
            <div
              key={card.title}
              data-index={index}
              className={`intel-card group cursor-pointer transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} bg-opacity-20`}>
                  <card.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {card.title}
                </h3>
              </div>

              {/* Card Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {card.features.map((feature, featureIndex) => (
                  <div 
                    key={feature}
                    className="flex items-center space-x-3 opacity-0 animate-fade-in-up"
                    style={{ 
                      animationDelay: `${(index * 100) + (featureIndex * 50)}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.color} opacity-5`} />
              </div>
            </div>
          ))}
        </div>

        {/* Intelligence Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, number: '50K+', label: 'Active Analysts' },
            { icon: Map, number: '195', label: 'Countries Monitored' },
            { icon: TrendingUp, number: '99.8%', label: 'Accuracy Rate' },
            { icon: Zap, number: '<100ms', label: 'Processing Speed' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`intel-card text-center group transform transition-all duration-700 opacity-100 translate-y-0`}
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />
    </section>
  );
};