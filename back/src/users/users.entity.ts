import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TaskEntity } from 'src/tasks/tasks.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

export type UserId = string

@ObjectType({ description: 'User' })
@Entity('users')
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: UserId;

  @Field({ nullable: true })
  @Column({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  lastName?: string;

  @Field()
  @CreateDateColumn()
  creationDate: Date;

  @OneToMany(() => TaskEntity, (task) => task.id, { eager: true, cascade: true })
  @JoinColumn({ name: "id" })
  tasks: TaskEntity[]
}
