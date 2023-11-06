import { gql } from "@/__generated__"
import { TimerClock } from "@/components/index/TimerClock"
import { TimerInput } from "@/components/index/TimerInput"
import { useCurrentTask } from "@/hooks/useCurrentTask"
import { useMutation } from "@apollo/client"
import { PlayIcon, StopIcon } from "@heroicons/react/20/solid"
import { FC, useEffect, useState } from "react"

const CREATE_TASK = gql(`
  mutation CreateTask($taskData: CreateTaskInputs!) {
    createTask(taskData: $taskData) {
      id
      title
      timeframes {
        ... on Timeframe {
          begin
          end
        }
      }
    }
  }
`)

const UPDATE_TASK = gql(`
  mutation UpdateTask($taskData: UpdateTaskInputs!) {
    updateTask(taskData: $taskData) {
      id
      title
      timeframes {
        ... on Timeframe {
          begin
          end
        }
      }
    }
  }
`)

export const Timer: FC = () => {
  const [createTaskReq, createData] = useMutation(CREATE_TASK)
  const [updateTaskReq, updateData] = useMutation(UPDATE_TASK)
  const [isActive, setIsActive] = useState(false)
  const [title, setTitle] = useState("")
  const { currentTask, setCurrentTask } = useCurrentTask()

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
  }, [createData])

  const createTask = () => {
    const { data, loading, error } = createData
    setIsActive(true)
    createTaskReq({
      variables: {
        taskData: {
          title: title,
          timeframes: [{ begin: new Date().getTime() }],
        },
      },
    })
  }

  const updateTask = () => {
    setIsActive(false)
    setTitle("")

    const { data, loading, error } = updateData
    const currTask = currentTask

    if (currTask) {
      const frames = [...(currTask.timeframes || [])]

      //todo: investigate cleanTypeName
      const newFrames = frames.map((f) => {
        if (!f.end) {
          return {
            begin: f.begin,
            end: new Date().getTime(),
          }
        } else {
          return {
            begin: f.begin,
            end: f.end,
          }
        }
      })

      const mergeData = {
        id: currTask.id,
        title: title,
        timeframes: newFrames,
      }

      updateTaskReq({
        variables: {
          taskData: mergeData,
        },
      })

      setCurrentTask(null)
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
            createTask()
          }}
        >
          <PlayIcon className="text-black w-6 h-6" />
        </button>
      )}

      {isActive && (
        <button
          className="btn btn-primary"
          onClick={() => {
            updateTask()
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
