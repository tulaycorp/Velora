import { dashboardMetrics } from "@/lib/mock-data";
import { PageHeader } from "@/components/layout/page-header";
import { MetricCard } from "@/components/ui/metric-card";
import { ChannelHealthGrid } from "@/components/dashboard/channel-health-grid";
import { OperationsAlertCard } from "@/components/dashboard/operations-alert-card";
import { RecentActivityFeed } from "@/components/dashboard/recent-activity-feed";
import { RevenueTrendChart } from "@/components/dashboard/revenue-trend-chart";
import { TopProductsList } from "@/components/dashboard/top-products-list";

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Dashboard overview"
        subtitle="Velora operations"
        description="Monitor revenue, fulfillment pressure, and channel health from one decision surface tailored for cross-channel store managers."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard
            key={metric.id}
            label={metric.label}
            value={metric.value}
            delta={metric.delta}
            trend={metric.trend}
          />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
        <RevenueTrendChart />
        <OperationsAlertCard />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr_1fr]">
        <ChannelHealthGrid />
        <TopProductsList />
        <RecentActivityFeed />
      </div>
    </div>
  );
}
