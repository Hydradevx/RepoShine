"use client";

import React, { useMemo } from "react";
import { WizardStepProps } from "@/components/WizardLayout";
import { buildReadme } from "@/lib/builder";
import ReactMarkdown from "react-markdown";

export default function StepPreview({ allData }: WizardStepProps) {
  const markdown = useMemo(() => buildReadme(allData || {}), [allData]);

  function downloadReadme() {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(markdown);
    alert("README copied to clipboard!");
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3">👀 Preview & Export</h3>

      <div className="mb-4">
        <div className="p-4 rounded bg-slate-800 border border-slate-700 max-h-[400px] overflow-auto">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>

      <div className="flex gap-2">
        <button onClick={downloadReadme} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500">Download README.md</button>
        <button onClick={copyToClipboard} className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500">Copy to Clipboard</button>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        You can now paste the generated README.md into your repo's README or commit directly using GitHub.
      </p>
    </div>
  );
}