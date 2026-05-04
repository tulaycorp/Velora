import { SectionCard } from "@/components/ui/section-card";

export function AutomationRulesPanel() {
  return (
    <SectionCard
      title="Automation rules"
      description="Upcoming operational automation space for syncs, fallback routing, and review queues."
    >
      <div className="grid gap-3">
        <div className="rounded-lg border border-border bg-slate-50/60 p-4 text-sm text-muted-foreground">
          Trigger a fallback provider when POD jobs exceed SLA.
        </div>
        <div className="rounded-lg border border-border bg-slate-50/60 p-4 text-sm text-muted-foreground">
          Queue publish review when SEO score falls below 80.
        </div>
      </div>
    </SectionCard>
  );
}
