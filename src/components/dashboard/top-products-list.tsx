import { products } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";

export function TopProductsList() {
  return (
    <SectionCard
      title="Top products"
      description="Best-selling SKUs by revenue contribution over the last 30 days."
    >
      <div className="flex flex-col gap-4">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="flex items-center gap-4 rounded-lg border border-border p-3">
            <img
              src={product.image}
              alt={product.title}
              className="size-14 rounded-md object-cover"
            />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-slate-950">{product.title}</div>
              <div className="text-xs text-muted-foreground">
                {product.unitsSoldLast30Days} units sold
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-slate-950">
                ${product.revenueLast30Days.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">{product.category}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
