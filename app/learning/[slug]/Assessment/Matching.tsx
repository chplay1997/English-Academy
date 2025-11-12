import { IQuestion } from '@/models/assessment.model'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface MatchingProps {
  question: IQuestion
  onAnswerChange: (questionId: string, value: string) => void
  userAnswer: string | null
  isSubmitted: boolean
}

const MATCHING_OPTIONS = [
  'Common Nouns',
  'Proper Nouns',
  'Abstract Nouns',
  'Collective Nouns',
  'Danh từ chung',
  'Danh từ riêng',
  'Danh từ trừu tượng',
  'Danh từ tập hợp',
]

export function Matching({ question, onAnswerChange, userAnswer, isSubmitted }: MatchingProps) {
  const isCorrect = isSubmitted && userAnswer === question.correctAnswerValue
  const isWrong = isSubmitted && userAnswer !== question.correctAnswerValue && userAnswer !== null

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Select
          value={userAnswer || ''}
          onValueChange={value => onAnswerChange(String(question._id), value)}
          disabled={isSubmitted}
        >
          <SelectTrigger
            className={cn(
              'w-[280px]',
              isCorrect && 'border-green-500 bg-green-50',
              isWrong && 'border-red-500 bg-red-50'
            )}
          >
            <SelectValue placeholder="Chọn loại danh từ..." />
          </SelectTrigger>
          <SelectContent>
            {MATCHING_OPTIONS.map(option => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {isSubmitted && isCorrect && <span className="text-green-600 text-2xl">✓</span>}
        {isSubmitted && isWrong && <span className="text-red-600 text-2xl">✗</span>}
      </div>

      {isSubmitted && (
        <div className={cn('p-4 rounded-lg', isCorrect ? 'bg-green-50' : 'bg-red-50')}>
          {isCorrect ? (
            <p className="text-green-700 font-medium">✅ Chính xác!</p>
          ) : (
            <div className="space-y-2">
              <p className="text-red-700 font-medium">❌ Chưa đúng</p>
              <p className="text-sm">
                Đáp án đúng: <span className="font-bold">{question.correctAnswerValue}</span>
              </p>
            </div>
          )}
          {question.note && (
            <p className="text-sm mt-2 text-blue-700">
              💡 <strong>Ghi chú:</strong> {question.note}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
