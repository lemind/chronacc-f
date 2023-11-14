import { AppContext } from 'test/helpers/common';
import { TasksBasic } from 'test/tasks/basic.test';

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
