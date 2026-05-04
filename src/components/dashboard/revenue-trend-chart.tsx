import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueSeries } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";

export function RevenueTrendChart() {
  return (
    <SectionCard
      title="Revenue trend"
      description="Channel performance over the last six reporting windows."
    >
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueSeries}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="label" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="etsy" stroke="#0f766e" strokeWidth={2.5} dot={false} />
            <Line
              type="monotone"
              dataKey="shopify"
              stroke="#f97316"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}
