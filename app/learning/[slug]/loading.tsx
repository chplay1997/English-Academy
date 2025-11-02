import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex gap-6 p-6 flex-col lg:flex-row">
      <main className="flex-1 space-y-4">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-45 md:h-90 lg:h-98 w-full rounded-xl" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-2/4" />
      </main>
      <aside className="w-full lg:w-[23%] space-y-3">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-5 w-full" />
        ))}
      </aside>
    </div>
  )
}
