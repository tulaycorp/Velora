import { Badge } from "@/components/ui/badge";

export function SeoIssueBadge({ issue }: { issue: string }) {
  return <Badge variant="warning">{issue}</Badge>;
}
