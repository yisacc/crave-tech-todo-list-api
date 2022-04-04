import { Module } from '@nestjs/common';
import { SubTasksService } from './sub-tasks.service';
import { SubTasksResolver } from './sub-tasks.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from '../shared/database/database.constant';
import { SubTaskDatabaseName, SubTaskEntity, SubTaskSchema } from './sub-tasks.schema';

@Module({
  providers: [SubTasksService, SubTasksResolver],
  imports:[MongooseModule.forFeature(
    [
      {
        name: SubTaskEntity.name,
        schema: SubTaskSchema,
        collection: SubTaskDatabaseName,
      },
    ],
    DATABASE_CONNECTION_NAME
  )]
})
export class SubTasksModule {}
