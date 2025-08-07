import { Button } from "@/components/ui/button";
import { Shield, FileText, Globe, Eye, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReportsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero border-b border-border/30">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="mb-8">
            <Shield className="h-16 w-16 text-intel-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Knowledge Gateways
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced Intelligence Platform for Strategic Decision Making
            </p>
          </div>
          
          <Button 
            size="lg" 
            onClick={() => navigate('/reports/details')}
            className="btn-glass gradient-primary text-primary-foreground mt-4 w-fit"
          >
            <FileText className="h-5 w-5 mr-2" />
            Access Intelligence Reports
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Intelligence Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive intelligence solutions for modern security challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-card border border-border/30 rounded-lg p-8 shadow-card text-center">
            <Shield className="h-12 w-12 text-intel-classified mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Threat Intelligence</h3>
            <p className="text-muted-foreground">
              Real-time threat analysis and attribution for proactive security measures
            </p>
          </div>

          <div className="bg-gradient-card border border-border/30 rounded-lg p-8 shadow-card text-center">
            <Globe className="h-12 w-12 text-intel-warning mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Geopolitical Analysis</h3>
            <p className="text-muted-foreground">
              Strategic insights into global political developments and regional stability
            </p>
          </div>

          <div className="bg-gradient-card border border-border/30 rounded-lg p-8 shadow-card text-center">
            <Eye className="h-12 w-12 text-intel-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">OSINT Research</h3>
            <p className="text-muted-foreground">
              Open source intelligence gathering and analysis for comprehensive situational awareness
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-card/50 border-y border-border/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <TrendingUp className="h-8 w-8 text-intel-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">1,247</div>
              <div className="text-muted-foreground">Intelligence Reports</div>
            </div>
            <div>
              <Users className="h-8 w-8 text-intel-warning mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">89</div>
              <div className="text-muted-foreground">Active Analysts</div>
            </div>
            <div>
              <Shield className="h-8 w-8 text-intel-classified mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-muted-foreground">Threat Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
