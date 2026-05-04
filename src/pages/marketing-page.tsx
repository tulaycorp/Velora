import { PageHeader } from "@/components/layout/page-header";
import { SectionCard } from "@/components/ui/section-card";
import { KeywordRankingChart } from "@/components/marketing/keyword-ranking-chart";
import { KeywordSummaryCards } from "@/components/marketing/keyword-summary-cards";
import { OptimizationOpportunitiesTable } from "@/components/marketing/optimization-opportunities-table";

export function MarketingPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Marketing performance"
        subtitle="SEO and discovery"
        description="Spot ranking movement, optimization gaps, and future AI-assisted fixes for marketplace discoverability."
      />
      <KeywordSummaryCards />
      <div className="grid gap-6 xl:grid-cols-[1fr_1.15fr]">
        <KeywordRankingChart />
        <SectionCard
          title="Optimization queue"
          description="Priority listing improvements with placeholder AI actions."
        >
          <OptimizationOpportunitiesTable />
        </SectionCard>
      </div>
    </div>
  );
}
