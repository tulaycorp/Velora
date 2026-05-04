import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  actions?: ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-6 border-b border-border/70 pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          {subtitle}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{title}</h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
      </div>
      {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
    </div>
  );
}
