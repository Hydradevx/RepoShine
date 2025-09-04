import Sidebar from "@/components/Sidebar"
import EditorCanvas from "@/components/EditorCanvas"

export default function EditorPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <EditorCanvas />
    </div>
  )
}