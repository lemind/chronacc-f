import { Inject, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { UserEntity } from 'src/users/users.entity'
import { DataSource, Repository } from "typeorm"

@Injectable()
export class DbService {
  @Inject() connection: DataSource
  @InjectRepository(UserEntity) users: Repository<UserEntity>
}
