import { orders } from "@/lib/mock-data";
import { DataTable } from "@/components/ui/data-table";
import { PodStatusBadge } from "@/components/orders/pod-status-badge";

export function OrdersTable() {
  return (
    <DataTable
      data={orders}
      columns={[
        { key: "id", header: "Order", cell: (row) => <span className="font-semibold text-slate-950">{row.id}</span> },
        { key: "date", header: "Date", cell: (row) => row.date },
        {
          key: "customer",
          header: "Customer",
          cell: (row) => (
            <div>
              <div className="font-medium text-slate-950">{row.customer}</div>
              <div className="text-xs text-muted-foreground">{row.productTitle}</div>
            </div>
          ),
        },
        { key: "qty", header: "Qty", cell: (row) => row.quantity },
        { key: "total", header: "Total", cell: (row) => `$${row.total}` },
        { key: "channel", header: "Channel", cell: (row) => <span className="capitalize">{row.channel}</span> },
        {
          key: "pod",
          header: "POD",
          cell: (row) => <PodStatusBadge status={row.podStatus} />,
        },
      ]}
    />
  );
}
