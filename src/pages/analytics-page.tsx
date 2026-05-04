import { PageHeader } from "@/components/layout/page-header";
import { ChannelComparisonTable } from "@/components/analytics/channel-comparison-table";
import { ExpenseBreakdownChart } from "@/components/analytics/expense-breakdown-chart";
import { FinancialMetricGrid } from "@/components/analytics/financial-metric-grid";
import { ProductProfitabilityTable } from "@/components/analytics/product-profitability-table";
import { SalesByChannelChart } from "@/components/analytics/sales-by-channel-chart";
import { SectionCard } from "@/components/ui/section-card";

export function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Analytics and finance"
        subtitle="Performance intelligence"
        description="Review channel economics, margin behavior, and profitability patterns with mock data shaped like a real operating dashboard."
      />
      <FinancialMetricGrid />
      <div className="grid gap-6 xl:grid-cols-2">
        <SalesByChannelChart />
        <ExpenseBreakdownChart />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Product profitability" description="Contribution snapshot by SKU.">
          <ProductProfitabilityTable />
        </SectionCard>
        <SectionCard title="Channel comparison" description="Top-line health by sales destination.">
          <ChannelComparisonTable />
        </SectionCard>
      </div>
    </div>
  );
}
