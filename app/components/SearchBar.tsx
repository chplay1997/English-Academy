'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { ICourse } from '@/models/course.model'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [showTopShadow, setShowTopShadow] = useState(false)
  const [showBottomShadow, setShowBottomShadow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<{ courses: ICourse[] }>({ courses: [] })
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const showDropdown = focused && query.length > 0

  // === Fetch search results ===
  useEffect(() => {
    if (!query.trim()) {
      setResults({ courses: [] })
      return
    }

    const delay = setTimeout(async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const { data } = await res.json()
        setResults({ courses: data })
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }, 400)

    return () => clearTimeout(delay)
  }, [query])

  // === Handle shadow effect when scroll ===
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      setShowTopShadow(scrollTop > 5)
      setShowBottomShadow(scrollTop + clientHeight < scrollHeight - 5)
    }

    handleScroll()
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Input */}
      <div className="relative flex items-center">
        <Search className="absolute left-4 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Tìm kiếm khóa học..."
          className="pl-12 pr-10 h-10 rounded-full border-gray-300"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
        />
        {query && (
          <button onClick={() => setQuery('')} className="absolute right-4 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="z-20 mt-2 w-full bg-white border rounded-2xl shadow-xl overflow-hidden fixed top-14 right-0 left-0 bottom-0 md:absolute md:top-auto md:bottom-auto md:left-auto md:right-auto">
          {/* Header */}
          <div className="p-4 border-b text-gray-600 text-sm sticky top-0 bg-white z-10">
            {loading ? (
              <p>Đang tìm kiếm...</p>
            ) : (
              <p>
                Kết quả cho <span className="font-medium text-gray-900">&apos;{query}&apos;</span>
              </p>
            )}
          </div>

          {/* Scrollable content */}
          <div ref={scrollRef} className="max-h-[420px] overflow-y-auto relative">
            {showTopShadow && (
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
            )}
            {showBottomShadow && (
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
            )}

            {/* Results */}
            {results.courses.length > 0 ? (
              <Section title="KHÓA HỌC" moreLink={`/search?q=${query}`}>
                {results.courses.map((c, i) => (
                  <Item
                    key={i}
                    image={c.thumbnail || 'https://hxd8m65scvrb2r3d.public.blob.vercel-storage.com/qiu_card.webp.jpg'}
                    title={c.title}
                    onClick={() => router.push(`/courses/${c.slug}`)}
                  />
                ))}
              </Section>
            ) : (
              !loading && <div className="p-4 text-sm text-gray-500">Không tìm thấy khóa học phù hợp.</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Section({ title, moreLink, children }: { title: string; moreLink?: string; children: React.ReactNode }) {
  return (
    <div className="border-b last:border-none">
      <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-500 font-semibold uppercase">
        <span>{title}</span>
        <a href={moreLink} className="text-blue-500 hover:underline text-[11px]">
          Xem thêm
        </a>
      </div>
      <div>{children}</div>
    </div>
  )
}

function Item({ image, title, onClick }: { image: string; title: string; onClick?: () => void }) {
  console.log(image)
  return (
    <div
      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors"
      onClick={onClick}
    >
      <Image src={image} alt={title} width={36} height={36} className="rounded-full object-cover" />
      <p className="text-sm text-gray-700 line-clamp-1">{title}</p>
    </div>
  )
}
