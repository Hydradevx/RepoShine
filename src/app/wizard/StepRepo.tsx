"use client"
import { useState } from "react"

export default function StepRepo({ onNext, defaultData }: any) {
  const [url, setUrl] = useState(defaultData?.repoUrl || "")

  const handleSubmit = () => {
    // TODO: parse owner/repo from URL
    onNext({ repoUrl: url })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🔗 Repository</h2>
      <input
        type="text"
        placeholder="Enter GitHub repo URL (e.g., https://github.com/user/repo)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-3 rounded bg-slate-800 border border-slate-600"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 rounded bg-indigo-500 hover:bg-indigo-600"
      >
        Next →
      </button>
    </div>
  )
}