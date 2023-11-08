import { FC } from "react"

export const LoadingFallback: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 text-2xl">
      Loading...
    </div>
  )
}
