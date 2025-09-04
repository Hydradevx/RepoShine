"use client";

import React, { useState } from "react";
import { WizardStepProps } from "@/components/WizardLayout";

export default function StepContent({ onNext, defaultData }: WizardStepProps) {
  const [title, setTitle] = useState<string>((defaultData?.title as string) || "");
  const [tagline, setTagline] = useState<string>((defaultData?.tagline as string) || "");
  const [about, setAbout] = useState<string>((defaultData?.about as string) || "");
  const [features, setFeatures] = useState<string>(
    (defaultData?.features as string) || "Fast setup\nBeautiful templates\nCustom badges"
  );
  const [installation, setInstallation] = useState<string>(
    (defaultData?.installation as string) || "pnpm add my-package"
  );
  const [usage, setUsage] = useState<string>((defaultData?.usage as string) || "npx run");

  function handleNext() {
    onNext({
      title,
      tagline,
      about,
      // store features as array by splitting lines
      features: features.split("\n").map((s) => s.trim()).filter(Boolean),
      installation,
      usage,
    });
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3">🧩 Content</h3>

      <label className="text-sm text-slate-300">Project title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="My Project"
        className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3"
      />

      <label className="text-sm text-slate-300">Tagline / Short description</label>
      <input
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
        placeholder="A short tagline"
        className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3"
      />

      <label className="text-sm text-slate-300">About (short paragraph)</label>
      <textarea
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        rows={3}
        className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3"
      />

      <label className="text-sm text-slate-300">Features (one per line)</label>
      <textarea
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
        rows={4}
        className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3"
      />

      <label className="text-sm text-slate-300">Installation (code)</label>
      <textarea
        value={installation}
        onChange={(e) => setInstallation(e.target.value)}
        rows={2}
        className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3"
      />

      <label className="text-sm text-slate-300">Usage (code / example)</label>
      <textarea
        value={usage}
        onChange={(e) => setUsage(e.target.value)}
        rows={2}
        className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3"
      />

      <div className="flex gap-2">
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