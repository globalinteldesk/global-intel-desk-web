import { useEffect, useRef, useState } from 'react';
import { Clock, ExternalLink, TrendingUp, Globe, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const NewsSection = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const newsItems = [
    {
      title: "Global Cyber Threat Level Elevated",
      summary: "Intelligence agencies report a 30% increase in sophisticated cyber attacks targeting critical infrastructure worldwide.",
      time: "2 hours ago",
      category: "Cybersecurity",
      priority: "high",
      region: "Global"
    },
    {
      title: "Economic Intelligence: Market Volatility Patterns",
      summary: "Advanced analysis reveals emerging patterns in international markets suggesting coordinated economic pressure tactics.",
      time: "4 hours ago",
      category: "Economic Intel",
      priority: "medium",
      region: "Asia-Pacific"
    },
    {
      title: "Satellite Surveillance: Unusual Activity Detected",
      summary: "Orbital monitoring systems identify irregular movement patterns in several strategic regions requiring immediate assessment.",
      time: "6 hours ago",
      category: "Satellite Intel",
      priority: "high",
      region: "Middle East"
    },
    {
      title: "Diplomatic Channel Analysis",
      summary: "Communication pattern analysis suggests significant developments in ongoing international negotiations and treaty discussions.",
      time: "8 hours ago",
      category: "Diplomatic Intel",
      priority: "medium",
      region: "Europe"
    },
    {
      title: "Climate Security Assessment Update",
      summary: "Environmental intelligence indicates potential resource conflicts due to accelerating climate change impacts on strategic regions.",
      time: "12 hours ago",
      category: "Environmental Intel",
      priority: "low",
      region: "Africa"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity': return AlertCircle;
      case 'Economic Intel': return TrendingUp;
      case 'Satellite Intel': return Globe;
      default: return Clock;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleElements(prev => [...prev, elementIndex]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="news" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text">
            Latest Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time updates and breaking intelligence from our global monitoring network
          </p>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {newsItems.map((item, index) => {
            const CategoryIcon = getCategoryIcon(item.category);
            return (
              <div
                key={index}
                data-index={index}
                className={`intel-card group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                  visibleElements.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <CategoryIcon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                    {item.priority.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground group-hover:gradient-text transition-all">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-muted/20">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-3 w-3" />
                      <span>{item.region}</span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Updates Feed */}
        <div 
          data-index="5"
          className={`intel-card transform transition-all duration-700 ${
            visibleElements.includes(5) 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold gradient-text">Live Intelligence Feed</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>

          <div className="space-y-3">
            {[
              "Satellite imagery analysis completed for sector 7-Alpha",
              "Communication intercept decoded from eastern corridor",
              "Weather pattern anomaly detected in target region",
              "Economic indicators suggest market manipulation tactics",
              "Diplomatic channel chatter increased by 40% in last hour"
            ].map((update, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 py-2 px-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
                style={{ animationDelay: `${index * 500}ms` }}
              >
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">{update}</span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {Math.floor(Math.random() * 60)} sec ago
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline" className="btn-glass">
              View Full Intelligence Dashboard
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
    </section>
  );
};