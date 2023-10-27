import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User' })
export class User {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  creationDate: Date;
}
