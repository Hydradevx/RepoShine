import WizardLayout from "@/components/WizardLayout"
import StepRepo from "./StepRepo"
// later import StepContent, StepTheme, etc.

export default function WizardPage() {
  return <WizardLayout steps={[StepRepo]} />
}