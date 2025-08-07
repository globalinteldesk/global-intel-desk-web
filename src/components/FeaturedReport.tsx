import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Shield, Download, Eye, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-intel-report.jpg";

interface FeaturedReportProps {
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  riskLevel: "low" | "medium" | "high" | "critical";
}

const riskColors = {
  low: "bg-intel-success/10 text-intel-success border-intel-success/20",
  medium: "bg-intel-warning/10 text-intel-warning border-intel-warning/20",
  high: "bg-intel-classified/10 text-intel-classified border-intel-classified/20",
  critical: "bg-destructive/10 text-destructive border-destructive/20",
};

export function FeaturedReport({
  title,
  summary,
  category,
  date,
  readTime,
  riskLevel
}: FeaturedReportProps) {
  return (
    <Card className="bg-gradient-hero border-border/30 shadow-card overflow-hidden">
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
            <img 
              src={heroImage} 
              alt="Featured Intelligence Report"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden" />
            
            {/* Featured Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-intel-primary text-intel-primary-foreground font-medium">
                FEATURED REPORT
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span className="uppercase tracking-wide font-medium">{category}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <Badge variant="outline" className={riskColors[riskLevel]}>
                {riskLevel.toUpperCase()} RISK
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              {title}
            </h1>

            {/* Summary */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {summary}
            </p>

            {/* Read Time */}
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Estimated read time:</span> {readTime}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="btn-glass gradient-primary text-primary-foreground w-fit">
                <Eye className="h-5 w-5 mr-2" />
                Read Full Report
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-intel-primary/30 hover:bg-intel-primary/10">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Button>
            </div>

            {/* Security Notice */}
            <div className="text-xs text-muted-foreground pt-4 border-t border-border/30">
              <span className="text-intel-warning">⚠</span> This report contains sensitive intelligence information. 
              Access is logged and monitored.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}