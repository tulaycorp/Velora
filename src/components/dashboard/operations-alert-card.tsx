import { AlertTriangle, Info, ShieldAlert } from "lucide-react";
import { dashboardAlerts } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";

const iconMap = {
  warning: AlertTriangle,
  danger: ShieldAlert,
  info: Info,
};

export function OperationsAlertCard() {
  return (
    <SectionCard
      title="Operational alerts"
      description="High-signal issues that need action before the next sync window."
    >
      <div className="flex flex-col gap-3">
        {dashboardAlerts.map((alert) => {
          const Icon = iconMap[alert.tone];
          return (
            <div
              key={alert.id}
              className="flex items-start gap-3 rounded-lg border border-border bg-slate-50/70 p-4"
            >
              <div className="rounded-full bg-white p-2 shadow-sm">
                <Icon className="size-4 text-slate-700" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-950">{alert.title}</div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{alert.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
