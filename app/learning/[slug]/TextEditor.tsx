'use client'
import { Dispatch, SetStateAction } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { formatSecondsToTime } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner'

interface ITextEditorProps {
  currentTime?: number
  content: string
  setContent: Dispatch<SetStateAction<string>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  handleCancel: () => void
  handleSubmit: () => void
  primaryText?: string
}

export function TextEditor(props: ITextEditorProps) {
  const { currentTime, content, setContent, loading, setLoading, handleCancel, handleSubmit, primaryText } = props

  return (
    <div className="container mx-auto p-4">
      {(currentTime === 0 || !!currentTime) && (
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          Thêm ghi chú tại <span className="text-orange-500 font-bold ml-2">{formatSecondsToTime(currentTime)}</span>
        </h3>
      )}

      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        {/* <div className="flex items-center p-2 bg-gray-50 border-b border-gray-300">
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
          </div> */}

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
        <Button onClick={handleSubmit} disabled={!content.trim() || loading} className="bg-blue-600 hover:bg-blue-700">
          {loading && <Spinner className="mr-2 size-4" />}
          {primaryText || 'TẠO GHI CHÚ'}
        </Button>
      </div>
    </div>
  )
}
