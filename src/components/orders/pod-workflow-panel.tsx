import { podJobs } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";

export function PodWorkflowPanel() {
  return (
    <SectionCard
      title="POD workflow queue"
      description="Live placeholder queue for Printify and Gelato routing."
    >
      <div className="flex flex-col gap-3">
        {podJobs.map((job) => (
          <div key={job.id} className="rounded-lg border border-border bg-slate-50/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-slate-950">{job.productTitle}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  {job.provider} • {job.orderId}
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div className="capitalize">{job.stage.replace(/_/g, " ")}</div>
                <div className="text-xs">{job.eta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
