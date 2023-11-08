import { TimerClock } from "@/components/index/TimerClock"
import { TimerInput } from "@/components/index/TimerInput"
import { useTaskCreate } from "@/hooks/useCreateTask"
import { useCurrentTask } from "@/hooks/useCurrentTask"
import { useTaskUpdate } from "@/hooks/useTaskUpdate"
import { PlayIcon, StopIcon } from "@heroicons/react/20/solid"
import { FC, useEffect, useState } from "react"

export const Timer: FC = () => {
  const { createTask, createData } = useTaskCreate()
  const { updateTask, updateData } = useTaskUpdate()
  const [isActive, setIsActive] = useState(false)
  const [title, setTitle] = useState("")
  const { currentTask, setCurrentTask } = useCurrentTask()

  useEffect(() => {
    if (currentTask) {
      setCurrentTask({ ...currentTask, title: title })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  useEffect(() => {
    if (currentTask) {
      setIsActive(true)
      currentTask?.title && setTitle(currentTask?.title)
    } else {
      setIsActive(false)
    }
  }, [currentTask])

  useEffect(() => {
    if (createData.data?.createTask) {
      setCurrentTask(createData.data?.createTask)
    }
  }, [createData.data?.createTask, setCurrentTask])

  const createTaskHandle = () => {
    // todo: loaders
    // eslint-disable-next-line unused-imports/no-unused-vars
    const { data, loading, error } = createData
    setIsActive(true)
    createTask()
  }

  const updateTaskHadnle = () => {
    // todo: loaders
    // eslint-disable-next-line unused-imports/no-unused-vars
    const { data, loading, error } = updateData
    const currTask = currentTask

    if (currTask) {
      updateTask(currentTask, title)
      setCurrentTask(null)
      setTitle("")
    }
  }

  return (
    <div className="flex flex-row items-center gap-4">
      <TimerInput
        value={title}
        onChange={(v) => {
          setTitle(v)
        }}
      />
      {!isActive && (
        <button
          className="btn btn-primary"
          onClick={() => {
            createTaskHandle()
          }}
        >
          <PlayIcon className="text-black w-6 h-6" />
        </button>
      )}

      {isActive && (
        <button
          className="btn btn-primary"
          onClick={() => {
            updateTaskHadnle()
          }}
        >
          <StopIcon className="text-black w-6 h-6" />
        </button>
      )}

      {currentTask && isActive && currentTask.timeframes && (
        <TimerClock
          begin={
            currentTask &&
            currentTask.timeframes &&
            currentTask.timeframes.at(-1)?.begin
          }
        />
      )}
    </div>
  )
}
