import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { Server } from 'http'
import { appModuleMeta } from 'src/app.module'
import { DbService } from 'src/db/db.service'
import { setup } from 'src/setup'
import { HttpClient } from 'test/helpers/http.client'
import { ObjectLiteral, Repository } from 'typeorm'

const createApp = async () => {
  const moduleRef = await Test.createTestingModule(appModuleMeta).compile()
  const app = await setup(moduleRef.createNestApplication({ rawBody: true, logger: false }))
  await app.init()

  const srv = app.getHttpServer() as Server
  srv.listen(0)

  return app
}

const clearTable = async <T extends ObjectLiteral>(db: DbService, repo: Repository<T>) => {
  const {schema, tableName} = repo.metadata
  const tableNameStr = `"${schema}"."${tableName}"`
  await db.connection.query(`TRUNCATE ${tableNameStr} RESTART IDENTITY CASCADE;`)
}

const cleanDB = async (app: INestApplication) => {
  const db = app.get(DbService)
  await clearTable(db, db.users)
}

export class AppContext {
  httpClient: HttpClient
  app: INestApplication
  db: DbService

  async prepare() {
    this.app = await createApp()
    this.httpClient = new HttpClient(this.app)
    this.db = this.app.get(DbService)

    const db = this.app.get(DbService)
    await db.users.insert({firstName: 'John', lastName: 'Dou'})
  }

  async close() {
    await this.app.close()
  }

  async clean() {
    await cleanDB(this.app)
  }
}