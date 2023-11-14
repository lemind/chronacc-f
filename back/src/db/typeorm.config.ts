import { TaskEntity } from "src/tasks/tasks.entity"
import { UserEntity } from "src/users/users.entity"
import { DataSource, DataSourceOptions } from "typeorm"
require("dotenv-flow").config()

export const DbEntities = [UserEntity, TaskEntity]
const DbSubscribers = []

export const DBConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "127.0.0.1",
  port: (process.env.POSTGRES_PORT as unknown as number) || 5440,
  username: process.env.POSTGRES_USERNAME || "chronacc",
  password: process.env.POSTGRES_PASSWORD || "chronacc",
  database: process.env.POSTGRES_DB || "chronacc",
  schema: "public",
  dropSchema: process.env.TYPEORM_DROP_SCHEMA === "true",
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === "true",
  logging: process.env.TYPEORM_LOGGING === "true",
  migrations: [__dirname + "/migrations/*.{ts,js}"],
  entities: DbEntities,
  subscribers: DbSubscribers,
}

export default new DataSource(DBConfig)
