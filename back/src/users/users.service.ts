import { Injectable } from '@nestjs/common';
import { User } from 'src/users/users.model';

@Injectable()
export class UsersService {
  async findOneById(id: string): Promise<User> {
    return Promise.resolve({
      id: id,
      creationDate: new Date()
    });
  }
}