import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { UserEntity } from 'src/users/users.entity';

@Injectable()
export class UsersService {
  constructor(private db: DbService) {}

  async findOneById(id: string): Promise<UserEntity> {
    console.log('BE: return id', id);
    
    return this.db.users.findOneOrFail({ where: { id } })
  }
}