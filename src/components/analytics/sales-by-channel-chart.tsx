import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { revenueSeries } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";

export function SalesByChannelChart() {
  return (
    <SectionCard
      title="Sales by channel"
      description="Monthly revenue shape across Etsy and Shopify."
    >
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueSeries}>
            <XAxis dataKey="label" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Area type="monotone" dataKey="etsy" stackId="1" stroke="#0f766e" fill="#99f6e4" />
            <Area type="monotone" dataKey="shopify" stackId="1" stroke="#f97316" fill="#fed7aa" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}
