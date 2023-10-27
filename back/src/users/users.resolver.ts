import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) {}

  @Query(returns => User)
  async user(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }
}