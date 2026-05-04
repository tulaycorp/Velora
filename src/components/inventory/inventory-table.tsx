import { MoreHorizontal } from "lucide-react";
import { products } from "@/lib/mock-data";
import { DataTable } from "@/components/ui/data-table";
import { PlatformBadgeGroup } from "@/components/inventory/platform-badge-group";
import { ProductThumbnail } from "@/components/inventory/product-thumbnail";
import { SyncStatusBadge } from "@/components/inventory/sync-status-badge";
import { StatusBadge } from "@/components/ui/status-badge";

export function InventoryTable() {
  return (
    <DataTable
      data={products}
      columns={[
        {
          key: "product",
          header: "Product",
          cell: (product) => (
            <div className="flex items-center gap-3">
              <ProductThumbnail src={product.image} alt={product.title} />
              <div className="min-w-0">
                <div className="truncate font-semibold text-slate-950">{product.title}</div>
                <div className="text-xs text-muted-foreground">{product.sku}</div>
              </div>
            </div>
          ),
        },
        {
          key: "category",
          header: "Category",
          cell: (product) => product.category,
        },
        {
          key: "channels",
          header: "Channels",
          cell: (product) => <PlatformBadgeGroup channels={product.channels} />,
        },
        {
          key: "status",
          header: "Publish",
          cell: (product) => <StatusBadge status={product.publishingStatus} />,
        },
        {
          key: "sync",
          header: "Sync",
          cell: (product) => <SyncStatusBadge status={product.syncStatus} />,
        },
        {
          key: "performance",
          header: "Performance",
          cell: (product) => (
            <div>
              <div className="font-semibold text-slate-950">${product.revenueLast30Days}</div>
              <div className="text-xs text-muted-foreground">
                {product.unitsSoldLast30Days} sold / {product.stock} in stock
              </div>
            </div>
          ),
        },
        {
          key: "actions",
          header: "",
          className: "w-12",
          cell: () => (
            <button className="rounded-full p-2 text-slate-500 hover:bg-slate-100">
              <MoreHorizontal className="size-4" />
            </button>
          ),
        },
      ]}
    />
  );
}
