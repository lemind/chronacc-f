import { OmitType, PartialType } from "@nestjs/graphql"
import { TaskEntity } from "src/tasks/tasks.entity"

export type TaskId = string

export class CreateTaskDto extends OmitType(TaskEntity, ["id"]) {}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  id: TaskEntity["id"]
}
