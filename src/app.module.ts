import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { FirstGetRouteController } from './first-get-route/first-get-route.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController, FirstGetRouteController],
  providers: [AppService],
})
export class AppModule {}
