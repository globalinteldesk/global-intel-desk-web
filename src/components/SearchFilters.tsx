import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";

interface FilterState {
  search: string;
  category: string;
  region: string;
  timeframe: string;
  riskLevel: string;
}

interface SearchFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
}

const categories = [
  { value: "all", label: "All Categories" },
  { value: "threat", label: "Threat Intelligence" },
  { value: "geopolitical", label: "Geopolitical Analysis" },
  { value: "osint", label: "OSINT Reports" },
  { value: "market", label: "Market Intelligence" },
];

const regions = [
  { value: "all", label: "All Regions" },
  { value: "mena", label: "MENA" },
  { value: "europe", label: "Europe" },
  { value: "asia-pacific", label: "Asia-Pacific" },
  { value: "americas", label: "Americas" },
  { value: "africa", label: "Africa" },
];

const timeframes = [
  { value: "all", label: "All Time" },
  { value: "7days", label: "Last 7 Days" },
  { value: "30days", label: "Last 30 Days" },
  { value: "90days", label: "Last 90 Days" },
  { value: "custom", label: "Custom Range" },
];

const riskLevels = [
  { value: "all", label: "All Risk Levels" },
  { value: "low", label: "Low Risk" },
  { value: "medium", label: "Medium Risk" },
  { value: "high", label: "High Risk" },
  { value: "critical", label: "Critical Risk" },
];

export function SearchFilters({ onFiltersChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    region: "all", 
    timeframe: "all",
    riskLevel: "all",
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const updateFilter = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);

    // Update active filters display
    const active = Object.entries(newFilters)
      .filter(([k, v]) => v !== "all" && v !== "" && k !== "search")
      .map(([k, v]) => {
        const config = { category: categories, region: regions, timeframe: timeframes, riskLevel: riskLevels }[k as keyof typeof config];
        const item = config?.find(c => c.value === v);
        return item ? item.label : v;
      });
    setActiveFilters(active);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: "",
      category: "all",
      region: "all",
      timeframe: "all", 
      riskLevel: "all",
    };
    setFilters(clearedFilters);
    setActiveFilters([]);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search reports by title, keywords, or regions..."
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="pl-10 bg-secondary/50 border-border/50 focus:border-intel-primary"
        />
      </div>

      {/* Filter Selects */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select value={filters.category} onValueChange={(value) => updateFilter("category", value)}>
          <SelectTrigger className="bg-secondary/50 border-border/50">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.region} onValueChange={(value) => updateFilter("region", value)}>
          <SelectTrigger className="bg-secondary/50 border-border/50">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region) => (
              <SelectItem key={region.value} value={region.value}>
                {region.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.timeframe} onValueChange={(value) => updateFilter("timeframe", value)}>
          <SelectTrigger className="bg-secondary/50 border-border/50">
            <SelectValue placeholder="Timeframe" />
          </SelectTrigger>
          <SelectContent>
            {timeframes.map((time) => (
              <SelectItem key={time.value} value={time.value}>
                {time.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.riskLevel} onValueChange={(value) => updateFilter("riskLevel", value)}>
          <SelectTrigger className="bg-secondary/50 border-border/50">
            <SelectValue placeholder="Risk Level" />
          </SelectTrigger>
          <SelectContent>
            {riskLevels.map((risk) => (
              <SelectItem key={risk.value} value={risk.value}>
                {risk.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {activeFilters.map((filter, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {filter}
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3 mr-1" />
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}