import { gql } from "@/__generated__"
import { useMutation } from "@apollo/client"

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

  return { updateTaskReq, updateData }
}
