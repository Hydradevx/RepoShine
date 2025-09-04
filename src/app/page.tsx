"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [markdown, setMarkdown] = useState(`# RepoShine ✨
Make your README beautiful!`);

  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Editor */}
      <div className="p-4 bg-zinc-900 text-white flex flex-col">
        <h2 className="text-lg font-bold mb-2">Editor</h2>
        <Textarea
          className="flex-1 font-mono bg-zinc-800 text-white"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <Button
          className="mt-2"
          onClick={() => {
            navigator.clipboard.writeText(markdown);
            alert("Copied README to clipboard!");
          }}
        >
          Copy Markdown
        </Button>
      </div>

      {/* Preview */}
      <div className="p-4 bg-white overflow-y-auto prose prose-slate max-w-none">
        <h2 className="text-lg font-bold">Preview</h2>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}