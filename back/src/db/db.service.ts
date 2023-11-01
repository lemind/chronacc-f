import { Inject, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { TaskEntity } from "src/tasks/tasks.entity"
import { UserEntity } from "src/users/users.entity"
import { DataSource, Repository } from "typeorm"

@Injectable()
export class DbService {
  @Inject() connection: DataSource
  @InjectRepository(UserEntity) users: Repository<UserEntity>
  @InjectRepository(TaskEntity) tasks: Repository<TaskEntity>
}
