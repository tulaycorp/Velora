import type { ReactNode } from "react";
import { Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { StatusPill } from "@/components/layout/status-pill";

export function TopBar({ action }: { action?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 border-b border-border/70 bg-white/80 px-5 py-4 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 items-center gap-3">
        <SearchInput placeholder="Search products, listings, or orders" />
        <StatusPill />
      </div>
      <div className="flex items-center gap-3">
        <button className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white text-slate-500 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Bell className="size-4" />
        </button>
        {action ?? (
          <Button>
            <Plus className="size-4" />
            New workflow
          </Button>
        )}
      </div>
    </div>
  );
}
