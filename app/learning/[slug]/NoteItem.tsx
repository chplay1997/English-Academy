import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Pencil, Trash2 } from 'lucide-react'
import { formatSecondsToTime } from '@/lib/utils'

interface NoteItemProps {
  time: number
  content: string
  onEdit: () => void
  onDelete: () => void
  lessonOrder: number
  sectionOrder: number
}

export function NoteItem({ time, content, onEdit, onDelete, lessonOrder, sectionOrder }: NoteItemProps) {
  const lessonTitle = 'Lesson Title'
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
          <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-blue-600" onClick={onEdit}>
            <Pencil className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-red-600" onClick={onDelete}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <p className="text-gray-700 whitespace-pre-line ml-[4.5rem] mt-1 pr-10">{content}</p>
    </div>
  )
}
