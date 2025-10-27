'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { NotebookPen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NoteItem } from './NoteItem'
import { IUserLessonNote } from '@/models/userLessonNote.model'

interface INotesSheetProps {
  userLessonNote: IUserLessonNote[]
}

export function NotesSheet(props: INotesSheetProps) {
  const { userLessonNote } = props

  console.log('userLessonNote', userLessonNote)
  const handleEdit = (id: number) => console.log(`Sửa note ${id}`)
  const handleDelete = (id: number) => console.log(`Xóa note ${id}`)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="rounded-[99px]">
          <NotebookPen />
          Ghi chú
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-4 border-b border-gray-200">
          <SheetTitle className="text-xl font-bold">Ghi chú của tôi</SheetTitle>
        </SheetHeader>
        <div className="flex justify-end p-4 space-x-2 border-b border-gray-200">
          <Select defaultValue="current_chapter">
            <SelectTrigger className="w-[180px] h-9 text-sm">
              <SelectValue placeholder="Chọn chương" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current_chapter">Trong chương hiện tại</SelectItem>
              <SelectItem value="all_notes">Tất cả ghi chú</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="newest">
            <SelectTrigger className="w-[120px] h-9 text-sm">
              <SelectValue placeholder="Sắp xếp" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Mới nhất</SelectItem>
              <SelectItem value="oldest">Cũ nhất</SelectItem>
              <SelectItem value="time_asc">Theo thời gian</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 overflow-y-auto px-4 divide-y divide-gray-100">
          {userLessonNote.map(note => (
            <NoteItem
              key={note._id as string}
              time={note.second}
              lessonOrder={note.lessonOrder}
              sectionOrder={note.sectionOrder}
              content={note.content}
              onEdit={() => handleEdit(note.id)}
              onDelete={() => handleDelete(note.id)}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
