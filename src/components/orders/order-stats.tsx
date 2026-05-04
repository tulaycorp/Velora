import { MetricCard } from "@/components/ui/metric-card";

export function OrderStats() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <MetricCard label="Orders today" value="38" delta="+5" trend="up" />
      <MetricCard label="Awaiting fulfillment" value="12" delta="-2" trend="down" />
      <MetricCard label="POD at risk" value="2" delta="+1" trend="down" />
      <MetricCard label="On-time fulfillment" value="96.4%" delta="+0.8%" trend="up" />
    </div>
  );
}
