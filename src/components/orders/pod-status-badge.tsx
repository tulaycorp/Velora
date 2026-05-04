import type { PodStatus } from "@/lib/types";
import { StatusBadge } from "@/components/ui/status-badge";

export function PodStatusBadge({ status }: { status: PodStatus }) {
  return <StatusBadge status={status} />;
}
