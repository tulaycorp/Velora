import type {
  IntegrationStatus,
  PodStatus,
  PublishingStatus,
  SyncStatus,
} from "@/lib/types";
import { Badge } from "@/components/ui/badge";

type StatusValue = IntegrationStatus | SyncStatus | PublishingStatus | PodStatus;

const toneMap: Record<StatusValue, React.ComponentProps<typeof Badge>["variant"]> = {
  connected: "success",
  disconnected: "secondary",
  needs_attention: "warning",
  placeholder: "outline",
  synced: "success",
  syncing: "info",
  failed: "danger",
  queued: "warning",
  not_synced: "secondary",
  draft: "secondary",
  ready: "info",
  published: "success",
  needs_review: "warning",
  not_required: "outline",
  in_production: "info",
  shipped: "success",
};

export function StatusBadge({ status }: { status: StatusValue }) {
  return (
    <Badge variant={toneMap[status]}>
      {status.replace(/_/g, " ")}
    </Badge>
  );
}
