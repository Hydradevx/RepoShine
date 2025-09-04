"use client";

import React, { useState } from "react";
import { WizardStepProps } from "@/components/WizardLayout";

const PRESET_THEMES = [
  { id: "default", label: "Default (Slate)", badgeColor: "6b7280" },
  { id: "catppuccin-mocha", label: "Catppuccin · Mocha", badgeColor: "b4befe" },
  { id: "nord", label: "Nord", badgeColor: "88c0d0" },
];

export default function StepTheme({ onNext, defaultData }: WizardStepProps) {
  const [theme, setTheme] = useState<string>((defaultData?.theme as string) || "default");

  function handleNext() {
    onNext({ theme });
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3">🎨 Theme</h3>
      <p className="text-sm text-slate-300 mb-4">Pick a color theme for badges and headings.</p>

      <div className="flex flex-col gap-3">
        {PRESET_THEMES.map((t) => (
          <label
            key={t.id}
            className={`p-3 rounded border cursor-pointer flex items-center justify-between ${
              theme === t.id ? "border-indigo-500 bg-slate-800" : "border-slate-700"
            }`}
          >
            <div>
              <div className="font-semibold">{t.label}</div>
              <div className="text-xs text-slate-400">Badge color: #{t.badgeColor}</div>
            </div>
            <input
              type="radio"
              checked={theme === t.id}
              onChange={() => setTheme(t.id)}
              className="ml-2"
            />
          </label>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={handleNext}
          className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500"
        >
          Next →
        </button>
      </div>
    </div>
  );
}