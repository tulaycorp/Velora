import type { IntegrationService } from "@/lib/types";
import { StatusBadge } from "@/components/ui/status-badge";

export function ServiceStatusCard({ service }: { service: IntegrationService }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-slate-950">{service.name}</div>
          <div className="mt-1 text-sm leading-6 text-muted-foreground">{service.description}</div>
        </div>
        <StatusBadge status={service.status} />
      </div>
      <div className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-500">
        Last sync: {service.lastSync}
      </div>
    </div>
  );
}
