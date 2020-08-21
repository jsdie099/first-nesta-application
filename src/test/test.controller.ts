import { Request, Response } from 'express';
import { Controller, Post, Req, Res, HttpModule } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Post()
    getTest(@Req() request:Request, @Res() response: Response):HttpModule{
        console.log(request.body);
        return response.json({message:"deu tudo certo"});
    }
}
