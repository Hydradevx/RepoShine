"use client";

import React, { useState } from "react";

export type WizardStepProps = {
  onNext: (data: Partial<Record<string, any>>) => void;
  defaultData?: Partial<Record<string, any>>;
  onBack?: () => void;
  allData?: Record<string, any>;
};

export default function WizardLayout({
  steps,
}: {
  steps: React.FC<WizardStepProps>[];
}) {
  const [current, setCurrent] = useState(0);
  const StepComponent = steps[current];
  const [collected, setCollected] = useState<Record<string, any>>({});

  const handleNext = (data: Partial<Record<string, any>>) => {
    setCollected((p) => ({ ...p, ...data }));
    setCurrent((c) => Math.min(c + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrent((c) => Math.max(c - 1, 0));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-slate-900 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* left: progress */}
        <div className="hidden md:flex flex-col gap-4 p-6 border-r border-slate-800 bg-[#0b1220]">
          <h2 className="text-2xl font-bold">RepoShine</h2>
          <p className="text-sm text-slate-300">
            Guided README builder — fill steps, pick widgets & export.
          </p>
          <ol className="mt-4 space-y-2 text-sm">
            {steps.map((_, i) => (
              <li
                key={i}
                className={`px-3 py-2 rounded ${
                  i === current
                    ? "bg-indigo-600 text-white font-semibold"
                    : i < current
                    ? "bg-slate-800 text-slate-300"
                    : "text-slate-500"
                }`}
              >
                Step {i + 1}
              </li>
            ))}
          </ol>
          <div className="mt-auto text-xs text-slate-400">
            RepoShine — Make your README beautiful.
          </div>
        </div>

        {/* main step */}
        <div className="md:col-span-2 p-6">
          <StepComponent
            onNext={handleNext}
            onBack={handleBack}
            defaultData={collected}
            allData={collected}
          />

          <div className="flex justify-between mt-6">
            <button
              onClick={handleBack}
              disabled={current === 0}
              className="px-4 py-2 rounded bg-slate-700 disabled:opacity-50"
            >
              ← Back
            </button>
            <div className="text-sm text-slate-400">
              Step {current + 1} of {steps.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}