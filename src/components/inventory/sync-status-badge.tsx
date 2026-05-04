import type { SyncStatus } from "@/lib/types";
import { StatusBadge } from "@/components/ui/status-badge";

export function SyncStatusBadge({ status }: { status: SyncStatus }) {
  return <StatusBadge status={status} />;
}
