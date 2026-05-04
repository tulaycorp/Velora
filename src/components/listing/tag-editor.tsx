import { listingDrafts } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export function TagEditor() {
  return (
    <div className="flex flex-wrap gap-2">
      {listingDrafts[0].tags.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
        </Badge>
      ))}
    </div>
  );
}
