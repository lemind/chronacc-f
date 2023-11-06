import { UpdateTaskInputs } from "@/__generated__/graphql"
import { useState } from "react"
import { atom, useRecoilState } from "recoil"

const currentTaskState = atom<UpdateTaskInputs | null>({
  key: "currentTaskState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
})

export const useCurrentTask = () => {
  const [currentTask, setCurrentTask] = useRecoilState(currentTaskState)

  return { currentTask, setCurrentTask }
}
