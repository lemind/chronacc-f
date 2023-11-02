import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from 'src/users/users.module';
import { DbModule } from 'src/db/db.module';
import { UsersService } from 'src/users/users.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from 'src/tasks/tasks.service';

@Module({
  imports: [
    DbModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService, TasksService],
})

export class AppModule {}