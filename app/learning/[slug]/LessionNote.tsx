'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Toggle } from '@/components/ui/toggle'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Bold, Italic, List, ListOrdered, ChevronDown } from 'lucide-react'
import { useParams } from 'next/navigation'
import { formatSecondsToTime } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'

interface ILessonNoteFormProps {
  sectionOrder: number
  lessonOrder: number
  setOpenNote: (openNote: boolean) => void
  openNote: boolean
  currentTime: number
}

export function LessonNoteForm({
  sectionOrder,
  lessonOrder,
  setOpenNote,
  openNote,
  currentTime,
}: ILessonNoteFormProps) {
  const [content, setContent] = useState('')
  const params = useParams()
  const courseSlug = params.slug
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseSlug, sectionOrder, lessonOrder, second: currentTime, content }),
    })

    setLoading(false)
    handleCancel()
  }

  const handleCancel = () => {
    setContent('')
    setOpenNote(false)
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 w-[77%] px-[8.5%] transition-transform duration-300 ${
        openNote ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto p-4">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          Thêm ghi chú tại <span className="text-orange-500 font-bold ml-2">{formatSecondsToTime(currentTime)}</span>
        </h3>

        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center p-2 bg-gray-50 border-b border-gray-300">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-sm mr-2 h-8 px-3">
                  Normal <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Heading 1</DropdownMenuItem>
                <DropdownMenuItem>Normal</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="w-px h-6 bg-gray-300 mx-2" />

            <Toggle size="sm" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle size="sm" aria-label="Toggle italic" className="ml-1">
              <Italic className="h-4 w-4" />
            </Toggle>

            <div className="w-px h-6 bg-gray-300 mx-2" />

            <Toggle size="sm" aria-label="Toggle bullet list">
              <List className="h-4 w-4" />
            </Toggle>
            <Toggle size="sm" aria-label="Toggle numbered list" className="ml-1">
              <ListOrdered className="h-4 w-4" />
            </Toggle>
          </div>

          <Textarea
            placeholder="Nội dung ghi chú..."
            value={content}
            onChange={e => setContent(e.target.value)}
            className="resize-none border-none focus-visible:ring-0 shadow-none h-20 p-3"
          />
        </div>

        <div className="flex justify-end space-x-2 mt-3">
          <Button variant="ghost" onClick={handleCancel} disabled={loading}>
            HỦY BỎ
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!content.trim() || loading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {loading && <Spinner className="mr-2 size-4" />}
            TẠO GHI CHÚ
          </Button>
        </div>
      </div>
    </div>
  )
}
