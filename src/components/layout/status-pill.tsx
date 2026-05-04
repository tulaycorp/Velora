import { RefreshCw } from "lucide-react";

export function StatusPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700">
      <RefreshCw className="size-3.5" />
      Sync in progress
    </div>
  );
}
