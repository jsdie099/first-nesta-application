import { Request, Response } from 'express';
import { Controller, Post, Req, Res, HttpModule, HttpCode, Header } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Post()
    @Header("origin","http://localhost:3000")
    @HttpCode(200)
    getTest(@Req() request:Request, @Res() response: Response):HttpModule{
        return response.json({message:"deu tudo certo"});
    }
}
