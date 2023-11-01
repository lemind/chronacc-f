import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export type Timeframe = {
  begin: number
  end: number | null
}

@ObjectType({ description: "Task" })
@Entity("tasks")
export class TaskEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string

  @Field()
  @Column()
  title: string

  @Field()
  @Column({ type: "jsonb", default: [] })
  timeframes: Timeframe[]
}
