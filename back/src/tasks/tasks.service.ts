import { Inject, Injectable, NotFoundException } from "@nestjs/common"
import { DbService } from "src/db/db.service"
import { CreateTaskDto, TaskId, UpdateTaskDto } from "src/tasks/task.dto"
import { TaskEntity } from "src/tasks/tasks.entity"
import { UserId } from "src/users/users.entity"

const SHOW_TASKS_LAST_DAYS_NUMBER = 7

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
    const defaultUserId = "1"
    return this.db.tasks.save({ ...taskData, createdBy: defaultUserId })
  }

  async updateTask(body: UpdateTaskDto): Promise<TaskEntity> {
    const task = await this.getTaskById(body.id)

    await this.db.tasks.update(body.id, { ...task, ...body })

    return this.getTaskById(body.id)
  }

  async getTasksByUser(userId: UserId) {
    const d = new Date()
    d.setDate(d.getDate() - SHOW_TASKS_LAST_DAYS_NUMBER)

    const tasks = await this.qbTask()
      .where("t.createdBy = :userId", { userId: userId })
      .andWhere("t.creationDate > :weekAgo", { weekAgo: d })
      .getMany()

    return tasks
  }
}
