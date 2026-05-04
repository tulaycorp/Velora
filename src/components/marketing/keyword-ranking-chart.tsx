import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { keywordMetrics } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";

export function KeywordRankingChart() {
  return (
    <SectionCard
      title="Keyword movement"
      description="Early ranking snapshot across marketplaces for the top monitored terms."
    >
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={keywordMetrics}>
            <XAxis dataKey="keyword" hide />
            <YAxis reversed />
            <Tooltip />
            <Bar dataKey="rank" fill="#0f766e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}
