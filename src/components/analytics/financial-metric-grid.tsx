import { dashboardMetrics, financeMetrics } from "@/lib/mock-data";
import { MetricCard } from "@/components/ui/metric-card";

export function FinancialMetricGrid() {
  const metrics = [dashboardMetrics[0], financeMetrics[0], dashboardMetrics[1], financeMetrics[1]];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          label={metric.label}
          value={metric.value}
          delta={metric.delta}
          trend={metric.trend}
        />
      ))}
    </div>
  );
}
