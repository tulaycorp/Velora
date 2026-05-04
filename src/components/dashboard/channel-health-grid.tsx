import { channelHealth } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/status-badge";
import { SectionCard } from "@/components/ui/section-card";

export function ChannelHealthGrid() {
  return (
    <SectionCard
      title="Channel health"
      description="Current integration state for sales, fulfillment, and AI services."
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {channelHealth.map((item) => (
          <div key={item.name} className="rounded-lg border border-border bg-slate-50/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-slate-950">{item.name}</div>
              <StatusBadge status={item.status} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
