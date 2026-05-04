import { Input } from "@/components/ui/input";
import { SectionCard } from "@/components/ui/section-card";

export function GlobalRulesForm() {
  return (
    <SectionCard
      title="Global listing rules"
      description="Default rules prepared for future automation and sync workflows."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Price rounding rule
          <Input value="Round to .90 endings" readOnly />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Inventory reserve
          <Input value="Reserve 8 units per best-seller" readOnly />
        </label>
      </div>
    </SectionCard>
  );
}
