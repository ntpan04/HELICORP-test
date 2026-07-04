import { Skeleton } from "@/components/ui/skeleton"

export function SectionSkeleton() {
  return (
    <div className="py-24 container mx-auto px-4">
      {/* Section header */}
      <div className="flex flex-col items-center gap-4 mb-16">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="h-5 w-96 rounded-xl" />
        <Skeleton className="h-5 w-72 rounded-xl" />
      </div>
      {/* Grid cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl border border-primary/10 bg-card/30">
            <Skeleton className="h-14 w-14 rounded-2xl" />
            <Skeleton className="h-6 w-32 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function SpecsSkeleton() {
  return (
    <div className="py-24 container mx-auto px-4">
      <div className="rounded-[2.5rem] border border-primary/10 bg-card/30 p-8 md:p-14">
        <Skeleton className="h-8 w-56 mx-auto mb-12 rounded-xl" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Skeleton className="h-12 w-24 rounded-xl" />
              <Skeleton className="h-4 w-20 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSkeleton() {
  return (
    <div className="py-24 container mx-auto px-4">
      <div className="flex flex-col items-center gap-4 mb-16">
        <Skeleton className="h-10 w-72 rounded-xl" />
        <Skeleton className="h-5 w-80 rounded-xl" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-6 rounded-2xl border border-primary/10 bg-card/30 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-28 rounded-lg" />
                <Skeleton className="h-3 w-20 rounded-lg" />
              </div>
            </div>
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-5/6 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}
