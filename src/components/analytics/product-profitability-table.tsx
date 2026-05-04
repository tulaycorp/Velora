import { products } from "@/lib/mock-data";
import { DataTable } from "@/components/ui/data-table";

export function ProductProfitabilityTable() {
  return (
    <DataTable
      data={products}
      columns={[
        { key: "product", header: "Product", cell: (row) => <span className="font-semibold text-slate-950">{row.title}</span> },
        { key: "revenue", header: "Revenue", cell: (row) => `$${row.revenueLast30Days.toLocaleString()}` },
        { key: "units", header: "Units", cell: (row) => row.unitsSoldLast30Days },
        { key: "margin", header: "Margin", cell: (row) => `${Math.round((row.price * 0.34) / row.price * 100)}%` },
      ]}
    />
  );
}
