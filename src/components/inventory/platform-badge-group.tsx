import type { SalesChannel } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function PlatformBadgeGroup({ channels }: { channels: SalesChannel[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {channels.map((channel) => (
        <Badge key={channel} variant="secondary">
          {channel}
        </Badge>
      ))}
    </div>
  );
}
