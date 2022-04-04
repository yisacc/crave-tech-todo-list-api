import { Module } from '@nestjs/common';
import { join } from "path";
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CoreModule } from './shared/core/core.module';
import { TasksModule } from './tasks/tasks.module';
import { SubTasksModule } from './sub-tasks/sub-tasks.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CoreModule,
    TasksModule,
    SubTasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
