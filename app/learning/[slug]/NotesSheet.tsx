'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { NotebookPen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NoteItem } from './NoteItem'
import { IUserLessonNote } from '@/models/userLessonNote.model'
import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'sonner'
import { ICourseData } from '@/lib/data/getCourseData'

interface INotesSheetProps {
  courseData: ICourseData
  lessonNote: IUserLessonNote[]
  setLessonNote: Dispatch<SetStateAction<IUserLessonNote[]>>
  sectionOrder: number
  onChangeVimeoID: (id: string, time?: number) => void
}

export function NotesSheet(props: INotesSheetProps) {
  const { courseData, lessonNote, setLessonNote, sectionOrder, onChangeVimeoID } = props
  const [editingId, setEditingId] = useState<string | null>(null)
  const [filter, setFilter] = useState<'current_chapter' | 'all_notes'>('current_chapter')
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

  const handleOnchangeFilter = (filter: 'current_chapter' | 'all_notes') => {
    setFilter(filter)
  }

  const handleOnchangeSortOrder = (sortOrder: 'newest' | 'oldest') => {
    setSortOrder(sortOrder)
  }

  const lessonNoteFilter = lessonNote.filter(note => filter === 'all_notes' || note.sectionOrder === sectionOrder)

  const sortLessonNote = lessonNoteFilter.sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    } else {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }
  })

  const handleEdit = async (id: string, content: string) => {
    const res = await fetch('/api/notes', {
      method: 'PATCH',
      body: JSON.stringify({
        noteId: id,
        content,
      }),
    })

    const data = await res.json()
    if (data.success) {
      setLessonNote(prev => {
        const newPrev = prev.filter(note => note._id !== id)
        return [...newPrev, data.updatedNote]
      })
      toast.success('Note updated successfully', { position: 'bottom-center' })
    } else {
      toast.error('Failed to update note', { position: 'bottom-center' })
    }
  }
  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/notes?noteId=${id}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    if (data.success) {
      setLessonNote(prev => prev.filter(note => note._id !== id))
      toast.success('Note deleted successfully', { position: 'bottom-center' })
    } else {
      toast.error('Failed to delete note', { position: 'bottom-center' })
    }
  }

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
        <div className="flex justify-end p-4 space-x-2 border-b border-gray-200 w-full">
          <Select defaultValue={filter} onValueChange={handleOnchangeFilter}>
            <SelectTrigger className="w-[200px] h-9 text-sm">
              <SelectValue placeholder="Chọn chương" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current_chapter">Trong chương hiện tại</SelectItem>
              <SelectItem value="all_notes">Trong tất cả các chương</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue={sortOrder} onValueChange={handleOnchangeSortOrder}>
            <SelectTrigger className="w-[120px] h-9 text-sm">
              <SelectValue placeholder="Sắp xếp" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Mới nhất</SelectItem>
              <SelectItem value="oldest">Cũ nhất</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 overflow-y-auto px-4 divide-y divide-gray-100">
          {sortLessonNote.map(note => (
            <NoteItem
              onChangeVimeoID={onChangeVimeoID}
              courseData={courseData}
              key={note._id as string}
              id={note._id as string}
              time={note.second}
              lessonOrder={note.lessonOrder}
              sectionOrder={note.sectionOrder}
              content={note.content}
              onSubmit={handleEdit}
              onDelete={handleDelete}
              setEditingId={setEditingId}
              editingId={editingId}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
