import { keywordMetrics } from "@/lib/mock-data";
import { MetricCard } from "@/components/ui/metric-card";

export function KeywordSummaryCards() {
  const bestRank = Math.min(...keywordMetrics.map((item) => item.rank));

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricCard label="Tracked keywords" value="48" delta="+6" trend="up" />
      <MetricCard label="Top 10 placements" value="19" delta="+3" trend="up" />
      <MetricCard label="Best current rank" value={`#${bestRank}`} delta="steady" trend="neutral" />
    </div>
  );
}
