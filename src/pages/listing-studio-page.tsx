import { PageHeader } from "@/components/layout/page-header";
import { AiAssistantPanel } from "@/components/listing/ai-assistant-panel";
import { ListingForm } from "@/components/listing/listing-form";
import { MediaUploader } from "@/components/listing/media-uploader";
import { PlatformSettingsTabs } from "@/components/listing/platform-settings-tabs";
import { PublishingReadinessPanel } from "@/components/listing/publishing-readiness-panel";
import { SeoScoreCard } from "@/components/listing/seo-score-card";

export function ListingStudioPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Listing Studio"
        subtitle="Content workflow"
        description="Prepare listing content, channel rules, and AI-assisted optimizations without wiring the backend generation pipeline yet."
      />
      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-6">
          <MediaUploader />
          <ListingForm />
          <PlatformSettingsTabs />
        </div>
        <div className="flex flex-col gap-6">
          <AiAssistantPanel />
          <SeoScoreCard />
          <PublishingReadinessPanel />
        </div>
      </div>
    </div>
  );
}
