import { PageHeader } from "@/components/layout/page-header";
import { AiSettingsForm } from "@/components/settings/ai-settings-form";
import { AutomationRulesPanel } from "@/components/settings/automation-rules-panel";
import { GlobalRulesForm } from "@/components/settings/global-rules-form";
import { IntegrationCards } from "@/components/settings/integration-cards";

export function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Platform settings"
        subtitle="Control surface"
        description="Prepare integration visibility, sync rules, and AI content defaults before credentials or backend automation are introduced."
      />
      <IntegrationCards />
      <div className="grid gap-6 xl:grid-cols-2">
        <GlobalRulesForm />
        <AiSettingsForm />
      </div>
      <AutomationRulesPanel />
    </div>
  );
}
