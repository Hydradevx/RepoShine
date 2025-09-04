"use client";

import React, { useState } from "react";
import { WizardStepProps } from "@/components/WizardLayout";

type Section = {
  id: string;
  type: "heading" | "text" | "list" | "code";
  title?: string;
  content?: string | string[];
};

export default function StepContent({ onNext, defaultData }: WizardStepProps) {
  const [sections, setSections] = useState<Section[]>(
    (defaultData?.sections as Section[]) || [
      { id: "about", type: "text", title: "About", content: "A short description here..." },
      { id: "features", type: "list", title: "Features", content: ["Fast setup", "Beautiful templates"] },
      { id: "installation", type: "code", title: "Installation", content: "pnpm add my-package" },
    ]
  );

  function updateSection(idx: number, updates: Partial<Section>) {
    setSections((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, ...updates } : s))
    );
  }

  function removeSection(idx: number) {
    setSections((prev) => prev.filter((_, i) => i !== idx));
  }

  function addSection() {
    setSections((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type: "text", title: "New Section", content: "" },
    ]);
  }

  function handleNext() {
    onNext({ sections });
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3">🧩 Content</h3>

      {sections.map((section, idx) => (
        <div key={section.id} className="mb-6 p-3 border rounded bg-slate-800">
          <label className="block text-sm text-slate-300">Section Title</label>
          <input
            value={section.title || ""}
            onChange={(e) => updateSection(idx, { title: e.target.value })}
            className="w-full p-2 rounded bg-slate-700 mb-2"
          />

          <label className="block text-sm text-slate-300">Content</label>
          <textarea
            value={
              Array.isArray(section.content)
                ? section.content.join("\n")
                : section.content || ""
            }
            onChange={(e) =>
              updateSection(idx, {
                content:
                  section.type === "list"
                    ? e.target.value.split("\n").map((s) => s.trim())
                    : e.target.value,
              })
            }
            rows={4}
            className="w-full p-2 rounded bg-slate-700 mb-2"
          />

          <button
            onClick={() => removeSection(idx)}
            className="text-red-400 hover:text-red-300 text-sm"
          >
            Remove Section
          </button>
        </div>
      ))}

      <button
        onClick={addSection}
        className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded"
      >
        ➕ Add Section
      </button>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
}