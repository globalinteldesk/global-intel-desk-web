import { useEffect, useRef, useState } from 'react';
import { Globe, MapPin, BarChart3, AlertTriangle, Clock, Satellite } from 'lucide-react';

export const GlobalAnalysisSection = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const regions = [
    { name: 'North America', threat: 'Low', activity: 92, coords: 'top-32 left-20' },
    { name: 'Europe', threat: 'Medium', activity: 87, coords: 'top-24 left-1/2' },
    { name: 'Asia Pacific', threat: 'High', activity: 78, coords: 'top-40 right-24' },
    { name: 'Middle East', threat: 'Critical', activity: 65, coords: 'top-56 left-1/2' },
    { name: 'Africa', threat: 'Medium', activity: 71, coords: 'bottom-32 left-1/3' },
    { name: 'South America', threat: 'Low', activity: 89, coords: 'bottom-24 left-16' }
  ];

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-orange-400';
      case 'Critical': return 'text-red-400';
      default: return 'text-gray-400';
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
    <section id="analysis" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text">
            Global Analysis Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time monitoring and analysis of global intelligence patterns and threat assessments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive World Map */}
          <div 
            data-index="0"
            className={`relative intel-card h-96 overflow-hidden transform transition-all duration-1000 ${
              visibleElements.includes(0) 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* World Map Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="h-64 w-64 text-primary opacity-20 animate-float" />
            </div>

            {/* Regional Indicators */}
            {regions.map((region, index) => (
              <div
                key={region.name}
                className={`absolute ${region.coords} group cursor-pointer transform transition-all duration-300 hover:scale-110`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <MapPin className={`h-6 w-6 ${getThreatColor(region.threat)} animate-pulse`} />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="glass px-3 py-2 rounded-lg text-xs whitespace-nowrap">
                      <div className="font-semibold">{region.name}</div>
                      <div className={`${getThreatColor(region.threat)}`}>
                        Threat: {region.threat}
                      </div>
                      <div className="text-muted-foreground">
                        Activity: {region.activity}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute top-4 left-4">
              <div className="glass px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2 text-sm">
                  <Satellite className="h-4 w-4 text-primary" />
                  <span>Live Global Feed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis Metrics */}
          <div className="space-y-6">
            {[
              {
                icon: BarChart3,
                title: 'Intelligence Processing',
                value: '2.4M',
                subtitle: 'Data points analyzed daily',
                trend: '+12%'
              },
              {
                icon: AlertTriangle,
                title: 'Active Threats',
                value: '847',
                subtitle: 'Currently monitored',
                trend: '-8%'
              },
              {
                icon: Clock,
                title: 'Response Time',
                value: '0.3s',
                subtitle: 'Average alert processing',
                trend: '+0.1s'
              }
            ].map((metric, index) => (
              <div
                key={metric.title}
                data-index={index + 1}
                className={`intel-card group transform transition-all duration-700 ${
                  visibleElements.includes(index + 1) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <metric.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{metric.title}</h3>
                      <p className="text-sm text-muted-foreground">{metric.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                    <div className={`text-sm ${
                      metric.trend.startsWith('+') && metric.title !== 'Response Time'
                        ? 'text-green-400' 
                        : metric.trend.startsWith('-') 
                        ? 'text-red-400'
                        : 'text-yellow-400'
                    }`}>
                      {metric.trend}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Regional Threat Summary */}
            <div
              data-index="4"
              className={`intel-card transform transition-all duration-700 ${
                visibleElements.includes(4) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="font-semibold text-foreground mb-4">Regional Threat Levels</h3>
              <div className="space-y-3">
                {regions.map((region, index) => (
                  <div key={region.name} className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{region.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            region.threat === 'Critical' ? 'bg-red-500' :
                            region.threat === 'High' ? 'bg-orange-500' :
                            region.threat === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ 
                            width: `${region.activity}%`,
                            transitionDelay: `${index * 100}ms`
                          }}
                        />
                      </div>
                      <span className={`text-xs font-medium ${getThreatColor(region.threat)}`}>
                        {region.threat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};