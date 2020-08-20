import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { Test } from './app.post';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, Test],
})
export class AppModule {}
