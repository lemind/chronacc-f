import { AppContext } from 'test/common'

export const TasksBasic = (ctx: AppContext) => () => {
  beforeAll(async () => {

  })

  afterAll(async () => ctx.clean())

  test("should create task", async () => {
    const title = 'title'
    const beginDate = new Date().getTime()

    const res = await ctx.httpClient.post<any>("", JSON.stringify({
        query: `
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
        `,
        variables: {
          taskData: {
            title: title,
            timeframes: [{begin: beginDate}],
          },
        }
    }))

    expect(res.data.createTask.id).toBe('1')
  })
}