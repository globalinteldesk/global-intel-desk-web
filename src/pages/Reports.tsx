import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, TrendingUp, Users, Clock } from "lucide-react";
import { FeaturedReport } from "@/components/FeaturedReport";
import { SearchFilters } from "@/components/SearchFilters";
import { ReportCard } from "@/components/ReportCard";

// Mock data for demonstration
const featuredReport = {
  title: "Global Cyber Threat Landscape: Q4 2024 Assessment",
  summary: "Comprehensive analysis of emerging cyber threats across critical infrastructure sectors, including state-sponsored activities, ransomware evolution, and supply chain vulnerabilities.",
  category: "Threat Intelligence",
  date: "December 15, 2024",
  readTime: "25 minutes",
  riskLevel: "critical" as const,
};

const mockReports = [
  {
    id: 1,
    title: "Middle East Regional Stability Assessment",
    summary: "Analysis of recent geopolitical developments and their impact on regional security dynamics, economic stability, and energy markets.",
    category: "Geopolitical",
    date: "December 12, 2024",
    region: "MENA",
    riskLevel: "high" as const,
    restricted: false,
  },
  {
    id: 2,
    title: "Classified: Advanced Persistent Threat Analysis",
    summary: "Detailed technical analysis of APT group TTPs, attribution indicators, and recommended defensive measures for critical infrastructure protection.",
    category: "Threat",
    date: "December 10, 2024",
    region: "Global",
    riskLevel: "critical" as const,
    restricted: true,
  },
  {
    id: 3,
    title: "European Energy Security Intelligence Brief",
    summary: "OSINT analysis of energy infrastructure vulnerabilities, supply chain dependencies, and emerging risks from geopolitical tensions.",
    category: "OSINT",
    date: "December 8, 2024",
    region: "Europe",
    riskLevel: "medium" as const,
    restricted: false,
  },
  {
    id: 4,
    title: "Asia-Pacific Market Intelligence Report",
    summary: "Economic intelligence assessment covering trade relationships, technological developments, and investment security considerations.",
    category: "Market",
    date: "December 5, 2024",
    region: "Asia-Pacific",
    riskLevel: "low" as const,
    restricted: false,
  },
  {
    id: 5,
    title: "Counter-Intelligence Operations Update",
    summary: "Restricted briefing on foreign intelligence activities, industrial espionage trends, and counterintelligence recommendations.",
    category: "Threat",
    date: "December 3, 2024",
    region: "Americas",
    riskLevel: "high" as const,
    restricted: true,
  },
  {
    id: 6,
    title: "Sub-Saharan Africa Security Assessment",
    summary: "Regional security analysis covering political stability, terrorism threats, and resource security implications for international operations.",
    category: "Geopolitical",
    date: "November 28, 2024",
    region: "Africa",
    riskLevel: "medium" as const,
    restricted: false,
  },
];

export default function Reports() {
  const [filteredReports, setFilteredReports] = useState(mockReports);

  const handleFiltersChange = (filters) => {
    let filtered = mockReports;

    if (filters.search) {
      filtered = filtered.filter(report =>
        report.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        report.summary.toLowerCase().includes(filters.search.toLowerCase()) ||
        report.region?.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category !== "all") {
      filtered = filtered.filter(report =>
        report.category.toLowerCase() === filters.category
      );
    }

    if (filters.region !== "all") {
      filtered = filtered.filter(report =>
        report.region?.toLowerCase().replace("-", "-") === filters.region
      );
    }

    if (filters.riskLevel !== "all") {
      filtered = filtered.filter(report =>
        report.riskLevel === filters.riskLevel
      );
    }

    setFilteredReports(filtered);
  };

  const stats = [
    { label: "Total Reports", value: "1,247", icon: FileText, change: "+12%" },
    { label: "Active Threats", value: "89", icon: TrendingUp, change: "+5%" },
    { label: "Clearance Levels", value: "5", icon: Users, change: "0%" },
    { label: "Avg. Update Time", value: "2.4h", icon: Clock, change: "-15%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/30 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/reports">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </a>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Intelligence Reports</h1>
                <p className="text-sm text-muted-foreground">Secure access to classified and sensitive intelligence materials</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-intel-success/10 text-intel-success border-intel-success/20">
                CLEARANCE: TOP SECRET
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-card border border-border/30 rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-intel-success' :
                      stat.change.startsWith('-') ? 'text-intel-classified' :
                        'text-muted-foreground'
                    }`}>
                    {stat.change} vs last month
                  </p>
                </div>
                <stat.icon className="h-8 w-8 text-intel-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Report */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Featured Report</h2>
          <FeaturedReport {...featuredReport} />
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">All Reports</h2>
          <SearchFilters onFiltersChange={handleFiltersChange} />
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report) => (
            <ReportCard
              key={report.id}
              title={report.title}
              summary={report.summary}
              category={report.category}
              date={report.date}
              region={report.region}
              riskLevel={report.riskLevel}
              restricted={report.restricted}
            />
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No reports found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}