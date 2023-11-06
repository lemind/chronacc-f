import {
  TaskEntity,
  TasksQuery,
  UpdateTaskInputs,
} from "@/__generated__/graphql"
import { useCurrentTask } from "@/hooks/useCurrentTask"
import { msToTime } from "@/utils/time"
import { ArrayElement } from "@/utils/tshelpers"
import { PlayIcon } from "@heroicons/react/20/solid"
import { FC, useMemo } from "react"

type TaskItem = ArrayElement<TasksQuery["tasks"]>
type Props = {
  task: TaskItem
}

export const TasksListIten: FC<Props> = ({ task }) => {
  const { currentTask, setCurrentTask } = useCurrentTask()

  const allTime = (timeArr: TaskItem["timeframes"]) => {
    const allTimeMs = timeArr.reduce((acc, i) => {
      if (i.end) {
        acc = acc + (i.end - i.begin)
      }
      return acc
    }, 0)

    return msToTime(allTimeMs)
  }

  const time = useMemo(() => allTime(task.timeframes), [task])

  const rerunHandle = (task: UpdateTaskInputs) => {
    const updated = {
      ...task,
      timeframes: [...(task.timeframes || []), { begin: new Date().getTime() }],
    }
    setCurrentTask(updated)
  }

  return (
    <div className="grid grid-cols-4 gap-4 items-center">
      <div>{task.id}</div>
      <div>{task.title}</div>
      <div className="flex flex-rw">
        <div>{time.h} :</div>
        <div>{time.m} :</div>
        <div>{time.s} </div>
      </div>
      <div>
        {currentTask?.id !== task.id && (
          <button
            className="btn btn-primary px-2 h-8 min-h-8"
            onClick={() => {
              rerunHandle(task)
            }}
          >
            <PlayIcon className="text-black w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
