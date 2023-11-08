import { gql } from "@/__generated__"
import { UpdateTaskInputs } from "@/__generated__/graphql"
import { useMutation } from "@apollo/client"
import { FC } from "react"

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

export const useTaskUpdate = () => {
  const [updateTaskReq, updateData] = useMutation(UPDATE_TASK)

  const updateTask = (task: UpdateTaskInputs, title?: string) => {
    const frames = [...(task.timeframes || [])]

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
      id: task.id,
      title: title || task.title,
      timeframes: newFrames,
    }

    updateTaskReq({
      variables: {
        taskData: mergeData,
      },
    })
  }

  return { updateTask, updateData }
}
