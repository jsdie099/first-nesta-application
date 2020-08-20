import { Controller, Get } from '@nestjs/common';
import { Test } from '../app.post';
@Controller('test')
export class TestController {
    constructor(private test:Test){}
    @Get()
    getTest():string{
        return this.test.getTest();
    }
}
