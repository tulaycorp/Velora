import { PageHeader } from "@/components/layout/page-header";
import { OrderFilters } from "@/components/orders/order-filters";
import { OrdersTable } from "@/components/orders/orders-table";
import { OrderStats } from "@/components/orders/order-stats";
import { PodWorkflowPanel } from "@/components/orders/pod-workflow-panel";
import { SectionCard } from "@/components/ui/section-card";

export function OrdersPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Orders and fulfillment"
        subtitle="Execution workflow"
        description="Coordinate channel orders, track POD statuses, and prepare automation hooks for fulfillment exceptions."
      />
      <OrderStats />
      <OrderFilters />
      <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
        <SectionCard title="Order table" description="Cross-channel order visibility with POD context.">
          <OrdersTable />
        </SectionCard>
        <PodWorkflowPanel />
      </div>
    </div>
  );
}
