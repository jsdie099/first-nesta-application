import { Test, TestingModule } from '@nestjs/testing';
import { FirstGetRouteController } from './first-get-route.controller';

describe('FirstGetRoute Controller', () => {
  let controller: FirstGetRouteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstGetRouteController],
    }).compile();

    controller = module.get<FirstGetRouteController>(FirstGetRouteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
