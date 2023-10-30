import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';

@Resolver(of => UserEntity)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) {}

  @Query(returns => UserEntity)
  async user(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }
}