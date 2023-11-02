import { gql } from "@/__generated__"
import { TimerClock } from "@/components/index/TimerClock"
import { useMutation } from "@apollo/client"
import { PlayIcon, StopIcon } from "@heroicons/react/20/solid"
import { FC, useState } from "react"

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

  const createTask = () => {
    const { data, loading, error } = createData
    setIsActive(true)
    createTaskReq({
      variables: {
        taskData: {
          title: "test title",
          timeframes: [{ begin: new Date().getTime() }],
        },
      },
    })
  }

  const updateTask = () => {
    setIsActive(false)
    const { data, loading, error } = updateData
    const currTask = createData.data?.createTask

    if (currTask) {
      console.log("cc", currTask)

      const frames = [...(currTask.timeframes || [])]
      const lastFrame = currTask.timeframes.at(-1)
      if (lastFrame) {
        lastFrame.end = new Date().getTime()
      }

      //todo: investigate cleanTypeName
      const newFrames = frames.map((f) => ({
        begin: f.begin,
        end: f.end,
      }))

      const mergeData = {
        id: currTask.id,
        title: currTask.title,
        timeframes: newFrames,
      }

      updateTaskReq({
        variables: {
          taskData: mergeData,
        },
      })
    }
  }

  return (
    <div className="flex flex-row items-center gap-4">
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

      {createData.data && isActive && (
        <TimerClock
          begin={createData.data.createTask.timeframes.at(-1)?.begin}
        />
      )}
    </div>
  )
}
