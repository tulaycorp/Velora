import { listingDrafts } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { SectionCard } from "@/components/ui/section-card";
import { TagEditor } from "@/components/listing/tag-editor";

export function ListingForm() {
  const draft = listingDrafts[0];

  return (
    <SectionCard
      title="Listing foundation"
      description="Core product copy, pricing, and catalog details for the selected draft."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Title
          <Input value={draft.title} readOnly />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          SKU
          <Input value={draft.sku} readOnly />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Price
          <Input value={`$${draft.price}`} readOnly />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Quantity
          <Input value={String(draft.quantity)} readOnly />
        </label>
        <label className="md:col-span-2 flex flex-col gap-2 text-sm font-medium text-slate-700">
          Description
          <textarea
            className="min-h-32 rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={draft.description}
            readOnly
          />
        </label>
        <div className="md:col-span-2">
          <div className="mb-2 text-sm font-medium text-slate-700">Tags</div>
          <TagEditor />
        </div>
      </div>
    </SectionCard>
  );
}
