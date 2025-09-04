"use client"
import { useState } from "react"

type StepProps = {
  onNext: (data: any) => void
  defaultData?: any
}

export default function WizardLayout({ steps }: { steps: React.FC<StepProps>[] }) {
  const [current, setCurrent] = useState(0)
  const [formData, setFormData] = useState<any>({})

  const StepComponent = steps[current]

  const handleNext = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }))
    if (current < steps.length - 1) setCurrent(current + 1)
    else console.log("Final Data:", { ...formData, ...data })
  }

  const handleBack = () => {
    if (current > 0) setCurrent(current - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-slate-950 text-white">
      <div className="w-full max-w-2xl bg-slate-900 rounded-xl p-6">
        <StepComponent onNext={handleNext} defaultData={formData} />

        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            disabled={current === 0}
            className="px-4 py-2 rounded bg-slate-700 disabled:opacity-50"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}