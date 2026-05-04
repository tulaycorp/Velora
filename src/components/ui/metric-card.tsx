import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "neutral";
}

export function MetricCard({ label, value, delta, trend }: MetricCardProps) {
  const Icon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;

  return (
    <Card className="border-white/80 bg-white/90 backdrop-blur">
      <CardContent className="flex flex-col gap-3 p-5">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <div className="flex items-end justify-between gap-4">
          <span className="text-3xl font-semibold tracking-tight text-slate-950">{value}</span>
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
              trend === "up" && "bg-emerald-50 text-emerald-700",
              trend === "down" && "bg-amber-50 text-amber-700",
              trend === "neutral" && "bg-slate-100 text-slate-700",
            )}
          >
            <Icon className="size-3.5" />
            {delta}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
