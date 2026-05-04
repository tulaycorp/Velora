import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { expenseBreakdown } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";

const colors = ["#0f766e", "#14b8a6", "#f97316", "#fb7185", "#94a3b8"];

export function ExpenseBreakdownChart() {
  return (
    <SectionCard
      title="Expense breakdown"
      description="Where operating spend is concentrated across the current month."
    >
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={expenseBreakdown} dataKey="value" innerRadius={70} outerRadius={100} paddingAngle={4}>
              {expenseBreakdown.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}
