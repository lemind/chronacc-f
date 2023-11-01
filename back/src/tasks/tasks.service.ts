import { Inject, Injectable, NotFoundException } from "@nestjs/common"
import { DbService } from "src/db/db.service"
import { CreateTaskDto, TaskId, UpdateTaskDto } from "src/tasks/task.dto"
import { TaskEntity } from "src/tasks/tasks.entity"

@Injectable()
export class TasksService {
  @Inject() private db: DbService

  qbTask(alias = "t") {
    const qb = this.db.tasks.createQueryBuilder(`${alias}`)

    return qb
  }

  async getTaskById(taskId: TaskId) {
    const task = await this.qbTask()
      .where("t.id = :taskId", { taskId: taskId })
      .getOne()

    if (!task) throw new NotFoundException("Task not found")

    return task
  }

  async createTask(taskData: CreateTaskDto): Promise<TaskEntity> {
    return this.db.tasks.save(taskData)
  }

  async updateTask(body: UpdateTaskDto): Promise<TaskEntity> {
    const task = await this.getTaskById(body.id)

    const res = await this.db.tasks.save({ ...task, ...body })

    return res
  }
}
