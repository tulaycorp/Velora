import { SectionCard } from "@/components/ui/section-card";

export function AiSettingsForm() {
  return (
    <SectionCard
      title="AI content settings"
      description="Prepared fields for brand voice and generation defaults without model wiring."
    >
      <div className="grid gap-4">
        <div className="rounded-lg border border-border bg-slate-50/60 p-4">
          <div className="text-sm font-semibold text-slate-950">Brand voice</div>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Warm, design-aware, and benefit-first with concise marketplace-ready phrasing.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-slate-50/60 p-4">
          <div className="text-sm font-semibold text-slate-950">Generation defaults</div>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Description length: medium • Creativity: balanced • Language: English
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
