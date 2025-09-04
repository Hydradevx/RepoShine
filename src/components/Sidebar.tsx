"use client"

import { useState } from "react"

type BlockType = {
  id: string
  label: string
}

const blockList: BlockType[] = [
  { id: "title", label: "Title Block" },
  // later add: about, stats, tech stack, etc.
]

export default function Sidebar() {
  const [dragging, setDragging] = useState<string | null>(null)

  return (
    <aside className="w-64 bg-slate-900 text-white p-4 space-y-4 border-r border-slate-700">
      <h2 className="text-lg font-bold">📦 Blocks</h2>
      <div className="space-y-2">
        {blockList.map((block) => (
          <div
            key={block.id}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("blockId", block.id)
              setDragging(block.id)
            }}
            onDragEnd={() => setDragging(null)}
            className={`px-3 py-2 rounded-lg cursor-grab transition ${
              dragging === block.id
                ? "bg-indigo-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {block.label}
          </div>
        ))}
      </div>
    </aside>
  )
}