import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/users.entity';

@Injectable()
export class UsersService {
  async findOneById(id: string): Promise<UserEntity> {
    console.log('be: return id', id);
    
    return Promise.resolve({
      id: id,
      creationDate: new Date()
    });
  }
}