import WizardLayout from "@/components/WizardLayout";
import StepRepo from "@/components/wizard/StepRepo";
import StepContent from "@/components/wizard/StepContent";
import StepTheme from "@/components/wizard/StepTheme";
import StepBadges from "@/components/wizard/StepBadges";
import StepSocials from "@/components/wizard/StepSocials";
import StepPreview from "@/components/wizard/StepPreview";

export default function HomePage() {
  return (
    <WizardLayout
      steps={[
        StepRepo,
        StepContent,
        StepTheme,
        StepBadges,
        StepSocials,
        StepPreview,
      ]}
    />
  );
}