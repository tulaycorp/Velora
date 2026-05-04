import { recentActivity } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";

export function RecentActivityFeed() {
  return (
    <SectionCard
      title="Recent activity"
      description="Latest movements across listings, sync jobs, and fulfillment."
    >
      <div className="flex flex-col gap-4">
        {recentActivity.map((item) => (
          <div key={item.id} className="rounded-lg border border-border bg-slate-50/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-slate-950">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.timestamp}</div>
            </div>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
