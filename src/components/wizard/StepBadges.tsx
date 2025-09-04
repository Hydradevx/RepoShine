"use client";

import React, { useState } from "react";
import { WizardStepProps } from "@/components/WizardLayout";

export default function StepBadges({ onNext, defaultData }: WizardStepProps) {
  const [includeStars, setIncludeStars] = useState<boolean>(
    defaultData?.includeStars ?? true
  );
  const [includeForks, setIncludeForks] = useState<boolean>(
    defaultData?.includeForks ?? true
  );
  const [includeIssues, setIncludeIssues] = useState<boolean>(
    defaultData?.includeIssues ?? false
  );
  const [includeLicense, setIncludeLicense] = useState<boolean>(
    defaultData?.includeLicense ?? true
  );
  const [includeSize, setIncludeSize] = useState<boolean>(defaultData?.includeSize ?? false);

  function handleNext() {
    onNext({ includeStars, includeForks, includeIssues, includeLicense, includeSize });
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3">🏷️ Badges & Widgets</h3>

      <p className="text-sm text-slate-300 mb-3">
        Pick which dynamic badges to include. We will construct Shields.io links using your repo.
      </p>

      <div className="space-y-2">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked={includeStars} onChange={(e) => setIncludeStars(e.target.checked)} />
          <span>Stars (GitHub)</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" checked={includeForks} onChange={(e) => setIncludeForks(e.target.checked)} />
          <span>Forks</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" checked={includeIssues} onChange={(e) => setIncludeIssues(e.target.checked)} />
          <span>Open Issues</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" checked={includeLicense} onChange={(e) => setIncludeLicense(e.target.checked)} />
          <span>License</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" checked={includeSize} onChange={(e) => setIncludeSize(e.target.checked)} />
          <span>Repo Size</span>
        </label>
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