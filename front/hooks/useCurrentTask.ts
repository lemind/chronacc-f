import { UpdateTaskInputs } from "@/__generated__/graphql"
import { atom, useRecoilState } from "recoil"

const currentTaskState = atom<UpdateTaskInputs | null>({
  key: "currentTaskState",
  default: null,
})

export const useCurrentTask = () => {
  const [currentTask, setCurrentTask] = useRecoilState(currentTaskState)

  return { currentTask, setCurrentTask }
}
