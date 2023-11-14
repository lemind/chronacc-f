import { AppContext } from 'test/common';
import { TasksBasic } from 'test/tasks/basic.spec';

describe('App (e2e)', () => {
  const ctx = new AppContext()

  beforeAll(async () => {
    await ctx.prepare()
  })

  afterAll(async () => {
    await ctx.close()
  })

  describe("Tasks basic", TasksBasic(ctx))
});
