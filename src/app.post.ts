import { Controller, Get } from '@nestjs/common';

@Controller("test")
export class Test{
    @Get()
    getTest():string{
        return 'teste';
    }
}