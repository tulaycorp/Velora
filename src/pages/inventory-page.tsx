import { PageHeader } from "@/components/layout/page-header";
import { InventoryFilters } from "@/components/inventory/inventory-filters";
import { InventoryTable } from "@/components/inventory/inventory-table";

export function InventoryPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Inventory command center"
        subtitle="Catalog operations"
        description="Track stock, publishing state, and channel sync quality across the internal product catalog."
      />
      <InventoryFilters />
      <InventoryTable />
    </div>
  );
}
