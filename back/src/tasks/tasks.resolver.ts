import { Args, Mutation, Resolver } from "@nestjs/graphql"
import { CreateTaskDto, UpdateTaskDto } from "src/tasks/task.dto"
import { TaskEntity } from "src/tasks/tasks.entity"
import { TasksService } from "src/tasks/tasks.service"

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Mutation((returns) => TaskEntity)
  async createTask(@Args("taskData") taskData: CreateTaskDto) {
    return this.tasksService.createTask(taskData)
  }

  @Mutation((returns) => TaskEntity)
  async updateTask(@Args("taskData") taskData: UpdateTaskDto) {
    return this.tasksService.updateTask(taskData)
  }
}
