import { NavLink } from "react-router-dom";
import { Store, Zap } from "lucide-react";
import { navigationItems } from "@/lib/navigation";
import { storeProfile } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="hidden border-r border-border/70 bg-[#f8fafc]/90 px-4 py-5 lg:flex lg:w-72 lg:flex-col">
      <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex size-10 items-center justify-center rounded-lg bg-slate-950 text-white">
          <Store className="size-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-950">Velora</div>
          <div className="text-xs text-muted-foreground">Commerce operations OS</div>
        </div>
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-1.5">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-slate-950",
                  isActive && "bg-white text-slate-950 shadow-sm",
                )
              }
            >
              <Icon className="size-4" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
            <Zap className="size-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-950">{storeProfile.name}</div>
            <div className="text-xs text-muted-foreground">{storeProfile.owner}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
