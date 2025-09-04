"use client";

import React, { useState } from "react";
import { WizardStepProps } from "@/components/WizardLayout";
import { parseGithubUrl } from "@/lib/utils";

export default function StepRepo({ onNext, defaultData }: WizardStepProps) {
  const [repoUrl, setRepoUrl] = useState<string>(
    (defaultData && (defaultData.repoUrl as string)) || ""
  );
  const [error, setError] = useState<string | null>(null);

  function handleNext() {
    const parsed = parseGithubUrl(repoUrl);
    if (!parsed) {
      setError("Invalid GitHub URL. Use https://github.com/owner/repo or owner/repo");
      return;
    }
    setError(null);
    onNext({ repoUrl, owner: parsed.owner, repo: parsed.repo });
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3">🔗 Repository</h3>
      <p className="text-sm text-slate-300 mb-4">
        Enter the GitHub repository URL (or owner/repo). Repo info will be used for badges and widgets.
      </p>

      <input
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        placeholder="https://github.com/owner/repo or owner/repo"
        className="w-full p-3 rounded bg-slate-800 border border-slate-700 mb-2"
      />

      {error ? <p className="text-rose-400 text-sm mb-2">{error}</p> : null}

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