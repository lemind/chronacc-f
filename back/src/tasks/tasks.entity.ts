import { Field, ID, InputType, ObjectType } from "@nestjs/graphql"
import { UserEntity, UserId } from "src/users/users.entity"
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"

export type TimeframeOld = {
  begin: number
  end: number | null
}

@InputType("TimeframeInput")
@ObjectType({ description: "Timeframe" })
export class Timeframe {
  @Field()
  begin: number

  @Field({ nullable: true })
  end: number | null
}

@ObjectType({ description: "Task" })
@InputType("TaskInput")
@Entity("tasks")
export class TaskEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string

  @Field()
  @Column()
  title: string

  @Field(() => [Timeframe])
  @Column({ type: "jsonb", default: [] })
  timeframes: Timeframe[]

  @Field()
  @CreateDateColumn()
  creationDate: Date

  @ManyToOne(() => UserEntity, (user) => user.tasks, { onDelete: "CASCADE" })
  @JoinColumn({ name: "createdById" })
  createdBy: UserId
}
