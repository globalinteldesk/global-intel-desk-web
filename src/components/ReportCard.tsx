import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Eye, Download, Lock, Calendar, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReportCardProps {
  title: string;
  summary: string;
  category: string;
  date: string;
  region?: string;
  restricted?: boolean;
  riskLevel?: "low" | "medium" | "high" | "critical";
  thumbnail?: string;
  className?: string;
}

const categoryIcons = {
  threat: Shield,
  geopolitical: Globe,
  osint: Eye,
  market: Calendar,
};

const categoryColors = {
  threat: "bg-intel-classified/10 text-intel-classified border-intel-classified/20",
  geopolitical: "bg-intel-warning/10 text-intel-warning border-intel-warning/20", 
  osint: "bg-intel-primary/10 text-intel-primary border-intel-primary/20",
  market: "bg-intel-success/10 text-intel-success border-intel-success/20",
};

const riskColors = {
  low: "bg-intel-success/10 text-intel-success",
  medium: "bg-intel-warning/10 text-intel-warning", 
  high: "bg-intel-classified/10 text-intel-classified",
  critical: "bg-destructive/10 text-destructive",
};

export function ReportCard({
  title,
  summary,
  category,
  date,
  region,
  restricted = false,
  riskLevel,
  thumbnail,
  className
}: ReportCardProps) {
  const categoryKey = category.toLowerCase() as keyof typeof categoryColors;
  const IconComponent = categoryIcons[categoryKey] || Shield;

  return (
    <Card className={cn(
      "bg-gradient-card border-border/50 hover:border-intel-primary/30 transition-all duration-300 hover:shadow-intel group",
      className
    )}>
      {thumbnail && (
        <div className="relative h-32 overflow-hidden rounded-t-lg">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {restricted && (
            <div className="absolute top-2 right-2">
              <Lock className="h-4 w-4 text-intel-classified" />
            </div>
          )}
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline" className={categoryColors[categoryKey]}>
            <IconComponent className="h-3 w-3 mr-1" />
            {category}
          </Badge>
          {riskLevel && (
            <Badge variant="outline" className={riskColors[riskLevel]}>
              {riskLevel.toUpperCase()}
            </Badge>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-foreground group-hover:text-intel-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{date}</span>
          {region && (
            <>
              <span>•</span>
              <span>{region}</span>
            </>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {summary}
        </p>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button 
            variant={restricted ? "outline" : "default"} 
            size="sm" 
            className="flex-1"
            disabled={restricted}
          >
            {restricted ? (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Restricted
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}