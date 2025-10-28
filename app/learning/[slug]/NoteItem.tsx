'use client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Pencil, Trash2 } from 'lucide-react'
import { formatSecondsToTime } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Dispatch, SetStateAction, useState } from 'react'
import { Spinner } from '@/components/ui/spinner'
import { PopoverClose } from '@radix-ui/react-popover'
import { TextEditor } from './TextEditor'

interface NoteItemProps {
  time: number
  content: string
  onSubmit: (id: string, content: string) => void
  onDelete: (id: string) => void
  lessonOrder: number
  sectionOrder: number
  setEditingId: Dispatch<SetStateAction<string | null>>
  editingId: string | null
  id: string
}

export function NoteItem({
  time,
  content,
  onSubmit,
  onDelete,
  lessonOrder,
  sectionOrder,
  setEditingId,
  editingId,
  id,
}: NoteItemProps) {
  const [loading, setLoading] = useState(false)
  const [editingContent, setEditingContent] = useState(content)
  const lessonTitle = 'Lesson Title'

  const handleDelete = async () => {
    setLoading(true)
    await onDelete(id)
    setLoading(false)
  }

  const handleSubmit = async () => {
    setLoading(true)
    await onSubmit(id, editingContent)
    setLoading(false)
    setEditingId(null)
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditingContent(content)
  }

  return (
    <div className="border-b border-gray-100 py-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center space-x-2">
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-mono text-sm px-2 py-1 rounded-sm">
            {formatSecondsToTime(time || 0)}
          </Badge>

          <span className="text-sm font-semibold text-gray-800 line-clamp-1">
            {sectionOrder}.{lessonOrder} {lessonTitle}{' '}
            <span className="text-gray-500 font-normal">| {lessonTitle}</span>
          </span>
        </div>

        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-400 hover:text-blue-600"
            onClick={() => setEditingId(id)}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-red-600">
                <Trash2 className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Xóa ghi chú này?</h4>
                  <div className="flex justify-end space-x-2">
                    <Button variant="destructive" onClick={handleDelete} disabled={loading}>
                      {loading ? <Spinner /> : 'Xóa'}
                    </Button>
                    <PopoverClose asChild>
                      <Button variant="outline" disabled={loading}>
                        Hủy
                      </Button>
                    </PopoverClose>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {editingId === id ? (
        <TextEditor
          content={editingContent}
          setContent={setEditingContent}
          loading={loading}
          setLoading={setLoading}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          primaryText="Lưu lại"
        />
      ) : (
        <div className="mt-3 bg-gray-100 p-4 rounded-lg">
          <p className="whitespace-pre-line">{content}</p>
        </div>
      )}
    </div>
  )
}
