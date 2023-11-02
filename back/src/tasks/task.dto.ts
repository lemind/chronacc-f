import { InputType, OmitType, PartialType } from "@nestjs/graphql"
import { TaskEntity } from "src/tasks/tasks.entity"

export type TaskId = string

@InputType("CreateTaskInputs")
export class CreateTaskDto extends OmitType(TaskEntity, ["id"], InputType) {}

@InputType("UpdateTaskInputs")
export class UpdateTaskDto extends PartialType(TaskEntity, InputType) {}
