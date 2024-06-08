import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 justify-center items-center mt-10 mb-10">
      <Skeleton className=" w-36 h-36 rounded-full" />
    </div>
  )
}
