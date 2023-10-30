import { Global, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DBConfig, DbEntities } from "./typeorm.config"
import { DbService } from 'src/db/db.service'

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: () => DBConfig }),
    TypeOrmModule.forFeature(DbEntities),
  ],
  providers: [DbService],
  exports: [TypeOrmModule, DbService],
})
export class DbModule {}
