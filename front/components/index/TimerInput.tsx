import { FC } from "react"

type Props = {
  value: string
  onChange: (v: string) => void
}
export const TimerInput: FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  return (
    <input
      value={value}
      onChange={handleChange}
      type="text"
      placeholder="Type here"
      className="input input-bordered input-primary w-full max-w-xs"
    />
  )
}
