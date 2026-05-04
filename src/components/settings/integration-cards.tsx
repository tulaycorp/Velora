import { integrationStatuses } from "@/lib/mock-data";
import { SectionCard } from "@/components/ui/section-card";
import { ServiceStatusCard } from "@/components/settings/service-status-card";

export function IntegrationCards() {
  return (
    <SectionCard
      title="Integrations"
      description="Visibility into channels, fulfillment providers, and the future AI layer."
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {integrationStatuses.map((service) => (
          <ServiceStatusCard key={service.id} service={service} />
        ))}
      </div>
    </SectionCard>
  );
}
