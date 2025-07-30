import { Shield, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Intelligence',
      links: [
        'Threat Analysis',
        'Global Monitoring',
        'Risk Assessment',
        'Data Fusion'
      ]
    },
    {
      title: 'Solutions',
      links: [
        'Enterprise Platform',
        'API Access',
        'Custom Integrations',
        'Consulting Services'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'Best Practices',
        'Training Materials',
        'Support Center'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Security',
        'Contact'
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/global-intel-desk-94447836b/', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-card border-t border-muted/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logos/white-clear-logo.png" 
                alt="Global Intel Desk" 
                className="h-6 w-7"
              />
              <span className="text-2xl font-bold gradient-text">
                GlobalIntelDesk
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Advanced intelligence platform providing real-time global analysis 
              and threat assessment for strategic decision making.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm" aria-label="Contact Info" >
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:globalinteldesk@gmail.com" className="text-muted-foreground">globalinteldesk@gmail.com</a>
              </div>
              {/* <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div> */}
              {/* <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Global Operations Center</span>
              </div> */}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg glass-hover transition-all duration-300 group"
                  aria-label={social.label}
                  target="_blank"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="mt-16 pt-8 border-t border-muted/20">
          <div className="glass rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Security & Compliance
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  GlobalIntelDesk operates under the highest security standards with end-to-end encryption, 
                  SOC 2 Type II compliance, and regular third-party security audits. All intelligence data 
                  is processed in accordance with international privacy regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted/20 bg-muted/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 GlobalIntelDesk. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </footer>
  );
};