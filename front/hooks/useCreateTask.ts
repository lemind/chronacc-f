import { gql } from "@/__generated__"
import { useMutation } from "@apollo/client"

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

export const useTaskCreate = () => {
  const [createTaskReq, createData] = useMutation(CREATE_TASK)

  const createTask = (title?: string) => {
    createTaskReq({
      variables: {
        taskData: {
          title: title ?? "",
          timeframes: [{ begin: new Date().getTime() }],
        },
      },
    })
  }

  return { createTask, createData }
}
