import { Test, TestingModule } from '@nestjs/testing';
import { SubTasksResolver } from './sub-tasks.resolver';

describe('SubTasksResolver', () => {
  let resolver: SubTasksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubTasksResolver],
    }).compile();

    resolver = module.get<SubTasksResolver>(SubTasksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
