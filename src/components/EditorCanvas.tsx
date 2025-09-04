"use client"

import { useState } from "react"
import TitleBlock from "./blocks/TitleBlock"

export default function EditorCanvas() {
  const [blocks, setBlocks] = useState<string[]>([])

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const blockId = e.dataTransfer.getData("blockId")
    if (blockId) setBlocks((prev) => [...prev, blockId])
  }

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <main
      onDrop={handleDrop}
      onDragOver={allowDrop}
      className="flex-1 bg-slate-950 text-white p-6 overflow-y-auto"
    >
      <h1 className="text-xl font-bold mb-4">📝 Editor Canvas</h1>

      <div className="min-h-[70vh] p-6 rounded-lg border-2 border-dashed border-slate-700">
        {blocks.length === 0 ? (
          <p className="text-slate-400">Drag blocks here</p>
        ) : (
          <div className="space-y-4">
            {blocks.map((id, idx) => {
              if (id === "title") return <TitleBlock key={idx} />
              return null
            })}
          </div>
        )}
      </div>
    </main>
  )
}