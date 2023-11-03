import { gql } from "@/__generated__"
import { useQuery } from "@apollo/client"
import { FC } from "react"

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
    }
  }
`)

export const TasksList: FC = () => {
  const res = useQuery(REQUEST_TASKS, {
    variables: { id: "1" },
  })

  console.log("d", res)
  if (res.data?.tasks.length === 0) return null

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl">Tasks</div>

      <div className="flex flex-col gap-4">
        {res.data?.tasks.map((t) => (
          <div className="flex flex-row gap-4">
            <div>{t.id}</div>
            <div>{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
