import { Badge } from "@/components/ui/badge";
import { SectionCard } from "@/components/ui/section-card";

const tabs = [
  { label: "General", note: "Canonical copy and stock settings" },
  { label: "Etsy", note: "Attributes, taxonomy, and merchandising rules" },
  { label: "Shopify", note: "Collections, SEO, and storefront tags" },
];

export function PlatformSettingsTabs() {
  return (
    <SectionCard
      title="Channel settings"
      description="Marketplace-specific fields will live in these surfaced tabs."
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab, index) => (
            <Badge key={tab.label} variant={index === 0 ? "default" : "outline"}>
              {tab.label}
            </Badge>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-slate-50/60 p-4 text-sm text-muted-foreground">
          General stays active for now. The form architecture is ready for Etsy and Shopify channel fields in a later pass.
        </div>
      </div>
    </SectionCard>
  );
}
