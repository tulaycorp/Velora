import { channelComparison } from "@/lib/mock-data";
import { DataTable } from "@/components/ui/data-table";

export function ChannelComparisonTable() {
  return (
    <DataTable
      data={channelComparison}
      columns={[
        { key: "channel", header: "Channel", cell: (row) => <span className="capitalize font-semibold text-slate-950">{row.channel}</span> },
        { key: "grossRevenue", header: "Gross revenue", cell: (row) => row.grossRevenue },
        { key: "conversion", header: "Conversion", cell: (row) => row.conversion },
        { key: "aov", header: "Average order value", cell: (row) => row.averageOrderValue },
      ]}
    />
  );
}
