'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  GraduationCap,
  Headphones,
  PenTool,
  FileText,
  Brain,
  ClipboardList,
  Target,
  Volume2,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export default function LearningPaths() {
  const paths = [
    {
      title: 'Lộ trình học TOEIC 0-300',
      description:
        'Khóa học dành cho người mới bắt đầu hoặc mất gốc tiếng Anh. Bạn sẽ được củng cố phát âm, từ vựng cơ bản, cấu trúc ngữ pháp nền tảng và làm quen với định dạng đề thi TOEIC Listening & Reading.',
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      skills: [
        { name: 'Phát âm', icon: <Volume2 className="w-5 h-5" /> },
        { name: 'Từ vựng cơ bản', icon: <MessageSquare className="w-5 h-5" /> },
        { name: 'Ngữ pháp nền tảng', icon: <PenTool className="w-5 h-5" /> },
        { name: 'Listening cơ bản', icon: <Headphones className="w-5 h-5" /> },
        { name: 'Reading cơ bản', icon: <FileText className="w-5 h-5" /> },
      ],
      path: '/learning-paths/toeic-foundation',
      color: 'border-orange-500',
    },
    {
      title: 'Lộ trình học TOEIC 300-600',
      description:
        'Lộ trình giúp bạn nâng cao kỹ năng nghe - đọc và mở rộng vốn từ vựng theo chủ đề thường gặp trong đề thi TOEIC. Phù hợp với người đã có nền tảng và muốn đạt mục tiêu từ 500-600 điểm.',
      icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
      skills: [
        { name: 'Từ vựng TOEIC', icon: <MessageSquare className="w-5 h-5" /> },
        { name: 'Ngữ pháp nâng cao', icon: <PenTool className="w-5 h-5" /> },
        { name: 'Listening trung cấp', icon: <Headphones className="w-5 h-5" /> },
        { name: 'Reading trung cấp', icon: <FileText className="w-5 h-5" /> },
        { name: 'Chiến lược làm bài', icon: <ClipboardList className="w-5 h-5" /> },
      ],
      path: '/learning-paths/toeic-intermediate',
      color: 'border-orange-500',
    },
    {
      title: 'Lộ trình học TOEIC 600-800+',
      description:
        'Khóa học chuyên sâu giúp bạn chinh phục mức điểm TOEIC cao. Tập trung luyện đề thực chiến, phân tích lỗi sai và chiến lược tối ưu thời gian trong từng part của bài thi.',
      icon: <Target className="w-12 h-12 text-blue-500" />,
      skills: [
        { name: 'Luyện đề TOEIC', icon: <ClipboardList className="w-5 h-5" /> },
        { name: 'Listening nâng cao', icon: <Headphones className="w-5 h-5" /> },
        { name: 'Reading nâng cao', icon: <FileText className="w-5 h-5" /> },
        { name: 'Phân tích lỗi sai', icon: <Brain className="w-5 h-5" /> },
        { name: 'Chiến thuật thi thật', icon: <Target className="w-5 h-5" /> },
      ],
      path: '/learning-paths/toeic-advanced',
      color: 'border-orange-500',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto p-4 pb-16">
      <div className="mb-12">
        <h1 className="text-2xl font-black mb-4">Lộ trình học</h1>
        <p className="text-gray-600 text-sm">
          Mỗi người học đều bắt đầu từ một điểm khác nhau. Hãy chọn lộ trình phù hợp với trình độ hiện tại của bạn để
          chinh phục mục tiêu TOEIC một cách hiệu quả và dễ dàng nhất.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paths.map((path, index) => (
          <Link href={path.path} key={index}>
            <Card className="shadow-sm hover:shadow-lg transition rounded-2xl h-full justify-between">
              <CardHeader className="flex flex-col items-center text-center space-y-4">
                <div className={`p-3 rounded-full border-4 ${path.color}`}>{path.icon}</div>
                <CardTitle>{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {path.skills.map((skill, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <div
                          className={`p-2 rounded-full border-2 ${path.color} bg-white shadow-sm hover:opacity-70 transition`}
                        >
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{skill.name}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">XEM CHI TIẾT</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
