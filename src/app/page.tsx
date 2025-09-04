import WizardLayout from "@/components/WizardLayout"
import StepRepo from "@/app/wizard/StepRepo"
// later we’ll import StepContent, StepTheme, StepBadges, StepSocials, StepPreview

export default function HomePage() {
  return (
    <WizardLayout
      steps={[
        StepRepo,
        // StepContent,
        // StepTheme,
        // StepBadges,
        // StepSocials,
        // StepPreview,
      ]}
    />
  )
}