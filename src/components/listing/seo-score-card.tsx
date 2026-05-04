import { listingDrafts } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { SectionCard } from "@/components/ui/section-card";

export function SeoScoreCard() {
  const draft = listingDrafts[0];

  return (
    <SectionCard
      title="SEO score"
      description="Readiness summary for discoverability before channel publishing."
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-4xl font-semibold text-slate-950">{draft.seoScore}</div>
          <p className="mt-1 text-sm text-muted-foreground">Strong baseline with a few remaining content gaps.</p>
        </div>
        <Badge variant="success">Improving</Badge>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {draft.seoIssues.map((issue) => (
          <div key={issue} className="rounded-md border border-border bg-slate-50 px-3 py-2 text-sm text-slate-700">
            {issue}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
