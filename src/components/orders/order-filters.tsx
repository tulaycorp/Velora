import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";

export function OrderFilters() {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-4 md:flex-row md:items-center md:justify-between">
      <SearchInput placeholder="Search order ID or customer" />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">All channels</Button>
        <Button variant="outline" size="sm">Processing</Button>
        <Button variant="outline" size="sm">POD attention</Button>
      </div>
    </div>
  );
}
