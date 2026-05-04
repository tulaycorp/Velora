import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "@/components/ui/section-card";

const actions = ["Generate title", "Generate description", "Generate tags", "Optimize SEO"];

export function AiAssistantPanel() {
  return (
    <SectionCard
      title="AI assistant"
      description="Placeholder-only controls for future local model workflows."
    >
      <div className="flex flex-col gap-3">
        {actions.map((action) => (
          <Button key={action} variant="outline" className="justify-start">
            <Sparkles className="size-4" />
            {action}
          </Button>
        ))}
      </div>
    </SectionCard>
  );
}
