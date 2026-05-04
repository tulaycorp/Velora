import { listingDrafts } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/status-badge";
import { SectionCard } from "@/components/ui/section-card";

export function PublishingReadinessPanel() {
  const draft = listingDrafts[0];

  return (
    <SectionCard
      title="Publishing readiness"
      description="Cross-channel status before a real publish pipeline is added."
    >
      <div className="flex flex-col gap-3">
        {draft.channels.map((channel) => (
          <div
            key={channel}
            className="flex items-center justify-between rounded-lg border border-border bg-slate-50/60 px-4 py-3"
          >
            <div>
              <div className="text-sm font-semibold capitalize text-slate-950">{channel}</div>
              <div className="text-xs text-muted-foreground">Validation placeholders only</div>
            </div>
            <StatusBadge status={draft.publishingStatus} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
