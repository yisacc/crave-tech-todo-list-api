import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskDatabaseName, TaskEntity, TaskSchema } from './tasks.schema';
import { DATABASE_CONNECTION_NAME } from '../shared/database/database.constant';

@Module({
  providers: [TasksService, TasksResolver],
  imports:[MongooseModule.forFeature(
    [
      {
        name: TaskEntity.name,
        schema: TaskSchema,
        collection: TaskDatabaseName,
      },
    ],
    DATABASE_CONNECTION_NAME
  )]
})
export class TasksModule {}
