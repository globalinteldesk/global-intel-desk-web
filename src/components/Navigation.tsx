import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Globe, Activity, FileText, Bell } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Intelligence', href: '#intelligence', icon: Shield },
    { label: 'Global Analysis', href: '#analysis', icon: Globe },
    { label: 'Real-time Updates', href: '#updates', icon: Activity },
    { label: 'Reports', href: '#reports', icon: FileText },
    { label: 'Alerts', href: '#alerts', icon: Bell },
  ];

  return (
    <nav className={`nav-glass transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logos/white-clear-logo.png" 
              alt="Global Intel Desk" 
              className="h-8 w-9"
            />
            <span className="text-xl font-bold gradient-text">
              GlobalIntelDesk
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-hover transition-all duration-300 group"
              >
                <item.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-glass gradient-primary text-primary-foreground">
              Access Dashboard
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-hover"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="glass rounded-xl p-4 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg glass-hover transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.label}</span>
                </a>
              ))}
              <Button className="w-full btn-glass gradient-primary text-primary-foreground mt-4">
                Access Dashboard
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};