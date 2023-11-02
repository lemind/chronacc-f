import { Field, ID, InputType, ObjectType } from "@nestjs/graphql"
// import JSON from "graphql-type-json"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}
