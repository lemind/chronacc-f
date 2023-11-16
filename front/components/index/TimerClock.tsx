import { TimeObj, msToTime } from "@/utils/time"
import { FC, useEffect, useState } from "react"

type Props = {
  begin: number | undefined
}
export const TimerClock: FC<Props> = ({ begin }) => {
  const [time, setTime] = useState<TimeObj>({ h: "", m: "", s: "" })
  const [currInterval, setCurrInterval] = useState<NodeJS.Timeout | undefined>()

  useEffect(() => {
    clearInterval(currInterval)

    if (begin) {
      const intervalId = setInterval(() => {
        const diff = new Date().getTime() - begin
        setTime(msToTime(diff))

        return () => clearInterval(intervalId)
      }, 1000)

      setCurrInterval(intervalId)
    }
  }, [begin])

  if (!begin) return null

  return (
    <span className="countdown font-mono text-2xl">
      <span style={{ "--value": time.h } as React.CSSProperties}></span>:
      <span style={{ "--value": time.m } as React.CSSProperties}></span>:
      <span style={{ "--value": time.s } as React.CSSProperties}></span>
    </span>
  )
}
