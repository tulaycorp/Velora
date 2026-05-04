import { ImagePlus } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";

export function MediaUploader() {
  return (
    <SectionCard
      title="Media library"
      description="Prepare gallery assets, variant imagery, and marketplace-ready crops."
    >
      <div className="flex min-h-48 flex-col items-center justify-center rounded-lg border border-dashed border-border bg-slate-50/70 text-center">
        <div className="rounded-full bg-white p-3 shadow-sm">
          <ImagePlus className="size-5 text-slate-500" />
        </div>
        <p className="mt-3 text-sm font-semibold text-slate-900">Upload workflow comes next</p>
        <p className="mt-1 max-w-sm text-sm leading-6 text-muted-foreground">
          This foundation reserves a polished media surface without wiring any storage or provider APIs.
        </p>
      </div>
    </SectionCard>
  );
}
