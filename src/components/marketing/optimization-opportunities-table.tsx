import { marketingOpportunities } from "@/lib/mock-data";
import { DataTable } from "@/components/ui/data-table";
import { SeoIssueBadge } from "@/components/marketing/seo-issue-badge";
import { Button } from "@/components/ui/button";

export function OptimizationOpportunitiesTable() {
  return (
    <DataTable
      data={marketingOpportunities}
      columns={[
        { key: "listing", header: "Listing", cell: (row) => <span className="font-semibold text-slate-950">{row.listing}</span> },
        { key: "issue", header: "Issue", cell: (row) => <SeoIssueBadge issue={row.issue} /> },
        { key: "impact", header: "Impact", cell: (row) => row.impact },
        { key: "channel", header: "Channel", cell: (row) => <span className="capitalize">{row.channel}</span> },
        {
          key: "action",
          header: "",
          cell: () => (
            <Button variant="outline" size="sm">
              Fix with AI
            </Button>
          ),
        },
      ]}
    />
  );
}
