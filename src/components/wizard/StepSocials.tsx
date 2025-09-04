"use client";

import React, { useState } from "react";
import { WizardStepProps } from "@/components/WizardLayout";

export default function StepSocials({ onNext, defaultData }: WizardStepProps) {
  const [discord, setDiscord] = useState<string>((defaultData?.discord as string) || "");
  const [website, setWebsite] = useState<string>((defaultData?.website as string) || "");
  const [twitter, setTwitter] = useState<string>((defaultData?.twitter as string) || "");
  const [contactEmail, setContactEmail] = useState<string>(
    (defaultData?.contactEmail as string) || ""
  );

  function handleNext() {
    onNext({ discord, website, twitter, contactEmail });
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3">🌐 Socials & Contact</h3>

      <label className="text-sm text-slate-300">Discord invite or server link</label>
      <input value={discord} onChange={(e) => setDiscord(e.target.value)} className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3" />

      <label className="text-sm text-slate-300">Project website</label>
      <input value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3" />

      <label className="text-sm text-slate-300">Twitter / X handle (username only)</label>
      <input value={twitter} onChange={(e) => setTwitter(e.target.value)} className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3" />

      <label className="text-sm text-slate-300">Contact email</label>
      <input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="w-full p-2 rounded bg-slate-800 border border-slate-700 mb-3" />

      <div className="flex gap-2 mt-4">
        <button onClick={handleNext} className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500">Next →</button>
      </div>
    </div>
  );
}