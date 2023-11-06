import { gql } from "@/__generated__"
import { TasksListIten } from "@/components/index/TaskListItem"
import { useCurrentTask } from "@/hooks/useCurrentTask"
import { useQuery } from "@apollo/client"
import { FC, useEffect } from "react"

const REQUEST_TASKS = gql(`
  query Tasks($id: String!) {
    tasks(id: $id) {
      id
      title
      timeframes {
        ... on Timeframe {
          begin
          end
        }
      }
      creationDate
    }
  }
`)

export const TasksList: FC = () => {
  const { currentTask } = useCurrentTask()
  const res = useQuery(REQUEST_TASKS, {
    variables: { id: "1" },
  })

  useEffect(() => {
    res.refetch()
  }, [currentTask])

  console.log("d", res)
  if (res.data?.tasks.length === 0) return null
  res.refetch
  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl">Tasks</div>

      <div className="flex flex-col gap-4 w-[600px]">
        {res.data?.tasks.map((t) => (
          <TasksListIten key={t.id} task={t} />
        ))}
      </div>
    </div>
  )
}
