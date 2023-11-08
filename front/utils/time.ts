export type TimeObj = {
  h: string
  m: string
  s: string
}
export function msToTime(duration: number): TimeObj {
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  const hoursStr = hours < 10 ? "0" + hours : hours + ""
  const minutesStr = minutes < 10 ? "0" + minutes : minutes + ""
  const secondsStr = seconds < 10 ? "0" + seconds : seconds + ""

  return {
    h: hoursStr,
    m: minutesStr,
    s: secondsStr,
  }
}

export const isSameDay = (
  targetTimestamp: number,
  newTimestamp: number,
): boolean => {
  const target = new Date(targetTimestamp)
  const formattedTarget = target.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const newDate = new Date(newTimestamp)
  const formattedNewDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return formattedTarget === formattedNewDate
}
