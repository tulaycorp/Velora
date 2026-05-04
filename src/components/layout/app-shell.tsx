import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";

export function AppShell({
  children,
  topBarAction,
}: {
  children: ReactNode;
  topBarAction?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-[1600px] overflow-hidden border-x border-border/50 bg-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.4)]">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <TopBar action={topBarAction} />
          <main className="flex-1 overflow-y-auto px-5 py-8 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
